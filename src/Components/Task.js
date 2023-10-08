import {FaTimesCircle} from 'react-icons/fa'
import classes from './style.module.css';

const Task = ({person, onDelete}) =>{
    return(
        <div className="task">
           <h4> Name: {person.name} <FaTimesCircle className={classes.icon} onClick={() => onDelete(person.id)} /></h4>
           <p>State: {person.state}</p>
           <p>Occupation: {person.occupation}</p>
           <p>Married: {person.married}</p>
           
        </div>
    );
}

export default Task;