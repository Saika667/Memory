import styled from "styled-components"
import { darken } from "polished"

const CoconutCardContainer = styled.div`
    
`

const CoconutContainer = styled.div`
    position: absolute;

    &.coco {
        top: 1.5rem;
        left: 2.5rem;
        transform: rotate(65deg);
    }

    &.halfCoco {
        top: 3.7rem;
        left: .4rem;
        transform: rotate(27deg);
    }
`

const Coconut = styled.div`
    width: 3rem;
    height: 3.4rem;
    background-color: #583429;
    border-radius: 50%;
    position: relative;
`

const CoconutHole = styled.div`
    width: .3rem;
    height: .3rem;
    background-color: ${darken(.1, "#583429")};
    border-radius: 50%;
    position: absolute;

    &.one {
        top: .5rem;
        left: 1rem;
    }

    &.two {
        top: 1rem;
        left: .7rem;
    }

    &.three {
        top: 1.2rem;
        left: 1.3rem;
    }
`

const HalfCoconut = styled.div`
    width: 3rem;
    height: 2.4rem;
    background-color: #583429;
    border-radius: 5px 5px 50% 50%;
    position: relative;

    &:before {
        content: '';
        width: 3rem;
        height: 1rem;
        border-radius: 50%;
        background-color: #583429;
        position: absolute;
        top: -.25rem;
    }

    &:after {
        content: '';
        width: 3rem;
        height: 2.4rem;
        border-radius: 5px 5px 50% 50% ;
        background: radial-gradient(circle at 28% -11%,transparent 64%,${darken(.1,'#583429')} 35%);
        position: absolute;
        bottom: 0;
    }
`

const HalfCoconutWhite = styled.div`
    width: 2.8rem;
    height: 1rem;
    border-radius: 50%;
    background-color: white;
    position: absolute;
    left: .1rem;
    top: -.2rem;
`

const HalfCoconutInside = styled.div`
    width: 2.6rem;
    height: .8rem;
    border-radius: 50%;
    background: linear-gradient(0deg, rgba(222,218,213,1) 16%, rgba(255,255,255,1) 89%);
    position: absolute;
    left: .1rem;
    top: .1rem;
`


function CoconutCard() {
    return(
        <CoconutCardContainer>
            <CoconutContainer className="coco">
                <Coconut>
                    <CoconutHole className="one"/>
                    <CoconutHole className="two"/>
                    <CoconutHole className="three"/>
                </Coconut>
            </CoconutContainer>

            <CoconutContainer className="halfCoco">
                <HalfCoconut>
                    <HalfCoconutWhite>
                        <HalfCoconutInside />
                    </HalfCoconutWhite>
                </HalfCoconut>
            </CoconutContainer>
        </CoconutCardContainer>
    )
}

export default CoconutCard