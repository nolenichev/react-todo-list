import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import Context from '../contex'

function TodoItem({ todo, index, onChange }) {
    const { removeTodo } = useContext(Context)
    const classes = []

    if (todo.completed) {
        classes.push('todo-done')
    }

    return (
        <li>
            <label className={classes.join(' ')}>
                <input
                    type="checkbox"
                    onChange={() => onChange(todo.id)}
                    checked={todo.completed}
                />
                {/* <strong>{index + 1}.&nbsp;</strong> */}
                {todo.title}
            </label>

            <button onClick={() => removeTodo(todo.id)}>&times;</button>
        </li>
    )
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number,
    onChange: PropTypes.func.isRequired,
}

export default TodoItem
