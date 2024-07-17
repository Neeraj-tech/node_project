import { useState } from "react";
import  Axios  from "axios";
import { useNavigate } from "react-router-dom";
import Header from './Header';

const SignUp = function () {
        const [state, setState] = useState({name: "", email: "", password: ""})
        const [error, setError] = useState({email: "", password: ""})
        
        const navigate = useNavigate();

        var fetch = function(){
           Axios.post('http://localhost:4000/signup',{"name" : state.name, "email" : state.email, "password" : state.password})
           .then(res => {
            alert(`${res.data.message}  Please sign in` );
            navigate('/signin')
           })
           .catch(err => {
            setError({...error,[err.response.data.feild]: err.response.data.message});
        })
        }
        
        const onChangeHandler = (event) => {
            setState({...state,[event.target.name]: event.target.value})
            setError({email: "", password: ""});
        }
                   
        const handleSubmit = function(event) {
           event.preventDefault();
           fetch();
        }
       return <div>
         <Header />
       <div className="container"> 
           <h2> Sign Up Page</h2>
           <form onSubmit = {handleSubmit} className = 'form-control needs-validation'>
            <div className="mb-3">
                <label htmlFor='name' className="form-label"> Name </label>
                <input onChange= {evt  => onChangeHandler(evt)} type='text' name='name' className="form-control"></input>
            </div>
            <div className="mb-3">
               <label htmlFor='email' className="form-label"> Email </label>
               <input onChange= {evt  => onChangeHandler(evt)} type='email' name='email' className={error.email ? "form-control is-invalid" : "form-control"}></input>
               <div className="invalid-feedback">{error.email} </div>
            </div>
            <div className="mb-3">
               <label htmlFor='password' className="form-label"> Password </label>
               <input onChange= {evt  => onChangeHandler(evt)} type='password' name='password' className= {error.password ? "form-control is-invalid" : "form-control"}></input>
               <span className="form-text"> Must be 5 character long. Must not contain spaces.</span>
               <div className="invalid-feedback">{error.password} </div>
            </div>
            <div className="mb-3">
               <button type='submit' className="btn btn-primary mb-3"> submit </button>
            </div>
           </form>
           </div>
           </div>
   }

export default SignUp;