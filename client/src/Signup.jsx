import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Signup() {
    const [isSignup, setIsSignup] = useState(true);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [mobileNo, setMobileNo] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !email || !password || !mobileNo) {
            setError('All fields are required');
            return;
        }
        axios.post('https://authentication-office-workapi.vercel.app/register', { name, email, password, mobileNo })
            .then(result => {
                console.log(result);
                navigate('/login');
            })
            .catch(err => {
                console.log(err);
                setError('Registration failed');
            });
    };

    const toggleForm = () => {
        setIsSignup(!isSignup);
    };

    return (
        <div
            className="container d-flex justify-content-center align-items-center vh-100"
            style={{
                background: 'linear-gradient(135deg,rgb(146, 232, 225),rgba(112, 2, 247, 0.85))',
                height: '100vh',
                margin: '0',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <div className="card p-4 shadow-lg w-100" style={{ maxWidth: '400px', borderRadius: '10px', background: '#fff' }}>
                <h2 className="text-center mb-4">{isSignup ? 'Register' : 'Login'}</h2>
                <form onSubmit={handleSubmit}>
                    {error && <div className="alert alert-danger">{error}</div>}
                    {isSignup && (
                        <div className="form-group mb-3">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                placeholder="Enter your name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                autoComplete='off'
                            />
                        </div>
                    )}
                    <div className="form-group mb-3">
                        <label htmlFor="mobile">Mobile Number</label>
                        <input
                            type="text"
                            className="form-control"
                            id="mobile"
                            placeholder="Enter your mobile number"
                            value={mobileNo}
                            onChange={(e) => setMobileNo(e.target.value)}
                            autoComplete='off'
                        />
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="email">Email address</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            autoComplete="off"
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
                            autoComplete="off"
                        />
                    </div>
                    <button type="submit" className="btn btn-primary w-100 mb-3">
                        {isSignup ? 'Register' : 'Login'}
                    </button>
                    <Link to="/login" className="btn btn-secondary w-100" onClick={toggleForm}>
                        {isSignup ? 'Already have an account? Login' : "Don't have an account? Register"}
                    </Link>
                </form>
            </div>
        </div>
    );
}

export default Signup;
