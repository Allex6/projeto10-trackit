/* jshint esversion:11 */

import Logo from "./components/Logo";

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

                <button>Entrar</button>
                <a href="/">Não tem uma conta? Cadastre-se!</a>

            </form>

        </div>
    );

}