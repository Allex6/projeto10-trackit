/* jshint esversion:11 */

import { useContext } from "react";
import styled from "styled-components";
import UserContext from "../../contexts/UserContext";


const HeaderWrapper = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 70px;
    box-sizing: border-box;
    justify-content: space-between;
    padding: 0 16px;
    align-items: center;
    background-color: #126ba5;
    box-shadow: 0 4px 4px 0 rgba(0,0,0,0.15);
    z-index: 1;

    h1 {
        font-family: 'Playball', cursive;
        font-size: 36px;
        color: #fff;
    }

    img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        object-fit: fill;
    }

`;

export default function Header(){

    const { user } = useContext(UserContext);
    
    return (
        <HeaderWrapper className="d-flex">
            <h1>TrackIt</h1>
            <img src={user.image} alt="Minha imagem de perfil" />
        </HeaderWrapper>
    );

}