import { array } from 'prop-types';
import React from 'react';
import Todo from './Todo';

const Todos = () => {
   const todos =[
       {
        text: "Belajar React"
   },
        {
        text: "Belajar React"
   },
        {
        text: "Belajar React"
   },
        {
        text: "Belajar React"
   },
        {
         text:"kocak"   
        }
    ]
    return(
        <section className="todos">
            {todos.map(todo => {
                return <Todo text={todo.text}/>
            })}
        </section>     
    );
}

export default Todos;