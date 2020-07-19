import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { API_BASE_URL } from "../../constants/defaultValues";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Card, CardBody } from 'reactstrap';
import { getCurrentUser } from '../../redux/auth/auth';

const AlertModal = ({ open, close, title, text }) => {
    return (
        <Modal isOpen={open} >
            <ModalHeader>
                {title}
            </ModalHeader>
            <ModalBody>
                {text}
            </ModalBody>
            <ModalFooter>
                <Button color='primary' onClick={close}>Close</Button>
            </ModalFooter>
        </Modal>
    );
};

const Notes = () => {
    const [ notes, setNotes ] = useState([]);
    const [ modal, setModal ] = useState(null);

    const fetchNotes = () => {
        getCurrentUser()
            .then(res => {
                setNotes(res.user.notes);
            })
            .catch(() => setModal({ type: 'Failure', text: 'Failed to get notes, check your internet connection or try again later' }))
    };
    
    useEffect(() => {
        fetchNotes();
    }, []);

    return ( 
        <>
            {
                modal &&
                <AlertModal
                    open={modal}
                    title={modal.type}
                    text={modal.text}
                    close={() => setModal(null)}
                /> 
            }
            {
                notes && notes.map(note => (
                    <Card className="mt-2 mb-2" key={note._id}>
                        <CardBody>
                            <h4>{note.note}</h4>
                            <p>{note.from}</p>
                            <Button>Reply</Button>
                        </CardBody>
                    </Card>
                ))
            }
        </>
    );
}
 
export default Notes;