import React from 'react'
import styled from 'styled-components'

function Detail() {
    return (
        <Container>
            <Background>
                <img src="https://images8.alphacoders.com/779/thumb-1920-779649.jpg"/>
            </Background>
            <ImageTitle>
                <img src="https://upload.wikimedia.org/wikipedia/commons/3/36/The_logo_simpsons_yellow.svg"/>
            </ImageTitle>
            <Controls>
                <PlayButton>
                    <img src = "/images/play-icon-black.png" />
                    <span>PLAY</span>
                </PlayButton>
                <TrailerButton>
                    <img src = "/images/play-icon-white.png" />
                    <span>TRAILER</span>
                </TrailerButton>
                <AddButton>
                    <span>+</span>
                </AddButton>
                <GroupWatchButton>
                    <img src = "/images/group-icon.png" />
                </GroupWatchButton>
            </Controls>
            <SubTitle>
                1 hr 23 min - 2007 - Animation - U/A 13+ - English
            </SubTitle>
            <Description>
                The film follows Homer Simpson, who irresponsibly pollutes the lake in Springfield, causing the Environmental Protection Agency to imprison the town under a dome.
            </Description>
        </Container>
    )
}

export default Detail

const Container = styled.div`
    min-height: calc(100vh - 70px);
    padding:0 calc(3.5vw + 5px);
    position: relative;
`
const Background = styled.div`
    position:fixed;
    top:0;
    bottom: 0;
    left:0;
    right:0;
    z-index:-1;
    opacity: 0.6;

    img{
        width:100%;
        height:100%;
        object-fit: cover;
    }

`

const ImageTitle = styled.div`
    height:30vh;
    width:35vw;
    min-height:170px;
    min-width:200px;
    margin-top:60px;

    img{
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`

const Controls=styled.div`
    display:flex;
    align-items:center;

`
const PlayButton = styled.button`
border-radius : 4px;
font-size:15px;
margin-right: 22px;;
padding:0px 24px;
display:flex;
align-items: center;
height:56px;
background-color:rgb(249,249,249);
border:none;
letter-spacing: 1.8px;
cursor:pointer;

&:hover{
    background-color: rgb(198,198,198);
}
`

const TrailerButton = styled(PlayButton)`
    background: rgba(0,0,0,0.3);
    border : 1px solid rgb(249,249,249);
    color:rgb(249,249,249);
    text-transform : uppercase;
`

const AddButton = styled.button`
    margin-right:16px;
    width:44px;
    height:44px;
    display:flex;
    align-items:center;
    justify-content: center;
    border-radius:50%;
    border:2px solid white;
    background-color:rgba(0,0,0,0.6);
    span{
        font-size:30px;
        color:white;
    }
    cursor:pointer;
`

const GroupWatchButton = styled(AddButton)`
    background:rgb(0,0,0);

`

const SubTitle = styled.div`
   color:rgb(249,249,249);
   font-size:15px;
   min-height:20px;
   margin-top:26px;
`
const Description = styled.div`
    display:flex;
    max-width:760px;
    line-height:1.4;
    font-size:20px;
    margin-top:16px;
    color:rgb(249,249,249);

`