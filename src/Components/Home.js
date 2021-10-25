import React, {useEffect} from 'react'
import styled from 'styled-components'
import ImageSlider from './ImageSlider'
import Viewer from './Viewer'
import Movies from './Movies'
import db from '../firebase'
import { collection, doc, setDoc,onSnapshot,getDoc,query } from "firebase/firestore";

function Home() {
    const movies = query(collection(db,"movies")); 
   // const docI = [];
    useEffect(()=>{
           onSnapshot(movies,(snapshot)=>{
                let docId = snapshot.docs.map((doc)=>{
                    //console.log(doc.data());
                    return{ id : doc.id, ...doc.data()}
                })
                console.log(docId)
            })      
    }, [])

    // useEffect(() => {
    //     const q = query(collection(db, "movies"))
    //     let unsub = onSnapshot(q, (querySnapshot) => {
    //         querySnapshot.docs.map((d) =>{
    //           return{id:d.id,...d.data()};
    //     });
    //   }, [])
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
