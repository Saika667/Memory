import styled from "styled-components"
import { darken } from "polished"
const ShellfishCardContainer = styled.div`
    
`

export const ShellfishContainer = styled.div`
    width: 4rem;
    height: 3.3rem;
    position: absolute;
`

export const ShellfishTop = styled.div`
    width: .7rem;
    height: .5rem;
    border-radius: 50%;
    background-color: #ffd1e1;
    position: absolute;

    &.one {
        top: 0rem;
        left: 1.4rem;
    }

    &.two {
        top: 0rem;
        left: 1.9rem;

        &:after {
            content: '';
            background: radial-gradient(circle at 105% 48%,transparent 86%,#6b0025 35%);
            width: 3.2rem;
            height: 3.7rem;
            border-radius: 50%;
            position: absolute;
            top: -1.05rem;
            left: -2.35rem;
            transform: rotate(-4deg) rotateY(235deg);
            z-index: 1;
        }
    }

    &.three {
        top: .2rem;
        left: 1rem;

        &:after {
            content: '';
            background: radial-gradient(circle at 105% 48%,transparent 85%,#6b0025 35%);
            width: 3.2rem;
            height: 3.7rem;
            border-radius: 50%;
            position: absolute;
            top: -0.55rem;
            left: -2.15rem;
            transform: rotate(-19deg) rotateY(162deg);
            z-index: 1;
        }
    }

    &.four {
        top: .2rem;
        left: 2.3rem;

        &:before {
            content: '';
            width: 2rem;
            height: 2rem;
            border-radius: 50%;
            background-color: #ffd1e1;
            transform: rotate(20deg);
            position: absolute;
            top: 0;
            right: .05rem;
        }

        &:after {
            content: '';
            background: radial-gradient(circle at 105% 48%,transparent 84%,#6b0025 35%);
            width: 2.9rem;
            height: 3.5rem;
            border-radius: 50%;
            position: absolute;
            top: -0.65rem;
            left: -.55rem;
            transform: rotate(13deg) rotateY(-47deg);
            z-index: 1;
        }
    }

    &.five {
        top: .5rem;
        left: 2.7rem;
        transform: rotate(20deg);

        &:before {
            content: '';
            width: 1rem;
            height: 2.5rem;
            border-radius: 50%;
            background-color: #ffd1e1;
            transform: rotate(20deg);
            position: absolute;
            top: 0;
            right: .05rem;
            z-index: -1;
        }

        &:after {
            content: '';
            background: radial-gradient(circle at 105% 48%,transparent 84%,#6b0025 35%);
            width: 2.7rem;
            height: 3.3rem;
            border-radius: 50%;
            position: absolute;
            top: -0.7rem;
            left: -.4rem;
            transform: rotate(5deg) rotateY(-47deg);
        }
    }

    &.six {
        top: .5rem;
        left: .6rem;
        transform: rotate(-20deg);

        &:before {
            content: '';
            width: 1rem;
            height: 2.5rem;
            border-radius: 50%;
            background-color: #ffd1e1;
            transform: rotate(-20deg);
            position: absolute;
            top: 0;
            left: .05rem;
            z-index: -1;
        }

        &:after {
            content: '';
            background: radial-gradient(circle at 105% 48%,transparent 84%,#6b0025 35%);
            width: 2.7rem;
            height: 3.3rem;
            border-radius: 50%;
            position: absolute;
            top: -0.6rem;
            left: -1.6rem;
            transform: rotate(-6deg) rotateY(136deg);
        }
    }
`

export const ShellfishBottom = styled.div`
    width: .5rem;
    height: .8rem;
    border-radius: 50%;
    background-color: #ffd1e1;
    position: absolute;
    &.one {
        top: 2.4rem;
        left: 1.75rem;
    }
    &.two {
        top: 2.3rem;
        left: 1.3rem;
        transform: rotate(45deg);
    }
    &.three {
        top: 2.3rem;
        left: 2.2rem;
        transform: rotate(-45deg);
    }
`

function ShellfishCard() {
    return (
        <ShellfishCardContainer>
            <ShellfishContainer>
                <ShellfishTop className="one" />
                <ShellfishTop className="two" />
                <ShellfishTop className="three" />
                <ShellfishTop className="four" />
                <ShellfishTop className="five" />
                <ShellfishTop className="six" />
                <ShellfishBottom className="one" />
                <ShellfishBottom className="two" />
                <ShellfishBottom className="three" />
            </ShellfishContainer>
        </ShellfishCardContainer>
    )
}

export default ShellfishCard