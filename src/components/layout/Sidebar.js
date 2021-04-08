import React from 'react'
import styled from 'styled-components'

import { sidebarButtonItems } from '../data/SidebarButtonItems'

import Compose from '../buttons/Compose'
function Sidebar() {
    return (
        <Wrapper>
            <ComposeWrapper>
                <Compose />
            </ComposeWrapper>

            <SideButtonWrapper>
                {
                    sidebarButtonItems.map(item => (
                        <SidebarButtonItem>
                            {item.icon} {item.text}  
                        </SidebarButtonItem>
                    ))
                }
            </SideButtonWrapper>

            <MeetWrapper>
            
            </MeetWrapper>

            <HangoutWrapper>
                
            </HangoutWrapper>

            <BottomIconWrapper>
                
            </BottomIconWrapper>
        </Wrapper>
    )
}

export default Sidebar

const Wrapper = styled.div `
    border-right: 1px solid lightgrey;
    height: 100vh;
`
const ComposeWrapper = styled.div `
    display: grid;
    place-items: start;
    padding: 10px 20px;
`
const SideButtonWrapper = styled.div `

`
const SidebarButtonItem = styled.div `
    display: grid;
    grid-template-columns: 14% auto;
    color: grey;
    padding: 5px 25px;
    margin-right: 8px;
    cursor: pointer;
    border-radius: 0 100px 100px 0;

    :hover {
        background-color: #f5f7f7
    }
`
const MeetWrapper = styled.div `

`
const HangoutWrapper = styled.div `

`
const BottomIconWrapper = styled.div `

`