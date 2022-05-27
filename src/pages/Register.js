/* jshint esversion:11 */

import { Link } from "react-router-dom";
import FormButton from "./components/FormButton";
import Logo from "./components/Logo";

export default function Register(){

    // os inputs precisam ser desabilitados quando o submit for feito, então precisamos de uma variável de controle.

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

                <div className="form-group">
                    <input type="text" placeholder="Nome" required />
                </div>

                <div className="form-group">
                    <input type="text" placeholder="Foto" required />
                </div>

                <FormButton text="Cadastrar" loading={false} />

                <Link to="/">
                    Já tem uma conta ? Faça login!
                </Link>

            </form>

        </div>
    );

}