// import { diffDays, diffDayAndTime } from "@fullcalendar/react";

var eventId = 0;
const createEventId = () => {
  return eventId++;
};
export const events = [
  {
    // id: createEventId(),
    groupId: "event1",
    title: "Scalerator (Batch 5)",
    startRecur: "2020-09-28T09:30:00",
    endRecur: "2020-09-29T19:30:00",
    display: "background",
    color: "#215653",
    location: "@ LaStartupFactory Office"
  },
  {
    // id: createEventId(),
    groupId: "event2",
    title: "Startup 2m - Meetup",
    startRecur: "2020-09-10T08:30:00",
    endRecur: "2020-09-10T10:30:00",
    display: "background",
    color: "#9B51E0",
    location: "@ LaStartupFactory Office"
  },
  {
    // id: createEventId(),
    groupId: "event3",
    title: "Scalerator (Batch 5)",
    startRecur: "2020-09-30T20:30:00",
    endRecur: "2020-09-30T22:30:00",
    display: "background",
    color: "#219653",
    location: "@ LaStartupFactory Office"
  },
  {
    // id: createEventId(),
    groupId: "event4",
    title: "Hackathon Xyz",
    startRecur: "2020-09-13T21:30:00",
    endRecur: "2020-09-14T23:30:00",
    display: "background",
    color: "#2D9CDB",
    location: "@ LaStartupFactory Office"
  },
  {
    // id: createEventId(),
    groupId: "event5",
    title: "Scalerator (Batch 5)",
    startRecur: "2020-09-23T08:30:00",
    endRecur: "2020-09-23T18:30:00",
    display: "background",
    color: "#219653",
    location: "@ LaStartupFactory Office"
  }
];
