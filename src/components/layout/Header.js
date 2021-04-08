import React from 'react'
import styled from 'styled-components'

import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline'
import SettingsIcon from '@material-ui/icons/Settings'
import AppsIcon from '@material-ui/icons/Apps'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'

function Header() {
    return (
        <Wrapper>
            <LogoWrapper>
                <Menu>
                    <MenuIcon />
                </Menu>

                <Logo>
                    <img src='https://cdn.vox-cdn.com/thumbor/8fWz6qpiMYMsZhY4vrc9Vhl5yL8=/0x110:1320x770/fit-in/1200x600/cdn.vox-cdn.com/uploads/chorus_asset/file/21939811/newgmaillogo.jpg'/>
                </Logo>

            </LogoWrapper>
           
            <SearchWrapper>
                <SearchBarWrapper>
                    <SearchIcon />
                    <input type="text" placeholder="Search mail" />
                    <ExpandMoreIcon />
                </SearchBarWrapper>
            </SearchWrapper>

            <IconsWrapper>
                <HelpOutlineIcon />
                <SettingsIcon />
                <AccountCircleIcon />
                <AppsIcon />
            </IconsWrapper>

        </Wrapper>
    )
}

export default Header

const Wrapper = styled.div `
    display: grid;
    grid-template-columns: 270px auto 170px;
    border-bottom: 1px solid lightgrey;
    height: 70px;
    align-items: center;
`
const Menu = styled.div `
    display: grid;
    place-items: center;
`

const LogoWrapper = styled.div `
    height: 45px;
    display: grid;
    grid-template-columns: 25% auto;
`

const Logo = styled.div `
    display: flex;
    height: 25px;

    img{
        height: 60px;
        margin-top: -6px;
    }
`

const SearchWrapper = styled.div ``

const SearchBarWrapper = styled.div `
    background-color: #f1f3f4;
    width: 100%;
    max-width: 750px;
    display: grid;
    grid-template-columns: 10% auto 7%;
    place-items: center;
    height: 45px;
    border-radius: 6px;

    .MuiSvgIcon-root {
        color: #5f6368;
    }

    input {
        width: 100%;
        heightL 30px;
        background: none;
        border: none;
        font-size: 18px;

        :focus {
            outline: none;
        }
    }
`

const IconsWrapper = styled.div `
    margin-left: 8px;
    display: grid;
    grid-template-columns: repeat(4, auto);

    .MuiSvgIcon-root {
        color: #5f6369;
    }
`

