import React, {useEffect,useState} from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import db from  '../firebase'
import { collection, getDoc, query,doc } from '@firebase/firestore'
import Movies from './Movies'

function Detail() {
    const {id} = useParams();
    //console.log(id);
    const[movie,setMovie] = useState();
    //console.log(movieD.data());

    useEffect(()=>{
        // let movieDatabase = doc(db,"movies",id);
        // let docsnap = getDoc(movieDatabase);
        getDoc(doc(db,"movies",id)).then((docbytID)=>{
                if(docbytID.exists())
                {
                    setMovie(docbytID.data());
                    
                }
                else
                {
                    console.log("Not found");
                }
            })
           
    },[])
       
    


    //console.log("Movie is ", movie);
    return (
        
        <Container>
            {movie&&(
            <>
                <Background>
                    <img src={movie.bg}/>
                </Background>
                <ImageTitle>
                    <img src={movie.ti}/>
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
                    {movie.subtitle}
                </SubTitle>
                <Description>
                    {movie.description}
                </Description>
            </>
            )}
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