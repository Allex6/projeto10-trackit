/* jshint esversion:11 */

import styled from 'styled-components';
import DaysList from './components/DaysList';
import Footer from "./components/Footer";
import Header from "./components/Header";
import StyledPage from './components/StyledPage';
import PageTitle from './components/PageTitle';

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
    
    return (
        <>
            <Header />
                <StyledPage className="habits-page">

                    <PageTitle helperClasses="d-flex">
                        <h3>Meus hábitos</h3>
                        <button>+</button>
                    </PageTitle>

                    <AddHabit className="d-flex hidden">
                        <div className="form-group">
                            <input type="text" placeholder="nome do hábito" />
                        </div>

                        <DaysList />
                        
                        <div className="buttons d-flex">
                            <button className="cancel-btn" type="button">Cancelar</button>
                            <button className="save-btn" type="submit">Salvar</button>
                        </div>
                    </AddHabit>

                    <HabitsList>
                        <div className="no-habits hidden">
                            <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
                        </div>

                        <div className="habit-item">
                            <ion-icon name="trash-outline"></ion-icon>
                            <h6>Ler 1 capítulo de livro</h6>
                            <DaysList />
                        </div>
                    </HabitsList>

                </StyledPage>
            <Footer />
        </>
        
    );

}