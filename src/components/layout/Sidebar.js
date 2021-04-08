import React from 'react'
import styled from 'styled-components'

import VideocamIcon from '@material-ui/icons/Videocam';
import KeyboardIcon from '@material-ui/icons/Keyboard';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import { sidebarButtonItems } from '../data/SidebarButtonItems';
import { bottomIcons } from '../data/BottomIconsData';

import Compose from '../buttons/Compose'
function Sidebar() {
    return (
        <Wrapper>
            <TopSectionWrapper>
            <ComposeWrapper>
                <Compose />
            </ComposeWrapper>

            <SideButtonWrapper>
                {
                    sidebarButtonItems.map(item => (
                        <SidebarButtonItem>
                            {item.icon}
                            {item.text} 
                        </SidebarButtonItem>
                    ))
                }
            </SideButtonWrapper>
            </TopSectionWrapper>

            <BottomSectionWrapper>

            <SidebarSectionWrapper>
                <Title>Meet</Title>
                <p><VideocamIcon/>New Meeting</p>
                <p><KeyboardIcon />Join Meeting</p>
            </SidebarSectionWrapper>

            <SidebarSectionWrapper>
                <Title>Hangouts</Title>
                <p><AccountCircleIcon/>New Meeting</p>
            </SidebarSectionWrapper>

            <BottomIconWrapper>
                {
                    bottomIcons.map(icon =>(
                        <>
                            {icon}
                        </>
                    ))
                }
            </BottomIconWrapper>

            </BottomSectionWrapper>
        </Wrapper>
    )
}

export default Sidebar

const Wrapper = styled.div `
    border-right: 1px solid lightgrey;
    height: calc(100vh - 70px);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
const TopSectionWrapper = styled.div `
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
const SidebarSectionWrapper = styled.div `
    border-top: 1px solid lightgrey;
    
    p {
        color: grey;
        display: grid;
        grid-template-columns: 14% auto;
        height: 30px;
        cursor: pointer;
        align-items: center;
        padding-left: 25px;
    }
`
const Title = styled.div `
    padding-left: 25px;
    margin-bottom: 3px;
    margin-top: 8px;
`
const BottomSectionWrapper = styled.div `
    margin-bottom: 30px;
`

const BottomIconWrapper = styled.div `
    display: flex;
    justify-content: center;
    color: grey;
    margin-top: 50px;
    border-top: 1px solid lightgrey;

    .MuiSvgIcon-root {
        padding: 2px;
        margin-top: 2px;
        cursor: pointer;
    }
`