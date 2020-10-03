import React from 'react';

import './App.css';

function App() {
  return (
            <div className="container">
              <div className="frame">
                <section className="header">
                  <button className="header-btn main-black-color">Add</button>
                  <h1 className="header-title">todo list</h1>
                  <button className="header-btn main-red-color">Clear</button>
                </section>
                <section className="add">
                    <form className="add-form">
                        <input type="form" className="add-input"/>
                        <button className="add-btn main-black-color">Add</button>
                    </form>
                </section>
                <section className="todos">
                  <div className="todo">
                    <span className="text-todo">Learning React</span>
                  </div>
                </section>
              </div>
            </div>
  );
}

export default App;
