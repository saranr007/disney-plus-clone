import React, {useEffect} from 'react'
import styled from 'styled-components'
import ImageSlider from './ImageSlider'
import Viewer from './Viewer'
import Movies from './Movies'
import db from '../firebase'
import { collection, doc, setDoc,onSnapshot,getDoc,query } from "firebase/firestore";
import {useDispatch} from 'react-redux'; 
import {setMovies} from "../features/Movies/movieSlicer";

function Home() {
    const movies = query(collection(db,"movies")); 
    const dispatch = useDispatch();
    useEffect(()=>{
           onSnapshot(movies,(snapshot)=>{
                let tempMovies = snapshot.docs.map((doc)=>{
                    return{ id : doc.id, ...doc.data()}
                })
                //console.log(tempMovies);
                dispatch(setMovies(tempMovies));
            })      
    }, [])

    return (
        <Container>
            <ImageSlider/>
            <Viewer/>
            <Movies/>
        </Container>
    )
}

export default Home

const Container = styled.main`
min-height: calc(100ch - 70px);
padding: 0 calc(3.5vw + 5px);
position: relative;
overflow-x: hidden;

&:before{
    background: url('/images/home-background.png') center center / cover no-repeat fixed;
    content: "";
    position: absolute;
    top:0;
    left: 0;
    right:0;
    bottom:0;
    z-index:-1;
}

`
