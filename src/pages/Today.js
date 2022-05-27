/* jshint esversion:11 */

import Footer from "./components/Footer";
import Header from "./components/Header";
import StyledPage from "./components/StyledPage";
import styled from 'styled-components';
import PageTitle from "./components/PageTitle";

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

export default function Today(){
    
    return (
        <>
            <Header />
                <StyledPage className="today-page">

                    <PageTitle>
                        <h3>Quarta, 25/05</h3>
                        <p className="color-success">Nenhum hábito concluído ainda</p>
                    </PageTitle>

                    <HabitsList className="habits-list">
                        <div className="habit-item d-flex">
                            <div className="info">
                                <h5>Ler 1 capítulo de livro</h5>
                                <p>Sequência atual: <span className="sequence">3 dias</span></p>
                                <p>Seu recorde: <span className="record">5 dias</span></p>
                            </div>
                            <div className="action">
                                <ion-icon name="checkbox"></ion-icon>
                            </div>
                        </div>
                        <div className="habit-item done new-record d-flex">
                            <div className="info">
                                <h5>Ler 1 capítulo de livro</h5>
                                <p>Sequência atual: <span className="sequence">3 dias</span></p>
                                <p>Seu recorde: <span className="record">5 dias</span></p>
                            </div>
                            <div className="action">
                                <ion-icon name="checkbox"></ion-icon>
                            </div>
                        </div>
                        <div className="habit-item d-flex">
                            <div className="info">
                                <h5>Ler 1 capítulo de livro</h5>
                                <p>Sequência atual: <span className="sequence">3 dias</span></p>
                                <p>Seu recorde: <span className="record">5 dias</span></p>
                            </div>
                            <div className="action">
                                <ion-icon name="checkbox"></ion-icon>
                            </div>
                        </div>
                        <div className="habit-item d-flex">
                            <div className="info">
                                <h5>Ler 1 capítulo de livro</h5>
                                <p>Sequência atual: <span className="sequence">3 dias</span></p>
                                <p>Seu recorde: <span className="record">5 dias</span></p>
                            </div>
                            <div className="action">
                                <ion-icon name="checkbox"></ion-icon>
                            </div>
                        </div>
                        <div className="habit-item d-flex">
                            <div className="info">
                                <h5>Ler 1 capítulo de livro</h5>
                                <p>Sequência atual: <span className="sequence">3 dias</span></p>
                                <p>Seu recorde: <span className="record">5 dias</span></p>
                            </div>
                            <div className="action">
                                <ion-icon name="checkbox"></ion-icon>
                            </div>
                        </div>
                        <div className="habit-item done d-flex">
                            <div className="info">
                                <h5>Ler 1 capítulo de livro</h5>
                                <p>Sequência atual: <span className="sequence">3 dias</span></p>
                                <p>Seu recorde: <span className="record">5 dias</span></p>
                            </div>
                            <div className="action">
                                <ion-icon name="checkbox"></ion-icon>
                            </div>
                        </div>
                    </HabitsList>

                </StyledPage>
            <Footer />
        </>
        
    );

}