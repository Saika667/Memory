import styled from "styled-components"
import { darken } from "polished"

const SnowmanContainer = styled.div`
    width: 5rem;
    height: 8.5rem;
`

const SnowmanBody = styled.div`
    border-radius: 50%;
    position: absolute;

    &.top {
        width: 2.6rem;
        height: 2.4rem;
        left: 1.25rem;
        top: 1rem;
        background-color: black;

        &:before {
            content: '';
            width: 2.5rem;
            height: 2.5rem;
            background-color: #ffffff;
            border-radius: 50%;
            position: absolute;
            bottom: -.05rem;
            left: .03rem;
        }
    }

    &.middle {
        width: 3rem;
        height: 2.8rem;
        bottom: 2.8rem;
        left: 1.05rem;
        background-color: black;

        &:before {
            content: '';
            width: 2.9rem;
            height: 2.9rem;
            background-color: #ffffff;
            border-radius: 50%;
            position: absolute;
            bottom: -.05rem;
            left: .03rem;
        }
    }

    &.bottom {
        width: 3.7rem;
        height: 3.5rem;
        bottom: 0;
        left: .6rem;
        background-color: black;

        &:before {
            content: '';
            width: 3.6rem;
            height: 3.6rem;
            background-color: #ffffff;
            border-radius: 50%;
            position: absolute;
            bottom: -.05rem;
            left: .03rem;
        }
    }
`

const Button = styled.div`
    border-radius: 50%;
    background-color: black;
    position: absolute;

    &.one {
        top: .8rem;
        left: .9rem;
        width: .3rem;
        height: .3rem;
    }
    &.two {
        top: 1.5rem;
        left: .9rem;
        width: .3rem;
        height: .3rem;
        
    }
    &.three {
        top: 2.2rem;
        left: .9rem;
        width: .3rem;
        height: .3rem;
        z-index: 1;
    }

    &.four {
        top: 0.1rem;
        left: 1.1rem;
        width: .2rem;
        height: .2rem;
    }

    &.five {
        top: 0.1rem;
        left: 0.6rem;
        width: .2rem;
        height: .2rem;
    }

    &.six {
        top: 0.9rem;
        left: 0.5rem;
        width: .1rem;
        height: .1rem;
    }

    &.seven {
        top: 1.1rem;
        left: 0.7rem;
        width: .1rem;
        height: .1rem;
    }

    &.eight {
        top: 0.9rem;
        left: 1.3rem;
        width: .1rem;
        height: .1rem;
    }

    &.nine {
        top: 1.05rem;
        left: 1rem;
        width: .1rem;
        height: .1rem;
    }
`

const CarrotContainer = styled.div`
    width: 1rem;
    height: .8rem;
    position: absolute;
    top: .5rem;
    left: -.3rem;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
`

const Carrot = styled.div`
    width: .5rem;
    height: .4rem;
    border-radius: 50%;
    background-color: orange;
    position: relative;
    transform: rotate(23deg);

    &:before {
        content: '';
        width: .35rem;
        height: .6rem;
        border-radius: 50%;
        background-color: orange;
        position: absolute;
        transform: rotate(-75deg);
        top: -.1rem;
        left: -.2rem;
    }

    &:after {
        content: '';
        width: .2rem;
        height: .6rem;
        border-radius: 50%;
        background-color: orange;
        position: absolute;
        transform: rotate(-75deg);
        top: -.1rem;
        left: -.4rem;
    }
`

const SnowmanHatContainer = styled.div`
    width: 2rem;
    height: 1.5rem;
    z-index: 1;
    position: absolute;
    right: .9rem;
    top: .1rem;
    transform: rotate(20deg);
    display: flex;
    justify-content: center;
`

const SnowmanHat = styled.div`
    width: 1.6rem;
    height: 1.3rem;
    border-radius: 5px 5px 0 0;
    background-color: black;
    position: relative;

    &:before {
        content: '';
        width: 2rem;
        height: .5rem;
        border-radius: 50%;
        background-color: black;
        position: absolute;
        top: 1rem;
        left: -.2rem;
    }

    &:after {
        content: '';
        width: 1.6rem;
        height: .25rem;
        background-color: red;
        position: absolute;
        top: .8rem;
        right: 0;
    }
`

const Scarf = styled.div`
    width: 2.75rem;
    height: .8rem;
    border-radius: 50%;
    background: radial-gradient(circle at 48% -141%,transparent 69%,green 35%);
    z-index: 1;
    position: absolute;
    top: 2.7rem;
    left: 1.2rem;

    &:before {
        content: '';
        width: 1.5rem;
        height: 1.6rem;
        border-radius: 50%;
        background: radial-gradient(circle at -66% 54%,transparent 75%,green 35%);
        transform: rotate(26deg) rotateY(180deg);
        position: absolute;
        top: .5rem;
        left: .1rem;
    }

    &:after {
        content: '';
        width: 1.5rem;
        height: 2rem;
        border-radius: 50%;
        background: radial-gradient(circle at -66% 54%,transparent 69%,green 35%);
        transform: rotate(-22deg);
        position: absolute;
        top: .5rem;
        left: .5rem;
    }
`

const ScarfNode = styled.div`
    width: .5rem;
    height: .7rem;
    border-radius: 7pc 0 7pc 0;
    background-color: green;
    border: 1px solid ${darken(.2, "green")};
    transform: rotate(45deg);
    position: absolute;
    z-index: 1;
    top: 2.9rem;
    left: 1.8rem;
`

const SnowmanBranch = styled.div`
    width: .15rem;
    height: 2.7rem;
    background-color: brown;
    border-radius: 50%;
    position: absolute;

    &:before {
        content: '';
        width: .1rem;
        height: .9rem;
        background-color: brown;
        border-radius: 50%;
        transform: rotate(-45deg);
        position: absolute;
        top: .4rem;
        right: .35rem;
    }

    &:after {
        content:'';
        width: .5rem;
        height: .5rem;
        border-radius: 50%;
        background-color: #ffffff;
        position: absolute;
        top: 2.3rem;
        right: -.2rem;
    }

    &.branchOne {
        top: 2rem;
        right: .8rem;
        z-index: 1;
        transform: rotate(30deg);
    }
    &.branchTwo {
        top: 1.9rem;
        right: 3.9rem;
        transform: rotate(-43deg);
    }
`

function Snowman() {
    return (
        <SnowmanContainer>
            <SnowmanHatContainer>
                <SnowmanHat />
            </SnowmanHatContainer>
            <SnowmanBody className="top">
                <CarrotContainer>
                    <Carrot />
                    <Button className="four" />
                    <Button className="five" />
                    <Button className="six" />
                    <Button className="seven" />
                    <Button className="eight" />
                    <Button className="nine" />
                </CarrotContainer>
            </SnowmanBody>
            <Scarf />
            <ScarfNode />
            <SnowmanBranch className="branchOne"/>
            <SnowmanBranch className="branchTwo"/>
            <SnowmanBody className="middle">
                <Button className="one" />
                <Button className="two" />
                <Button className="three" />
            </SnowmanBody>
            <SnowmanBody className="bottom" />
        </SnowmanContainer>
    )
}

export default Snowman