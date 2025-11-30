import "./App.css";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

function App() {
    const { t } = useTranslation();
    return (
        <div className="App">
            <h1>Language Switcher</h1>
            <h1>{t("welcome")}</h1>
            <p>{t("select_language")}</p>
            <LanguageSwitcher />
        </div>
    );
}

export default App;
