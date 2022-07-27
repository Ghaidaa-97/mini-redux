import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { deleteItem } from "../../redux/itemSlice";


const Main = ()=>{
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const allItems = useSelector((state)=>state.item.items);
    const showItems = allItems.map(item=>{
    return(
    <tr key={item.id}>
        <th className="p-3 text-center align-middle">{item.id}</th>
        <td className="p-3 text-center align-middle"><img src={ "http://localhost:8000/uploads/" + item.image } width="120px" /></td>
        <td className="p-3 text-center align-middle">{item.name}</td>
        <td className="p-3 text-center align-middle">{item.description}</td>
        <td className="p-3 text-center align-middle">
            <Link to={`/update/${item.id}`}  className="btn btn-warning mx-2">Update</Link>
            <Link onClick={()=>{
                dispatch(deleteItem(item.id))
                navigate('/main' , {replace:true})
            }
            } to='/main' className="btn btn-danger mx-2">Delete</Link>
        </td>
    </tr>
    )

    })
    return(
<div className='container m-5'>
    <table className="table">
            <tr>
                <th className="p-3 text-center">Id</th>
                <th className="p-3 text-center">Image</th>
                <th className="p-3 text-center">Name</th>
                <th className="p-3 text-center">Description</th>
                <th className="p-3 text-center"></th>
            </tr>
        <tbody>
        {showItems}

        </tbody>
    </table><br/>
    <NavLink to='/add' className="btn btn-success my-1" style={{marginLeft:1220}}>Add</NavLink>

</div>
    )
}

export default Main;