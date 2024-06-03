import React from 'react'
import styled from 'styled-components'
const Dashboard = () => {
    return (
         <AddArticleContainer>
            <div className="container">
                <Heading >Welcome</Heading>
            </div>
            <div className="container">
                <Paragraph>Login to Search For Your Favourite Movie</Paragraph>
            </div>
        </AddArticleContainer>
      
    )
}

export default Dashboard
const AddArticleContainer = styled.div`
    margin: 4rem auto;
    padding: 4rem;
    width: 31.25rem;
    text-align: center;
`;

const Heading = styled.h1`
    font-weight: 900;
    ${'' /* color: var(--dark-green); */}
    color: rgb(207, 77, 41)
`;

const Paragraph = styled.p`
    font-weight: 700;
`;

