
import React from 'react';

const SearchMovie = (props) => {
	return (
		<div className='col col-sm-12'>
			<input
				className='form-control'
				value={props.value}
				onChange={(event) => props.setSearchValue(event.target.value)}
				placeholder='Search for a movie...'
				style={{ backgroundColor: 'rgba(207, 77, 41,0.1)', color: 'rgba(207, 77, 41)' }} // Inline styles to set background to orange and text color to black
			/>
		</div>
	);
};

export default SearchMovie;
