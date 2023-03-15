import styled, { keyframes } from "styled-components"
import Snowflake from "./element/Snowflake"
import SnowflakeMedium from "./element/SnowflakeMedium"

export function animationDelay(snowflakeNumber, delay, className) {
    let style = '';
    for(let i = 0; i <= snowflakeNumber; i++) {
        style += `
            & .${className}:nth-child(${i + 1}) {
                animation-delay: ${delay * i}ms;
            }
        `
    }
    return style;
}

export const SnowflakeFall = keyframes`
    0% {
        transform: translateX(0) translateY(0) rotate(0);
        animation-timing-function: linear;
    }
    25% {
        transform: translateX(15px) translateY(25vh) rotate(-80deg);
        animation-timing-function: linear;
    }
    40% {
        transform: translateX(20px) translateY(35vh) rotate(20deg);
        animation-timing-function: linear;
    }
    50% {
        transform: translateX(25px) translateY(45vh) rotate(80deg);
        animation-timing-function: linear;
    }
    75% {
        transform: translateX(30px) translateY(75vh) rotate(180deg);
        animation-timing-function: linear;
    }
    90% {
        transform: translateX(30px) translateY(90vh) rotate(225deg);
        animation-timing-function: linear;
        opacity: 1;
    }
    100% {
        transform: translateX(40px) translateY(100vh) rotate(255deg);
        animation-timing-function: linear;
        opacity: 0;
    }
`

export const SnowflakeFallTwo = keyframes`
    0% {
        transform: translateX(0) translateY(0) rotate(0);
        animation-timing-function: linear;
    }
    25% {
        transform: translateX(15px) translateY(25vh) rotate(90deg);
        animation-timing-function: linear;
    }
    40%  {
        transform: translateX(0) translateY(40vh) rotate(170deg);
        animation-timing-function: linear;
    }
    50% {
        transform: translateX(5px) translateY(50vh) rotate(210deg);
        animation-timing-function: linear;
    }
    75% {
        transform: translateX(-20px) translateY(75vh) rotate(280deg);
        animation-timing-function: linear;
    }
    90% {
        transform: translateX(30px) translateY(90vh) rotate(304deg);
        animation-timing-function: linear;
        opacity: 1;
    }
    100% {
        transform: translateX(-30px) translateY(100vh) rotate(324deg);
        animation-timing-function: linear;
        opacity: 0;
    }
`

const SnowflakeContainer = styled.div`
    height: 4.688rem;
    position: absolute;
    top: -4.688rem;
    right: 0;
    display: flex;
    justify-content: space-around;
    &.home {
        width: 100%;
    }
    &.game {
        width: calc(100% - 180px);
    }

`

const SnowflakeContainerComp = styled.div`
    background-color: green;
    width: 4.375rem;
    ${animationDelay(7, 900, 'one')}
    ${animationDelay(7, 800, 'two')}
    ${animationDelay(4, 1700, 'twoBis')}
    ${animationDelay(7, 1200, 'three')}
    ${animationDelay(7, 1850, 'four')}
    ${animationDelay(4, 2000, 'fourBis')}
    ${animationDelay(7, 1200, 'five')}
    ${animationDelay(7, 1200, 'six')}
    transform: translateZ(0deg);

    &.compOne {
        & > div {
            animation: ${SnowflakeFallTwo} 7200ms ease-in-out forwards infinite;
        }
    }

    &.compTwo {
        & > div {
            animation: ${SnowflakeFall} 6400ms ease-in-out forwards infinite;
        }
    }

    &.compTwoBis {
        & > div {
            animation: ${SnowflakeFall} 6400ms ease-in-out forwards infinite;
        }
    }

    &.compThree {
        & > div {
            animation: ${SnowflakeFallTwo} 9400ms ease-in-out forwards infinite;
        }
    }

    &.compFour {
        & > div {
            animation: ${SnowflakeFall} 8600ms ease-in-out forwards infinite;
        }
    }

    &.compFourBis {
        & > div {
            animation: ${SnowflakeFallTwo} 8600ms ease-in-out forwards infinite;
        }
    }

    &.compFive {
        & > div {
            animation: ${SnowflakeFall} 9400ms ease-in-out forwards infinite;
        }
    }

    &.compSix {
        & > div {
            animation: ${SnowflakeFallTwo} 9000ms ease-in-out forwards infinite;
        }
    }
`

const SnowflakeSmall = styled.div`
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    background-color: white;
    filter: blur(3px);
    position: absolute;

    &.verySmall {
        width: 1rem;
        height: 1rem;
    }
`

