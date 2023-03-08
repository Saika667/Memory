import styled from "styled-components"
import { darken } from "polished"

const BlueberryCardContainer = styled.div`

`

const BlueberryContainer = styled.div`
    position: absolute;

    &.berryOne {
        bottom: 2rem;
        left: 2.5rem;
    }
    &.berryTwo {
        bottom: 2rem;
        left: 3.4rem;
        transform: rotate(-116deg);
    }
    &.berryThree {
        bottom: 2.8rem;
        left: 3rem;
        transform: rotate(183deg);
    }
    &.berryFour {
        bottom: 1.8rem;
        left: 1.8rem;
        transform: rotate(126deg);
    }
    &.berryFive {
        bottom: 2.88rem;
        left: 2rem;
        transform: rotate(-45deg);
    }
    &.berrySix {
        bottom: 2rem;
        left: 0.5rem;
        transform: rotate(163deg);
    }
    &.berrySeven {
        bottom: 2rem;
        left: 4.6rem;
        transform: rotate(180deg);
    }
    &.berryEight {
        bottom: 2.8rem;
        left: 4.1rem;
        transform: rotate(163deg);
    }
    &.berryNine {
        bottom: 3.6rem;
        left: 3.5rem;
        transform: rotate(214deg);
    }
`

const Blueberry = styled.div`
    width: 1.2rem;
    height: 1rem;
    border-radius: 50%;
    background-color: #5719c2;
    position: relative;

    &:before, &:after {
        content: '';
        position: absolute;
        border-radius: 50%;
    }

    &:after {
        width: .3rem;
        height: .2rem;
        background-color: ${darken(.2, "#5719c2")};
        bottom: .1rem;
        left: .5rem;
    }

    &:before {
        width: 1.2rem;
        height: 1rem;
        background: radial-gradient(circle at 53% 74%,transparent 72%,#2e0d68 35%);
    }
`

const BlueberryBottom = styled.div`
    width: .1rem;
    height: .2rem;
    border-radius: 50% 50% 0 0;
    background-color: ${darken(.2, "#5719c2")};
    position: absolute;

    &.one {
        bottom: 0.15rem;
        left: 0.6rem;
    }

    &.two {
        bottom: 0.15rem;
        left: 0.5rem;
        transform: rotate(-45deg);
    }

    &.three {
        bottom: 0.05rem;
        left: 0.5rem;
        transform: rotate(-90deg);
    }

    &.four {
        bottom: 0;
        left: 0.6rem;
        transform: rotate(163deg);
    }

    &.five {
        bottom: 0.03rem;
        left: 0.7rem;
        transform: rotate(114deg);
    }

    &.six {
        bottom: 0.15rem;
        left: 0.65rem;
        transform: rotate(79deg);
    }
`

function BlueberryCard() {
    return (
        <BlueberryCardContainer>
           <BlueberryContainer className="berryOne">
                <Blueberry />
                <BlueberryBottom className="one"/>
                <BlueberryBottom className="two"/>
                <BlueberryBottom className="three"/>
                <BlueberryBottom className="four"/>
                <BlueberryBottom className="five"/>
                <BlueberryBottom className="six"/>
           </BlueberryContainer>

           <BlueberryContainer className="berryTwo">
                <Blueberry />
                <BlueberryBottom className="one"/>
                <BlueberryBottom className="two"/>
                <BlueberryBottom className="three"/>
                <BlueberryBottom className="four"/>
                <BlueberryBottom className="five"/>
                <BlueberryBottom className="six"/>
           </BlueberryContainer>

           <BlueberryContainer className="berryThree">
                <Blueberry />
                <BlueberryBottom className="one"/>
                <BlueberryBottom className="two"/>
                <BlueberryBottom className="three"/>
                <BlueberryBottom className="four"/>
                <BlueberryBottom className="five"/>
                <BlueberryBottom className="six"/>
           </BlueberryContainer>

           <BlueberryContainer className="berryFour">
                <Blueberry />
                <BlueberryBottom className="one"/>
                <BlueberryBottom className="two"/>
                <BlueberryBottom className="three"/>
                <BlueberryBottom className="four"/>
                <BlueberryBottom className="five"/>
                <BlueberryBottom className="six"/>
           </BlueberryContainer>

           <BlueberryContainer className="berryFive">
                <Blueberry />
                <BlueberryBottom className="one"/>
                <BlueberryBottom className="two"/>
                <BlueberryBottom className="three"/>
                <BlueberryBottom className="four"/>
                <BlueberryBottom className="five"/>
                <BlueberryBottom className="six"/>
           </BlueberryContainer>

           <BlueberryContainer className="berrySix">
                <Blueberry />
                <BlueberryBottom className="one"/>
                <BlueberryBottom className="two"/>
                <BlueberryBottom className="three"/>
                <BlueberryBottom className="four"/>
                <BlueberryBottom className="five"/>
                <BlueberryBottom className="six"/>
           </BlueberryContainer>

           <BlueberryContainer className="berrySeven">
                <Blueberry />
                <BlueberryBottom className="one"/>
                <BlueberryBottom className="two"/>
                <BlueberryBottom className="three"/>
                <BlueberryBottom className="four"/>
                <BlueberryBottom className="five"/>
                <BlueberryBottom className="six"/>
           </BlueberryContainer>

           <BlueberryContainer className="berryEight">
                <Blueberry />
                <BlueberryBottom className="one"/>
                <BlueberryBottom className="two"/>
                <BlueberryBottom className="three"/>
                <BlueberryBottom className="four"/>
                <BlueberryBottom className="five"/>
                <BlueberryBottom className="six"/>
           </BlueberryContainer>

           <BlueberryContainer className="berryNine">
                <Blueberry />
                <BlueberryBottom className="one"/>
                <BlueberryBottom className="two"/>
                <BlueberryBottom className="three"/>
                <BlueberryBottom className="four"/>
                <BlueberryBottom className="five"/>
                <BlueberryBottom className="six"/>
           </BlueberryContainer>
        </BlueberryCardContainer>
    )
}

export default BlueberryCard