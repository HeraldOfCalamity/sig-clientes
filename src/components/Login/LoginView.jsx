import { useState } from 'react';
import { useNavigate } from 'react-router-dom'


const LoginView = ({ onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        //implementar autenticacion
        onLogin();
        navigate('/');
    }
    return (
        <div>
            <h1>My Group XD</h1>
            <form onSubmit={handleSubmit}>
                <h2 className="login-title">Inicio de sesión</h2>
                <label htmlFor="email">Email:</label>
                <input type="email" placeholder="Ingrese su correo/email" value={email} onChange={e => setEmail(e.target.value)} required />
                <label html="password">Contraseña:</label>
                <input type="password" placeholder="Ingrese su contraseña" value={password} onChange={e => setPassword(e.target.value)} required />
                <button type="submit">Iniciar sesión</button>
            </form>
        </div>
    )
}

export default LoginView;