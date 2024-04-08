import { createContext, useState } from "react";

export const TimePeriodContext = createContext();

const TimePeriodProvider = ({ children }) => {
  const now = new Date();
  const currentMonth = now.getMonth() + 1;
  const currentYear = now.getFullYear();

  const [months, setMonths] = useState(undefined);
  const [year, setYear] = useState(currentYear);
  const [specificMonth, setSpecificMonth] = useState(currentMonth);

  const [timePeriod, setTimePeriod] = useState(
    `?year=${year}&month=${specificMonth}`
  );

  console.log(timePeriod);

  const setMonthIntervals = (monthsSelection) => {
    console.debug("Changing month value");
    setMonths(monthsSelection);
    // Reset the year and specificMonth
    setYear(undefined);
    setSpecificMonth(undefined);
  };

  const setYearNoMonthInterval = (specificMonthSelection) => {
    setYear(currentYear);
    setSpecificMonth(specificMonthSelection);

    // Reset the months interval
    setMonths(undefined);
  };

  const setYearMonthInterval = (yearSelection, specificMonthSelection) => {
    console.debug("Changing year and value");
    // When the year is the same but the month is different
    if (yearSelection == year && specificMonthSelection !== specificMonth) {
      setSpecificMonth(specificMonthSelection);
      // When the month is the same but the year is different
    } else if (
      specificMonthSelection === specificMonth &&
      yearSelection != year
    ) {
      setYear(yearSelection);
    } else if (
      yearSelection !== year &&
      specificMonthSelection !== specificMonth
    ) {
      setSpecificMonth(specificMonthSelection);
      setYear(yearSelection);
    } else {
      setSpecificMonth(undefined);
    }

    setMonths(undefined);
  };

  const setYearInterval = (yearSelection) => {
    console.debug("Changing year value");
    setYear(yearSelection);
    setMonths(undefined);
  };

  const setTimeRange = () => {
    if (months) {
      setTimePeriod(`?months=${months}`);
    } else if (year && specificMonth) {
      setTimePeriod(`?year=${year}&month=${specificMonth}`);
    } else if (year) {
      setTimePeriod(`?year=${year}`);
    } else {
      setTimePeriod(`?month=${specificMonth}`);
    }
  };

  return (
    <TimePeriodContext.Provider
      value={{
        timePeriod,
        months,
        year,
        specificMonth,
        setMonthIntervals,
        setYearNoMonthInterval,
        setYearMonthInterval,
        setYearInterval,
        setTimeRange,
      }}
    >
      {children}
    </TimePeriodContext.Provider>
  );
};

export default TimePeriodProvider;
