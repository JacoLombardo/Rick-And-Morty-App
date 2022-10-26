import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import './Components.css';


function Character({ character }) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <>
            <Card style={{ width: '18rem' }} className="mt-3">
                <Card.Img variant="top" src={character.image} alt={character.name} />
                <Card.Body>
                    <Card.Title>{character.name}</Card.Title>
                </Card.Body>
                <Card.Link tag="a" onClick={handleShow} className="stretched-link"></Card.Link>
            </Card>
            
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton className='modalHeader'>
                    <Modal.Title>{character.name}</Modal.Title>
                    <div><img src={character.image} alt={character.name} /></div>
                </Modal.Header>
                <Modal.Body>
                    <div className="inlineTags"><h3 className='hModal'>Gender:</h3><p>{character.gender}</p></div>
                    <div className="inlineTags"><h3 className='hModal'>Species:</h3><p>{character.species}</p></div>
                    <div className="inlineTags"><h3 className='hModal'>Origin:</h3><p>{character.origin.name}</p></div>
                    <div className="inlineTags"><h3 className='hModal'>Status:</h3><p>{character.status}</p></div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
        </>
  )
}

export default Character