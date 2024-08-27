import React from 'react';
import './Header.scss';
import { motion } from 'framer-motion';
import { images } from '../../constants';
import { AppWrap } from '../../wrapper';

const scaleVariants = {
	whileInView: {
		scale: [0, 1],
		opacity: [0, 1],
		transition: {
			duration: 1,
			ease: 'easeInOut',
		},
	},
};

const Header = () => {
	return (
		<div className="app__header app__flex">
			<motion.div
				whileInView={{ x: [-100, 0], opacity: [0, 1] }}
				transition={{ duration: 0.5 }}
				className="app__header-info"
			>
				<div className="app__header-badge">
					<div className="badge-cmp app__flex">
						<span>👋 </span>
						<div style={{ marginLeft: 20 }}>
							<p className="p-text">Hi my name is Reina</p>
							<p className="p-text">I'm a Software Engineer based in Tokyo</p>
						</div>
					</div>
					<div className="tag-cmp app__flex">
						<p className="p-text">Highly experienced in Frontend</p>
						<p className="p-text">Mobile Development (Crossplatform)</p>
						<p className="p-text">UI/UX (AdobeXD/FIGMA)</p>
						<p className="p-text">Multilingual Scrum Master</p>
						<p className="p-text">Product Owner/Manager</p>
					</div>
				</div>
			</motion.div>

			<motion.div
				whileInView={{ opacity: [0, 1] }}
				transition={{ duration: 0.5, delayChildren: [0.5] }}
				className="app__header-img"
			>
				<img src={images.profile} alt="profile"></img>
				<motion.img
					whileInView={{ scale: [0, 1] }}
					transition={{ duration: 1, ease: 'easeInOut' }}
					src={images.circle}
					alt="profile-circle"
					className="overlay_circle"
				/>
			</motion.div>

			<motion.div
				variants={scaleVariants}
				whileInView={scaleVariants.whileInView}
				transition={{ duration: 0.5 }}
				className="app__header-circles"
			>
				{[images.redux,images.react, images.expo, images.graphql].map((item, index) => {
					return (
						<div className="circle-cmp app__flex" key={index}>
							<img alt="photosite" src={item} />
						</div>
					);
				})}
			</motion.div>
		</div>
	);
};

export default AppWrap(Header, 'home');

