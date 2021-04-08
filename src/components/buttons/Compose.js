import React from 'react'
import styled from 'styled-components'

import AddIcon from '@material-ui/icons/Add';

function Compose() {
    return (
        <Wrapper>
            <AddIcon fontSize='large'/>
            <p>Compose</p>
        </Wrapper>
    )
}

export default Compose

const Wrapper = styled.div `
    display: grid;
    grid-template-columns: 35% auto;
    widthL auto;
    align-items: center;
    padding: 6px 32px 6px 8px;
    border-radius: 50px;
    cursor: pointer;
    color: #3c4043;
    font-weight: 500;
    fonst-size: 0.875rem;
    box-shadow:0.1px 2px 0 rgba(60, 64, 67, 0.302), 0 1px 3px 1px rgba(60, 64, 67, 0.149);
    transition: box-shadow .08s linear,min-width cubic-bezier(0.4,0.0,2,1);

    :hover {
        box-shadow: 0 1px 3px 0 rgba(60 64 67 /30%), 0 4px 8px 3px rgba(60 64 67/ 10%);
        background-color: #fafafb;
    }
`