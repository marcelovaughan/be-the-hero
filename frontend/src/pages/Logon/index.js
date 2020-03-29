import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

import herosImage from '../../assets/heroes.png';
import logoImage from '../../assets/logo.svg';

export default function Logon() {
    const [id, setId] = useState('');

    const history = useHistory();

    async function handleLogon(e){
        e.preventDefault();
        const data = { id }

        try {
            const response = await api.post('sessions/create', data);
            
            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', response.data.name);

            history.push('/profile');
            
        } catch (error) {
            alert('Erro no login. Tente novamente.')
        }
    }

    return (
        <div className="logon-container">
            <section className="form">
                <img alt="Be the Hero" src={logoImage} />
                <form onSubmit={handleLogon}>
                    <h1>Faça seu logon</h1>
                    <input 
                        placeholder="Sua ID" type="text"
                        value={id}
                        onChange={ e => setId(e.target.value) }
                    />
                    <button className='button' type="submit">Entrar</button>
                    <Link className="back-link" to="/register">
                        <FiLogIn size="16" color="#E02141"/>
                        Não tenho cadastro
                    </Link>
                </form>

            </section>

            <img src={herosImage} alt="Heroes"/>
        </div>
    )
}