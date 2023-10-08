import Header from "./Header";
import { useState } from "react";
import Task from  './Task';
import AddTask from "./AddTask";
import Button from "./Button";
import Backdrop  from "./Backdrop";

const Tasks = () =>{

    const [tasks, setTask] = useState([
        {
            id: 1,
            name: 'Pete Edochie',
            dayOfBirth: 'Feb 12 1960',
            state: 'Anambra',
            occupation: 'Actor',
            married: 'yes',
        },
        {
            id: 2,
            name: 'Henry Okagbue',
            dayOfBirth: 'March 23 1970',
            state: 'Lagos',
            occupation: 'Football Coach',
            married: 'no',
        },
           {
            id: 3,
            name: 'Sullivan Chime',
            dayOfBirth: 'Dec 11 1977',
            state: 'Enugu',  
            occupation: 'Politician',
            married: 'yes',
        }
    ] )

    const DeleteTask = (id) =>{
        setTask(tasks.filter((task) => task.id !== id));
    }

    const CreateBio = (task) =>{
        
        //const id = Math.floor(Math.random() * 10000) + 1
        //const newBioData = {id, ...task}
        
        //console.log(newBioData)
        console.log(task)
        setTask([...tasks, task])
    }  
    const [Text, setText] = useState(true)
   
    const [status, setStatus] = useState(false)
    const [addBtn, setAddBtn] = useState(false)

    const onChange = () =>{
        setText(!Text)
        setStatus(!status)
        setAddBtn(!addBtn)
    }
    
    
    return(
        <div>
        < Header />
        <Backdrop status = {status}  text = {status} />
        <Button colorStyle ={Text} onChangeBtn = {onChange} textTwo = {addBtn}   />
               
       {!Text && <AddTask  onCreateTask = {CreateBio} /> } 
            
        {tasks.length > 0 ?
        tasks.map((person) =>(
        
         <Task key={person.id}
            person = {person} onDelete = {DeleteTask}  />
        ))
        
        : <p>No data to display! </p>
        }
        </div>
    );
}

export default Tasks;