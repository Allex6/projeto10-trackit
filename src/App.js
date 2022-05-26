/* jshint esversion:11 */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Habits from "./pages/Habits";
import History from "./pages/History";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Today from "./pages/Today";

import './css/reset.css';
import './css/style.css';

export default function App(){

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/cadastro" element={<Register />} />
                <Route path="/habitos" element={<Habits />} />
                <Route path="/hoje" element={<Today />} />
                <Route path="/historico" element={<History />} />
            </Routes>
        </BrowserRouter>
    )

}