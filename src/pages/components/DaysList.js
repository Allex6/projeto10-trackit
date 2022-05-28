/* jshint esversion:11 */

import styled from 'styled-components';

const Wrapper = styled.div`

    width: 300px;

    .day {
        margin-right: 4px;
        width: 30px;
        height: 30px;
        align-items: center;
        justify-content: center;
        border-radius: 5px;
        border: solid 1px #d4d4d4;
        color: #dbdbdb;
    }

    .day.selected {
        border: solid 1px #cfcfcf;
        color: #fff;
        background-color: #cfcfcf;
    }

`;

function Day({ letter, isSelected, setSelectedDays, selectedDays, index, disabled }){

    function toggleSelectedDay(){

        if(disabled) return false;

        const selectedDayIndex = selectedDays.indexOf(index);

        if(selectedDayIndex > -1){
            
            selectedDays.splice(selectedDayIndex, 1);
            setSelectedDays([...selectedDays]);

        } else {
            setSelectedDays([...selectedDays, index]);
        }

    }

    return (
        <div onClick={toggleSelectedDay} className={`day ${isSelected ? 'selected' : ''} d-flex`}>{letter}</div>
    );

}

export default function DaysList({ selectedDays, setSelectedDays, disabled }){

    const weekDays = ['D', 'S','T','Q','Q','S','S'];

    return (
        <Wrapper className="d-flex">
            { weekDays.map((day, dayIndex) => <Day selectedDays={selectedDays} setSelectedDays={setSelectedDays} index={dayIndex} letter={day} isSelected={selectedDays.indexOf(dayIndex) > -1} disabled={disabled} />) }
        </Wrapper>
    );

}

/*<div className="day d-flex">S</div>
            <div className="day selected d-flex">T</div>
            <div className="day d-flex">Q</div>
            <div className="day d-flex">Q</div>
            <div className="day d-flex">S</div>
            <div className="day d-flex">S</div>*/