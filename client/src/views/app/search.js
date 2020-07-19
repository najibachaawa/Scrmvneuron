import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_BASE_URL } from "../../constants/defaultValues";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Card, CardBody } from 'reactstrap';
// import { getCurrentUser } from '../../redux/auth/auth';

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

const Search = () => {
    const [convs, setConvs] = useState([]);
    const [modal, setModal] = useState(null);

    const fetchConvs = async() => {
        setConvs([]);
        const query = new URL(window.location).searchParams.get("query");
        axios.get(`${API_BASE_URL}/conv/search/${query}`)
        .then(response => {
            if (response) setConvs(response.data);
        })
        .catch(err => setModal({ type: 'Failure', text: 'Failed to get search results' }))
    };

    useEffect(() => {
        fetchConvs();
    }, [new URL(window.location).searchParams.get("query")]);

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
                convs.length === 0 && (
                    <Card className="mt-2 mb-2">
                        <CardBody>
                            No conversations found
                        </CardBody>
                    </Card>
                )
            }
            {
                convs && convs.map(conv => (
                    <Card className="mt-2 mb-2" key={conv.id}>
                        <CardBody>
                            <h4>{conv.sender.name}</h4>
                            <Button>See Conversation</Button>
                        </CardBody>
                    </Card>
                ))
            }
        </>
    );
}

export default Search;