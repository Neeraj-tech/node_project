import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Axios  from "axios";
import Header from "./Header";

const SignIn = function () {
     let [state, setState] = useState({email: "", password: ""});
     let [error, setError] = useState("")
     
     const navigate = useNavigate();

     let fetch = function(){
        Axios.post('http://localhost:4000/signin',{"email" : state.email, "password" : state.password})
        .then(success =>{
            alert('signin successful') 
            navigate('/');
        })
        .catch(err => {
            setError(err.response.data.message)
        })
     }
     
     const onChangeHandler = (event) => {
        setState({...state, [event.target.name] : event.target.value})
        setError("");
     }
     const handleSubmit = function(event) {
        event.preventDefault();
        fetch();
     }
    return <div>
        <Header/>
    <div className="container">
        <h2> Sign In Page</h2>
        <form onSubmit={handleSubmit} className = 'form-control needs-validation'>
            <div className = {error ? 'is-invalid' : ""}>
                <div className="mb-3">
                    <label htmlFor='email' className='form-label'> Email </label>
                    <input onChange= {evt  => onChangeHandler(evt)} type='email' name='email' className = 'form-control'></input>
                </div>
                <div className="mb-3">
                    <label htmlFor='password' className='form-label'> Password </label>
                    <input onChange= {evt  => onChangeHandler(evt)} type='password' name='password' className = "form-control"></input>
                </div>
            </div>
            <div className="invalid-feedback">{error} </div>
            <button type='submit' className="btn btn-primary mb-3"> submit </button>
        </form>
    </div>
    </div>
}

export default SignIn;