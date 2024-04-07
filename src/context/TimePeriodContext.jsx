import { createContext, useState } from "react";

export const TimePeriodContext = createContext();

const TimePeriodProvider = ({ children }) => {
  const [value, setValue] = useState(undefined);

  return (
    <TimePeriodContext.Provider value={{ value, setValue }}>
      {children}
    </TimePeriodContext.Provider>
  );
};

export default TimePeriodProvider;
