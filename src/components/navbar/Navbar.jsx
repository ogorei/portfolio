import React, { useState } from 'react';
import { images } from '../../constants';
import './Navbar.scss';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';

const Navbar = () => {
	const [toggle, setToggle] = useState(true);
	return (
		<nav className="app_navbar">
			<div className="app_navbar-logo">
				<img src={images.reina} alt="name" />
			</div>
			<ul className="app_navbar-links">
				{['Home', 'About', 'Work', 'Contact'].map((item, i) => {
					return (
						<li className="app_flex p-text" key={i}>
							<a href={`link-${item}`}>{item}</a>
						</li>
					);
				})}
			</ul>
			<div className="app_navbar-menu">
				<HiMenuAlt4
					onClick={() => {
						setToggle(true);
					}}
				/>
				{toggle && (
					<motion.div whileInView={{ x: [300, 0] }} transition={{ duration: 0.85, ease: 'easeOut' }}>
						<HiX onClick={() => setToggle(false)} />
						<ul>
							{['Home', 'About', 'Work', 'Contact'].map((item, i) => {
								return (
									<li key={i}>
										<a href={`#${item}`} onClick={() => setToggle(false)}>
											{item}
										</a>
									</li>
								);
							})}
						</ul>
					</motion.div>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
