import React, { Component } from 'react'
import Modal from 'react-bootstrap/Modal'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

 class UpdateFormModal extends Component {
    render() {
        return (
            <div>
                 <Modal show={this.props.show} onHide={this.props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            
                <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>new title</Form.Label>
            <Form.Control type="text" onChange={(e) => this.props.onChangeTitle(e)} />

            <Form.Label>new ingredients</Form.Label>
            <Form.Control type="text" onChange={(e) => this.props.onChangeIngredients(e)} />

            <Form.Label>new image url</Form.Label>
            <Form.Control type="text" onChange={(e) => this.props.onChangeImage_url(e)} />
            
        </Form.Group>

        <Button variant="primary" type="submit" onClick={(e) => this.props.updateFav(e)}>
            Submit
        </Button>
        </Form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.handleClose}>
            Close
          </Button>
         
        </Modal.Footer>
      </Modal>
            </div>
        )
    }
}

export default UpdateFormModal
