import React from 'react'
import PropTypes from 'prop-types'

function useInputValue(defaultValue) { 
    const [value, setValue] = React.useState(defaultValue)

    return {
        bind: {
            value,
            onChange: event => setValue(event.target.value),
            placeholder: 'New Todo'
        },
        clear: () => setValue(''),
        value: () => value

    }
}

function AddTodo({ onCreate }) {
    const input = useInputValue('')

    function submitHandler(event) {
        event.preventDefault()

        if (input.value().trim()) {
            onCreate(input.value())
            input.clear()
        }
    } 

    return (
        <form className="todo-form" onSubmit={submitHandler}>
            <input {...input.bind} />
            <button type="submit">Add</button>
        </form>
    )
}

AddTodo.propTypes = {
    onCreate: PropTypes.func.isRequired,
}

export default AddTodo
