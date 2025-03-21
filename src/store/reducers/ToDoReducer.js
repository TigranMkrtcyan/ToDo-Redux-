import API from "../../api/api"

const ADD = 'ADD'
const ADD_TODO = 'ADD_TODOS';
const UPDATE_TODO = 'UPDATE_TODO';
const DELETE_TODO = 'DELETE_TODO';
const FETCHING = 'FETCHING'
const CHANGE_TEXT = 'CHANGE_TEXT'

const initState = {
    todos: [],
    text: '',
    isFetching: false
}

const ToDoReducer = (state = initState, action) => {
    switch (action.type) {
        case ADD:
            return {
                ...state,
                todos: action.payload
            };
        case FETCHING:
            return {
                ...state,
                isFetching: action.payload
            }
        case CHANGE_TEXT:
            return {
                ...state,
                text: action.payload
            }
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload]
            };
        case UPDATE_TODO:
            return {
                ...state,
                todos: state.todos.map(todo =>
                    todo.id === action.payload.id ? action.payload : todo
                )
            };
        case DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload)
            };
        default:
            return state
    }
}

export const AddToDOAC = (todo) => ({ type: ADD, payload: todo })
export const LoadingAC = (bool) => ({ type: FETCHING, payload: bool })
export const DeleteAC = (id) => ({ type: DELETE_TODO, payload: id })
export const UpdateTodoAC = (todo) => ({ type: UPDATE_TODO, payload: todo })
export const AddTodoItemAC = (newTodo) => ({ type: ADD_TODO, payload: newTodo })
export const ChangeTextAC = (e) => ({ type: CHANGE_TEXT, payload: e })

export const LoadingTHUNK = () => {
    return (dispatch) => {
        dispatch(LoadingAC(true))
        API.getToDo()
            .then((res) => {
                dispatch(AddToDOAC(res.data))
                dispatch(LoadingAC(false))
            })
    }
}
export default ToDoReducer

