import React, { useState, useRef } from 'react';
import Modal from '../../../pages/Modal';
import emailjs from '@emailjs/browser';
import Alert from 'react-bootstrap/Alert';

const Result = () => {
	return (
		<Alert variant="success" className="success-msg">
			Your Message has been successfully sent.
		</Alert>
	);
};

const ProductPropOne = ({ projectStyle, portfolio }) => {
	const styles = {
		projectGrid: {
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			textAlign: 'center',
			backgroundColor: '#fff',
			borderRadius: '8px',
			boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
			padding: '10px',
			transition: 'transform 0.3s ease, box-shadow 0.3s ease',
			cursor: 'pointer',
			maxWidth: '280px',
		},
		projectGridHover: {
			transform: 'scale(1.03)',
			boxShadow: '0 4px 8px rgba(0, 0, 0, 0.15)',
		},
		thumbnail: {
			width: '100%',
			marginBottom: '10px',
			position: 'relative',
		},
		img: {
			maxWidth: '80%',
			height: 'auto',
			borderRadius: '8px',
			marginBottom: '10px',
		},
		content: {
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			textAlign: 'center',
			backgroundColor: '#f9f9f9',
			padding: '10px',
			borderRadius: '8px',
			width: '100%',
		},
		title: {
			fontSize: '1.1rem',
			fontWeight: '600',
			margin: '5px 0',
			color: '#333',
		},
		subtitle: {
			fontSize: '0.8rem',
			color: '#777',
			marginBottom: '10px',
		},
		buttonContainer: {
			marginTop: '10px',
			width: '100%',
			textAlign: 'center',
		},
		button: {
			padding: '8px 15px',
			border: 'none',
			borderRadius: '20px',
			backgroundColor: '#ff5722',
			color: '#fff',
			fontSize: '0.9rem',
			fontWeight: 'bold',
			transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
		},
		buttonHover: {
			backgroundColor: '#e64a19',
			boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
		},
	};

	const [hover, setHover] = useState(false);
	const [buttonHover, setButtonHover] = useState(false);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const form = useRef();
	const [result, showResult] = useState(false);

	const handleEnquiryClick = () => {
		setIsModalOpen(true);
	};

	const sendEmail = (e) => {
		e.preventDefault();
		emailjs.sendForm('service_nk3u1ln', 'template_95yscfo', form.current, '8t5Op5K-wjKiOsQRI')
			.then((result) => {
				console.log(result.text);
			}, (error) => {
				console.log(error.text);
			});
		form.current.reset();
		showResult(true);

		setTimeout(() => {
			showResult(false);
		}, 5000);
	};

	const formStyles = {
		formGroup: {
			marginBottom: '8px',
		},
		formControl: {
			width: '100%',
			padding: '6px',
			fontSize: '0.85rem',
			marginBottom: '8px',
		},
		formRow: {
			display: 'flex',
			justifyContent: 'space-between',
			gap: '10px',  // Space between name and email fields
		},
		formControlHalf: {
			padding: '6px',
			fontSize: '0.85rem',
			marginBottom: '8px',
		},
		textarea: {
			width: '100%',
			padding: '6px',
			fontSize: '0.85rem',
			marginBottom: '8px',
			resize: 'none',
		},
		submitButton: {
			padding: '8px 15px',
			borderRadius: '5px',
			backgroundColor: '#ff5722',
			color: '#fff',
			border: 'none',
			cursor: 'pointer',
			fontSize: '0.85rem',
		},
		modalContent: {
			marginTop: '10px',
			
		},
	};

	return (
		<>
			<div
				className={`project-grid ${projectStyle}`}
				style={{ ...styles.projectGrid, ...(hover && styles.projectGridHover) }}
				onMouseEnter={() => setHover(true)}
				onMouseLeave={() => setHover(false)}
			>
				<div className="thumbnail" style={styles.thumbnail}>
					<img src={process.env.PUBLIC_URL + portfolio.image} alt="icon" style={styles.img} />
				</div>
				<div className="content" style={styles.content}>
					<h4 className="title" style={styles.title}>
						{portfolio.title}
					</h4>
					<div className="subtitle" style={styles.subtitle}>
						{portfolio.category.length > 0 ? (
							portfolio.category.map((cat, i) => (
								<div key={i}>{cat}</div>
							))
						) : (
							<div>No Categories</div>
						)}
					</div>
					<div className="buttonContainer" style={styles.buttonContainer}>
						<button
							type="button"
							style={{ ...styles.button, ...(buttonHover && styles.buttonHover) }}
							onMouseEnter={() => setButtonHover(true)}
							onMouseLeave={() => setButtonHover(false)}
							onClick={handleEnquiryClick}
						>
							ENQUIRY US
						</button>
					</div>
				</div>
			</div>

			{/* Modal for Enquiry Form */}
			
			<Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Enquiry Form" >
				<form ref={form} onSubmit={sendEmail} className="axil-contact-form">
					<div style={formStyles.formRow}>
						<div className="form-group" style={formStyles.formGroup}>
							<label>Name</label>
							<input type="text" className="form-control" name="contact-name" placeholder='Enter Name' required style={formStyles.formControlHalf} />
						</div>
						<div className="form-group" style={formStyles.formGroup}>
							<label>Email</label>
							<input type="email" className="form-control" name="contact-email" placeholder='Enter Email' required style={formStyles.formControlHalf} />
						</div>
					</div>
					<div className="form-group" style={formStyles.formGroup}>
						<label>Phone</label>
						<input type="tel" className="form-control" name="contact-phone" placeholder='Enter Phone' required style={formStyles.formControl} />
					</div>
					<div className="form-group" style={formStyles.formGroup}>
						<label>Message</label>
						<textarea className="form-control" name="contact-message" rows="3" placeholder='Enter Message' style={formStyles.textarea} />
					</div>
					<div className="form-group" style={formStyles.formGroup}>
						<button type="submit" style={formStyles.submitButton}>Submit</button>
					</div>
					<div className="form-group" style={formStyles.formGroup}>
						{result ? <Result /> : null}
					</div>
				</form>
			</Modal>
			
		</>
	);
};

export default ProductPropOne;
