import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import List from "./components/0115/List";
import Create from "./components/0115/Create";
import Update from "./components/0115/Update";
import GoogleLogin from "./components/0120/loginPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="/list" element={<List />} />
          <Route path="/create" element={<Create />} />
          <Route path="/update" element={<Update />} />
          <Route path="/login" element={<GoogleLogin />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