function SnowflakeBarAnimate({ classPage }) {

    return (
        <div>
        { classPage === 'game' ?
        <SnowflakeContainer className={classPage}>
            <SnowflakeContainerComp className="compOne">
                <Snowflake classNames="one"/>
                <SnowflakeSmall className="one"/>
                <Snowflake classNames="one"/>
                <SnowflakeSmall className="one"/>
                <SnowflakeMedium classNames="one" />
                <Snowflake classNames="one"/>
                <SnowflakeSmall className="one"/>
            </SnowflakeContainerComp>

            <SnowflakeContainerComp className="compTwo">
                <SnowflakeMedium classNames="two"/>
                <SnowflakeSmall className="two"/>
                <SnowflakeMedium classNames="two"/>
                <SnowflakeSmall className="two"/>
                <SnowflakeMedium classNames="two"/>
                <Snowflake classNames="two"/>
                <SnowflakeSmall className="two"/>
            </SnowflakeContainerComp>

            <SnowflakeContainerComp className="compTwoBis">
                <SnowflakeMedium classNames="twoBis"/>
                <SnowflakeSmall className="twoBis"/>
                <SnowflakeMedium classNames="twoBis"/>
                <Snowflake classNames="twoBis"/>
            </SnowflakeContainerComp>

            <SnowflakeContainerComp className="compThree">
                    <SnowflakeMedium classNames="three"/>
                    <SnowflakeMedium classNames="three"/>
                    <SnowflakeSmall className="three"/>
                    <Snowflake classNames="three"/>
                    <SnowflakeMedium classNames="three"/>
                    <SnowflakeSmall className="three"/>
                    <SnowflakeSmall className="three"/>
            </SnowflakeContainerComp>

            <SnowflakeContainerComp className="compFour">
                <SnowflakeSmall className="four"/>
                <SnowflakeSmall className="four"/>
                <Snowflake classNames="four"/>
                <Snowflake classNames="four"/>
                <SnowflakeMedium classNames="four"/>
                <Snowflake classNames="four"/>
                <SnowflakeMedium classNames="four"/>
            </SnowflakeContainerComp>
            
            <SnowflakeContainerComp className="compFive">
                    <SnowflakeMedium classNames="five"/>
                    <Snowflake classNames="five"/>
                    <SnowflakeSmall className="five"/>
                    <Snowflake classNames="five"/>
                    <SnowflakeSmall className="five"/>
                    <SnowflakeMedium classNames="five"/>
                    <Snowflake classNames="five"/>
            </SnowflakeContainerComp>
        </SnowflakeContainer>
        : null }

        { classPage === 'home' ?
            <SnowflakeContainer className={classPage}>
            <SnowflakeContainerComp className="compOne">
                <Snowflake classNames="one homePage" />
                <SnowflakeSmall className="one"/>
                <SnowflakeMedium classNames="one homePage"/>
                <SnowflakeSmall className="one verySmall"/>
                <SnowflakeMedium classNames="one homePage"/>
                <SnowflakeSmall className="one"/>
                <SnowflakeSmall className="one verySmall"/>
            </SnowflakeContainerComp>

            <SnowflakeContainerComp className="compTwo">
                <SnowflakeMedium classNames="two homePage"/>
                <SnowflakeSmall className="two"/>
                <SnowflakeMedium classNames="two homePage"/>
                <SnowflakeSmall className="two verySmall"/>
                <SnowflakeMedium classNames="two homePage"/>
                <Snowflake classNames="two homePage"/>
                <SnowflakeSmall className="two verySmall"/>
            </SnowflakeContainerComp>

            <SnowflakeContainerComp className="compTwoBis">
                <SnowflakeMedium classNames="twoBis homePage"/>
                <SnowflakeSmall className="twoBis"/>
                <SnowflakeMedium classNames="twoBis homePage"/>
                <Snowflake classNames="twoBis homePage"/>
            </SnowflakeContainerComp>

            <SnowflakeContainerComp className="compThree">
                <SnowflakeMedium classNames="three homePage"/>
                <SnowflakeMedium classNames="three homePage"/>
                <SnowflakeSmall className="three"/>
                <Snowflake classNames="three homePage"/>
                <SnowflakeMedium classNames="three homePage"/>
                <SnowflakeSmall className="three verySmall"/>
                <SnowflakeSmall className="three"/>
            </SnowflakeContainerComp>

            <SnowflakeContainerComp className="compFour">
                <SnowflakeSmall className="four verySmall"/>
                <SnowflakeSmall className="four"/>
                <Snowflake classNames="four homePage"/>
                <SnowflakeMedium classNames="four homePage"/>
                <SnowflakeMedium classNames="four homePage"/>
                <SnowflakeSmall className="four verySmall"/>
            </SnowflakeContainerComp>

            <SnowflakeContainerComp className="compFourBis">
                    <SnowflakeSmall className="fourBis" />
                    <SnowflakeSmall className="fourBis"/>
                    <Snowflake classNames="fourBis homePage"/>
                    <SnowflakeMedium classNames="fourBis homePage"/>
            </SnowflakeContainerComp>

            <SnowflakeContainerComp className="compFive">
                <SnowflakeMedium classNames="five homePage"/>
                <Snowflake classNames="five homePage"/>
                <SnowflakeSmall className="five verySmall"/>
                <SnowflakeSmall className="five"/>
                <SnowflakeMedium classNames="five homePage"/>
                <SnowflakeSmall className="five"/>
                <SnowflakeMedium classNames="five homePage"/>
            </SnowflakeContainerComp>

            <SnowflakeContainerComp className="compSix">
                <SnowflakeMedium classNames="six homePage"/>
                <SnowflakeSmall className="six"/>
                <SnowflakeMedium classNames="six homePage"/>
                <Snowflake classNames="six homePage"/>
                <SnowflakeSmall className="six verySmall"/>
                <SnowflakeSmall className="six"/>
                <SnowflakeMedium classNames="six homePage"/>
            </SnowflakeContainerComp>
        </SnowflakeContainer>
        : null }
        </div>
    )
}

export default SnowflakeBarAnimate