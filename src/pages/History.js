/* jshint esversion:11 */

import Footer from "./components/Footer";
import Header from "./components/Header";

export default function History(){
    
    return (
        <>
            <Header />
            <div className="history-page page">
                <div className="page-title">
                    <h3>Histórico</h3>
                    <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
                </div>
            </div>
            <Footer />
        </>
        
    );

}