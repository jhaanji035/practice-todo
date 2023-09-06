import React, { useState } from 'react';

import './App.scss';
import Button from 'react-bootstrap/Button';
import AddTodo from './modals/AddTodo';
import { YoutubeForm } from './component/YoutubeForm';

interface ITodo {
  name: string
  phone: string
}
function App() {
  const [todoList, setTodoList] = useState<ITodo[]>([])
  const [showModal, setShowModal] = useState<boolean>(false)
  const add = () => {
    setShowModal(!showModal)
  }
  const toggle=()=>{
    setShowModal(!showModal)
  }
  const saveTodo = (data: ITodo) => {
    setTodoList([...todoList, data])
    setShowModal(!showModal)
  }
  const clear = () => {
    setTodoList([])
  }
  return (
    <div className="container">
      <YoutubeForm />
      {false && 
      <div className='row'>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">TO DO List</h5>
            <Button variant="primary" onClick={add} disabled={showModal} className='add-todo' data-testid="add">Add New</Button>
            <Button variant="primary" className='mx-2' onClick={clear} data-testid="clear">Clear</Button>
            <div className="d-flex justify-content-center">
              <ul className="list-group">
                {todoList.map((obj: ITodo, index: number)=> 
                (
                  <li className="list-group-item" key={index}>{obj.name +" : "+obj.phone}</li>
                )
                )}
              </ul>
              {!todoList.length && (
                  <div className='row'>
                      <h5>Currently No data available, Please try to add todo's</h5>
                  </div>
              )}
            </div>
          </div>
        </div>
      </div>}
      {showModal && <AddTodo toggle={toggle} save={saveTodo}/> }
    </div>
  );
}

export default App;
