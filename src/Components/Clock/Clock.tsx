const Clock = ({
  messageSentTime,
  isClocksDisplayEnabled,
  isDarkMode,
}: {
  messageSentTime: Date;
  isClocksDisplayEnabled: boolean;
  isDarkMode: boolean;
}) => {
  // 12 Hours Display
  const TwelveHoursClock = (time: Date) => {
    const currentTime = time;
    let hours: number = currentTime.getHours();
    let minutes: number = currentTime.getMinutes();
    hours = hours % 12 || 12;
    const formattedHours = hours < 10 ? "0" + hours : hours.toString();
    const formattedMinutes = minutes < 10 ? "0" + minutes : minutes.toString();
    return `${formattedHours}:${formattedMinutes}`;
  };
  // 24 Hours Display
  const TwentyFourHoursClock = (time: Date) => {
    const currentTime = time;
    let hours: string | number = currentTime.getHours();
    let minutes: string | number = currentTime.getMinutes();
    const formattedHours = hours < 10 ? "0" + hours : hours.toString();
    const formattedMinutes = minutes < 10 ? "0" + minutes : minutes.toString();
    return `${formattedHours}:${formattedMinutes}`;
  };

  return (
    <div
      className={`text-[0.55rem] font-light mt-[0.1rem] text-maincommonColor 
      sm:text-[0.45rem]
      Xsm:text-[0.4rem] Xsm:mt-[0.2rem]
      ${isDarkMode && "text-whiteletters"}`}
    >
      {isClocksDisplayEnabled
        ? TwelveHoursClock(messageSentTime)
        : TwentyFourHoursClock(messageSentTime)}
    </div>
  );
};

export default Clock;
