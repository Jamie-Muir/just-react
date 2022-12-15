import React from 'react';

import classes from './Navbar.module.scss';

function Navbar() {
	return (
		<nav>
			<div className={classes.navBranding}> <h1>JUST REACT</h1> </div>
			<ul>
				<li>Jamie</li>
				<li>Help</li>
			</ul>
		</nav>
	)
}

export default Navbar;