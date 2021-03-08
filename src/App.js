import React from 'react'
import TodoList from './Todo/TodoList'
import Context from './contex'
import Loader from './Loader'
import Modal from './Modal/Modal'
import { useEffect } from 'react'

const AddTodo = React.lazy(() => import('./Todo/AddToo'))

function App() {
    const [todos, setTodos] = React.useState([])
    const [loading, setLoading] = React.useState(true)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts?_limit=6')
            .then((response) => response.json())
            .then((todos) => {
                setTimeout(() => {
                    setTodos(todos)
                    setLoading(false)
                }, 1000)
            })
    }, [])

    function toggleTodo(id) {
        setTodos(
            todos.map((todo) => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                console.log(todo.completed)
                return todo
            })
        )
    }

    function removeTodo(id) {
        setTodos(todos.filter((todo) => todo.id !== id))
    }

    function addTodo(title) {
        setTodos(
            todos.concat([
                {
                    title,
                    completed: false,
                    id: Date.now(),
                },
            ])
        )
    }

    return (
        <Context.Provider value={{ removeTodo }}>
            <div className="wrapper">
                <div className="title">
                    <h1>Todo List</h1>
                    <div>
                        <Modal />
                    </div>
                </div>

                <React.Suspense fallback={<p>Loading...</p>}>
                    <AddTodo onCreate={addTodo} />
                </React.Suspense>

                {loading && <Loader />}
                {todos.length ? (
                    <TodoList todos={todos} onToggle={toggleTodo} />
                ) : loading ? null : (
                    <p>You have no todos :(</p>
                )}
            </div>
        </Context.Provider>
    )
}

export default App
