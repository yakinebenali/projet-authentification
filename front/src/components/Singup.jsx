import { useState } from "react";
import axios from "axios";
import './Singup.css';


const Signup = () => {
	const [name,setFirstName] = useState('');
	const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState('');
	const Register= async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:3000/Register', {
                name:name,
                email: email,
                password: password
            });
            window.location = "/login";
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
    }


	return (
		<div className="signup_container">
			<div className="signup_form_container">
			
				<div className="right">
					<form className="form_container" onSubmit={Register}  >
						<h1 id="a">Create Account</h1>
						<input
							type="text"
							placeholder="First Name"
							name="firstName"
							value={name} onChange={(e) => setFirstName(e.target.value)} 
							required
							className="input"
						/>
					
						<input
							type="email"
							placeholder="Email"
							name="email"
							value={email} onChange={(e) => setEmail(e.target.value)}
							required
							className="input"
						/>
						<input
							type="password"
							placeholder="Password"
							name="password"
							value={password} onChange={(e) => setPassword(e.target.value)}
							required
							className="input"
						/>
						{msg && <div className="error_msg">{msg}</div>}
						<button type="submit" className="green_btn">
							creer
						</button>
						<a href="/login">
						<button type="button" className="white_btn">
							se connecter
						</button>
						</a>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Signup;
