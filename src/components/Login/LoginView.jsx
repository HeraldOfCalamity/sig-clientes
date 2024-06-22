import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'


const LoginView = ({ whiteList, onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const foundAdmin = whiteList.find(admin => admin.email === email);
        if (!foundAdmin) {
            alert('Usuario no encontrado');
            return;
        }

        if (password !== foundAdmin.password) {
            alert('Credenciales incorrectas');
            return;
        }

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
                <Link to={'/register'}>Registrarse</Link>
            </form>
        </div>
    )
}

export default LoginView;