/* jshint esversion:11 */

import Footer from "./components/Footer";
import Header from "./components/Header";
import PageTitle from "./components/PageTitle";
import StyledPage from "./components/StyledPage";

export default function History(){
    
    return (
        <>
            <Header />
            <StyledPage>
                <PageTitle>
                    <h3>Histórico</h3>
                    <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
                </PageTitle>
            </StyledPage>
            <Footer />
        </>
        
    );

}