
import React from 'react'
import styled from 'styled-components'

function Header() {
    return (
        <Nav>
            <Logo src="/images/logo.svg"/>
            <NavMenu>
                <a>
                    <img src="/images/home-icon.svg"></img>
                    <span>HOME</span>
                </a>
                <a>
                    <img src="/images/search-icon.svg"></img>
                    <span>SEARCH</span>
                </a>
                <a>
                    <img src="/images/watchlist-icon.svg"></img>
                    <span>WATCHLIST</span>
                </a>
                <a>
                    <img src="/images/original-icon.svg"></img>
                    <span>ORIGINALS</span>
                </a>
                <a>
                    <img src="/images/movie-icon.svg"></img>
                    <span>ORIGINALS</span>
                </a>
                <a>
                    <img src="/images/series-icon.svg"></img>
                    <span>SERIES</span>
                </a>

            </NavMenu>
            <UserImage src = "https://i.kinja-img.com/gawker-media/image/upload/t_original/ijsi5fzb1nbkbhxa2gc1.png"/>
                
        </Nav>
    )
}

export default Header

const Nav=styled.div`
    height:70px;
    background:#090b13;
    display:flex;
    align-items:center;
    padding:0 36px;
`

//--------------------
const Logo = styled.img`
    width:80px;
`

//-------------------
const NavMenu = styled.div`
display:flex;
flex: 1;
a{
    display:flex;
    align-items:center;
    cursor: pointer;
    padding:0 12px;
    margin-left: 25px;

    img{
        height:20px;
    }
    span
    {
        font-size: 13px;
        letter-spacing: 1.42px;
        position: relative;

        &:after{
            content:"";
            height: 2px;
            position: absolute;
            //top:0;
            bottom:-6px;
            left:0;
            right: 0;
            background: white;
            opacity: 0;
            transform-origin:left center;
            transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
            transform: scaleX(0);
        }
    }

        &:hover{
            span:after{
                transform: scaleX(1);
                opacity: 1;
            }
        }
    }
`
const UserImage = styled.img`
width:45px;
height:40px;
border-radius: 50%;
display: flex;
justify-content: flex-start;
`
