import React, { useRef } from 'react';
import classes from './SearchBar.module.scss';

function SearchBar(props) {
	const searchBarRef = useRef(null)

	const onSearch = (event) => {
		event.preventDefault();

		const searchValue = searchBarRef.current.value;
		props.onSearch(searchValue)
	}


	return (
			<div className={`${classes.searchWrapper} ${props.wrapperClass}`}>
				<input
					name='searchbar'
					type='search'
					className={`${classes.searchbar} ${props.inputClass}`}
					placeholder={props.placeholder}
					ref={searchBarRef}
				/>
				<button
					className={`${classes.searchbtn} ${props.buttonClass}`}
					onClick={onSearch}
					name='search button'
				>
					Search
				</button>
			</div>
	)
}

export default SearchBar;