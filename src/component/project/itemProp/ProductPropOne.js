import React from 'react';
import { Link } from 'react-router-dom';
import { slugify } from '../../../utils';

const ProductPropOne = ({ projectStyle, portfolio }) => {
	const styles = {
		projectGrid: {
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			textAlign: 'center',
			backgroundColor: '#fff',
			borderRadius: '12px',
			boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
			padding: '20px',
			transition: 'transform 0.3s ease, box-shadow 0.3s ease',
			cursor: 'pointer',
		},
		projectGridHover: {
			transform: 'scale(1.05)',
			boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)',
		},
		thumbnail: {
			width: '100%',
			marginBottom: '15px',
		},
		img: {
			maxWidth: '100%',
			height: 'auto',
			borderRadius: '10px',
		},
		content: {
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			textAlign: 'center',
		},
		title: {
			fontSize: '1.5rem',
			fontWeight: '600',
			margin: '10px 0',
			color: '#333',
		},
		subtitle: {
			fontSize: '1rem',
			marginBottom: '15px',
			color: '#666',
		},
		buttonContainer: {
			margin: '20px 0 0',
			width: '100%',
			textAlign: 'center',
		},
		button: {
			padding: '12px 20px',
			border: 'none',
			borderRadius: '25px',
			backgroundColor: '#ff5722', // More vibrant button color
			color: '#fff',
			fontSize: '1rem',
			fontWeight: 'bold',
			transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
		},
		buttonHover: {
			backgroundColor: '#e64a19',
			boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
		},
	};

	// Add hover state on the card and button
	const [hover, setHover] = React.useState(false);
	const [buttonHover, setButtonHover] = React.useState(false);

	return (
		<div
			className={`project-grid ${projectStyle}`}
			style={{ ...styles.projectGrid, ...(hover && styles.projectGridHover) }}
			onMouseEnter={() => setHover(true)}
			onMouseLeave={() => setHover(false)}
		>
			<div className="thumbnail" style={styles.thumbnail}>
				<Link to={process.env.PUBLIC_URL + `/project-details/${slugify(portfolio.title)}`}>
					<img src={process.env.PUBLIC_URL + portfolio.image} alt="icon" style={styles.img} />
				</Link>
			</div>
			<div className="content" style={styles.content}>
				<h4 className="title" style={styles.title}>
					<Link to={process.env.PUBLIC_URL + `/project-details/${slugify(portfolio.title)}`}>
						{portfolio.title}
					</Link>
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
						type="submit"
						className="axil-btn btn-fill-primary w-auto btn-primary"
						style={{ ...styles.button, ...(buttonHover && styles.buttonHover) }}
						onMouseEnter={() => setButtonHover(true)}
						onMouseLeave={() => setButtonHover(false)}
						onClick={() => (window.location.href = `${process.env.PUBLIC_URL}/contact`)}
					>
						ENQUIRY US
					</button>
				</div>
			</div>
		</div>
	);
};

export default ProductPropOne;
