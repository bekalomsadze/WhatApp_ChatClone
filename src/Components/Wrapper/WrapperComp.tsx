import { useState } from "react";
import Chat from "../Chat/Chat";
import Settings from "../Settings/Settings";
import settingIcon from "../../img/SetIcon.png";
import darkSetting from "../../img/darkSett.png";
import "../../App.css";
import { useTranslation } from "react-i18next";

const WrapperComp = () => {
  // State to manage the visibility of the Settings component
  const [isSettingsVisible, setIsSettingsVisible] = useState<boolean>(false);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [isCtrlEnterSendEnabled, setIsCtrlEnterSendEnabled] = useState<boolean>(false);
  const [language, setLanguage] = useState<string>("English");
  const [isClocksDisplayEnabled, setIsClocksDisplayEnabled] = useState<boolean>(true);
  
  // language
  const { t } = useTranslation();

  return (
    <div className={`bg-zinc-200 py-[4rem] relative font-roboto h-dvh pb-[50rem]
    sm:pb-[32rem]
     ${isDarkMode && "dark:bg-stone-900"}
    `}>
      <div className="w-[25rem] h-[43rem] m-auto relative
      2xl:w-[24rem] 2xl:h-[39.5rem]
      xl:w-[20rem] xl:h-[36rem] 
      sm:w-[16rem] sm:h-[32rem]
      Xsm:w-[14rem] Xsm:h-[30rem]
      ">
        <header
          className={`w-[25rem] h-[3.5rem] py-[1.125rem] flex bg-headerBg  items-center m-auto  relative
          2xl:w-[24rem] 2xl:h-[3rem] 
          xl:w-[20rem] xl:h-[2.8rem]
          sm:w-[16rem] sm:h-[2.3rem]
          Xsm:w-[14rem] Xsm:h-[2rem]
           ${isDarkMode && "dark:bg-darkHeadInput"}
        `}
        >
          <span
            className={`text-maincommonColor text-lg font-medium mx-auto cursor-pointer pl-[1rem]
            xl:text-base 
            sm:text-sm
            Xsm:text-xs
          ${isDarkMode && "dark:text-whiteletters"}
          `}
          > 
            {t("chat")}
          </span>
          <span
            className="px-[0.4rem]"
            onClick={() => setIsSettingsVisible(!isSettingsVisible)}
          >
            <img
              className="cursor-pointer pr-[0.1rem]
              xl:w-[1.3rem] xl:h-[1.3rem]
              sm:w-[1.2rem] sm:h-[1.2rem]
              Xsm:w-[1.1rem] Xsm:h-[1.1rem]
              "
              src={isDarkMode ? darkSetting : settingIcon}
              alt="settingIcon"
            />
          </span>
          {/* Settings component */}
          {isSettingsVisible && (
            <div className="absolute top-[0rem] right-0 z-10 bg-white">
              <Settings
                setIsSettingsVisible={setIsSettingsVisible}
                isDarkMode={isDarkMode}
                setIsDarkMode={setIsDarkMode}
                isCtrlEnterSendEnabled={isCtrlEnterSendEnabled}
                setIsCtrlEnterSendEnabled={setIsCtrlEnterSendEnabled}
                language={language}
                setLanguage={setLanguage}
                isClocksDisplayEnabled={isClocksDisplayEnabled}
                setIsClocksDisplayEnabled={setIsClocksDisplayEnabled}
              />
            </div>
          )}
        </header>
        <div>
          <Chat
            isSettingsVisible={isSettingsVisible}
            isDarkMode={isDarkMode}
            isCtrlEnterSendEnabled={isCtrlEnterSendEnabled}
            isClocksDisplayEnabled={isClocksDisplayEnabled}
          />
        </div>
      </div>
    </div>
  );
};

export default WrapperComp;
