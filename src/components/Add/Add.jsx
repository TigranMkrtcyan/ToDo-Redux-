import { useDispatch, useSelector } from 'react-redux'
import style from './Add.module.css'
import { ChangeTextAC, CreateToDoTHUNK } from '../../store/reducers/ToDoReducer'

const Add = () => {
    const { text, isFetching } = useSelector((store) => store.ToDoReducer)
    const dispatch = useDispatch()

    const handleAdd = (text) => {
        if (!text.trim()) {
            return
        } else {
            const newTodo = {
                id: new Date().getDate().toString(),
                title: text,
                completed: false,
            }

            dispatch(CreateToDoTHUNK(newTodo));
            dispatch(ChangeTextAC(''));
        }

    }

    return (
        <div className={style.addContainer}>
            <input
                type="text"
                value={text}
                className={style.addInput}
                onChange={(e) => dispatch(ChangeTextAC(e.target.value))}
                onKeyPress={(e) => e.key === 'Enter' && handleAdd(text)}
            />
            <button
                onClick={() => handleAdd(text)}
                className={style.addButton}
            >
                Add
            </button>
        </div>
    )
}

export default Add