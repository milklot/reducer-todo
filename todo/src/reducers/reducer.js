import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from "../actions/actions";

export const initialState = {
	todoList: []
};

export const reducer = (state, action) => {
	switch(action.type) {
		case ADD_TODO: {
			return ( {
				...state,
				todoList: [
							...state.todoList,
							{todo: action.payload,
							checked:false,
							id: Date.now()
							}
						]
			})
		}

		case TOGGLE_TODO: {
			return ({...state,
				todoList: state.todoList.map((todo) => {
					if (todo.id === action.payload) {
						return ({
							...todo,
							checked : !todo.checked
						})
					}
					else {
						return todo;
					}
				})
			})
		}

		case DELETE_TODO: {
			return ({
				...state, todoList: state.todoList.filter(todo => !todo.checked)
			})
		}
		default:
			return state;
	}
}