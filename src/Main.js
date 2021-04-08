import React from 'react'
import styled from 'styled-components'
import Sidebar from './components/layout/Sidebar'
import EmailsView from './components/layout/EmailsView'
import SideIcons from './components/layout/SideIcons'


function Main() {
    return (
        <Wrapper>
            <Sidebar />
            <EmailsView />
            <SideIcons />
        </Wrapper>
    )
}

export default Main

const Wrapper = styled.div `
    display: grid;
    grid-template-columns: 270px auto 50px;
`