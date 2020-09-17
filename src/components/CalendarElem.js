import React, { useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

const CalendarElem = props => {
  const { eventsJson } = props;


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
      events={eventsJson}
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
      <div className="content-center t-align">
        <i className=" white-c hyphens mh t-align">{eventInfo.event.title}</i>
      </div>
      {/* <b>{eventInfo.timeText}</b> */}
    </>
  );
}
