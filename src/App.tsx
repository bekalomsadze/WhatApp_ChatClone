import WrapperComp from "./Components/Wrapper/WrapperComp";
import i18n from "./Languages/langChange";
import { I18nextProvider } from "react-i18next";

const App = () => {
  return (
    <I18nextProvider i18n={i18n}>
      <div>
        <WrapperComp />
      </div>
    </I18nextProvider>
  );
};
export default App;
