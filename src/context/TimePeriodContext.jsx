import { createContext, useState } from "react";
import dayjs from "dayjs";

export const TimePeriodContext = createContext();

const zeroedMonth = (month) => {
  return month > 9 ? month : `0${month}`;
};

const TimePeriodProvider = ({ children }) => {
  const now = new Date();
  const currentMonth = now.getMonth() + 1;
  const currentYear = now.getFullYear();

  const [months, setMonths] = useState(undefined);
  const [year, setYear] = useState(currentYear);
  const [specificMonth, setSpecificMonth] = useState(currentMonth);

  const [timePeriod, setTimePeriod] = useState(
    `?year=${year}&month=${zeroedMonth(specificMonth)}`
  );

  const getAppBarText = () => {
    if (months) return `Last ${months} months`;

    if (year && !specificMonth) return year;

    return dayjs(`${year}-${specificMonth}-01`).format("MMMM 'YY");
  };

  const isCurrentMonth = () => {
    if (currentMonth == specificMonth && currentYear == year) {
      return true;
    }
    return false;
  };

  const setMonthIntervals = (monthsSelection) => {
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
    setYear(yearSelection);
    setMonths(undefined);
  };

  const setTimeRange = () => {
    if (months) {
      setTimePeriod(`?months=${months}`);
    } else if (year && specificMonth) {
      setTimePeriod(`?year=${year}&month=${zeroedMonth(specificMonth)}`);
    } else if (year) {
      setTimePeriod(`?year=${year}`);
    } else {
      // This shouldnt be triggered
      setTimePeriod(`?month=${zeroedMonth(specificMonth)}`);
    }
  };

  const resetTimeRange = () => {
    const monthsParts = timePeriod.split("?months=");
    let numParts = monthsParts.length;

    if (numParts > 1) {
      setMonthIntervals(Number(monthsParts[1]));
      return;
    }

    const yearMonthParts = timePeriod.split("&month=");
    numParts = yearMonthParts.length;
    if (numParts > 1) {
      const yearParts = yearMonthParts[0].split("?year=");
      setYearMonthInterval(Number(yearParts[1]), Number(yearMonthParts[1]));
      return;
    }

    const yearParts = timePeriod.split("?year=");
    numParts = yearParts.length;
    if (numParts > 1) {
      setYearInterval(Number(yearParts[1]));
      return;
    }
    return;
  };

  return (
    <TimePeriodContext.Provider
      value={{
        timePeriod,
        months,
        year,
        specificMonth,
        getAppBarText,
        isCurrentMonth,
        setMonthIntervals,
        setYearNoMonthInterval,
        setYearMonthInterval,
        setYearInterval,
        setTimeRange,
        resetTimeRange,
        currentMonth,
        currentYear,
      }}
    >
      {children}
    </TimePeriodContext.Provider>
  );
};

export default TimePeriodProvider;
