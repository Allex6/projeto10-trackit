/* jshint esversion:11 */

import Footer from "./components/Footer";
import Header from "./components/Header";

export default function Today(){
    
    return (
        <>
            <Header />
            <div className="today-page page">

            <div className="page-title">
                <h3>Quarta, 25/05</h3>
                <p className="color-success">Nenhum hábito concluído ainda</p>
            </div>

            <div className="habits-list">
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
            </div>

            </div> 
            <Footer />
        </>
        
    );

}