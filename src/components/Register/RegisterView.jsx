import { useState } from "react";
import { useNavigate } from 'react-router-dom';

const RegisterView = ({ onAdminRegister }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert('Las passwords no coinciden');
            return;
        }

        console.log('logged in');
        navigate('/login');
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Registrarse</h2>
            <input type="email" value={email} placeholder="Email" onChange={e => setEmail(e.target.value)} required />
            <input type="password" value={password} placeholder="Password" onChange={e => setPassword(e.target.value)} required />
            <input type="password" value={confirmPassword} placeholder="Confirmar password" onChange={e => setConfirmPassword(e.target.value)} required />
            <button type="submit">Registrarse</button>
        </form>
    );
}

export default RegisterView;