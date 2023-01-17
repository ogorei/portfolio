import React, { useState, useEffect } from 'react';
import './About.scss';
import { motion } from 'framer-motion';
import { images } from '../../constants';

const abouts = [
	{ title: 'Webデザイン', description: '「一律料金」でオリジナルデザインのLPを制作いたします！', imgUrl: images.about2 },
	{ title: 'UI/UX', description: 'ペルソナ設定、カスタマージャーニーマップなどを作成', imgUrl: images.about3 },
	{ title: 'モバイル開発', description: 'iOS/Android', imgUrl: images.about1 },,
];

const About = () => {
	return (
		<>
			<h2 className="head-text">
				<span>SIMPLE</span> IS <span>THE BEST</span>
				<p style={{textAlign:"center"}} className='p-text'>完璧とは、付け加えるべきものがなくなった時ではなく、取り去るべきものがなくなった時である。</p>
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
