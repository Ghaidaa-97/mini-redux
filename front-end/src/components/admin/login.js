import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { login } from '../../redux/userSlice';
import './login.css'

const Login =()=>{
    
    let navigate = useNavigate();
    const user = useSelector(state=>state.user.isLogged);
    // console.log(user);
    const [userData , setUserData] =useState({email:"" , password:""}) 
    const dispatch = useDispatch();

    const handleChange = (e)=>{
        e.preventDefault()
        const value = e.target.value;
        setUserData({
          ...userData,
          [e.target.name]: value
        })
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        const value = e.target.value;
        setUserData({
            ...userData,
        })
        dispatch(login(userData));   
    }
    useEffect(() => {
        if(user){

            navigate("/", { replace: true });
        }else{
            navigate("/login", { replace: true });
        }
    }, [user,navigate])
    

    return(
 <>
    <div class="background">
        <div class="shape"></div>
        <div class="shape"></div>
    </div>
    <form onSubmit={handleSubmit}>
        <h3>Login Here</h3>

        <label for="username">Username</label>
        <input type="email" 
        placeholder="Email"
        name="email" 
        onChange={handleChange}/>

        <label for="password">Password</label>
        <input type="password" 
                name="password" 
                placeholder="Password"  
                onChange={handleChange}id="password"/>

        <button type="submit">Log In</button>
        <div class="social">
            <div class="go"><i class="fab fa-google"></i>  Google</div>
            <div class="fb"><i class="fab fa-facebook"></i>  Facebook</div>
        </div>
    </form>
 </>
    )
}

export default Login;