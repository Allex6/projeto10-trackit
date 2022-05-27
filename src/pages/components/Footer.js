/* jshint esversion:11 */

import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const FooterWrapper = styled.div`

    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 70px;
    box-sizing: border-box;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
    background-color: #fff;
    z-index: 1;
    
    h4 {
        color: #52b6ff;
        font-size: 18px;
    }

    a {
        text-decoration: none;
    }

`;

export default function Footer(){

    
    /**/

    
    return (
        <FooterWrapper className="d-flex" >
            <Link to="/habitos">
                <h4>Hábitos</h4>
            </Link>

            <Link to="/hoje">
                <div style={{ width: '100px', height: '100px', marginTop: '-60px' }}>
                    <CircularProgressbar
                        value={66}
                        text="Hoje"
                        background={true}
                        backgroundPadding="6"
                        styles={buildStyles({
                            backgroundColor: '#52b6ff',
                            trailColor: 'transparent',
                            pathColor: 'white',
                            textColor: 'white'
                        })}
                    />
                </div>
            </Link>

            <Link to="/historico">
                <h4>Histórico</h4>
            </Link>
        </FooterWrapper>
    );

}