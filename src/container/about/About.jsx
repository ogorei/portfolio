import React, { useState, useEffect } from 'react';
import './About.scss';
import { motion } from 'framer-motion';
import { images } from '../../constants';

const abouts = [
	{ title: 'Modern Web開発', description: 'im a good web dev', imgUrl: images.about1 },
	{ title: 'Webデザイン', description: 'im a good web dev', imgUrl: images.about2 },
	{ title: 'UI/UX', description: 'im a good web dev', imgUrl: images.about3 },
];

const About = () => {
	return (
		<>
			<h2 className="head-text">
				<span>シンプルなデザインから、
				</span>
				<br />
				意味のある。
				<span>リード戦略へ。</span>
			</h2>
			<div className="app_profiles">
				{abouts.map((item, index) => {
					return (
						<motion.div
							whileInView={{ opacity: 1 }}
							whileHover={{ scale: 1.1 }}
							transition={{ duration: 0.5, type: 'tween' }}
							className="app_profile-item"
							key={item.title + index}
						>
							<img src={item.imgUrl} alt={item.title} />
							<h2 className="bold-text" style={{ marginTop: 20 }}>
								{item.title}
							</h2>
							<p className="p-text" style={{ marginTop: 10 }}>
								{item.description}
							</p>
						</motion.div>
					);
				})}
			</div>
		</>
	);
};

export default About;
