/* jshint esversion:11 */

import axios from 'axios';
import { useContext } from 'react';
import UserContext from '../../contexts/UserContext';
import DaysList from './DaysList';

export default function HabitItem({ habitName, selectedDays, setSelectedDays, habitId, habitsArray, setHabitsArray }){

    const { user, setUser } = useContext(UserContext);
    
    const requestConfig = {
        headers: {
            Authorization: `Bearer ${user.token}`
        }
    };

    function deleteHabit(id){

        if(window.confirm('Deseja mesmo excluir esse hábito ?')){

            axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`, requestConfig).then(response=>{

                const filteredDays = habitsArray.filter(item => item.id !== id);
                setHabitsArray(filteredDays);

            }).catch(err=>{
                console.log(err);
                alert('Ocorreu um erro ao excluir o hábito informado. Tente novamente.');
            });

        }

    }

    return(
        <div className="habit-item">
            <ion-icon name="trash-outline" onClick={() => deleteHabit(habitId)}></ion-icon>
            <h6>{habitName}</h6>
            <DaysList selectedDays={selectedDays} setSelectedDays={setSelectedDays} />
        </div>
    );

}