import { useDispatch } from 'react-redux';
import API from '../../api/api';
import style from './ToDo.module.css'
import { DeleteAC, UpdateTodoAC } from '../../store/reducers/ToDoReducer';

const ToDo = ({ todo }) => {
    const dispatch = useDispatch()

    const handleDelete = (id) => {
        API.deleteToDo(id)
            .then(() => dispatch(DeleteAC(id)))
    }

    const handleComplete = (todo) => {
        API.patchToDo(todo.id, { completed: !todo.completed })
            .then((res) => {
                dispatch(UpdateTodoAC(res.data))
            })
    }
    return (
        <div className={style.todo}>
            <input type="checkbox" checked={todo.completed} onChange={() => handleComplete(todo)} />
            <span className={todo.completed ? style.line : style.text}>{todo.title}</span>
            <button className={style.dtodoete} onClick={() => handleDelete(todo.id)}>Delete</button>
        </div>
    )
}

export default ToDo