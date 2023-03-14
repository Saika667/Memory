import BackCard from "./BackCard"
import styled from "styled-components"
import { useState } from "react"

const CardContainer = styled.div`
    width: 7rem;
    height: 8rem;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    transform: rotateY(-180deg);
    cursor: pointer;
    .card {
        transform: rotateY(180deg);
    }
`

const CardContent = styled.div`
    width: 7rem;
    height: 8rem;
    background-color: white;
    border-radius: 3px;
    border: .5rem solid green;
    position: absolute;
    transition: all 300ms ease;
    transform-style: preserve-3d;
    box-sizing: border-box;
`

function Card({children, isVisible, play, value, index}) {

    /*
    isVisible permet de récupérer le state du parent (GamePage) visibilitiesCard que répertories les cartes
    retournées à l'aide de ".includes(i)"
    className={`${navMenuActive === 1 ? 'active' : ''}`}
    */
    return (
        <CardContainer onClick={() => {play(value, index)}}>
            <CardContent className={`${!isVisible ? 'card' : ''}`}>
                {isVisible && children}
                {!isVisible && <BackCard />}
            </CardContent>
        </CardContainer>
    )
}

export default Card