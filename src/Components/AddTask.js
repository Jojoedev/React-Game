import { useState } from "react";
import classes from './style.module.css';


            
const AddTask = ({ onCreateTask }) =>{
    const [name, setName] = useState('')
    const [dayOfBirth, setBirth] = useState('')
    const [state, setState] = useState('')
    const [occupation, setOccupation] = useState('')
    const [married, setMarried] = useState('')
  
   
    //This is a better way of declaring multiple states in React than the above declaration of individual states.
 {/*    const [state1, setState1] = useState({

        name: '',
        dayOfBirth: '',
        state: '',
        occupation: '',
        married: ''

    })
*/}


const onSubmit=(e) =>{
    e.preventDefault()

if(!name || !dayOfBirth || !state || !occupation || !married){
    alert('Fill all data!')
    return
}

const id = Math.floor(Math.random() * 10000) + 1;
onCreateTask({ id, name, dayOfBirth, state, occupation, married })

        setName('')
        setBirth('')
        setState('')
        setOccupation('')
        setMarried('')

}




    return(
        <div>
            <form className ={classes.form} onSubmit = {onSubmit}>
               <div>
                    <label>Name</label>
                    <input type='text' value= {name} onChange={(e) => setName(e.target.value)} placeholder="Enter name" />
                </div>

                <div>
                    <label>Date of Birth</label>
                    <input type='text' value= {dayOfBirth} onChange={(e) => setBirth(e.target.value)} placeholder="Date of Birth" />
                </div>

                <div>
                    <label>State</label>
                    <input type='text' value= {state} onChange={(e) => setState(e.target.value)}placeholder="State" />
                </div>

                <div>
                    <label>Occupation</label>
                    <input type='text' value= {occupation} onChange={(e) => setOccupation(e.target.value)} placeholder="Occupation" />
                </div>

                <div>
                    <label>Married</label>
                    <input type='text'  value= {married} onChange={(e) => setMarried(e.target.value)} placeholder="Yes or No" />
                </div>
                <input className={classes.btn} type="submit" value='Submit' />
            </form>
                
        </div>

    );
}

export default AddTask;
