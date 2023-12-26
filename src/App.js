import { useReducer, useRef } from 'react'

const initState = {
  job: '',
  jobs: []
}

const SET_TODO = 'set_todo'
const ADD_JOB = 'add_todo'
const DELETE_JOB = 'delete_todo'

const setJob = (payload) => {
  return {
    type: SET_TODO,
    payload
  }
}

const addJob = (payload) => {
  return {
    type: ADD_JOB,
    payload
  }
}

const deleteJob = (payload) => {
  return {
    type: DELETE_JOB,
    payload
  }
}

const reducer = (state, action) => {
  switch(action.type){
    case SET_TODO:
      return {
        ...state,
        job: action.payload
      }
    
    case ADD_JOB:
      return {
        jobs: [...state.jobs, action.payload],
        job: ''
      }

    case DELETE_JOB:
      return {
        jobs: state.jobs.filter(prev => prev !== action.payload),
        job: ''
      }
    default:
      console.log('invalid state')
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initState)

  const inputRef = useRef()

  const handleClick = () => {
    dispatch(addJob(state.job))
    inputRef.current.focus()
  }

  const handleDelete = (job) => {
    dispatch(deleteJob(job))
    inputRef.current.focus()
  }

  return (
    <div>
      <h1>todo</h1>
      <input 
        ref={inputRef}
         value={state.job}
         placeholder='enter load....'
         onChange={e => dispatch(setJob(e.target.value))}
      />
      <ul>
        {
          state.jobs.map((value, index) => (
            <li key={index}>{value} 
               <span onClick={() => handleDelete(value)} >&times;</span>
            </li>
          ))
        }
      </ul>

      <button 
        onClick={handleClick} 
      >add</button>
        
    </div>
  )
}

export default App;
