/* jshint esversion:11 */

import Logo from "./components/Logo";

export default function Register(){

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

                <button>Cadastrar</button>
                <a href="/">Já tem uma conta ? Faça login!</a>

            </form>

        </div>
    );

}