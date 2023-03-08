import styled from "styled-components"
import { darken } from "polished"

const GrapeCardContainer = styled.div`

`

const BunchOfGrapes = styled.div`
    position: absolute;
    width: 5rem;
    height: 6rem;
    top: .4rem;
    left: .5rem;
    transform: rotate(10deg);
`

const GrapeContainer = styled.div`
    position: absolute;

    &.one {
        bottom: 0;
        left: 2rem;
    }

    &.two {
        bottom: .77rem;
        left: 2.4rem;
    }

    &.three {
        bottom: .77rem;
        left: 1.6rem;
    }

    &.four {
        bottom: 1.52rem;
        left: 2rem;
        z-index: 2;
    }

    &.five {
        bottom: 1.52rem;
        left: 1.15rem;
    }

    &.six {
        bottom: 1.52rem;
        left: 2.85rem;
    }

    &.seven {
        bottom: 2.24rem;
        left: 2.4rem;
        z-index: 2;
    }

    &.eight {
        bottom: 2.24rem;
        left: 1.6rem;
        z-index: 2;
    }

    &.nine {
        bottom: 2.24rem;
        left: .7rem;
    }

    &.ten {
        bottom: 2.24rem;
        left: 3.3rem;
    }

    &.eleven {
        bottom: 2.96rem;
        left: 2rem;
        z-index: 2;
    }

    &.twelve {
        bottom: 2.96rem;
        left: 1.15rem;
    }

    &.thirteen {
        bottom: 2.96rem;
        left: 2.85rem;
    }
`

const Grape = styled.div`
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background-color: #A82375;
    position: relative;

    &:before {
        content: '';
        width: .85rem;
        height: .85rem;
        border-radius: 50%;
        background: radial-gradient(circle at 50% 66%,transparent 41%,${darken(.2,'#A82375')} 45%);
        position: absolute;
        top: 0;
        left: .075rem;
    }
`

const Stem = styled.div`
    width: 2.3rem;
    height: 0.7rem;
    background: radial-gradient(circle at 50% -216%,transparent 83%,#684c2d 35%);
    border-radius: 50%;
    position: absolute;
    top: .75rem;
    left: 1.3rem;

    &:before {
        content: '';
        width: 1rem;
        height: 0.7rem;
        background: radial-gradient(circle at 50% -123%,transparent 88%,#684c2d 35%);
        border-radius: 50%;
        position: absolute;
        bottom: -.7rem;
        left: .9rem;
        transform: rotate(90deg);
    }

    &:after {
        content: '';
        width: .7rem;
        height: 0.7rem;
        background: radial-gradient(circle at 50% -70%,transparent 90%,#684c2d 35%);
        border-radius: 50%;
        position: absolute;
        bottom: -.2rem;
        left: 1.7rem;
        transform: rotate(60deg);
    }
`

const LeafContainer = styled.div`
    position: absolute;
    width: 1.5rem;
    height: 1.5rem;
    transform: rotate(134deg);
    top: 1.3rem;
    left: 2.9rem;
    z-index: 1;
`

const LeafTop = styled.div`
    width: .7rem;
    height: .7rem;
    background-color: green;
    border-radius: 7pc 50% 7pc 50%;
    position: absolute;
    left: .38rem;
    top: .2rem;
    transform: rotate(-45deg);
    z-index: 1;

    &:before {
        content: '';
        width: .4rem;
        height: .4rem;
        background-color: green;
        position: absolute;
        bottom: -.2rem;
        left: -.1rem;
    }

    &:after {
        content: '';
        width: .05rem;
        height: 1.1rem;
        border-radius: 50%;
        background-color: ${darken(.2,"green")};
        position: absolute;
        top: .05rem;
        left: .1rem;
        transform: rotate(45deg);
    }
`

const LeafMiddle = styled.div`
    width: .6rem;
    height: .6rem;
    background-color: green;
    border-radius: 7pc 50% 7pc 50%;
    position: absolute;
    bottom: .55rem;
    left: .75rem;
    transform: rotate(-5deg);

    &:before {
        content: '';
        width: .6rem;
        height: .6rem;
        background-color: green;
        border-radius: 50% 7pc 50% 7pc;
        position: absolute;
        bottom: .05rem;
        left: -.55rem;
        transform: rotate(10deg);
    }
`

const LeafBottom = styled.div`
    width: .8rem;
    height: .8em;
    background-color: green;
    border-radius: 7pc 50% 7pc 50%;
    position: absolute;
    bottom: 0;
    left: .65rem;

    &:before {
        content: '';
        width: .8rem;
        height: .8rem;
        background-color: green;
        border-radius: 50% 7pc 50% 7pc;
        position: absolute;
        bottom: 0;
        left: -.6rem;
    }
`

function GrapeCard() {
    return(
        <GrapeCardContainer>
            <BunchOfGrapes>
                <Stem />

                <LeafContainer>
                    <LeafTop />
                    <LeafMiddle />
                    <LeafBottom />
                </LeafContainer>
                <GrapeContainer className="one">
                    <Grape />
                </GrapeContainer>

                <GrapeContainer className="two">
                    <Grape />
                </GrapeContainer>

                <GrapeContainer className="three">
                    <Grape />
                </GrapeContainer>

                <GrapeContainer className="four">
                    <Grape />
                </GrapeContainer>

                <GrapeContainer className="five">
                    <Grape />
                </GrapeContainer>

                <GrapeContainer className="six">
                    <Grape />
                </GrapeContainer>

                <GrapeContainer className="seven">
                    <Grape />
                </GrapeContainer>

                <GrapeContainer className="eight">
                    <Grape />
                </GrapeContainer>

                <GrapeContainer className="nine">
                    <Grape />
                </GrapeContainer>

                <GrapeContainer className="ten">
                    <Grape />
                </GrapeContainer>

                <GrapeContainer className="eleven">
                    <Grape />
                </GrapeContainer>

                <GrapeContainer className="twelve">
                    <Grape />
                </GrapeContainer>

                <GrapeContainer className="thirteen">
                    <Grape />
                </GrapeContainer>
            </BunchOfGrapes>
        </GrapeCardContainer>
    )
}

export default GrapeCard