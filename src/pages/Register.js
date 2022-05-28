/* jshint esversion:11 */

import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import FormButton from "./components/FormButton";
import Logo from "./components/Logo";

export default function Register(){

    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    function register(e){

        e.preventDefault();
        setLoading(true);
        const formData = new FormData(e.target);

        const body = {
            name: formData.get('name'),
            image: formData.get('image'),
            email: formData.get('email'),
            password: formData.get('password')
        };

        axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up', body).then(response=>{

            setLoading(false);
            navigate('/');

        }).catch(err=>{

            console.log('err', err);
            switch (err.response.status) {
                
                case 409:
                    alert('Esse email já está cadastrado.');
                    break;
            
                default:
                    alert('Ocorreu um erro ao realizar seu cadastro. Tente novamente.');
                    break;
            }
            setLoading(false);

        });

    }

    return (
        <div className="login-register-page d-flex">

            <Logo />
            <form className="d-flex" onSubmit={register}>

                <div className="form-group">
                    <input type="email" placeholder="Email" name="email" required disabled={loading} />
                </div>

                <div className="form-group">
                    <input type="password" placeholder="Senha" name="password" required disabled={loading} />
                </div>

                <div className="form-group">
                    <input type="text" placeholder="Nome" name="name" required disabled={loading} />
                </div>

                <div className="form-group">
                    <input type="text" placeholder="Foto" name="image" required disabled={loading} />
                </div>

                <FormButton text="Cadastrar" loading={loading} />

                <Link to="/">
                    Já tem uma conta ? Faça login!
                </Link>

            </form>

        </div>
    );

}