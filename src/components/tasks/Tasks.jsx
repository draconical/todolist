import React from 'react';
import './Tasks.css';
import Task from './Task';
import Paginator from '../paginator/Paginator';

const Tasks = (props) => {
    let pagesCount = Math.ceil(props.totalTasksLength/props.tasksPerPage)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let tasks = props.tasksData.slice((props.currentPage - 1) * 5, props.currentPage * props.tasksPerPage).map((task) => {
        return (
            <Task id={task.id} isDone={task.isDone}
                text={task.text} key={task.id}
                currentlyEditing={props.currentlyEditing}
                setEditId={props.setEditId} deleteTaskThunk={props.deleteTaskThunk}
                updateTaskThunk={props.updateTaskThunk} toggleIsDoneThunk={props.toggleIsDoneThunk}/>
        )
    })

    return (
        <div className='tasks'>
            {tasks}
            <Paginator currentPage={props.currentPage} pages={pages} setCurrentPage={props.setCurrentPage}/>
        </div>
    )
}

export default Tasks;