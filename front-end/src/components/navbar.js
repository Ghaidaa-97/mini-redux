import { useDispatch, useSelector } from 'react-redux';
import {NavLink, useNavigate} from 'react-router-dom';
import { logout } from '../redux/userSlice';

const Navbar = ()=>{
    let navigate = useNavigate();
    const status = useSelector(state=>state.user.isLogged);
    const dispatch = useDispatch();
    const handleLogout = ()=>{
        dispatch(logout())
        navigate('/' , {replace:true})
    }

    return(

        <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor:'#1845ad'}} >
            <div className="container-fluid">
                
                <button className="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <i className="fas fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink className="nav-link" aria-current="page" to="/" style={{marginLeft:50}}><i class="fa fa-home"></i>Home</NavLink>
                    </li>
                    {status && (
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/main"><i class="fa fa-dashboard" style={{marginLeft:50}}></i> Dashboard</NavLink>
                    </li>
    
                    )}
                    {status && (
                    <li className="nav-item" >
                        <NavLink className="nav-link" onClick={handleLogout} to="/" style={{marginLeft:1100}}><i class="fa fa-user"></i> Signout</NavLink>
                    </li>
    
                    )}
                    {!status && (
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/login" style={{marginLeft:1200}}><i class="fa fa-user"></i> Signin</NavLink>
                    </li>

                    )}
                    
                </ul>
                </div>
            </div>
        </nav>


    )
}

export default Navbar;