import styled from "styled-components"
import { darken } from "polished"

const RaspberryCardContainer = styled.div`
    
`

const RaspberryContainer = styled.div`
    position: absolute;
    width: 3.6rem;
    height: 4.5rem;

    &.raspberryOne {
        top: .1rem;
        left: .05rem;
    }

    &.raspberryTwo {
        top: 2.75rem;
        left: 2.35rem;
        transform: rotate(40deg);
    }
`

const RaspberryBodyContainer = styled.div`
    position: absolute;

    &.one {
        top: 3.8rem;
        left: 1.5rem;
    }

    &.two {
        top: 3.25rem;
        left: 1.5rem;
        z-index: 1;
    }

    &.three {
        top: 3.45rem;
        left: .95rem;
    }

    &.four {
        top: 3.45rem;
        left: 2.05rem;
    }

    &.five {
        top: 2.7rem;
        left: 1.5rem;
        z-index: 1;
    }

    &.six {
        top: 2.9rem;
        left: .95rem;
        z-index: 1;
    }

    &.seven {
        top: 2.9rem;
        left: 2rem;
        z-index: 1;
    }

    &.eight {
        top: 3.1rem;
        left: 2.4rem;
    }

    &.nine {
        top: 3.1rem;
        left: .55rem;
    }

    &.ten {
        top: 2.35rem;
        left: 1.65rem;
        z-index: 1;
    }

    &.eleven {
        top: 2.5rem;
        left: 2.2rem;
        z-index: 1;
    }

    &.twelve {
        top: 2.5rem;
        left: .85rem;
        z-index: 1;
    }

    &.thirteen {
        top: 2.6rem;
        left: .3rem;
    }

    &.fourteen {
        top: 2.6rem;
        left: 2.7rem;
    }

    &.fifteen {
        top: 1.7rem;
        left: 1.5rem;
        z-index: 2;
    }

    &.sixteen {
        top: 1.9rem;
        left: 2rem;
        z-index: 2;
    }

    &.seventeen {
        top: 1.9rem;
        left: 1rem;
        z-index: 1;
    }

    &.eighteen {
        top: 2.1rem;
        left: .1rem;
    }

    &.nineteen {
        top: 2.1rem;
        left: 2.45rem;
        z-index: 1;
    }

    &.twenty {
        top: 2.2rem;
        left: 2.8rem;
    }

    &.twentyOne {
        top: 1.7rem;
        left: 2.9rem;
    }

    &.twentyTwo {
        top: 1.2rem;
        left: 1.5rem;
        z-index: 1;
    }

    &.twentyThree {
        top: 1.3rem;
        left: 2rem;
        z-index: 1;
    }

    &.twentyFour {
        top: 1.45rem;
        left: 2.4rem;
        z-index: 1;
    }

    &.twentyFive {
        top: 1.35rem;
        left: .95rem;
        z-index: 1;
    }

    &.twentySix {
        top: 1.5rem;
        left: .6rem;
        z-index: 1;
    }

    &.twentySeven {
        top: 2.05rem;
        left: .5rem;
    }

    &.twentyEight {
        top: 1.6rem;
        left: 0;
    }

    &.twentyNine {
        top: 2.2rem;
        left: 1.2rem;
        z-index: 1;
    }

    &.thirty {
        top: 1.05rem;
        left: .2rem;
    }

    &.thirtyOne {
        top: .9rem;
        left: .7rem;
    }

    &.thirtyTwo {
        top: .8rem;
        left: 1.25rem;
    }

    &.thirtyThree {
        top: .8rem;
        left: 1.8rem;
    }

    &.thirtyFour {
        top: .9rem;
        left: 2.3rem;
    }

    &.thirtyFive {
        top: 1.2rem;
        left: 2.8rem;
    }
`

const RaspberryBody = styled.div`
    width: .7rem;
    height: .7rem;
    border-radius: 50%;
    background-color: ${darken(.2, "#ff0533")};
    position: relative;

    &:after {
        content: '';
        position: absolute;
        top: 0;
        left: .1rem;
        width: .5rem;
        height: .5rem;
        border-radius: 50%;
        background-color: #ff0533;
    }
`
const RaspberryTopContainer = styled.div`
    position: absolute;
    left: .8rem;
    width: 2rem;
    height: 1rem;
    z-index: 1;
`

const RaspberryPeduncle = styled.div`
    width: .4rem;
    height: 1rem;
    border-radius: 50%;
    position: absolute;
    left: .8rem;
    background: linear-gradient(0deg, rgba(24,211,39,1) 50%, rgba(16,145,6,1) 90%);
`

