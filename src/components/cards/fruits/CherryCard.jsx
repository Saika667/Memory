import styled from "styled-components"
import { lighten } from "polished"

const CherryCardContainer = styled.div`
    
`

const CherryContainer = styled.div`
    width: 5rem;
    height: 6rem;
    position: absolute;
    top: .5rem;
    left: .5rem;
`

const CherryBodyContainer = styled.div`
    position: absolute;
    bottom: 0;

    &.cherryOne {
        left: .2rem;
    }

    &.cherryTwo {
        left: 3rem;
    }
`

const CherryBody = styled.div`
    width: 1.5rem;
    height: 2rem;
    border-radius: 50%;
    background-color: darkred;
    position: relative;

    &:after {
        content: '';
        position: absolute;
        left: .65rem;
        width: 1.2rem;
        height: 2rem;
        border-radius: 50%;
        background-color: darkred;
    }
    &:before {
        content: '';
        position: absolute;
        top: .2rem;
        left: 1.2rem;
        width: .5rem;
        height: 1.5rem;
        border-radius: 50%;
        background-color: ${lighten(.1, 'darkred')};
        z-index: 1;
    }
`

const Stem = styled.div`
    background: radial-gradient(circle at 1234% 50%,transparent 94%,#1EA529 35%);
    width: 0.5rem;
    height: 4rem;
    border-radius: 50%;
    position: absolute;

    &.stemOne {
        left: 1.75rem;
        top: .55rem;
        transform: rotate(25deg);
    }

    &.stemTwo {
        left: 3.2rem;
        top: .55rem;
        transform: rotate(-20deg);
    }
`
const LeafContainer = styled.div`
    position: absolute;
    z-index: 1;

    &.leafOne {
        top: .8rem;
        left: 1.5rem;
        transform: rotate(-12deg);
    }

    &.leafTwo {
        top: .65rem;
        left: 2.75rem;
        transform: rotate(45deg);
    }
`

const Leaf = styled.div`
    width: 1.5rem;
    height: .8rem;
    border-radius: 7pc 0 7pc 0;
    background-color: green;
    position: relative;

    &:after {
        content: '';
        border-radius: 50%;
        width: 1.2rem;
        height: .1rem;
        background-color: ${lighten(.1, 'green')};
        position: absolute;
        top: .4rem;
        left: .1rem;
        transform: rotate(-20deg);
    }
`

function CherryCard() {
    return (
        <CherryCardContainer>
            <CherryContainer>
                <LeafContainer className="leafOne">
                    <Leaf />
                </LeafContainer>
                <LeafContainer className="leafTwo">
                    <Leaf />
                </LeafContainer>
                <Stem className="stemOne"/>
                <Stem className="stemTwo"/>
                <CherryBodyContainer className="cherryOne">
                    <CherryBody />
                </CherryBodyContainer>
                <CherryBodyContainer className="cherryTwo">
                    <CherryBody />
                </CherryBodyContainer>
            </CherryContainer>
        </CherryCardContainer>
    )
}

export default CherryCard