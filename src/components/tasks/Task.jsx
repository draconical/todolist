import React from 'react';

const Task = (props) => {
    let activateEditMode = (id) => {
        props.setEditId(id)
    }

    let deactivateEditMode = () => {
        props.setEditId(null)
    }

    const editElement = React.createRef()
    let onTaskEdit = () => {
        let text = editElement.current.value
        props.editTask(props.id, text)
    }

    return (
        <div className='tasks__item'>
            {props.currentlyEditing !== props.id
                ? <span onClick={() => props.toggleIsDone(props.id)} className={props.isDone === true ? 'done' : null}>{props.text}</span>
                : <textarea ref={editElement} onChange={onTaskEdit.bind(this)} rows={3} value={props.text}></textarea>}
            <div>
                {props.currentlyEditing !== props.id
                    ? <button onClick={() => activateEditMode(props.id)} className='tasks__editBtn'></button>
                    : <button onClick={() => deactivateEditMode()} className='tasks__editBtn editable'></button>}
            </div>
            {props.currentlyEditing !== props.id
                ? null
                : <button onClick={() => props.deleteTask(props.id)} className='tasks__delBtn'></button>}
        </div>
    )
}

export default Task;