import styled from "styled-components"
import { darken } from "polished"

const PineappleCardContainer = styled.div`
   // position: absolute;
   // backface-visibility: hidden;
`
const PineappleContainer = styled.div`
    position: absolute;
    width: 3rem;
    height: 5rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
    top: 1rem;
    left: .9rem;
`

const TopPineappleContainer = styled.div`
    width: 3rem;
    height: 2rem;
    position: relative;
`

const PineappleLeefContainer = styled.div`
    position: absolute;

    &.leefOne {
        left: 1.6rem;
        top: 0.4rem;
        transform: rotate(45deg);
    }

    &.leefTwo {
        left: 0.5rem;
        top: 0.4rem;
        transform: rotateY(180deg) rotateZ(45deg);
    }

    &.leefThree {
        left: 0.7rem;
        top: 0.1rem;
        transform: rotateY(180deg) rotateZ(45deg);
    }

    &.leefFour {
        left: 0.4rem;
        top: 0.8rem;
        transform: rotateY(180deg) rotateZ(45deg);
    }

    &.leefFive {
        left: 1.4rem;
        top: 0.1rem;
        transform: rotate(45deg);
    }

    &.leefSix {
        left: 1.7rem;
        top: 0.8rem;
        transform: rotate(45deg);
    }
`

const PineappleLeef = styled.div`
    width: 1rem;
    height: 1.5rem;
    background: radial-gradient(circle at 128% 33%,transparent 53%,green 35%);
    border-radius: 50%;
    position: relative;
`

const PineappleBody = styled.div`
    width: 3rem;
    height: 4rem;
    background-color: #FFCE30;
    border-radius: 50% 50% 10px 10px;
    overflow: hidden;
    position: relative;
`

const CirclePineappleBodyContainer = styled.div`
    display: flex;
    width: fit-content;
    position: absolute;
    overflow: hidden;

    &.one {
        top: 0;
        left: .2rem;
    }

    &.two {
        top: 0.4rem;
        left: -0.1rem;
        z-index: 2;
    }

    &.three {
        top: 0.7rem;
        left: -0.4rem;
        z-index: 2;
    }

    &.four {
        top: 1rem;
        left: -0.1rem;
        z-index: 2;
    }

    &.five {
        top: 1.3rem;
        left: -0.4rem;
        z-index: 2;
    }

    &.six {
        top: 1.6rem;
        left: -0.1rem;
        z-index: 2;
    }

    &.seven {
        top: 1.9rem;
        left: -0.4rem;
        z-index: 2;
    }

    &.eight {
        top: 2.2rem;
        left: -0.1rem;
        z-index: 2;
    }

    &.nine {
        top: 2.5rem;
        left: -0.4rem;
        z-index: 2;
    }

    &.ten {
        top: 2.75rem;
        left: -0.1rem;
        z-index: 2;
    }

    &.eleven {
        top: 3rem;
        left: -0.4rem;
        z-index: 2;
    }
`

const CirclePineappleBody = styled.div`
    width: .5rem;
    height: .5rem;
    border: 2px solid ${darken(.2, '#FFCE30')};
    background-color: #FFCE30;
    border-radius: 50%;
`

function PineappleCard() {
    return (
        <PineappleCardContainer>
            <PineappleContainer>
                <TopPineappleContainer>
                    <PineappleLeefContainer className="leefOne">
                        <PineappleLeef />
                    </PineappleLeefContainer>

                    <PineappleLeefContainer className="leefTwo">
                        <PineappleLeef />
                    </PineappleLeefContainer>

                    <PineappleLeefContainer className="leefThree">
                        <PineappleLeef />
                    </PineappleLeefContainer>

                    <PineappleLeefContainer className="leefFour">
                        <PineappleLeef />
                    </PineappleLeefContainer>

                    <PineappleLeefContainer className="leefFive">
                        <PineappleLeef />
                    </PineappleLeefContainer>

                    <PineappleLeefContainer className="leefSix">
                        <PineappleLeef />
                    </PineappleLeefContainer>
                </TopPineappleContainer>

                <PineappleBody>
                    <CirclePineappleBodyContainer className="one">
                        <CirclePineappleBody />
                        <CirclePineappleBody />
                        <CirclePineappleBody />
                        <CirclePineappleBody />
                        <CirclePineappleBody />
                        <CirclePineappleBody />
                    </CirclePineappleBodyContainer>

                    <CirclePineappleBodyContainer className="two">
                        <CirclePineappleBody />
                        <CirclePineappleBody />
                        <CirclePineappleBody />
                        <CirclePineappleBody />
                        <CirclePineappleBody />
                        <CirclePineappleBody />
                    </CirclePineappleBodyContainer>

                    <CirclePineappleBodyContainer className="three">
                        <CirclePineappleBody />
                        <CirclePineappleBody />
                        <CirclePineappleBody />
                        <CirclePineappleBody />
                        <CirclePineappleBody />
                        <CirclePineappleBody />
                    </CirclePineappleBodyContainer>

                    <CirclePineappleBodyContainer className="four">
                        <CirclePineappleBody />
                        <CirclePineappleBody />
                        <CirclePineappleBody />
                        <CirclePineappleBody />
                        <CirclePineappleBody />
                        <CirclePineappleBody />
                    </CirclePineappleBodyContainer>

                    <CirclePineappleBodyContainer className="five">
                        <CirclePineappleBody />
                        <CirclePineappleBody />
                        <CirclePineappleBody />
                        <CirclePineappleBody />
                        <CirclePineappleBody />
                        <CirclePineappleBody />
                    </CirclePineappleBodyContainer>

                    <CirclePineappleBodyContainer className="six">
                        <CirclePineappleBody />
                        <CirclePineappleBody />
                        <CirclePineappleBody />
                        <CirclePineappleBody />
                        <CirclePineappleBody />
                        <CirclePineappleBody />
                    </CirclePineappleBodyContainer>

                    <CirclePineappleBodyContainer className="seven">
                        <CirclePineappleBody />
                        <CirclePineappleBody />
                        <CirclePineappleBody />
                        <CirclePineappleBody />
                        <CirclePineappleBody />
                        <CirclePineappleBody />
                    </CirclePineappleBodyContainer>

                    <CirclePineappleBodyContainer className="eight">
                        <CirclePineappleBody />
                        <CirclePineappleBody />
                        <CirclePineappleBody />
                        <CirclePineappleBody />
                        <CirclePineappleBody />
                        <CirclePineappleBody />
                    </CirclePineappleBodyContainer>

                    <CirclePineappleBodyContainer className="nine">
                        <CirclePineappleBody />
                        <CirclePineappleBody />
                        <CirclePineappleBody />
                        <CirclePineappleBody />
                        <CirclePineappleBody />
                        <CirclePineappleBody />
                    </CirclePineappleBodyContainer>

                    <CirclePineappleBodyContainer className="ten">
                        <CirclePineappleBody />
                        <CirclePineappleBody />
                        <CirclePineappleBody />
                        <CirclePineappleBody />
                        <CirclePineappleBody />
                        <CirclePineappleBody />
                    </CirclePineappleBodyContainer>

                    <CirclePineappleBodyContainer className="eleven">
                        <CirclePineappleBody />
                        <CirclePineappleBody />
                        <CirclePineappleBody />
                        <CirclePineappleBody />
                        <CirclePineappleBody />
                        <CirclePineappleBody />
                    </CirclePineappleBodyContainer>
                </PineappleBody>
            </PineappleContainer>
        </PineappleCardContainer>
    )
}

export default PineappleCard