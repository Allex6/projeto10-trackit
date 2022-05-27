/* jshint esversion:11 */

import styled from "styled-components";


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

`;

export default function Header(){
    
    return (
        <HeaderWrapper className="d-flex">
            <h1>TrackIt</h1>
            <img src="./img/bob.png" alt="Minha imagem de perfil" />
        </HeaderWrapper>
    );

}