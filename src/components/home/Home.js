import React from 'react'
import Card from '../UI/Card'
import Navbar from '../UI/Navbar'
import SearchBar from '../UI/SearchBar'
import RecommendedMenus from './RecommendedMenus';

import classes from './Home.module.scss';

import banner from '../../assets/bg_hero-wide.webp';

function Home() {
	return (
		<div>
			<Navbar />
			<div className={classes.banner}>
				<img src={banner} alt='banner' />
			</div>
			<Card className={classes.searchBlock}>
				<h1>Tuck into a takeaway today</h1>
				<h2>Find restaurants delivering right now, near you</h2>
				<SearchBar placeholder='Enter your postcode' inputClass={classes.homeSearchBar}/>
			</Card>
			<RecommendedMenus />
		</div>
	)
}

export default Home