import TodoItem from './TodoItem'
import PropTypes from 'prop-types'

function TodoList(props) {
    
    return (
        <ul className="todo-list">

            {props.todos.map((todo, index) => (
                <TodoItem todo={todo} key={todo.id} index={index} onChange={props.onToggle} />
            ))}
        </ul>
    )
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired,
    onToggle: PropTypes.func.isRequired
}

export default TodoList
