import React from 'react'
import styled from 'styled-components'

import CheckBoxIcon from '@material-ui/icons/CheckBox';
import RefreshIcon from '@material-ui/icons/Refresh';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';

import { emailData } from '../temp/EmailData';
import EmailItem from '../EmailItem/EmailItem';

function EmailsView() {
    return (
        <Wrapper>
            <TopWrapper>
  
                 <CheckBoxIcon/>

                <IconButton>
                    <RefreshIcon/>
                </IconButton>

                <IconButton>
                    <MoreVertIcon/>
                </IconButton>

            </TopWrapper>

            <EmailsContainer>
                {
                    emailData.map(({starred, from, subject, message, received, read})=>(
                        <EmailItem 
                            stareed={starred}
                            from={from}
                            subject={subject}
                            message={message}
                            received={received}
                            read={read}
                        />
                    ))
                }
            </EmailsContainer>
        </Wrapper>
    )
}

export default EmailsView

const Wrapper = styled.div `
    
`
const TopWrapper = styled.div `
    padding-left: 20px;
    display: flex;
    align-items: center;
    height: 40px;
`
const EmailsContainer = styled.div ``

    