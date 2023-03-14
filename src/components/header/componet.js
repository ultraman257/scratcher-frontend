import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
 
	return(
		<div className={'header'}>
			<div className={'container'}>
			<div className={'left'}>
				<h3>Tasker</h3>
				<Link to={'/'}>Home</Link>
				<Link to={'/task/new'}>New</Link>
			</div>
			</div>
		</div>
	)
	
}

export default Header;
