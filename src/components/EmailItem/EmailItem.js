import Checkbox from 'antd/lib/checkbox/Checkbox'
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarIcon from '@material-ui/icons/Star';
import IconButton from '@material-ui/core/IconButton'

import React, { useState } from 'react'
import styled from 'styled-components'

const EmailItem = ({starred, from, subject, message, received, read}) => {

    const [star,setStar] = useState(starred);

    return (
        <Wrapper>
            <Checkbox/>
            <IconButton onClick={()=> star ? setStar(false) : setStar(true)}>
                {
                    star ? (
                        <StarIcon htmlColor='#f7cb69' />
                    ) : (
                        <StarBorderIcon />
                    )
                }
            </IconButton>

            <p className={ !read && 'unread'}>{from}</p>

            <div>
                <p className={ !read && 'unread'}>{subject}- <span>{message}</span></p>
            </div>

            <p className={ !read && 'unread'}>{received}</p>

        </Wrapper>
    )
}

export default EmailItem

const Wrapper = styled.div `
    padding-left: 25px;
    border-top: 1px solid lightgrey;
    display: grid;
    grid-template-columns: 30px 50px 120px auto 50px;
    align-items: center;
    gap: 10px;
    cursor: pointer;

    div {
        display: flex;
    }
    span {
        color: darkgrey;
    }
    .unread{
        color: black;
        font-weight: bolder;
    }
`