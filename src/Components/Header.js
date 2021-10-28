
import React,{useEffect} from 'react'
import styled from 'styled-components'
import {
    selectuserPhoto,selectuserName,setUserLogin, setSignOut
} from "../features/user/userSlice"
import { GoogleAuthProvider,getAuth,signInWithPopup,signOut } from "firebase/auth";
import { useHistory } from 'react-router';

import {useSelector,useDispatch } from 'react-redux'
import { auth } from '../firebase';

function Header() {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    const userName = useSelector(selectuserName);
    const userPhoto = useSelector(selectuserPhoto);
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        auth.onAuthStateChanged(async (user)=>{
            if(user)
            {
                dispatch(setUserLogin({
                    name : user.displayName,
                    email:user.email,
                    photo:user.photoURL,

                }))
                history.push('/');
            }
        })
    }, [])



    const signin = () =>{
        signInWithPopup(auth,provider).then((result)=>{
                let user = result.user;
                dispatch(setUserLogin({
                    name : user.displayName,
                    email:user.email,
                    photo:user.photoURL,

                }))
                history.push('/')
        })
    }

    const signout = () =>{
        signOut(auth).then(()=>{
            dispatch(setSignOut());
            history.push('/login');
        })
    }
    return (
        <Nav>
            <Logo src="/images/logo.svg"/>
            {
                !userName?(
                    <LoginContainer>
                        <Login onClick = {signin}>Login</Login>
                    </LoginContainer>
                )
                :
                <>
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
                    <UserImage onClick={signout} src = "https://i.kinja-img.com/gawker-media/image/upload/t_original/ijsi5fzb1nbkbhxa2gc1.png"/>
                </>

            }
           
                
        </Nav>
    )
}

export default Header

const Login = styled.div`

border:1px solid #f9f9f9;
padding : 8px 16px;
border-radius: 4px;
letter-spacing: 1.5px;
text-transform: uppercase;
background-color: rgba(0,0,0,0.6);
cursor: pointer;
transition: all 0.2s ease 0s;

&:hover{
    background-color: #f9f9f9;
    color:#000;
    border-color:transparent;
}
`
const LoginContainer = styled.div`
    display:flex;
    flex:1;
    justify-content: flex-end;
`

const Nav=styled.div`
    height:70px;
    background:#090b13;
    display:flex;
    align-items:center;
    padding:0 36px;
    overflow-x: hidden;
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
cursor: pointer;
transition: all 0.5s ease-in;
&:hover{
    border:2px solid red;
    transform:scale(1.1);
}
//display: flex;
//justify-content: flex-start;
`
