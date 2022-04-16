import { useState } from "react";

function App() {
  const [inputlist,setinputlist] = useState("");
  const [ToDo,setToDo] = useState([]);
  const [editState,setEditState] = useState();
  


    
  const editTodo = (id) => {
    setinputlist(ToDo[id])
    setEditState(id)
    }


  const ToDoEvents = (e) =>{
   setinputlist(e.target.value)
  };


  const AddBtn = () => {
    
    if(editState){
      ToDo[editState] = inputlist
      setToDo([...ToDo])
    }
    else{
      setToDo([...ToDo,inputlist])
    }

    setEditState()
    setinputlist("")
  }
  
  function handleFunc(index){
    const arry = [...ToDo]
    arry.splice(index,1)
    setToDo(arry)
  }
  
  function deleteAll(){
    setToDo([])
  }
  return (
    <div className ='main-div'>
      <div className ='center-div'>



<br/>
<h1>ToDo List</h1>
<br/>
<input type = "text" placeholder='Add ToDo' value={inputlist} onChange={ToDoEvents}></input>
<button onClick={AddBtn}>{editState?'Update':'Add'}</button>
  <button onClick={deleteAll} >All Delete</button>
<ul>
 {ToDo.map((ToDoVal , index) => {
   return <> <div><li  key = {index}> {ToDoVal} </li> <button
     onClick={(index) => handleFunc(index) 
    }>Delete ToDo</button><button onClick={()=>editTodo(index)}>Edit ToDo</button></div> </>
  })}
</ul>
      </div>
    </div>
    
  );
}

export default App;
