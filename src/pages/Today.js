/* jshint esversion:11 */

import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';

import Footer from "./components/Footer";
import Header from "./components/Header";
import StyledPage from "./components/StyledPage";
import styled from 'styled-components';
import PageTitle from "./components/PageTitle";
import { useContext, useEffect } from "react";
import UserContext from "../contexts/UserContext";
import axios from 'axios';

const HabitsList = styled.div`

    margin-top: 28px;

    .habit-item {
        align-items: center;
        justify-content: space-between;
        margin-bottom: 10px;
        background-color: #fff;
        padding: 14px;
        border-radius: 5px;
    }

    .habit-item .action ion-icon {
        font-size: 68px;
        color: #ebebeb;
    }

    .habit-item.done .action ion-icon,
    .habit-item.done .info .sequence,
    .habit-item.done.new-record .info .record {
        color: #8FC549;
    }

    .habit-item .info {
        color: #666;
    }

    .habit-item .info h5 {
        font-size: 20px;
        margin-bottom: 8px;
    }

    .habit-item .info p {
        font-size: 12px;
    }
`;

function HabitItem({ habitName, currentSequence, highestSequence, done, id, todayHabits, setTodayHabits, userToken }){

    function toggleDone(id){

        const habit = todayHabits.find(item => item.id === id);

        const requestURL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habit.id}/${(habit.done) ? 'uncheck' : 'check'}`;
        
        const requestConfig = {
            headers: {
                Authorization: `Bearer ${userToken}`
            }
        };

        axios.post(requestURL, {}, requestConfig).then(response=>{

            axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today`, requestConfig).then(response=>{

                setTodayHabits(response.data);

            }).catch(err=>{
                console.log(err);
                alert('Ocorreu um erro ao carregar a lista de hábitos diários.');
            });

        }).catch(err=>{
            console.log(err);
            alert('Ocorreu um erro. Tente novamente.');
        });

    }
    
    return (
        <div className={`habit-item ${done ? 'done' : ''} ${(currentSequence >= highestSequence) ? 'new-record' : '' } d-flex`}>
            <div className="info">
                <h5>{habitName}</h5>
                <p>Sequência atual: <span className="sequence">{currentSequence} dias</span></p>
                <p>Seu recorde: <span className="record">{highestSequence} dias</span></p>
            </div>
            <div className="action">
                <ion-icon name="checkbox" onClick={() => toggleDone(id)}></ion-icon>
            </div>
        </div>
    );

}

function PageDescription({ todayHabits }){

    const concludedHabits = todayHabits.filter(item => item.done);
    const concludedPercentage = (concludedHabits.length > 0) ? Math.round((concludedHabits.length / todayHabits.length) * 100) : '';

    return (
        <p className=
            {
                (concludedHabits.length > 0) ? 'color-success' : ''
            }>
            {
                (concludedHabits.length > 0) ? `${concludedPercentage}% dos hábitos concluídos` : 'Nenhum hábito concluído ainda'
            }
        </p>
    );

}

export default function Today(){

    const { user, setUser, todayHabits, setTodayHabits } = useContext(UserContext);
    dayjs.locale('pt-br');

    useEffect(()=>{

        const requestConfig = {
            headers: {
                Authorization: `Bearer ${user.token}`
            }
        };

        axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today`, requestConfig).then(response=>{

            setTodayHabits(response.data);

        }).catch(err=>{
            console.log(err);
            alert('Ocorreu um erro ao carregar a lista de hábitos diários.');
        });

    }, []);
    
    return (
        <>
            <Header userImage={user.image} />
                <StyledPage className="today-page">

                    <PageTitle>
                        <h3>{dayjs().format('dddd[,] DD/MM')}</h3>
                        <PageDescription todayHabits={todayHabits} />
                    </PageTitle>

                    <HabitsList className="habits-list">

                        {
                            todayHabits.map(habit => <HabitItem habitName={habit.name} currentSequence={habit.currentSequence} highestSequence={habit.highestSequence} done={habit.done} id={habit.id} todayHabits={todayHabits} setTodayHabits={setTodayHabits} userToken={user.token} />)
                        }
                        
                    </HabitsList>

                </StyledPage>
            <Footer />
        </>
        
    );

}