import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email || !password) {
            setError('All fields are required');
            return;
        }
        axios.post('http://localhost:3001/login', { email, password })
            .then(result => {
                console.log(result);
                if(result.data==="Success"){
                    navigate('/home');
                }
                else{
                    setError('Invalid Email or Password');
                }
                
            })
           .catch(err => {
                console.log(err);
                setError('Invalid email or password');
            });
    };

    return (
        <div
            className="container d-flex justify-content-center align-items-center vh-100"
            style={{
                background: 'linear-gradient(135deg,rgb(209, 211, 49),rgb(245, 82, 12))',
                height: '100vh',
                margin: '0',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <div className="card p-4 shadow-lg w-100" style={{ maxWidth: '400px', borderRadius: '10px', background: '#fff' }}>
                <h2 className="text-center mb-4">Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group mb-3">
                        <label htmlFor="email">Email address</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            autoComplete='off'

                        />
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            autoComplete='off'
                        />
                    </div>
                    <button type="submit" className="btn btn-primary w-100 mb-3">Login</button>
                    <Link to="/register" className="btn btn-secondary w-100">
                        Don't have an account? Register
                    </Link>
                </form>
            </div>
        </div>
    );
}

export default Login;