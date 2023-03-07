import { useState } from "react";
import axios from "axios";

import "./login.css";



const Login = () => {
	const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState('');

    const Auth = async (e) => {
        e.preventDefault();
        try {
		const { data: res } = await axios.post("http://localhost:3000/Login", {
                email: email,
                password: password
            });
                   
				localStorage.setItem("token",res.data);
				 
				window.location = "/";
        } catch (error) {
            if  (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			)  {
                setMsg(error.response.data.msg);
            }
        }
    }


	return (
		
		<div className="login_container">
			<div className="login_form_container">
				<div className="right">
					<form  onSubmit={Login}  className="form_container" >
						<h1 id="a">Login</h1>
						<input
							type="email"
							placeholder="Email"
							name="email"
							value={email} 
							onChange={(e) => setEmail(e.target.value)}
							required
							className="input"
						/>
						<input
							type="password"
							placeholder="Password"
							name="password"
							value={password} 
							onChange={(e) => setPassword(e.target.value)}
							required
							className="input"
						/>
						{msg && <div className="error_msg">{msg}</div>}
						<button type="submit" className="green_btn">
						se connecter
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Login;
