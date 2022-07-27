import { useSelector } from 'react-redux';
import {NavLink} from 'react-router-dom';


const Home = ()=>{
const allItems = useSelector((state)=>state.item.items);
const showItems = allItems.map((item)=>{
    return(
    <div className="card col-2 p-0 mx-3 my-1" key={item.id}  style={{border:'1px solid #ff512f'}}>
        <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="dark">
            <img src={ "http://localhost:8000/uploads/" + item.image } className="img-fluid"/>
            <hr/>
        </div>
        <div className="card-body">
            <h5 className="card-title">{item.name}</h5>
            <p className="card-text">{item.description}</p>
        </div>
    </div>
    )
});

    return(
    <div className="row container-fluid m-3">
        {showItems} 
    </div>
    )
}

export default Home;