import React , { useState } from 'react'

const App = () => {

 const [todos , setTodos] = useState([
   {id : 1 , text : 'Learn React basics' , completed : false},
   {id : 2 , text : 'Practice useState hook' , completed : true}
 ])
 
 // todos type : Array

 // map() always used on Arrays



 const [newTask , setNewTask] = useState('') // take the value from input and store it

 
 const addTodo = () => {
  const newTodo = { id : Date.now()  , text : newTask ,  completed : false}
  
  // newTodo is an Object

  setTodos([...todos , newTodo]) // update our todos state
  setNewTask('')
 }


 const toggleTodo = (id) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo , completed: !todo.completed } : todo ))
 }

 console.log(todos);
 

//  const add = (a , b) => {
//    return a + b
//  }

//  add(8 , 9)
 

  return (
    <div className='mx-auto max-w-md mt-10 bg-white shadow-lg p-6'>
      <h2 className='text-2xl font-bold text-center mb-4'>TODO List</h2>
      {/* Input and Add Button */}
      <div className='flex gap-2 mb-4'>
         <input 
          type="text" 
          placeholder='Enter a task...' 
          className='flex-1 px-3 py-2 border border-gray-300 rounded' 
          value={newTask}
          onChange={e => setNewTask(e.target.value)}
         />
         <button onClick={addTodo} className='bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded cursor-pointer'>Add</button>
      </div>

      {/* Filter Buttons */}

      <div className='flex justify-center gap-2 mb-4'>
        <button className='bg-blue-500 text-white px-3 py-1 rounded'>All</button>
        <button className='bg-blue-500 text-white px-3 py-1 rounded'>Completed</button>
        <button className='bg-blue-500 text-white px-3 py-1 rounded'>Pending</button>
      </div>

      {/* Todo List */}
      <ul className='space-y-2'>
          {
            todos.map(todo => (
              <li 
                onClick={() => toggleTodo(todo.id)}
                className={`cursor-pointer px-3 py-2 shadow rounded 
                  ${todo.completed ? 'line-through text-gray bg-gray-100' : 'bg-gray-50 hover:bg-gray-100'}`}
              >
                 {todo.text}
              </li>
            ))
          }
      </ul>
    </div>
  )
}

export default App