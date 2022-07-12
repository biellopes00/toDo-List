import styles from './CreatedTask.module.css';
import {  Trash } from 'phosphor-react';

export function CreatedTask(){
    return(
    <div className={styles.content}>
        <div className={styles.resume}>
            <p className={styles.createdTask}>Tarefas criadas</p>
            <p className={styles.finishedTask}>Tarefas concluídas</p>
        </div>
        <div className={styles.taskInfo}>
            <input className={styles.inputTask} type="radio"/>
            <p>Infames integerInteger urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
            <Trash className={styles.trash} size={24}/>
            
        </div>

    </div>
    )
}