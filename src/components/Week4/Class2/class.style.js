import styled from "styled-components";

export const Image = styled.div`
    width: 200px;
    height: 120px;
    background-image: url(${props => props.image});
    object-fit: cover;
    background-size: contain;  
    background-repeat: no-repeat;
`