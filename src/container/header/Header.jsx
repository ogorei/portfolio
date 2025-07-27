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
				{/* Hero Statement */}
				<motion.div
					whileInView={{ y: [-50, 0], opacity: [0, 1] }}
					transition={{ duration: 0.8, delay: 0.2 }}
					className="app__header-hero"
				>
					<h1 className="hero-text">Engineer by craft, PdM by training—driven to build what matters.</h1>
				</motion.div>

				<div className="app__header-badge">
					<div className="tag-cmp app__flex">
						<p className="p-text">Highly experienced in Frontend</p>
						<p className="p-text">Mobile Development (Crossplatform)</p>
						<p className="p-text">UI/UX (AdobeXD/FIGMA)</p>
						<p className="p-text">Multilingual Scrum Master</p>
						<p className="p-text">Product Owner/Manager</p>
					</div>
				</div>

				{/* Call to Action */}
				<motion.div
					whileInView={{ y: [50, 0], opacity: [0, 1] }}
					transition={{ duration: 0.8, delay: 0.4 }}
					className="app__header-cta"
				>
					<a href="mailto:your.email@example.com?subject=Hello%20Reina&body=Hi%20Reina,%0D%0A%0D%0AI%20would%20like%20to%20get%20in%20touch%20with%20you." className="cta-button">
						<span>Contact me</span>
						<div className="cta-arrow">→</div>
					</a>
				</motion.div>
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

