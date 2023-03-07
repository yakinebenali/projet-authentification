
import React from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import { Fragment } from "react";
import { BrowserRouter,Route,Redirect} from "react-router-dom";
import './App.css'





function App() {
	const user = localStorage.getItem("token");
	return (
    
    <Fragment>
      <BrowserRouter>
      <Route  path="/Register" ><Register/></Route>
		 	<Route path="/login" ><Login/></Route>
			{! user && <Route  exact path="/" > <Redirect  to="/login" /></Route>}
      </BrowserRouter>
    </Fragment>

	);
}

export default App;