import styled from "styled-components"
import { darken } from "polished"

const BananaCardContainer = styled.div`

`

const BananaContainer = styled.div`
    width: 2rem;
    height: 5rem;
    position: absolute;
    display: flex;
    justify-content: flex-end;
    flex-direction: column;

    &.bananaOne {
        top: 0.85rem;
        left: 1.45rem;
        transform: rotate(10deg);
    }

    &.bananaTwo {
        top: 1.05rem;
        left: 2.05rem;
        transform: rotate(0deg);
    }

    &.bananaThree {
        top: .45rem;
        left: .95rem;
        transform: rotate(23deg);
    }

    &.bananaFour {
        top: 1.15rem;
        left: 2.75rem;
        transform: rotate(-16deg);
    }

    &.bananaFive {
        top: 1.15rem;
        left: 3.45rem;
        transform: rotate(-27deg);
    }
`

const BananaTop = styled.div`
    background: linear-gradient(0deg, rgba(219,255,51,1) 23%, rgba(112,253,1,1) 100%);
    width: 0.3rem;
    height: 0.8rem;
    position: absolute;
    top: 0.45rem;
    left: 1.15rem;
    transform: rotate(45deg);
    border-radius: 50% 50% 0 0;
`

const Banana = styled.div`
    background: radial-gradient(circle at 200% 51%,transparent 75%,#DBFF33 35%);
    width: 2rem;
    height: 4rem;
    border-radius: 50%;
    position: relative;

    &:after {
        content: '';
        background: radial-gradient(circle at 161% 49%,transparent 83%,${darken(.2,'#DBFF33')} 35%);
        width: 2rem;
        height: 4rem;
        border-radius: 50%;
        position: absolute;
        top: 0;
        left: 0.3rem;
        transform: rotate(-4deg);
    }

    &:before {
        content: '';
        background-color: ${darken(.2,'#DBFF33')};
        width: .2rem;
        height: .1rem;
        border-radius: 50%;
        position: absolute;
        bottom: 0;
        left: 1rem;
    }
`
const BananaRegimentContainer = styled.div`
    position: absolute;
    top: 1rem;
    left: 2.5rem;
    transform: rotate(21deg);
    z-index: 1;
`

const BananaRegiment = styled.div`
    width: 2.3rem;
    height: 0.7rem;
    background: radial-gradient(circle at 50% -216%,transparent 75%,#DBFF33 35%);
    border-radius: 50%;
    position: relative;

    &:before, &:after {
        content: '';
        height: .4rem;
        width: .2rem;
        background-color: ${darken(.2,'#DBFF33')};
        border-radius: 50%;
        position: absolute;
        top: .063rem;
    }

    &:before {
        left: 0.031rem;
        top: 0.094rem;
        transform: rotate(56deg);
    }

    &:after {
        left: 2.05rem;
        top: 0.094rem;
        transform: rotate(-45deg);
    }
`

function BananaCard() {
    return (
        <BananaCardContainer>
            <BananaRegimentContainer>
                <BananaRegiment />
            </BananaRegimentContainer>

            <BananaContainer className="bananaOne">
                <BananaTop />
                <Banana />
            </BananaContainer>

            <BananaContainer className="bananaTwo">
                <BananaTop />
                <Banana />
            </BananaContainer>

            <BananaContainer className="bananaThree">
                <BananaTop />
                <Banana />
            </BananaContainer>

            <BananaContainer className="bananaFour">
                <BananaTop />
                <Banana />
            </BananaContainer>

            <BananaContainer className="bananaFive">
                <BananaTop />
                <Banana />
            </BananaContainer>
        </BananaCardContainer>
    )
}

export default BananaCard