import styled from "styled-components"
import { darken } from "polished"

const LemonCardContainer = styled.div`

`

const LemonContainer = styled.div`
    position: absolute;
    width: 4rem;
    height: 5.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 1rem;
    left: .5rem;
    transform: rotate(20deg);
`
const LemonTop = styled.div`
    width: 1.6rem;
    height: 0.5rem;
    border-radius: 7pc 7pc 0 0;
    background-color: #ebeb0a;
    position: absolute;
    top: 0.6rem;
    left: 1.2rem;

    &:before {
        content: '';
        width: .8rem;
        height: 0.5rem;
        border-radius: 7pc 7pc 0 0;
        position: absolute;
        background-color: #ebeb0a;
        top: -0.3rem;
        left: 0.4rem;
    }
`

const LemonBody = styled.div`
    width: 3.4rem;
    height: 4rem;
    border-radius: 50%;
    background-color: #ebeb0a;

    &:after {
        content: '';
        background: radial-gradient(circle at 112% 50%,transparent 83%,${darken(.2,'#ebeb0a')} 35%);
        width: 3rem;
        height: 4rem;
        border-radius: 50%;
        position: absolute;
        top: 0.8rem;
        left: 0.7rem;
        transform: rotate(-4deg);
    }
`

const LemonBottom = styled.div`
    width: 1.3rem;
    height: 0.5rem;
    border-radius: 0 0 7pc 7pc;
    background-color: #ebeb0a;
    position: absolute;
    bottom: 0.5rem;
    left: 1.3rem;
`

const Branch = styled.div`
    width: 0.2rem;
    height: 0.8rem;
    background: radial-gradient(circle at 112% -11%,transparent 27%,green 26%);
    position: absolute;
    top: -0.4rem;
`

const Leaf = styled.div`
    width: 1.7rem;
    height: 2.7rem;
    border-radius: 7pc 0 7pc 0;
    position: absolute;
    top: -0.55rem;
    left: -0.15rem;
    background-color: #13c313;
    z-index: 1;
    transform: rotate(20deg);

    &:before {
        content: '';
        border-radius: 50%;
        width: .1rem;
        height: 2.5rem;
        background-color: ${darken(.2,"#13c313")};
        position: absolute;
        left: 0.8rem;
        top: 0.1rem;
        transform: rotate(29deg);
    }
`

const SkinBlemish = styled.div`
    width: .1rem;
    height: .1rem;
    border-radius: 50%;
    background-color: ${darken(.2,'#ebeb0a')};
    position: absolute;

    &.one {
        top: 1.7rem;
        left: 2.9rem;
    }
    &.two {
        top: 1rem;
        left: 2.5rem;
    }
    &.three {
        top: 1.4rem;
        left: 2.2rem;
    }
    &.four {
        top: 2.9rem;
        left: 2.5rem;
    }
    &.five {
        top: 3.7rem;
        left: 2.9rem;
    }
    &.six {
        top: 2.5rem;
        left: 3.4rem;
    }
    &.seven {
        top: 2.2rem;
        left: 2.9rem;
    }
    &.eight {
        top: 3.2rem;
        left: 3.2rem;
    }
    &.nine {
        top: 4.2rem;
        left: 2.7rem;
    }
    &.ten {
        top: 2.7rem;
        left: 3.2rem;
    }
`

function LemonCard() {
    return (
        <LemonCardContainer>
           <LemonContainer>
                <Leaf />
                <Branch />
                <LemonTop />
                <LemonBody>
                    <SkinBlemish className="one"/>
                    <SkinBlemish className="two"/>
                    <SkinBlemish className="three"/>
                    <SkinBlemish className="four"/>
                    <SkinBlemish className="five"/>
                    <SkinBlemish className="six"/>
                    <SkinBlemish className="seven"/>
                    <SkinBlemish className="eight"/>
                    <SkinBlemish className="nine"/>
                    <SkinBlemish className="ten"/>
                </LemonBody>
                <LemonBottom />
           </LemonContainer>
        </LemonCardContainer>
    )
}

export default LemonCard