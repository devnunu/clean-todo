// model
import { ActionType } from '../../model/Common';
import Todo, { TodoState } from '../../model/Todo';

// action

const ADD_TODO = 'ADD_TODO';
const SET_TODO_LIST = 'SET_TODO_LIST';

// action creater

const addTodo = (todo: Todo) => {
  return {
    type: ADD_TODO,
    todo
  };
};

const setTodoList = (todoList: Todo[]) => {
  return {
    type: SET_TODO_LIST,
    todoList
  };
};

// api action

const getTodoList = () => {
  return (dispatch, getState) => {
    fetch('http://localhost:3000/todo/', {
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
        if (json.token) {
          //   dispatch(saveToken(json.token));
        }
      })
      .catch(err => console.log(err));
  };
};

const initialState: TodoState = {
  todoList: undefined
};

// reducer
const reducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case SET_TODO_LIST:
      return applySetTodoList(state, action);
    default:
      return state;
  }
};

// reducer function
const applySetTodoList = (state: TodoState, action) => {
  const { todoList } = action;
  return {
    ...state,
    todoList
  };
};

// export

export const actionCreators = {
  getTodoList,
  createTodo
};

export default reducer;
