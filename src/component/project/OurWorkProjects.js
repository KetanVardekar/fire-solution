import React, { useState, useEffect } from 'react';
import ProjectPropOne from './itemProp/ProjectPropOne';
import SectionTitle from '../../elements/section-title/SectionTitle';
import ProjectData from "../../data/project/ProjectData.json";

const filters = [
	{
		id: 1,
		label: "Fire Hydrant System",
		range: [1, 4]
    },
    {
		id: 2,
		label: "Fire Sprinkler System",
		range: [5, 8]
    },
    {
		id: 3,
		label: "Pipeline Fabrication & Erection",
		range: [9, 12]
    },
	{
		id: 4,
		label: "Fire Alarm System",
		range: [13, 16]
    }
];

const AllData = ProjectData;

const OurWorkProjects = ({ parentClass, colSize, itemShow, columnGap }) => {
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
                        subtitle="Our Work"
                        title="Some of our finest work."
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
								<ProjectPropOne projectStyle="" portfolio={data}/>
							</div>
						))}
					</div>
                </div>
                <ul className="shape-group-7 list-unstyled">
                    <li className="shape shape-1"><img src={process.env.PUBLIC_URL + "/images/others/circle-2.png"} alt="circle" /></li>
                    <li className="shape shape-2"><img src={process.env.PUBLIC_URL + "/images/others/bubble-2.png"} alt="Line" /></li>
                    <li className="shape shape-3"><img src={process.env.PUBLIC_URL + "/images/others/bubble-1.png"} alt="Line" /></li>
                </ul>
            </div>
		</>
    );
}

export default OurWorkProjects;
