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
							<p className="p-text">こんにちは、REINAです</p>
						</div>
					</div>
					<div className="tag-cmp app__flex">
						<p className="p-text">フロントエンドが得意なITエンジニア</p>
						<p className="p-text">モバイル開発</p>
						<p className="p-text">UI/UX改善・デザイン</p>
						<p className="p-text">４ヶ国語流暢でインバウンド向けHP作成可能</p>
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
							<img src={item} />
						</div>
					);
				})}
			</motion.div>
		</div>
	);
};

export default AppWrap(Header, 'home');

