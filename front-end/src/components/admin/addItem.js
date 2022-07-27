import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addItem } from "../../redux/itemSlice";
import "./login.css"

const AddItem = ()=>{
    const [itemData , setItemData] = useState({name:"" , description:"" , image:null});
    let navigate = useNavigate();
    const handleChange = (e)=>{
        e.preventDefault()
        const value = e.target.value;
        setItemData({
          ...itemData,
          [e.target.name]: value
        })
    }

    const handleChangeImage=(e)=>{
        setItemData(
           { ...itemData,
            image: e.target.files[0]}
        )
    }

    const dispatch = useDispatch();
    const handleSubmit=(e)=>{



        e.preventDefault()
        const value = e.target.value;
        setItemData({
            ...itemData,
        })
        
        const formData = new FormData();
        formData.append('image', itemData.image)
        formData.append('name', itemData.name)
        formData.append('description', itemData.description)
        // console.log(itemData)
        dispatch(addItem(formData));

        navigate("/main", { replace: true });
    }

  


    return(
        <>
        <form onSubmit={handleSubmit}>    
            <label for="username">Name</label>
            <input type="text" 
            placeholder="Name"
            value={itemData.name}
                     name="name"
                     onChange={handleChange}/>
    
            <label for="password">Description</label>
            <input type="text" 
                    placeholder="Description"  
                    value={itemData.description}
                     onChange={handleChange}
                     name="description"/>
<label>Image</label>
                <input 
                    type="file" 
                    className="form-control" 
                    name="image" 
                    onChange={handleChangeImage}
                    multiple
                />
    
            <button type="submit">Add</button>
        </form>
     </>
    )
}

export default AddItem;