/* jshint esversion:11 */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import Habits from "./pages/Habits";
import History from "./pages/History";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Today from "./pages/Today";
import UserContext from './contexts/UserContext';

import './css/reset.css';
import './css/style.css';

export default function App(){

    const [user, setUser] = useState({});
    const [todayHabits, setTodayHabits] = useState([]);

    return (
        <BrowserRouter>
            <UserContext.Provider value={{ user, setUser, todayHabits, setTodayHabits }}>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/cadastro" element={<Register />} />
                    <Route path="/habitos" element={<Habits />} />
                    <Route path="/hoje" element={<Today />} />
                    <Route path="/historico" element={<History />} />
                </Routes>
            </UserContext.Provider>
        </BrowserRouter>
    )

}