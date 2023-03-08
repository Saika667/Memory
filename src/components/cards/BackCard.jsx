import styled from "styled-components"

const BackCardContainer = styled.div`
    position: absolute;
    backface-visibility: hidden;
    transform: rotateY(-180deg);
`

const BackCardContent = styled.div`
    width: 6rem;
    height: 7rem;
    background-color: blue;
`

function BackCard() {

    return (
        <BackCardContainer>
            <BackCardContent>
               
            </BackCardContent>
        </BackCardContainer>
    )
}

export default BackCard