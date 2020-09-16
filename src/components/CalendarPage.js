import React, { useState, useEffect } from "react";
import CalendarElem from "./CalendarElem";
import {
  eventSortedByDate,
  createMonth,
  createDay,
  convertTimeAmPm
  // stringTodate
} from "./functions";

const CalendarPage = () => {
  const [latestEvents, setLatestEvents] = useState([]);
  const [eventsJson, setEventsJson] = useState([]);

  //load json and sort datas
  useEffect(() => {
    fetch("./events.json")
      .then(res => res.json())
      .then(data => {
        setEventsJson(data);
        setLatestEvents(eventSortedByDate(data));
      });
  }, []);

  return (
    <div className=" p-b-200" >
      <div className="calendar-header m-b-36">
        <div className="header-title">Calendar</div>
        <div className="header-description">
          Here is an overview of your calendar
        </div>
      </div>
      <div className="main-calendar">
        {/* start section events */}
        <div className="section-events p-24">
          <div className="main-heading m-b-20">Upcoming Events</div>
          <div className="dis-flex p-r-0 m-b-30">
            {latestEvents.slice(0, 3).map((item, index) => (
              <div key={index} className="col-event p-16">
                <div className="event-day">
                  {createDay(item.startRecur, item.endRecur)}
                </div>
                <div className="event-month m-b-28">
                  {createMonth(item.startRecur)}
                </div>
                <div className="event-name m-b-14">{item.title}</div>
                <div className="event-time m-b-2">
                  {`${convertTimeAmPm(item.startRecur)} -- ${convertTimeAmPm(
                    item.endRecur
                  )} `}
                </div>
                <div className="event-local">@ {item.location}</div>
              </div>
            ))}
          </div>
        </div>
        {/* end section events */}

        {/* start section calendar  */}
        <div className="section-events p-24">
          <div className="main-heading mb">My Calendar</div>
          <div className="">
            <CalendarElem eventsJson={eventsJson} />
          </div>
        </div>
        {/* end section calendar  */}
      </div>
    </div>
  );
};

export default CalendarPage;
