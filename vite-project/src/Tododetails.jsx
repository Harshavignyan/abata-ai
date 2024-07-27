import React, {useState} from 'react'
import Tododisplay from './Tododisplay';

function Tododetails(){

    const [newTodo, setNewTodo] = useState([]);
    const [inputTodo, setInputTodo] = useState("")

    function addtodo(){
        // console.log(inputTodo)
        setNewTodo(prevTodos => [...prevTodos, inputTodo]);
        setInputTodo("");
        // console.log(newTodo)
    }
    
    function deltodo(index){
        var temp = newTodo.filter((_,i)=> {
            i !== index
        })
        setNewTodo(temp);
    }
    return(
        <div>
            <h1>TodoList: </h1>
            <input className="border border-2" type='text' onChange={(e) => {setInputTodo(e.target.value)}} />
            <button className="border border-1" onClick={addtodo}>Add Todo</button>
            <ul>
                {
                    newTodo.map((item,i) => {
                        return <Tododisplay key={i} data={item} del={()=>{deltodo(i)}}/>
                    })
                }
            </ul>
        </div>
    )
}

export default Tododetails;


