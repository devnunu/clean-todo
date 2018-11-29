// model
import { ActionType } from '../../model/Common';
import Todo, { TodoState } from '../../model/Todo';

// action

const SET_TODO_LIST = 'SET_TODO_LIST';
const SET_TODO_TIMELINE = 'SET_TODO_TIMELINE';
const ADD_TODO = 'ADD_TODO';
const UPDATE_TODO = 'UPDATE_TODO';
const REMOVE_TODO = 'REMOVE_TODO';

// action creater

const addTodo = (todo: Todo) => {
  return {
    type: ADD_TODO,
    todo
  };
};
const removeTodo = (todoId: number) => {
  return {
    type: REMOVE_TODO,
    todoId
  };
};

const setTodoList = (todoList: Todo[]) => {
  return {
    type: SET_TODO_LIST,
    todoList
  };
};

const setTodoTimeline = (todoTimeline: Todo[]) => {
  return {
    type: SET_TODO_TIMELINE,
    todoTimeline
  };
};

const updateTodo = (todo: Todo) => {
  return {
    type: UPDATE_TODO,
    todo
  };
};

// api action

const updateTodoComplte = (id: number) => {
  return (dispatch, getState) => {
    fetch('http://localhost:3000/todo/', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': getState().user.token
      },
      body: JSON.stringify({
        id
      })
    })
      .then(response => response.json())
      .then(json => {
        if (json.todo) dispatch(updateTodo(json.todo));
      })
      .catch(err => console.log(err));
  };
};

const getTodoList = () => {
  return (dispatch, getState) => {
    fetch('http://localhost:3000/todo/today', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': getState().user.token
      }
    })
      .then(response => response.json())
      .then(json => {
        if (json.todoList) dispatch(setTodoList(json.todoList));
      })
      .catch(err => console.log(err));
  };
};

const getTodoTimeline = () => {
  return (dispatch, getState) => {
    fetch('http://localhost:3000/todo/all/complete', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': getState().user.token
      }
    })
      .then(response => response.json())
      .then(json => {
        if (json.todoList) dispatch(setTodoTimeline(json.todoList));
      })
      .catch(err => console.log(err));
  };
};

const createTodo = (title: string) => {
  return (dispatch, getState) => {
    fetch('http://localhost:3000/todo/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': getState().user.token
      },
      body: JSON.stringify({
        title
      })
    })
      .then(response => response.json())
      .then(json => {
        if (json.todo) {
          dispatch(addTodo(json.todo));
        }
      })
      .catch(err => console.log(err));
  };
};

const deleteTodo = (id: number) => {
  return (dispatch, getState) => {
    fetch('http://localhost:3000/todo/', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': getState().user.token
      },
      body: JSON.stringify({
        id
      })
    })
      .then(() => {
        dispatch(removeTodo(id));
      })
      .catch(err => console.log(err));
  };
};

const initialState: TodoState = {
  todoList: undefined,
  todoTimeline: undefined
};

// reducer
const reducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case SET_TODO_LIST:
      return applySetTodoList(state, action);
    case SET_TODO_TIMELINE:
      return applySetTodoTimeline(state, action);
    case ADD_TODO:
      return applyAddTodo(state, action);
    case UPDATE_TODO:
      return applyUpdateTodo(state, action);
    case REMOVE_TODO:
      return applyRemoveTodo(state, action);
    default:
      return state;
  }
};

// reducer function
const applySetTodoList = (state: TodoState, action) => {
  const todoList = action.todoList.sort((a, b) => a.id - b.id);
  return {
    ...state,
    todoList
  };
};

const applySetTodoTimeline = (state: TodoState, action) => {
  const { todoTimeline } = action;
  return {
    ...state,
    todoTimeline
  };
};

const applyAddTodo = (state: TodoState, action) => {
  const todoList = [...state.todoList, action.todo];
  return { ...state, todoList };
};

const applyUpdateTodo = (state: TodoState, action) => {
  const newTodoList = state.todoList.map(todo =>
    todo.id === action.todo.id ? action.todo : todo
  );

  return { ...state, todoList: newTodoList };
};

const applyRemoveTodo = (state: TodoState, action) => {
  const newTodoList = state.todoList.filter(todo => todo.id !== action.todoId);
  return { ...state, todoList: newTodoList };
};

// export

export const actionCreators = {
  getTodoList,
  getTodoTimeline,
  createTodo,
  updateTodoComplte,
  deleteTodo
};

export default reducer;
