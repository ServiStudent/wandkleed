import React, {useEffect, useRef, useState} from 'react';
import wandkleed from './wandkleed.jpg';
import {Button, Modal} from "react-bootstrap";

const Wandkleed = () => {
    const imageContainerRef = useRef(null);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            const wandkleedImage = imageContainerRef.current;
            if (wandkleedImage) {
                wandkleedImage.style.height = '100vh';
                wandkleedImage.style.width = 'auto';
                wandkleedImage.style.objectFit = 'cover';
            }
        };

        handleResize();

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleImageClick = (e) => {
        console.log(e.changedTouches[0].clientX);
        console.log(e.changedTouches[0].clientY);
        const image = imageContainerRef.current;
        const { offsetLeft, offsetTop, clientWidth, clientHeight } = image;
        const offsetX = e.changedTouches[0].clientX - offsetLeft;
        const offsetY = e.changedTouches[0].clientY - offsetTop;

        // Define the clickable coordinates within the image
        const clickableCoordinates = [
            { id: 1, x: 145, y: 375, width: 50, height: 50 }, // Kalebas
            { id: 2, x: 173, y: 260, width: 50, height: 50 }, //Agnisa 1
            // Add more coordinates as necessary
        ];

        // Check if the click is within any of the defined coordinates
        for (const { x, y, width, height,id } of clickableCoordinates) {
            if (offsetX >= x && offsetX <= x + width && offsetY >= y && offsetY <= y + height) {
                if(id === 1){
                    console.log('kalebas');  setShowModal(true);
                } else if (id === 2) {
                    console.log('Agnisa 1');
                }
                console.log('Clicked on a coordinate:', x, y);
                // Perform any desired action for the clicked coordinate
                break;
            }
        }
    };

    return (
        <div style={{ overflow: 'auto', height: '100vh' }}>
            <div style={{ position: 'relative' }}>
                <img src={wandkleed} alt="" ref={imageContainerRef} />
                <div
                    style={{ position: 'absolute', zIndex: 100, top: 0, left: 0, width: '100%', height: '100%'}}
                    onTouchStart={e => handleImageClick(e)}
                />
            </div>
            {showModal && (       <Modal show={true} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => setShowModal(false)}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal> )}
        </div>
    );
};

export default Wandkleed;
