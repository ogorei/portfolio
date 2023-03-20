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
		<div className="app_header app_flex">
			<motion.div
				whileInView={{ x: [-100, 0], opacity: [0, 1] }}
				transition={{ duration: 0.5 }}
				className="app_header-info"
			>
				<div className="app_header-badge">
					<div className="badge-cmp app_flex">
						<span>👋 </span>
						<div style={{ marginLeft: 20 }}>
							<p className="p-text">こんにちは、REINAです</p>
						</div>
					</div>
					<div className="tag-cmp app_flex">
						<p className="p-text">WEBデザイナー</p>
						<p className="p-text">モバイル開発</p>
						<p className="p-text">UI/UX</p>
					</div>
				</div>
			</motion.div>

			<motion.div
				whileInView={{ opacity: [0, 1] }}
				transition={{ duration: 0.5, delayChildren: [0.5] }}
				className="app_header-img"
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
				className="app_header-circles"
			>
				{[images.redux, images.figma, images.amazon].map((item, index) => {
					return (
						<div className="circle-cmp flex-_app" key={index}>
							<img src={item} />
						</div>
					);
				})}
			</motion.div>
		</div>
	);
};

export default AppWrap(Header, 'home');
