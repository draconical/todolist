let EDIT_TASK = 'EDIT_TASK'
let TOGGLE_IS_DONE = 'TOGGLE_IS_DONE'
let UPDATE_NEW_TASK_TEXT = 'UPDATE_NEW_TASK_TEXT'
let ADD_NEW_TASK = 'ADD_NEW_TASK'
let DELETE_TASK = 'DELETE_TASK'
let SET_DATA = 'SET_DATA'
let SET_EDIT_ID = 'SET_EDIT_ID'
let SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
let SET_TOTAL_TASKS_LENGTH = 'SET_TOTAL_TASKS_LENGTH'

let initialState = {
    tasksData: [],
    newTaskText: '',
    currentlyEditing: null,
    tasksPerPage: 5,
    totalTasksLength: null,
    currentPage: 1
}

const tasksReducer = (state = initialState, action) => {
    switch (action.type) {
        case EDIT_TASK:
            return {
                ...state,
                tasksData: state.tasksData.map((task) => {
                    if (task.id === action.id) {
                        return { ...task, text: action.text }
                    }
                    return task;
                })
            }
        case TOGGLE_IS_DONE:
            return {
                ...state,
                tasksData: state.tasksData.map((task) => {
                    if (task.id === action.id && task.isDone === false) {
                        return { ...task, isDone: true }
                    } else if (task.id === action.id && task.isDone === true) {
                        return { ...task, isDone: false }
                    }
                    return task;
                })
            }
        case UPDATE_NEW_TASK_TEXT: {
            return {
                ...state,
                newTaskText: action.newTaskText
            }
        }
        case ADD_NEW_TASK:
            return {
                ...state,
                tasksData: [...state.tasksData, {
                    id: state.tasksData.length > 0 ? state.tasksData.pop().id + 1 : state.tasksData.length + 1,
                    isDone: false,
                    text: state.newTaskText
                }],
                newTaskText: ''
            }
        case DELETE_TASK:
            return {
                ...state,
                tasksData: state.tasksData.filter(task => task.id !== action.id)
            }
        case SET_DATA:
            return {
                ...state,
                tasksData: action.data
            }
        case SET_EDIT_ID:
            return {
                ...state,
                currentlyEditing: action.id
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.p
            }
        case SET_TOTAL_TASKS_LENGTH:
            return {
                ...state,
                totalTasksLength: action.num
            }
        default:
            return state;
    }
}

export const editTask = (id, text) => ({ type: EDIT_TASK, id, text })
export const toggleIsDone = (id) => ({ type: TOGGLE_IS_DONE, id })
export const updateNewTaskText = (newTaskText) => ({ type: UPDATE_NEW_TASK_TEXT, newTaskText })
export const addNewTask = (newTaskText) => ({ type: ADD_NEW_TASK, newTaskText })
export const deleteTask = (id) => ({ type: DELETE_TASK, id })
export const setData = (data) => ({ type: SET_DATA, data })
export const setEditId = (id) => ({ type: SET_EDIT_ID, id })
export const setCurrentPage = (p) => ({ type: SET_CURRENT_PAGE, p })
export const setTotalTasksLength = (num) => ({ type: SET_TOTAL_TASKS_LENGTH, num })

export default tasksReducer;