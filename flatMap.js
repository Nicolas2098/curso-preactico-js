const calendars = {
    primaryCalendar: [
      {
        startDate: new Date(2021, 1, 1, 15),
        endDate: new Date(2021, 1, 1, 15, 30),
        title: "Cita 1",
      },
      {
        startDate: new Date(2021, 1, 1, 17),
        endDate: new Date(2021, 1, 1, 18),
        title: "Cita 2",
      },
    ],
    secondaryCalendar: [
      {
        startDate: new Date(2020, 1, 1, 12),
        endDate: new Date(2020, 1, 1, 12, 30),
        title: "Cita 2",
      },
      {
        startDate: new Date(2021, 1, 2, 9),
        endDate: new Date(2021, 1, 2, 10),
        title: "Cita 4",
      },
    ],
  };

  const arrayStartDate = calendars.primaryCalendar.flatMap(item => item.startDate).concat(calendars.secondaryCalendar.flatMap(item => item.startDate));

  console.log(arrayStartDate);