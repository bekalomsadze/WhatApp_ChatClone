import { ChangeEvent, useState, useEffect, useRef } from "react";
import Clock from "../Clock/Clock";
import sendIcon from "../../img/sendIcon.png";
import darkSend from "../../img/darkSend.png";
import { v4 as uuidv4 } from "uuid";
import { useTranslation } from "react-i18next";

interface chatProps {
  isSettingsVisible: boolean;
  isDarkMode: boolean;
  isCtrlEnterSendEnabled: boolean;
  isClocksDisplayEnabled: boolean;

}

const Chat = ({
  isSettingsVisible,
  isDarkMode,
  isCtrlEnterSendEnabled,
  isClocksDisplayEnabled,

}: chatProps) => {
  const [message, setMessage] = useState<string>("");
  const [messages, setMessages] = useState<
    { id: string; text: string; time: Date }[]
  >([]);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleChangeMessage = (e: ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };
  const handleSubmit = () => {
    if (message.trim() !== "") {
      const newMessage = {
        id: uuidv4(),
        text: message,
        time: new Date(),
      };
      setMessages([...messages, newMessage]);
      setMessage("");
    }
  };

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollTop = contentRef.current.scrollHeight;
    }
  }, [messages]);

  //  ShortcutEvent
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isCtrlEnterSendEnabled === true && e.key === "Enter" && e.ctrlKey) {
        handleSubmit();
      }
    };
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleSubmit, isCtrlEnterSendEnabled]);

  // language
  const { t } = useTranslation();

  return (
    <div className="w-[25rem] h-[39.5rem] font-roboto
    2xl:w-[24rem] 2xl:h-[35.5rem]
    xl:w-[20rem] xl:h-[28rem]
    sm:w-[16rem] sm:h-[25rem] 
    Xsm:w-[14rem] Xsm:h-[22rem]
    ">
      <div
        className={`w-[25rem] h-[33.7rem] bg-chatBg flex justify-end columns-1 p-[0.5rem] overflow-auto custom-scrollbar pt-[0.3rem] 
        2xl:w-[24rem] 2xl:h-[30.5rem]
        xl:w-[20rem] xl:h-[28rem]
        sm:w-[16rem] sm:h-[25rem]
        Xsm:w-[14rem] Xsm:h-[22rem]
        ${isSettingsVisible ? "opacity-90" : "opacity-100"} 
        ${isDarkMode && "dark:bg-darkcommon"}
        `}
        ref={contentRef}
      >
        <div className="block ">
          {messages.map((item) => {
            return (
              <div
                key={item.id}
                className={`w-[12rem] h-auto bg-yourContentColor border rounded-t-[1.25rem] rounded-l-[1.25rem] px-[1.2rem] py-[0.3rem] mb-[0.5rem] break-words
                ${isDarkMode && "dark:bg-darkcommon"}
                
                `}
              >
                <div className="flex items-center mb-[0.2rem]
                  sm:mb-[0.05rem]
                ">
                  <p
                    className={`text-[0.85rem] mr-[0.3rem] text-maincommonColor font-bold
                    sm:text-[0.7rem]
                    Xsm:text-[0.65rem]
                    ${isDarkMode && "dark:text-whiteletters"}
                    `}
                  >{t("you")}
                  </p>
                  <Clock
                    messageSentTime={item.time}
                    isClocksDisplayEnabled={isClocksDisplayEnabled}
                    isDarkMode={isDarkMode}
                  />
                </div>
                <p
                  className={`text-[0.8rem] text-maincommonColor font-light
                  sm:text-[0.72rem]
                  Xsm:text-[0.68rem]
                  ${isDarkMode && "dark:text-whiteletters"}
                `}
                >
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <div
        className={`w-full h-[1.2rem] bg-chatBg
        ${isSettingsVisible ? "opacity-90" : "opacity-100"}
        ${isDarkMode && "dark:bg-darkcommon"}
      `}
      />
      <div
        className={`w-[25rem] h-[5rem] bg-headerBg flex items-center justify-center
        2xl:w-[24rem] 2xl:h-[5rem] 
        xl:w-[20rem] xl:h-[4rem]
        sm:w-[16rem] sm:h-[3rem]
        Xsm:w-[14rem]
        ${isDarkMode && "dark:bg-darkHeadInput"}
      `}
      >
        <input
          value={message}
          onChange={handleChangeMessage}
          className={` w-[19.5rem] h-[3rem] outline-none 
            px-[1.5rem] text-[0.8rem] bg-chatBg text-maincommonColor
           placeholder-maincommonColor placeholder-opacity-753
           focus:placeholder-gray-100 
           xl:w-[16.5rem] xl:h-[2.5rem]
           sm:w-[13rem] sm:h-[2rem] sm:px-[0.5rem] sm:placeholder:text-[0.7rem] sm:text-[0.7rem]
           Xsm:w-[11rem] Xsm:placeholder:text-[0.6rem] Xsm:text-[0.65rem]
           ${
             isDarkMode &&
             "dark:bg-darkcommon text-whiteletters placeholder-whiteletters  dark:focus:placeholder-darkcommon "
           }
           `}
          placeholder={t("placeholder")}
        />
        <div
          className={`h-[3rem] w-auto flex items-center bg-chatBg pr-[1rem]
          xl:h-[2.5rem]
          sm:h-[2rem]
          ${isDarkMode && "dark:bg-darkcommon "}
        `}
        >
          <img
            onClick={handleSubmit}
            className={`bg-chatBg  w-[1.8rem] h-[1.6rem] cursor-pointer fill-slate-700
            xl:w-[1.4rem] xl:h-[1.4rem]
            sm:w-[1.2rem] sm:h-[1.2rem]
            Xsm:w-[1.1rem] Xsm:h-[1.1rem]
            ${isDarkMode && "dark:bg-darkcommon "}
            `}
            src={isDarkMode ? darkSend : sendIcon}
            alt="sendIcon"
          />
        </div>
      </div>
    </div>
  );
};

export default Chat;
