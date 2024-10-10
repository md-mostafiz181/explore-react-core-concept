
import './App.css'
import Todo from './Todo'

function App() {
  

  return (
    <>

      <h1>Vite + React</h1>
      <Todo task="read more document" isDone={true}></Todo>
      <Todo task="read about react core concept" isDone={false}></Todo>
      <Todo task="read more about JSX" isDone={true}></Todo>
      
      
    </>
  )
}

export default App
