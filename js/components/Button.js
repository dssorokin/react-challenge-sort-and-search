import React from 'react';

const Button = ({children, active, onClick}) => {
	return (
		<button onClick={onClick} className={active ? 'active' : ''}>
			{children}
		</button>
	);
};

export default Button;