import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import DataProvider from "./components/redux/store";
// import "bootstrap/dist/css/bootstrap.min.css"
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
   <DataProvider> <App /></DataProvider>
  </BrowserRouter>
);
// ReactDOM.render
// (<SignUp />, document.getElementById('root'));
// 
