import React from 'react';

const NavigationDots = ({ active }) => {
	return (
		<div className="app__navigation">
			{['home', 'about', 'work', 'contact'].map((item, i) => {
				return (
					<a href={`link-${item}`} key={item + i} className="app__navigation-dot" style={active === item ? { backgroundColor: '#313BAC' } : {}}></a>
				);
			})}
		</div>
	);
};

export default NavigationDots;