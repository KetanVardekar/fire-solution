import React, { useState, useEffect } from 'react';
import SectionTitle from '../../elements/section-title/SectionTitle';
import ProductData from "../../data/products/ProuductData.json";
import ProductPropOne from './itemProp/ProductPropOne';

const filters = [
	{
		id: 1,
		label: "Fire Extinguishers",
		range: [1, 14]
	},
	{
		id: 2,
		label: "Fire Hydrant Equipments",
		range: [15, 22]
	},
	{
		id: 3,
		label: "Fire Alarm Equipments",
		range: [23, 26]
	},
	{
		id: 4,
		label: "Fire Fighting Pump",
		range: [27, 30]
	},
	{
		id: 5,
		label: "Safety Goods",
		range: [31, 39]
	}
];

const AllData = ProductData;

const OurProducts = ({ parentClass, colSize, itemShow, columnGap }) => {
	const [getAllItems] = useState(AllData);
	const [visiableProject] = useState(itemShow ? itemShow : 4);
	const [activeFilter, setActiveFilter] = useState(filters[0].label);
	const [visibleItems, setVisibleItems] = useState([]);

	useEffect(() => {
		setVisibleItems(getAllItems.filter(item => item.id >= filters[0].range[0] && item.id <= filters[0].range[1]));
	}, [getAllItems]);

	const handleChange = (e) => {
		e.preventDefault();
		const target = e.target.textContent;
		const filter = filters.find(f => f.label === target);

		setActiveFilter(target);

		if (filter) {
			const tempData = getAllItems.filter(item => item.id >= filter.range[0] && item.id <= filter.range[1]);
			setVisibleItems(tempData);
		}
	};

	return (
		<>
			<div className={`section our-work-padding-2 ${parentClass ? parentClass : ""}`}>
				<div className="container">
					<SectionTitle
						subtitle="Our Products"
						title="Some of our Best Products."
						textAlignment="heading-left mb--40"
						textColor=""
					/>
					<div className="isotope-button isotope-project-btn">
						{filters.map(filter => (
							<button
								onClick={handleChange}
								className={filter.label === activeFilter ? "is-checked" : ""}
								key={filter.id}
							>
								{filter.label}
							</button>
						))}
					</div>
					<div className={`row ${columnGap ? columnGap : "row-35"}`}>
						{visibleItems.map(data => (
							<div className={colSize ? colSize : "col-md-6"} key={data.id}>
								<div
									style={{
										display: 'flex',
										justifyContent: 'center',
										alignItems: 'center',
										width: '100%',
										padding: '10px',
										boxSizing: 'border-box',
									}}
								>
									<ProductPropOne projectStyle="" portfolio={data} />
								</div>

								{/* <ProductPropOne projectStyle="" portfolio={data} /> */}
							</div>
						))}
					</div>
				</div>
				{/* <ul className="shape-group-7 list-unstyled">
					<li className="shape shape-1"><img src={process.env.PUBLIC_URL + "/images/others/circle-2.png"} alt="circle" /></li>
					<li className="shape shape-2"><img src={process.env.PUBLIC_URL + "/images/others/bubble-2.png"} alt="Line" /></li>
					<li className="shape shape-3"><img src={process.env.PUBLIC_URL + "/images/others/bubble-1.png"} alt="Line" /></li>
				</ul> */}
			</div>
		</>
	);
}

export default OurProducts;
