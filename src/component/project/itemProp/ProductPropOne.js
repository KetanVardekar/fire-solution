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
		},
		thumbnail: {
			width: '100%',
			textAlign: 'center',
		},
		img: {
			maxWidth: '100%',
			height: 'auto',
		},
		content: {
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			textAlign: 'center',
		},
		title: {
			margin: '0.5rem 0',
		},
		subtitle: {
			margin: '0.5rem 0',
		},
		buttonContainer: {
			margin: '1rem 0',
		},
		button: {
			padding: '0.5rem 1rem',
			border: 'none',
			borderRadius: '15px',
			backgroundColor: '#007bff', // Adjust color as needed
			color: '#fff',
			cursor: 'pointer',
		},
	};

	return (
		<div className={`project-grid ${projectStyle}`} style={styles.projectGrid}>
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
				{/* <div className="center-text" style={styles.buttonContainer}>
					<button
						type="submit"
						className="axil-btn btn-fill-primary w-auto btn-primary"
						name="submit-btn"
						onClick={() => window.location.href = `${process.env.PUBLIC_URL}/contact`}
						style={styles.button}
					>
						ENQUIRY US
					</button>
				</div> */}
				<div style={{ clear: 'both' }} className="center-text">
						<button type="submit" className="axil-btn btn-fill-primary w-auto btn-primary" name="submit-btn" onClick={() => window.location.href = `${process.env.PUBLIC_URL}/contact`}>ENQUIRY US</button>
					</div>
			</div>
		</div>
	);
}

export default ProductPropOne;
