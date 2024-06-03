import React from 'react'
import styled from 'styled-components'
import myImage from '../../images/headerr.png';


const Header = () => {
    return <MainContainer> </MainContainer>;   
};



export default Header;

//main container
const MainContainer =styled.header`
background-image: url(${myImage});
background-repeat: no-repeat;
background-size:cover;
background-position: center;
    height:22rem;
    
    
    
`;