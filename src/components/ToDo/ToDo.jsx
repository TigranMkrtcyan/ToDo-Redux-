import { useState } from 'react';
import { useDispatch } from 'react-redux';
import style from './ToDo.module.css';
import { DeleteToDoTHUNK, UpdateToDoTHUNK } from '../../store/reducers/ToDoReducer';

const ToDo = ({ todo }) => {
    const dispatch = useDispatch();
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(todo.title);

    const handleDelete = (id) => {
        dispatch(DeleteToDoTHUNK(id));
    };

    const handleComplete = (todo) => {
        dispatch(UpdateToDoTHUNK(todo.id, { completed: !todo.completed }));
    };

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSave = () => {
        if (editText.trim()) {
            dispatch(UpdateToDoTHUNK(todo.id, { title: editText }));
            setIsEditing(false);
        }
    };

    const handleCancel = () => {
        setEditText(todo.title);
        setIsEditing(false);
    };

    return (
        <div className={style.todo}>
            <input 
                type="checkbox" 
                checked={todo.completed} 
                onChange={() => handleComplete(todo)} 
                disabled={isEditing}
            />
            {isEditing ? (
                <div className={style.editContainer}>
                    <input
                        type="text"
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)}
                        className={style.editInput}
                        autoFocus
                        onKeyPress={(e) => e.key === 'Enter' && handleSave()}/>
                    <div className={style.editButtons}>
                        <button className={style.saveButton} onClick={handleSave}>Save</button>
                        <button className={style.cancelButton} onClick={handleCancel}>Cancel</button>
                    </div>
                </div>
            ) : (
                <>
                    <span className={todo.completed ? style.line : style.text}>{todo.title}</span>
                    <div className={style.todoButtons}>
                        <button className={style.editButton} onClick={handleEdit}>Edit</button>
                        <button className={style.deleteButton} onClick={() => handleDelete(todo.id)}>Delete</button>
                    </div>
                </>
            )}
        </div>
    );
};

export default ToDo;