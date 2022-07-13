import styles from './CreatedTask.module.css';
import {  Trash } from 'phosphor-react';
import { Task } from './Task';

export function CreatedTask(){
    return(
        <>
    <div className={styles.content}>
        <div className={styles.taskInfo}>
            <input className={styles.inputTask} type="radio"/>
            <p>Infames integerInteger urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
            <div>
            <Trash className={styles.trash} size={24} />
            </div>
            
        </div>

    </div>
    </>
    )
}