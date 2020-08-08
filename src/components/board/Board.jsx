import React from 'react';
import './Board.css';
import TasksContainer from '../tasks/TasksContainer';
import InputContainer from '../input/InputContainer';

const Board = (props) => {
    return (
        <div className='board'>
            <div className='board__header'>
                <span className='board__title'>Задачи</span>
            </div>
            <TasksContainer />
            <InputContainer />
        </div>
    )
}

export default Board;