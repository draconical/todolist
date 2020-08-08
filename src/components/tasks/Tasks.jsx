import React from 'react';
import './Tasks.css';
import Task from './Task';

const Tasks = (props) => {
    let tasks = props.tasksData.map((task) => {
        return (
            <Task id={task.id} isDone={task.isDone}
                text={task.text} key={task.id}
                editTask={props.editTask} toggleIsDone={props.toggleIsDone}
                deleteTask={props.deleteTask}
                currentlyEditing={props.currentlyEditing}
                setEditId={props.setEditId} />
        )
    })

    return (
        <div className='tasks'>
            {tasks}
        </div>
    )
}

export default Tasks;