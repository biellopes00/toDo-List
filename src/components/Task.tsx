import styles from './Task.module.css';
import { IoAddCircleOutline } from "react-icons/io5";
import { FormEvent, useState } from 'react';
import { CreatedTask } from './CreatedTask';


const task = [
    1,
    2,
    3
]

export function Task(){
   
    return(
        <div className={styles.content}>
        <form className={styles.task}>
            <textarea placeholder="add a new task" />
            <button>
                create
                <p><IoAddCircleOutline /></p>
            </button>
        </form>
        <div className={styles.resume}>
            <p className={styles.createdTask}>Tarefas criadas</p>
            <p className={styles.finishedTask}>Tarefas concluídas</p>
        </div>
        {task.map(task => {
            <CreatedTask />
        })}
        </div>
        
    )
    
}