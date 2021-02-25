import React from 'react';
import Todo from './Todo';
import styled from 'styled-components';

const StyledList = styled.div`
    cursor: default;
    .completed {
        border: grey 1px solid;
        background-color: grey;
        color: lightgrey;
        font-style: italic;    
    }
`

const TodoList = ({ state, dispatch }) => {
    return (
        <StyledList>
            {state.todoList.map(todo => 
                <Todo key={todo.id} todo={todo} dispatch={dispatch}/>
            )}
        </StyledList>
    );
};

export default TodoList;