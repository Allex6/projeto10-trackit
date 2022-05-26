/* jshint esversion:11 */

import Footer from "./components/Footer";
import Header from "./components/Header";

export default function Habits(){
    
    return (
        <>
            <Header />
            <div className="habits-page page">

                <div className="page-title d-flex">
                    <h3>Meus hábitos</h3>
                    <button>+</button>
                </div>

                <form className="add-habit d-flex hidden">

                    <div className="form-group">
                        <input type="text" placeholder="nome do hábito" />
                    </div>

                    <div className="days-list d-flex">
                        <div className="day d-flex">D</div>
                        <div className="day d-flex">S</div>
                        <div className="day selected d-flex">T</div>
                        <div className="day d-flex">Q</div>
                        <div className="day d-flex">Q</div>
                        <div className="day d-flex">S</div>
                        <div className="day d-flex">S</div>
                    </div>
                    
                    <div className="buttons d-flex">
                        <button className="cancel-btn" type="button">Cancelar</button>
                        <button className="save-btn" type="submit">Salvar</button>
                    </div>

                </form>

                <div className="habits-list">
                    <div className="no-habits hidden">
                        <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
                    </div>

                    <div className="habit-item">
                        <ion-icon name="trash-outline"></ion-icon>
                        <h6>Ler 1 capítulo de livro</h6>
                        <div className="days-list d-flex">
                            <div className="day d-flex">D</div>
                            <div className="day d-flex">S</div>
                            <div className="day selected d-flex">T</div>
                            <div className="day d-flex">Q</div>
                            <div className="day d-flex">Q</div>
                            <div className="day d-flex">S</div>
                            <div className="day d-flex">S</div>
                        </div>
                    </div>

                </div>

            </div>
            <Footer />
        </>
        
    );

}