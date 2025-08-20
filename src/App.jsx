import React , { useState } from 'react'

const App = () => {


 // Load todos from localStorage only once (initial State)

 const [todos , setTodos] = useState(() => {
   const savedTodos = localStorage.getItem('todos')
   return savedTodos ? JSON.parse(savedTodos) : []
 })
 
 // todos type : Array

 // map() always used on Arrays



 const [newTask , setNewTask] = useState('') // take the value from input and store it

 const [filter , setFilter] = useState('all')


 // Helper function to update todos and save to localStorage
const updateTodos = (updatedTodos) => {
  setTodos(updatedTodos)
  localStorage.setItem('todos' , JSON.stringify(updatedTodos))
}

 
 const addTodo = () => {
  const newTodo = { id : Date.now()  , text : newTask ,  completed : false}
  
  // newTodo is an Object

  updateTodos([...todos , newTodo]) // update our todos state and save in the localStorage
  setNewTask('')
 }


 const toggleTodo = (id) => {
  const updatedTodo = todos.map(todo => todo.id === id ? { ...todo , completed: !todo.completed } : todo )
  updateTodos(updatedTodo)
 }

 

//  const add = (a , b) => {
//    return a + b
//  }

//  add(8 , 9)
 
console.log(filter);

const filteredTodos = todos.filter(todo => {
  if (filter === 'completed') return todo.completed
  if (filter === 'pending') return !todo.completed
  return true
})

console.log(filteredTodos);




  return (
    <div className="mx-auto max-w-md mt-10 bg-white shadow-lg p-6">
      <h2 className="text-2xl font-bold text-center mb-4">TODO List</h2>
      {/* Input and Add Button */}
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Enter a task..."
          className="flex-1 px-3 py-2 border border-gray-300 rounded"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button
          onClick={addTodo}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded cursor-pointer"
        >
          Add
        </button>
      </div>

      {/* Filter Buttons */}

      <div className="flex justify-center gap-2 mb-4">
        <button
          onClick={() => setFilter("all")}
          className={`${filter === 'all' ? 'bg-gray-200 text-black' : 'bg-blue-500 text-white'} px-3 py-1 cursor-pointer rounded`}
        >
          All
        </button>
        <button
          onClick={() => setFilter("completed")}
          className={`${filter === 'completed' ? 'bg-gray-200 text-black' : 'bg-blue-500 text-white'} px-3 py-1 cursor-pointer rounded`}
        >
          Completed
        </button>
        <button
          onClick={() => setFilter("pending")}
          className={`${filter === 'pending' ? 'bg-gray-200 text-black' : 'bg-blue-500 text-white'} px-3 py-1 cursor-pointer rounded`}
        >
          Pending
        </button>
      </div>

      {/* Todo List */}
      <ul className="space-y-2">
        {filteredTodos.map((todo) => (
          <li
            key={todo.id}
            onClick={() => toggleTodo(todo.id)}
            className={`cursor-pointer px-3 py-2 shadow rounded 
                  ${
                    todo.completed
                      ? "line-through text-gray bg-gray-100"
                      : "bg-gray-50 hover:bg-gray-100"
                  }`}
          >
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App