/* jshint esversion:11 */

import styled from 'styled-components';
import DaysList from './components/DaysList';
import Footer from "./components/Footer";
import Header from "./components/Header";
import StyledPage from './components/StyledPage';
import PageTitle from './components/PageTitle';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import UserContext from '../contexts/UserContext';
import HabitItem from './components/HabitItem';

const AddHabit = styled.form`

    background-color: #fff;
    width: 100%;
    border-radius: 5px;
    flex-direction: column;
    margin-top: 20px;
    padding: 18px;
    box-sizing: border-box;
    align-items: center;

    .buttons {
        width: 100%;
        margin-top: 28px;
        justify-content: flex-end;
    }
    
    .buttons .cancel-btn {
        margin-right: 24px;
        background: none;
        color: #52b6ff;
    }
    
    .buttons .save-btn {
        background-color: #52b6ff;
        color: #fff;
    }
    
    .buttons button {
        height: 35px;
        border: none;
        font-size: 16px;
        text-align: center;
        width: 84px;
        border-radius: 5px;
    }

`;

const HabitsList = styled.div`

    .no-habits p {
        color: #666;
        margin-top: 28px;
        font-size: 18px;
    }

    .habit-item {
        background-color: #fff;
        padding: 16px;
        box-sizing: border-box;
        position: relative;
        border-radius: 5px;
        margin-top: 15px;
    }
    
    .habit-item h6 {
        color: #666;
        margin: 10px 0;
    }
    
    .habit-item ion-icon {
        position: absolute;
        right: 10px;
        top: 10px;
        color: #666;
        font-size: 16px;
    }

`;

export default function Habits(){

    const [habitsArray, setHabitsArray] = useState([]);
    const { user, setUser } = useContext(UserContext);
    const [showForm, setShowForm] = useState(false);
    const [selectedDays, setSelectedDays] = useState([]);
    const [loading, setLoading] = useState(false);
    
    const requestConfig = {
        headers: {
            Authorization: `Bearer ${user.token}`
        }
    };

    useEffect(()=>{
        
        axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', requestConfig).then(response=>{

            setHabitsArray(response.data);

        }).catch(err=>{
            console.log(err);
            alert('Ocorreu um erro ao carregar a sua lista de hábitos.');
        });

    }, []);

    function newHabit(e){

        e.preventDefault();
        setLoading(true);
        const formData = new FormData(e.target);

        const body = {
            name: formData.get('name'),
            days: selectedDays
        };

        axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', body, requestConfig).then(response=>{

            e.target.reset();
            setLoading(false);
            setShowForm(false);
            setSelectedDays([]);
            setHabitsArray([...habitsArray, response.data]);

        }).catch(err=>{
            console.log(err);
            alert('Ocorreu um erro ao criar um novo hábito. Tente novamente.');
            setLoading(false);
        });

    }
    
    return (
        <>
            <Header userImage={user.image} />
                <StyledPage className="habits-page">

                    <PageTitle helperClasses="d-flex">
                        <h3>Meus hábitos</h3>
                        <button onClick={() => setShowForm(true)}>+</button>
                    </PageTitle>

                    <AddHabit className={`d-flex ${showForm ? '' : 'hidden'}`} onSubmit={newHabit}>
                        <div className="form-group">
                            <input type="text" placeholder="nome do hábito" name='name' disabled={loading} />
                        </div>

                        <DaysList selectedDays={selectedDays} setSelectedDays={setSelectedDays} disabled={loading} />
                        
                        <div className="buttons d-flex">
                            <button className="cancel-btn" type="button" onClick={() => setShowForm(false)}>Cancelar</button>
                            <button className="save-btn" type="submit" disabled={loading}>Salvar</button>
                        </div>
                    </AddHabit>

                    <HabitsList>
                        <div className={`no-habits ${(habitsArray.length > 0) ? 'hidden' : ''}`}>
                            <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
                        </div>

                        { habitsArray.map(habit => <HabitItem key={habit.id} habitId={habit.id} habitName={habit.name} selectedDays={habit.days} setSelectedDays={() => null} habitsArray={habitsArray} setHabitsArray={setHabitsArray} />) }
                    </HabitsList>

                </StyledPage>
            <Footer />
        </>
        
    );

}