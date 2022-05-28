/* jshint esversion:11 */

import { Link, useNavigate } from "react-router-dom";
import Logo from "./components/Logo";
import FormButton from "./components/FormButton";
import { useContext, useState } from "react";
import UserContext from "../contexts/UserContext";
import axios from "axios";

export default function Login(){

    const { user, setUser } = useContext(UserContext);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const savedUser = localStorage.getItem('user');

    if(savedUser !== null){
        setUser(JSON.parse(savedUser));
        navigate('/hoje');
    }

    function login(e){

        e.preventDefault();
        setLoading(true);
        const formData = new FormData(e.target);

        const body = {
            email: formData.get('email'),
            password: formData.get('password')
        };

        axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login', body).then(response=>{

            setUser(response.data);
            setLoading(false);
            navigate('/hoje');
            localStorage.setItem('user', JSON.stringify(response.data));

        }).catch(err=>{
            console.log(err);
            alert('Ocorreu um erro ao realizar o login. Tente novamente.');
            setLoading(false);
        });

    }
    
    return (
        <div className="login-register-page d-flex">

            <Logo />
            <form className="d-flex" onSubmit={login}>

                <div className="form-group">
                    <input type="email" placeholder="Email" name="email" disabled={loading} required />
                </div>

                <div className="form-group">
                    <input type="password" placeholder="Senha" name="password" disabled={loading} required />
                </div>

                <FormButton text="Entrar" loading={loading} />

                <Link to="/cadastro">
                    Não tem uma conta? Cadastre-se!
                </Link>

            </form>

        </div>
    );

}