import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App.jsx";
import NotFound from "./NotFound.jsx";
import Lobby from "./Lobby.jsx";
import StorePicker from "./StorePicker.jsx";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StorePicker />} />
        <Route path="/lobby" element={<Lobby />} />
        <Route path="/store/:storeId" element={<App />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;