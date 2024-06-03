// import React from 'react';

// const MovieHeading = (props) => {
// 	return (
// 		<div className='col'>
// 			<h1>{props.heading}</h1>
// 		</div>
// 	);
// };

// export default MovieHeading;

import React from 'react';
import styled from 'styled-components';

// Styled component for the heading
const Heading = styled.h1`
    color: 'rgb(166, 18, 18)'; 
    font-size: 1.5rem; 
		 background-color:  rgba(207, 77, 41,0.2) !important;;    
    padding: 10px;
`;

const MovieHeading = (props) => {
    return (
        <div className='col'>
            <Heading>{props.heading}</Heading>
        </div>
    );
};

export default MovieHeading;