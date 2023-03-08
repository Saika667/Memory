import styled from "styled-components"
import { darken } from "polished"

const PeachCardContainer = styled.div`
    
`

const PeachContainer = styled.div`
    position: absolute;
    width: 3.3rem;
    height: 3.5rem;
    z-index: -1;

    &.peach {
        left: .4rem;
        top: .7rem;
        transform: rotate(-20deg);
    }

    &.halfPeach {
        top: 2.5rem;
        left: 2.5rem;
    }
`

const Peach = styled.div`
    width: 2.4rem;
    height: 3rem;
    border-radius: 50%;
    background: radial-gradient(circle at calc(100% - 1.5rem) calc(100% - 2.1rem),rgba(243,182,69,1) 12%,rgba(228,77,12,1) 46%);
    position: absolute;
    bottom: 0;

    &:before {
        content: '';
        width: 2.5rem;
        height: 3rem;
        border-radius: 50%;
        background-color: #e44d0c;
        position: absolute;
        top: -.1rem;
        right: -0.7rem;
        transform: rotate(38deg);
        z-index: -1;
    }

    &:after {
        content: '';
        background: radial-gradient(circle at 97% 50%,transparent 83%,${darken(.2,'#e44d0c')} 35%);
        width: 3rem;
        height: 3.5rem;
        border-radius: 50%;
        position: absolute;
        top: -0.3rem;
        left: -0.6rem;
        transform: rotate(196deg);
        z-index: 0;
    }
`

const Stem = styled.div`
    width: 0.15rem;
    height: 0.8rem;
    background: radial-gradient(circle at 127% -11%,transparent 27%,brown 26%);
    position: absolute;
    left: 1.7rem;
    transform: rotate(20deg);
    z-index: 0;
`

const Leaf = styled.div`
    width: 1rem;
    height: 1rem;
    border-radius: 50% 7pc 50% 7pc;
    background-color: green;
    z-index: 3;
    position: absolute;
    top: 0.4rem;
    left: 1.75rem;
    transform: rotate(-2deg);
`

const PeachInside = styled.div`
    width: 2.3rem;
    height: 2.9rem;
    border-radius: 50%;
    background: #ffdb99;
    position: absolute;
    top: .05rem;
    left: .05rem;
    z-index: 1;

    &:before {
        content: '';
        width: 2.4rem;
        height: 2.9rem;
        border-radius: 50%;
        background-color: #ffdb99;
        position: absolute;
        top: -.1rem;
        right: -0.7rem;
        transform: rotate(38deg);
    }
`

const Core = styled.div`
    width: 1.3rem;
    height: 1.4rem;
    border-radius: 7pc 50% 7pc 50%;
    background: #704900;
    position: absolute;
    top: .7rem;
    left: .9rem;
    transform: rotate(-40deg);
    z-index: 2;
`

function PeachCard() {
    return(
        <PeachCardContainer>
            <PeachContainer className="peach">
                <Stem />
                <Leaf />
                <Peach>

                </Peach>
            </PeachContainer>

            <PeachContainer className="halfPeach">
                <Peach>
                    <PeachInside>
                        <Core>

                        </Core>
                    </PeachInside>
                </Peach>
            </PeachContainer>
        </PeachCardContainer>
    )
}

export default PeachCard
