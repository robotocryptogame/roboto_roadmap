import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.scss";
import { FilterDataProvider } from "@context/FilterData/FilterDataManager";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <FilterDataProvider>
    <App />
  </FilterDataProvider>
);
