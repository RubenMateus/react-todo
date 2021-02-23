import { FaInbox, FaRegCalendarAlt, FaRegCalendar } from "react-icons/fa";

const staticProjects = [
  {
    id: "inbox",
    name: "Inbox",
    ariaLabel: "Show inbox tasks",
    icon: FaInbox,
  },
  {
    id: "today",
    name: "Today",
    ariaLabel: "Show today's tasks",
    icon: FaRegCalendar,
  },
  {
    id: "next_7",
    name: "Next 7 days",
    ariaLabel: "Show tasks for the next 7 days",
    icon: FaRegCalendarAlt,
  },
];

export { staticProjects };
