import React from 'react';
import styled from 'styled-components';
import { TOGGLE_TODO } from '../actions/actions';

const StyledItem = styled.div`
    border: lightgrey 1px solid;
    background-color: lightgrey;
    border-radius: 10px;
    margin: 1rem;
	.completed {
		text-decoration: line-though;
	}
`

const Todo = ({ todo, dispatch }) => {

    return(
        <StyledItem id='completed' className={todo.completed ? 'completed': ''} onClick={()=>dispatch({type: TOGGLE_TODO, payload: todo.id})}>
        <p>{todo.todo}</p>
        </StyledItem>
    );
};

export default Todo;