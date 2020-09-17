//sort events by date and after date now
export const stringTodate = str => {
  return new Date(str);
};
export const eventSortedByDate = events => {
  const sortByMapped = (map, compareFn) => (a, b) => compareFn(map(a), map(b));
  const byValue = (a, b) => a - b;
  const toDate = e => new Date(e.startRecur);
  const sortedEvents = [...events].sort(sortByMapped(toDate, byValue));
  const eventNow = sortedEvents.filter(item => {
    if (stringTodate(item.startRecur) > new Date(Date.now())) {
      return item;
    }
  });
  return eventNow;
};

//convert time to AM/PM
export const convertTimeAmPm = date => {
  return new Date(date).toLocaleString("en-US", {
    hour: "numeric",
    hour12: true,
    minute: "numeric"
  });
};

//function create date and get Month
export const createMonth = stringDate => {
  return new Date(stringDate).toLocaleString("en-US", { month: "long" });
};

//function create date and get day
export const createDay = (stringStartDate, stringEndDate) => {
  const recurDay = new Date(stringStartDate).toLocaleString("en-US", {
    day: "numeric"
  });

  const endDay = new Date(stringEndDate).toLocaleString("en-US", {
    day: "numeric"
  });

  if (recurDay === endDay) {
    return recurDay;
  } else {
    return `${recurDay} - ${endDay}`;
  }
};

//get time
export const createTime = (stringStartDate, stringEndDate) => {
  const recurDay = new Date(stringStartDate).toLocaleString("en-US", {
    day: "numeric"
  });

  const endDay = new Date(stringEndDate).toLocaleString("en-US", {
    day: "numeric"
  });

  if (recurDay === endDay) {
    return recurDay;
  } else {
    return `${recurDay} - ${endDay}`;
  }
};
