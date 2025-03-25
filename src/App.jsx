import { useDispatch, useSelector } from 'react-redux'
import ToDo from './components/ToDo/ToDo'

import './App.css'
import { useEffect } from 'react'
import { LoadingTHUNK } from './store/reducers/ToDoReducer'
import Add from './components/Add/Add'

function App() {
  const { todos, isFetching } = useSelector((store) => store.ToDoReducer)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(LoadingTHUNK())
  }, [dispatch])

  return (
    <>
      {
        isFetching ? <div class="loader"></div> :
          <div>
            <Add />
            {
              todos.map((el) => {
                return <ToDo key={el.id} todo={el} />
              })
            }
          </div>
      }
    </>
  )
}

export default App
