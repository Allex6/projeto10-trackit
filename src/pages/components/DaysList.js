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

export default function DaysList(){

    
    return (
        <Wrapper className="d-flex">
            <div className="day d-flex">D</div>
            <div className="day d-flex">S</div>
            <div className="day selected d-flex">T</div>
            <div className="day d-flex">Q</div>
            <div className="day d-flex">Q</div>
            <div className="day d-flex">S</div>
            <div className="day d-flex">S</div>
        </Wrapper>
    );

}