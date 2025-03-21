import { useDispatch, useSelector } from 'react-redux'
import style from './Add.module.css'
import { AddTodoItemAC, ChangeTextAC } from '../../store/reducers/ToDoReducer'
import API from '../../api/api'

const Add = () => {
    const { text } = useSelector((store) => store.ToDoReducer)
    const dispatch = useDispatch()

    const handleAdd = (text) => {
        const newTodo = {
            title: text,
            completed: false,
        }

        API.createToDo(newTodo)
            .then((res) => {
                dispatch(AddTodoItemAC(res.data))
                dispatch(ChangeTextAC(''))
            })
    }

    return (
        <div className={style.addContainer}>
            <input type="text" value={text} className={style.addInput} onChange={(e) => dispatch(ChangeTextAC(e.target.value))} />
            <button onClick={() => handleAdd(text)} className={style.addButton}>Add</button>
        </div>
    )
}

export default Add