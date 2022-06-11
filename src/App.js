import logo from './logo.svg';
import './App.css';
import MyModal from './components/MyModal';
import $ from 'jquery';
import { useEffect, useState } from 'react';
function App() {
  const searchText=(event)=>{
    var text=event.target.value;
    console.log(text);
  }

  const windowClose=(isRefresh)=>{
    console.log("isRefresh"+isRefresh);
  }
  const fetchData=()=>{
    
  }
  useEffect(()=>{

  },[]);
  const [todo,setTodo] = useState();
  return (
    <div className="App">
      <div className='header container'>
        <div className="row" style={{marginTop:"10px"}}>
          <div className="col-md-8 mx-auto" >
          <input type='text' placeholder='Search By title' className='form-control' onChange={searchText} />
          </div>
        </div>
        <div className="row" style={{marginTop:"10px"}}>
          <div className='col-md-6 mx-auto'>
              <button type='submit' className='btn btn-success' data-toggle="modal" data-target="#modelId">Add Todo</button>
          </div>
        </div>
        <MyModal data={todo} window={windowClose}/>
      </div>
    </div>
  );
}

export default App;
