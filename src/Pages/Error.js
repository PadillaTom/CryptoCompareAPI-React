import React from 'react'
import styled from "styled-components";
import {Link} from "react-router-dom";


const Error = () => {
    return (
        <Wrapper>
            <div>
                <h1>404</h1>
                <h3>Error 404 - Page not found.</h3>
                <Link to="/">Back to Home</Link>
            </div>           
        </Wrapper>
    )
}

// *** Styles ***
const Wrapper = styled.section`
width: 100%;
height: 100vh;
background-color: red;
h1 {
    font-size: 10rem;
}
h3{
    color: cyan;
}
`;


export default Error
