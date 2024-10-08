import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import bookLogo from "./assets/books.png";
import Books from "./components/Books";
import Account from "./components/Account";
import Login from "./components/Login";
import Register from "./components/Register";
import Navigations from "./components/Navigations";
import SingleBook from "./components/SingleBook";

function App() {
  const [token, setToken] = useState(null);

  return (
    <>
      <h1>
        <img id="logo-image" src={bookLogo} />
        Library App
      </h1>
      <Navigations />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/me" element={<Account />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/books/:bookid" element={<SingleBook />} />
        <Route path="*" element={<Books />} />
      </Routes>
    </>
  );
}

export default App;
