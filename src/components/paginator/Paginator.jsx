import React from 'react';
import './Paginator.css';

const Paginator = (props) => {
    let onPageChange = (p) => {
        props.setCurrentPage(p)
    }

    return (
        <div className="tasks__paginator">
            {props.currentPage === 1
                ? <button className='disabled' disabled>{'<'}</button>
                : <button onClick={() => onPageChange(props.currentPage - 1)}>{'<'}</button>}
            <span>{props.currentPage}</span>
            {props.currentPage === props.pages.length
                ? <button className='disabled' disabled>{'>'}</button>
                : <button onClick={() => onPageChange(props.currentPage + 1)}>{'>'}</button>}
        </div>
    )
}

export default Paginator;