/* jshint esversion:11 */

import styled from 'styled-components';

const Wrapper = styled.div`

    justify-content: space-between;

    h3 {
        color: #126ba5;
        font-size: 22px;
    }
    
    p {
        color: #666;
        margin-top: 8px;
    }
    
    p.color-success {
        color: #8FC549;
    }

    button {
        width: 40px;
        height: 35px;
        color: #fff;
        border-radius: 5px;
        text-align: center;
        font-size: 26px;
        border: none;
        background-color: #52b6ff;
    }

`;

export default function PageTitle(props){

    return (
        <Wrapper className={props.helperClasses}>
            { props.children }
        </Wrapper>
    );

}