import React from 'react'
// import { PropTypes } from 'prop-types';

export const TodoListItem = ({ todo, i, handleDelete, handleToggle }) => {
    // console.log('TodoListItem');
    return (
        <li className="list-group-item">
            <p className={ todo.done ? 'complete' : '' } onClick={ () => handleToggle( todo.id ) }>
                { i } . -{ todo.desc }
            </p>
            <button className="btn btn-danger" onClick={ () => handleDelete( todo.id ) }>Borrar</button>
        </li>
    )
}


// TodoListItem.propTypes = {
//     todo: PropTypes.object.isRequired,
//     i: PropTypes.number.isRequired,
//     handleDelete: PropTypes.function.isRequired,
//     handleToggle: PropTypes.function.isRequired
// }