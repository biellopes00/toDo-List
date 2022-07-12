import styles from './Task.module.css';
import { IoAddCircleOutline } from "react-icons/io5";
import { CreatedTask } from './CreatedTask';

export function Task(){

    function createTask(){
        event.preventDefault();
        console.log('dale')
    }
    return(
        <form className={styles.task}>
            <input placeholder="add a new task"/>
            <button onClick={createTask}>
                create
                <p><IoAddCircleOutline/></p>
            </button>
            
        </form>
    )
}