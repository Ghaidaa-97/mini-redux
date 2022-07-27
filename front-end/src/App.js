import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {BrowserRouter ,Routes , Route} from 'react-router-dom'
import AddItem from './components/admin/addItem';
import Login from "./components/admin/login";
import Main from './components/admin/main';
import UpdateItem from './components/admin/updateItem';
import Home from "./components/home";
import Navbar from "./components/navbar";
import { getItems } from './redux/itemSlice';


function App() {
  const dispatch = useDispatch();
  const items = useSelector(state=>state);

  useEffect(() => {
    dispatch(getItems())
  }, [dispatch])

  
  return (
    <BrowserRouter >
    <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='login' element={<Login />}/>
          <Route path='main' element={<Main />}/>
          <Route path='add' element={<AddItem />}/>

          <Route path='update/:id' element={<UpdateItem />}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
