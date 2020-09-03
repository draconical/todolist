import React from 'react';
import './Input.css';

const Input = (props) => {
    let inputElement = React.createRef();

    let onNewTaskChange = () => {
        let newTaskText = inputElement.current.value;
        props.updateNewTaskText(newTaskText);
    }

    let addNewTask = () => {
        if (props.newTaskText !== '') {
            props.addTaskThunk(props.newTaskText);
        } else {
            window.alert('Введите текст, пожалуйста!')
        }
    }

    return (
        <div className='input'>
            <textarea ref={inputElement} onChange={onNewTaskChange} value={props.newTaskText} placeholder='Введите что-нибудь...' rows="3"></textarea>
            <button onClick={addNewTask}>Добавить</button>
        </div>
    )
}

export default Input;