import { useState, useEffect } from 'react';
import { firebase } from '../firebase';
import { collatedTasksExist } from '../helpers'
import moment from 'moment';

export const useTasks = selectProject => {
  const [tasks, setTasks] = useState([]);
  const [archivedTasks, setArchivedTasks] = useState([]);

  useEffect(() => {
    let unsubscribe = firebase
      .firestore()
      .collection('tasks')
      .where('userId', '==', 'ruben');

    unsubscribe = selectProject && !collatedTasksExist(selectProject) ?
      (unsubscribe = unsubscribe.where('projectId', '==', selectProject)) : selectProject === 'TODAY' ?
      (unsubscribe = unsubscribe.where('date', '==', moment().format('DD/MM/YYYY'))) :
      selectProject === 'INBOX' || selectProject === 0 ?
      (unsubscribe = unsubscribe.where('date', '==', '')) :
      unsubscribe;

    unsubscribe = unsubscribe.onSnapshot(snapshot => {
      const newTasks = snapshot.docs.map(task => ({
        id: task.id,
        ...task.data(),
      }));

      setTasks(
        selectProject === 'NEXT_7_DAYS' ?
          newTasks.filter(task => moment(task.date, 'DD-MM-YYYY').diff(moment(), 'days') <= 7 && !task.archived) :
          newTasks.filter(task => !task.archived)
      );

      setArchivedTasks(newTasks.filter(task => task.archived))
    });

    return () => unsubscribe();
  }, [selectProject])

  return { tasks, archivedTasks };
}

