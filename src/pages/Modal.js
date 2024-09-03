import React, { useEffect, useState } from 'react';

const SimpleModal = ({ isOpen, onClose, title, children }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setIsVisible(true);
        } else {
            setTimeout(() => setIsVisible(false), 300); // Delay to allow fade-out animation
        }
    }, [isOpen]);

    if (!isVisible) return null;

    const modalStyles = {
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: isOpen ? 'translate(-50%, -42%)' : 'translate(-50%, -60%)',
        zIndex: 1000,
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '15px',
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
        width: '90%',
        maxWidth: '400px',
        opacity: isOpen ? 1 : 0,
        transition: 'transform 0.3s ease-out, opacity 0.3s ease-out',
    };

    const overlayStyles = {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 999,
        opacity: isOpen ? 1 : 0,
        transition: 'opacity 0.3s ease-out',
    };

    const closeButtonStyles = {
        background: 'none',
        border: 'none',
        fontSize: '1.5rem',
        position: 'absolute',
        top: '15px',
        right: '15px',
        cursor: 'pointer',
        color: '#ff5722',
    };

    return (
        <>
            <div style={overlayStyles} onClick={onClose}></div>
            <div style={modalStyles}>
                <button style={closeButtonStyles} onClick={onClose}>&times;</button>
                <h3 style={{ margin: '0 0 15px', textAlign: 'center', fontSize: '1.3rem', color: '#ff5722',fontWeight:'bold' }}>{title}</h3>
                <div>{children}</div>
            </div>
        </>
    );
};

export default SimpleModal;
