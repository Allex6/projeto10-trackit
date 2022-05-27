/* jshint esversion:11 */

import { Link } from "react-router-dom";
import Logo from "./components/Logo";
import FormButton from "./components/FormButton";

export default function Login(){
    
    return (
        <div className="login-register-page d-flex">

            <Logo />
            <form className="d-flex">

                <div className="form-group">
                    <input type="email" placeholder="Email" required />
                </div>

                <div className="form-group">
                    <input type="password" placeholder="Senha" required />
                </div>

                <FormButton text="Entrar" loading={false} />

                <Link to="/cadastro">
                    Não tem uma conta? Cadastre-se!
                </Link>

            </form>

        </div>
    );

}