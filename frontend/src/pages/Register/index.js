import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';
import logoImage from '../../assets/logo.svg';

export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');

    const history = useHistory();

    async function handleRegister(e){
        e.preventDefault();
        const data = { 
            name,
            email,
            whatsapp,
            city,
            uf 
        }

        try {
            const response = await api.post('ongs/create', data);
            alert(`Seu ID de acesso: ${response.data.id}`);            

            history.push('/');
            
        } catch (error) {
            alert('Erro no cadastro. Tente novamente.')
        }
    }

    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img alt="Be the hero" src={logoImage} />

                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude as pessoas a encontrarem os casos da sua ONG.</p>

                    <Link className="back-link" to="/">
                        <FiArrowLeft size="16" color="#E02141"/>
                        Já tenho cadastro
                    </Link>

                </section>
                <form onSubmit={handleRegister}>
                    <input 
                        onChange={e => setName(e.target.value)} 
                        value={name} 
                        placeholder="Nome da ONG"
                    />
                    <input 
                        placeholder="Email" 
                        type="email"
                        onChange={e => setEmail(e.target.value)} 
                        value={email} 
                    />
                    <input 
                        onChange={e => setWhatsapp(e.target.value)} 
                        value={whatsapp} 
                        placeholder="WhatsApp"
                    />

                    <div className="input-group">
                        <input 
                            placeholder="Cidade"
                            onChange={e => setCity(e.target.value)} 
                            value={city} 
                        />
                        <input 
                            placeholder="UF" style={{ width: 80 }}
                            onChange={e => setUf(e.target.value)} 
                            value={uf} 
                        />
                    </div>

                    <button className="button" type="submit">Cadastrar</button>
                </form>

            </div>
        </div>
    )
}