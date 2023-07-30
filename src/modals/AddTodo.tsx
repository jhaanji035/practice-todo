import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

interface IProps {
    toggle: React.MouseEventHandler<HTMLButtonElement> | undefined
    save: Function
}
function AddTodo({ toggle, save }: IProps) {
    
    const initialState={
        name: "",
        phone: ""
    }

    const [state, setState] = useState(initialState)
    useEffect(() => {
        console.log(state);
    }, [state])
    const handleChange=(event: any)=> {
        const target = event.target
        const field = target.name
        setState({ 
            ...state, 
            [field]: target.value
          })
    }
    const saveTodo=()=> {
        save(state)
        setState(initialState)
    }
    return (
        <div
            className='modal show'
            style={{ display: 'block', position: 'initial' }}
        >
            <Modal.Dialog data-testid="modal-dialog">
                <Modal.Header>
                    <Modal.Title>Add Todo</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter name" name="name" onChange={handleChange} value={state.name}/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control type="text" placeholder="Enter phone" name="phone" onChange={handleChange} value={state.phone}/>
                        </Form.Group>
                    </Form>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={toggle}>Close</Button>
                    <Button variant="primary" onClick={saveTodo} data-testid='save-todo'>Save To Do</Button>
                </Modal.Footer>
            </Modal.Dialog>
        </div>
    );
}

export default AddTodo;