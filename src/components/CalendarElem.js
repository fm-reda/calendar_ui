import React, { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
// @ts-ignore
import events from "./events.json";
// import { eventSortedByDate } from "./functions";

// import "./main.css";

const CalendarElem = () => {
  return (
    <FullCalendar
      plugins={[dayGridPlugin]}
      titleFormat={{ year: "numeric", month: "long" }}
      headerToolbar={{
        left: "",
        center: "prev,title,next",
        right: ""
      }}
      // headerToolbar={false}
      initialView="dayGridMonth"
      displayEventEnd={true}
      events={events}
      dayHeaderFormat={{ weekday: "long" }}
      firstDay={1}
      eventContent={renderEventContent}
    />
  );
};

export default CalendarElem;

function renderEventContent(eventInfo) {
  // console.log(eventInfo);
  return (
    <>
      <div className="content-center">
        <i className="t-align white-c hyphens">{eventInfo.event.title}</i>
      </div>
      {/* <b>{eventInfo.timeText}</b> */}
    </>
  );
}
