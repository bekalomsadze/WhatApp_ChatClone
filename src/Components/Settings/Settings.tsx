import { useState } from "react";
import closeX from "../../img/closeX.png";
import trash from "../../img/trash.png";
import { BsTrash3 } from "react-icons/bs";
import darkClose from "../../img/darkClose.png";
import downErrow from "../../img/downErrow.png";
import { useTranslation } from "react-i18next";

interface SettingsProps {
  setIsSettingsVisible: React.Dispatch<React.SetStateAction<boolean>>;
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
  isCtrlEnterSendEnabled: boolean;
  setIsCtrlEnterSendEnabled: React.Dispatch<React.SetStateAction<boolean>>;
  language: string;
  setLanguage: React.Dispatch<React.SetStateAction<string>>;
  isClocksDisplayEnabled: boolean;
  setIsClocksDisplayEnabled: React.Dispatch<React.SetStateAction<boolean>>;
}

const Settings = ({
  setIsSettingsVisible,
  isDarkMode,
  setIsDarkMode,
  isCtrlEnterSendEnabled,
  setIsCtrlEnterSendEnabled,
  language,
  setLanguage,
  isClocksDisplayEnabled,
  setIsClocksDisplayEnabled,
}: SettingsProps) => {
  const [dropDown, setDropDown] = useState<boolean>(false);

  const handleLightDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  const handleShortcutSetting = () => {
    setIsCtrlEnterSendEnabled(!isCtrlEnterSendEnabled);
  };

  const handleDropDownList = () => {
    setDropDown(!dropDown);
  };
  // language
  const { t, i18n } = useTranslation();
  const handleLanguageChange = (lng: string) => {
    i18n.changeLanguage(lng);
    setDropDown(false);
    setLanguage(lng);
  };
  const langList = ["English", "Spanish", "Georgian"];

  // Reset all settings
  const handleResetSetting = () => {
    setIsDarkMode(false);
    setIsCtrlEnterSendEnabled(false);
    setLanguage("English");
    setIsClocksDisplayEnabled(true);
    i18n.changeLanguage("English");
  };

  return (
    <div
      className={`w-[15rem] h-[43.4rem] bg-headerBg font-roboto text-maincommonColor
      2xl:w-[14rem] 2xl:h-[39.7rem]
      xl:w-[13rem] xl:h-[36rem] 
      sm:w-[11rem] sm:h-[31.5rem] sm:flex sm:flex-col sm:text-center
      Xsm:w-[9rem] Xsm:h-[28.5rem]
      

    ${isDarkMode && "dark:bg-darkcommon text-whiteletters"}
    `}
    >
      <header className="w-[100%] flex justify-end items-center  py-[0.7rem] px-[0.5rem]">
        <div className="m-auto">
          <h1
            className="text-[0.95rem] font-bold
          xl:text-sm 
          Xsm:text-xs
          "
          >
            {t("settings")}
          </h1>
        </div>
        <div>
          <img
            onClick={() => setIsSettingsVisible(false)}
            src={isDarkMode ? darkClose : closeX}
            alt="closeX"
            className="h-[1.2rem] w-[1.2rem] cursor-pointer
            xl:w-[1.15rem] sm:h-[1.15rem]
            Xsm:w-[1rem] Xsm:h-[1rem]
            "
          />
        </div>
      </header>
      <section
        className="flex justify-center 
         sm:text-center
      "
      >
        <div className="w-[12.5rem] flex flex-col">
          <h4
            className="mt-[3.5rem] text-[0.75rem]
          sm:my-[0.1rem]
          "
          >
            {t("userName")}
          </h4>
          <input
            className={`h-[1.5rem] mt-[0.2rem] outline-none border border-frameColors
            sm:w-[10rem] sm:m-auto
            Xsm:w-[7rem]
             ${isDarkMode && "dark:bg-darkHeadInput border-0"}
          `}
            type="text"
          />

          {/* Light & Dark / Modes */}
          <div
            className="flex items-center text-center mt-[2.5rem]
            sm:ml-[2.1rem] sm:mt-[1.5rem]
            Xsm:ml-[2.2rem]
            "
            typeof="dark_light"
          >
            <button
              onClick={handleLightDarkMode}
              className="h-[1.3rem] w-[2.5rem] bg-frameColors rounded-full flex items-center transition duration-300"
            >
              <div
                className={`h-[1.3rem] w-[1.3rem] border border-frameColors bg-headerBg rounded-full transition duration-500 
                
                ${
                  isDarkMode &&
                  "translate-x-[1.2rem]  dark:bg-darkYellow border border-darkYellow"
                }`}
              />
            </button>
            <div
              className="text-[0.75rem] ml-[1rem] font-normal
            sm:ml-[1rem]
            Xsm:ml-[0.6rem]
            "
            >
              {t("darkMode")}
            </div>
          </div>

          {/* CTRL + ENTER Shortcut */}
          <div
            className="flex items-center text-center mt-[0.8rem]
            sm:justify-center
            Xsm:justify-items-center Xsm:px-{rem}
            "
            typeof="CTRL + ENTER Shortcut"
          >
            <button
              onClick={handleShortcutSetting}
              className="h-[1.3rem] w-[2.5rem] bg-frameColors  rounded-full flex items-center transition duration-300"
            >
              <div
                className={`h-[1.3rem] w-[1.3rem] border border-frameColors bg-headerBg rounded-full transition duration-500 
                ${isCtrlEnterSendEnabled && " translate-x-[1.2rem]"}
                ${isDarkMode && "dark:bg-darkYellow border border-darkYellow"}
              `}
              />
            </button>
            <div
              className="text-[0.75rem] ml-[1rem] font-normal flex
              sm:block
              Xsm:flex Xsm:flex-col Xsm:ml-[1rem]
            "
            >
              <div>{t("sendOn")}</div>
              <span
                className="font-medium ml-[0.2rem]
              Xsm:ml-[0rem]
              "
              >
                CTRL+ENTER
              </span>
            </div>
          </div>

          {/* Time Format */}
          <div
            className="flex flex-col mt-[2rem] text-[0.75rem]
          sm:mt-[1rem]
          Xsm:ml-[0.3rem]
          "
          >
            <div className="text-[0.75rem] mb-[0.3rem]">{t("timeFormat")}</div>

            {/* 12HRS */}
            <div
              className="flex w-[12.5rem] justify-start
              sm:pl-[2rem]
            "
            >
              <div
                typeof="12_HRS_Part"
                className="flex items-center cursor-pointer"
              >
                <div
                  onClick={() => setIsClocksDisplayEnabled(true)}
                  className="w-[1.2rem] h-[1.2rem] border border-frameColors rounded-full relative flex justify-center"
                >
                  {isClocksDisplayEnabled && (
                    <button className="w-[0.74rem] h-[0.74rem] bg-yellow rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                  )}
                </div>
                <div className="text-[0.75rem] font-light ml-[0.5rem]">
                  {t("12hrs")}
                </div>
              </div>

              {/* 24-HRS */}
              <div
                typeof="24_HRS_Part"
                className="flex items-center cursor-pointer m-auto
                sm:ml-[1rem]
                Xsm:ml-[0.6rem]
                "
              >
                <div
                  onClick={() => setIsClocksDisplayEnabled(false)}
                  className="w-[1.2rem] h-[1.2rem] border border-frameColors rounded-full relative flex justify-center"
                >
                  {!isClocksDisplayEnabled && (
                    <button className="w-[0.74rem] h-[0.74rem] bg-yellow rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                  )}
                </div>
                <div className="text-[0.75rem] font-light ml-[0.5rem]">
                  {t("24hrs")}
                </div>
              </div>
            </div>
          </div>
          {/* Language */}
          <div
            className="mt-[2rem]
          sm:mt-[1rem]
          "
          >
            <div
              className="text-[0.75rem] mb-[0.3rem]
            "
            >
              {t("language")}
            </div>
            <button
              onClick={handleDropDownList}
              className={`w-[100%] flex justify-between items-center px-[0.6rem] py-[0.3rem] border border-frameColors bg-yellow-100
              sm:w-[10rem] sm:m-auto sm:mt-[0.5rem]
              Xsm:w-[7rem]
              ${dropDown && "border-b-0"} 
                ${isDarkMode && "dark:bg-darkHeadInput dark:border-0"}
              `}
            >
              <h4
                className={`text-[0.75rem] font-light text-downErrow
                 ${isDarkMode && "dark:text-whiteletters"}
              `}
              >
                {language}
              </h4>
              <img
                className={`w-[1rem] h-[0.6rem] transition-transform duration-300 ${
                  dropDown ? "rotate-180" : ""
                }`}
                src={downErrow}
                alt="downErrow"
              />
            </button>
            {dropDown && (
              <div
                className={`w-full text-[0.75rem] font-light text-downErrow cursor-pointer border border-frameColors
                sm:w-[10rem] sm:m-auto
                Xsm:w-[7rem]
                ${
                  isDarkMode &&
                  "dark:border-0 dark:text-whiteletters dark:bg-neutral-800"
                }
              `}
              >
                {langList.map((lanlist) => {
                  return (
                    <button
                      onClick={() => handleLanguageChange(lanlist)}
                      className={`block w-full py-1 px-2 hover:bg-frameColors focus:outline-none
                    ${isDarkMode && "hover:dark:bg-neutral-900"}
                  `}
                    >
                      {lanlist}
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </section>
      {/* Reset Settings to default */}
      <footer
        className="w-full flex justify-end absolute bottom-0 
        sm:justify-center
      "
      >
        <button
          onClick={handleResetSetting}
          className="flex px-[0.5rem] py-[0.5rem] cursor-pointer hover:underline
          sm:align-middle sm:items-center
          "
        >
          {isDarkMode ? (
            <BsTrash3 className="mx-[0.7rem] w-[1rem] h-[0.95rem]" />
          ) : (
            <img
              className="mx-[0.7rem] w-[1rem] h-[0.95rem]
              sm:mx-[0rem]
              "
              src={trash}
              alt="trash"
            />
          )}
          <div
            className={`text-[0.75rem] font-normal text-maincommonColor
            sm:ml-[0.2rem]
              ${isDarkMode && "dark:text-whiteletters"}
            `}
          >
            {t("resetLangs")}
          </div>
        </button>
      </footer>
    </div>
  );
};
export default Settings;
