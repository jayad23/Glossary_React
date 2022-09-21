import { useState} from "react";
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Home from "./views/Home/Home";
import About from "./views/About/About";
import Contact from "./views/Contact/Contact";
import Error from "./views/Error/Error";
import NavbarLayout from "./Layout/NavbarLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<NavbarLayout />}>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;




















const Documentation = () => {
  return (
    <>
      <h1>Semana 5; React Router Dom!</h1>
      <p>How to Install React Router
      To install React Router, all you have to do is run npm install react-router-dom@6 in your project terminal and then wait for the installation to complete.
      If you are using yarn then use this command: yarn add react-router-dom@6.</p>
      <a href="https://www.freecodecamp.org/news/how-to-use-react-router-version-6/#:~:text=How%20to%20Install%20React%20Router,%2Drouter%2Ddom%406%20." target="e_blank" rel="nonreferrer">Visita aquí para leer más instrucciones</a>
    </>
  )
}