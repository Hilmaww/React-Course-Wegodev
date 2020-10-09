import React from 'react';
import PropTypes from 'prop-types';

const Todo = props => {
    return(
    <div className="todo">
        <span className="text-todo">{props.text}</span>
    </div>
    );
}

Todo.propTypes = {
    text: PropTypes.string.isRequired
};

export default Todo;