const RaspberryBotPeduncle = styled.div`
    width: .5rem;
    height: .3rem;
    border-radius: 50%;
    position: absolute;
    bottom: 0;
    background-color: rgba(24,211,39,1);

    &.onePeduncle {
        left: .25rem;
        transform: rotate(-20deg);

        &:after {
            content: '';
            position: absolute;
            left: .15rem;
            top: -.05rem;
            background-color: rgba(24,211,39,1);
            width: .5rem;
            height: .3rem;
            border-radius: 50%;
        }
    }
    &.twoPeduncle {
        left: 1.25rem;
        transform: rotate(20deg);
        &:after {
            content: '';
            position: absolute;
            left: -.15rem;
            top: -.05rem;
            background-color: rgba(24,211,39,1);
            width: .5rem;
            height: .3rem;
            border-radius: 50%;
        }
    }
    &.threePeduncle {
        left: .6rem;
        transform: rotate(-20deg);
    }
    &.fourPeduncle {
        left: .9rem;
        transform: rotate(20deg);
    }
`

function RaspberryCard() {
    return (
        <RaspberryCardContainer>
            <RaspberryContainer className="raspberryOne">
                <RaspberryTopContainer>
                    <RaspberryPeduncle />
                    <RaspberryBotPeduncle className="onePeduncle"/>
                    <RaspberryBotPeduncle className="twoPeduncle"/>
                    <RaspberryBotPeduncle className="threePeduncle"/>
                    <RaspberryBotPeduncle className="fourPeduncle"/>
                </RaspberryTopContainer>
                <RaspberryBodyContainer className="one">
                    <RaspberryBody />
                </RaspberryBodyContainer>
                <RaspberryBodyContainer className="two">
                    <RaspberryBody />
                </RaspberryBodyContainer>
                <RaspberryBodyContainer className="three">
                    <RaspberryBody />
                </RaspberryBodyContainer>
                <RaspberryBodyContainer className="four">
                    <RaspberryBody />
                </RaspberryBodyContainer>
                <RaspberryBodyContainer className="five">
                    <RaspberryBody />
                </RaspberryBodyContainer>
                <RaspberryBodyContainer className="six">
                    <RaspberryBody />
                </RaspberryBodyContainer>
                <RaspberryBodyContainer className="seven">
                    <RaspberryBody />
                </RaspberryBodyContainer>
                <RaspberryBodyContainer className="eight">
                    <RaspberryBody />
                </RaspberryBodyContainer>
                <RaspberryBodyContainer className="nine">
                    <RaspberryBody />
                </RaspberryBodyContainer>
                <RaspberryBodyContainer className="ten">
                    <RaspberryBody />
                </RaspberryBodyContainer>
                <RaspberryBodyContainer className="eleven">
                    <RaspberryBody />
                </RaspberryBodyContainer>
                <RaspberryBodyContainer className="twelve">
                    <RaspberryBody />
                </RaspberryBodyContainer>
                <RaspberryBodyContainer className="thirteen">
                    <RaspberryBody />
                </RaspberryBodyContainer>
                <RaspberryBodyContainer className="fourteen">
                    <RaspberryBody />
                </RaspberryBodyContainer>
                <RaspberryBodyContainer className="fifteen">
                    <RaspberryBody />
                </RaspberryBodyContainer>
                <RaspberryBodyContainer className="sixteen">
                    <RaspberryBody />
                </RaspberryBodyContainer>
                <RaspberryBodyContainer className="seventeen">
                    <RaspberryBody />
                </RaspberryBodyContainer>
                <RaspberryBodyContainer className="eighteen">
                    <RaspberryBody />
                </RaspberryBodyContainer>
                <RaspberryBodyContainer className="nineteen">
                    <RaspberryBody />
                </RaspberryBodyContainer>
                <RaspberryBodyContainer className="twenty">
                    <RaspberryBody />
                </RaspberryBodyContainer>
                <RaspberryBodyContainer className="twentyOne">
                    <RaspberryBody />
                </RaspberryBodyContainer>
                <RaspberryBodyContainer className="twentyTwo">
                    <RaspberryBody />
                </RaspberryBodyContainer>
                <RaspberryBodyContainer className="twentyThree">
                    <RaspberryBody />
                </RaspberryBodyContainer>
                <RaspberryBodyContainer className="twentyFour">
                    <RaspberryBody />
                </RaspberryBodyContainer>
                <RaspberryBodyContainer className="twentyFive">
                    <RaspberryBody />
                </RaspberryBodyContainer>
                <RaspberryBodyContainer className="twentySix">
                    <RaspberryBody />
                </RaspberryBodyContainer>
                <RaspberryBodyContainer className="twentySeven">
                    <RaspberryBody />
                </RaspberryBodyContainer>
                <RaspberryBodyContainer className="twentyEight">
                    <RaspberryBody />
                </RaspberryBodyContainer>
                <RaspberryBodyContainer className="twentyNine">
                    <RaspberryBody />
                </RaspberryBodyContainer>
                <RaspberryBodyContainer className="thirty">
                    <RaspberryBody />
                </RaspberryBodyContainer>
                <RaspberryBodyContainer className="thirtyOne">
                    <RaspberryBody />
                </RaspberryBodyContainer>
                <RaspberryBodyContainer className="thirtyTwo">
                    <RaspberryBody />
                </RaspberryBodyContainer>
                <RaspberryBodyContainer className="thirtyThree">
                    <RaspberryBody />
                </RaspberryBodyContainer>
                <RaspberryBodyContainer className="thirtyFour">
                    <RaspberryBody />
                </RaspberryBodyContainer>
                <RaspberryBodyContainer className="thirtyFive">
                    <RaspberryBody />
                </RaspberryBodyContainer>
            </RaspberryContainer>

            <RaspberryContainer className="raspberryTwo">
                <RaspberryTopContainer>
                    <RaspberryPeduncle />
                    <RaspberryBotPeduncle className="onePeduncle"/>
                    <RaspberryBotPeduncle className="twoPeduncle"/>
                    <RaspberryBotPeduncle className="threePeduncle"/>
                    <RaspberryBotPeduncle className="fourPeduncle"/>
                </RaspberryTopContainer>
                <RaspberryBodyContainer className="one">
                    <RaspberryBody />
                </RaspberryBodyContainer>
                <RaspberryBodyContainer className="two">
                    <RaspberryBody />
                </RaspberryBodyContainer>
                <RaspberryBodyContainer className="three">
                    <RaspberryBody />
                </RaspberryBodyContainer>
                <RaspberryBodyContainer className="four">
                    <RaspberryBody />
                </RaspberryBodyContainer>
                <RaspberryBodyContainer className="five">
                    <RaspberryBody />
                </RaspberryBodyContainer>
                <RaspberryBodyContainer className="six">
                    <RaspberryBody />
                </RaspberryBodyContainer>
                <RaspberryBodyContainer className="seven">
                    <RaspberryBody />
                </RaspberryBodyContainer>
                <RaspberryBodyContainer className="eight">
                    <RaspberryBody />
                </RaspberryBodyContainer>
                <RaspberryBodyContainer className="nine">
                    <RaspberryBody />
                </RaspberryBodyContainer>
                <RaspberryBodyContainer className="ten">
                    <RaspberryBody />
                </RaspberryBodyContainer>
                <RaspberryBodyContainer className="eleven">
                    <RaspberryBody />
                </RaspberryBodyContainer>
                <RaspberryBodyContainer className="twelve">
                    <RaspberryBody />
                </RaspberryBodyContainer>
                <RaspberryBodyContainer className="thirteen">
                    <RaspberryBody />
                </RaspberryBodyContainer>
                <RaspberryBodyContainer className="fourteen">
                    <RaspberryBody />
                </RaspberryBodyContainer>
                <RaspberryBodyContainer className="fifteen">
                    <RaspberryBody />
                </RaspberryBodyContainer>
                <RaspberryBodyContainer className="sixteen">
                    <RaspberryBody />
                </RaspberryBodyContainer>
                <RaspberryBodyContainer className="seventeen">
                    <RaspberryBody />
                </RaspberryBodyContainer>
                <RaspberryBodyContainer className="eighteen">
                    <RaspberryBody />
                </RaspberryBodyContainer>
                <RaspberryBodyContainer className="nineteen">
                    <RaspberryBody />
                </RaspberryBodyContainer>
                <RaspberryBodyContainer className="twenty">
                    <RaspberryBody />
                </RaspberryBodyContainer>
                <RaspberryBodyContainer className="twentyOne">
                    <RaspberryBody />
                </RaspberryBodyContainer>
                <RaspberryBodyContainer className="twentyTwo">
                    <RaspberryBody />
                </RaspberryBodyContainer>
                <RaspberryBodyContainer className="twentyThree">
                    <RaspberryBody />
                </RaspberryBodyContainer>
                <RaspberryBodyContainer className="twentyFour">
                    <RaspberryBody />
                </RaspberryBodyContainer>
                <RaspberryBodyContainer className="twentyFive">
                    <RaspberryBody />
                </RaspberryBodyContainer>
                <RaspberryBodyContainer className="twentySix">
                    <RaspberryBody />
                </RaspberryBodyContainer>
                <RaspberryBodyContainer className="twentySeven">
                    <RaspberryBody />
                </RaspberryBodyContainer>
                <RaspberryBodyContainer className="twentyEight">
                    <RaspberryBody />
                </RaspberryBodyContainer>
                <RaspberryBodyContainer className="twentyNine">
                    <RaspberryBody />
                </RaspberryBodyContainer>
                <RaspberryBodyContainer className="thirty">
                    <RaspberryBody />
                </RaspberryBodyContainer>
                <RaspberryBodyContainer className="thirtyOne">
                    <RaspberryBody />
                </RaspberryBodyContainer>
                <RaspberryBodyContainer className="thirtyTwo">
                    <RaspberryBody />
                </RaspberryBodyContainer>
                <RaspberryBodyContainer className="thirtyThree">
                    <RaspberryBody />
                </RaspberryBodyContainer>
                <RaspberryBodyContainer className="thirtyFour">
                    <RaspberryBody />
                </RaspberryBodyContainer>
                <RaspberryBodyContainer className="thirtyFive">
                    <RaspberryBody />
                </RaspberryBodyContainer>
            </RaspberryContainer>
        </RaspberryCardContainer>
    )
}

export default RaspberryCard