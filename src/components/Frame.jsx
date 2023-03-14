import { Children } from "react";
import styled from "styled-components";

const FrameContainer = styled.div`
    
`

const ContentContainer = styled.div`
    width: fit-content;
    margin: auto;
    z-index: 5;
    position: relative;
`

const StalactiteContainer = styled.div`
    position: absolute;
    z-index: 6;

    &.big {
        width: 2rem;
        height: 6rem;
    }
    &.medium {
        width: 1.5rem;
        height: 4rem;
    }
    &.small {
        width: 1rem;
        height: 3rem;
    }

    &.rightTopBig {
        top: -.5rem;
        right: 1.1rem;
    }

    &.rightTopMediumOne {
        top: -.3rem;
        right: 3rem;
    }

    &.rightTopMediumTwo {
        top: -.3rem;
        right: 4.8rem;
        transform: rotateY(180deg);
    }

    &.rightTopSmall {
        top: -.3rem;
        right: 4.3rem;
    }

    &.rightBottomMedium {
        bottom: -3.7rem;
        right: 8.5rem;
        transform: rotateY(180deg);
    }

    &.rightBottomSmall {
        bottom: -2.7rem;
        right: 7.6rem;
    }

    &.leftTopMedium {
        top: -.3rem;
        left: 1.4rem;
    }

    &.leftTopSmall {
        top: -.4rem;
        left: 2.7rem;
    }
`

const StalactiteTop = styled.div`
    border-radius: 50%;
    background-color: white;
    position: relative;

    &.big {
        width: 2rem;
        height: 1rem;

        &:before {
            content: '';
            width: 1rem;
            height: 4rem;
            border-radius: 50%;
            background: radial-gradient(circle at -568% 47%,transparent 87%,white 35%);
            position: absolute;
            top: .2rem;
            left: .1rem;
            transform: rotate(-14deg);
        }

        &:after {
            content: '';
            width: 1rem;
            height: 4rem;
            border-radius: 50%;
            background: radial-gradient(circle at 674% 47%,transparent 87%,white 35%);
            position: absolute;
            top: .2rem;
            right: .15rem;
            transform: rotate(14deg);
        }
    }

    &.medium {
        width: 1.5rem;
        height: .6rem;

        &:before {
            content: '';
            width: 1rem;
            height: 2rem;
            border-radius: 50%;
            background: radial-gradient(circle at -568% 47%,transparent 87%,white 35%);
            position: absolute;
            top: .05rem;
            left: .05rem;
            transform: rotate(-14deg);
        }

        &:after {
            content: '';
            width: 1rem;
            height: 2.5rem;
            border-radius: 50%;
            background: white;
            position: absolute;
            top: 0.03rem;
            right: .05rem;
            transform: rotate(17deg);
        }
    }
    &.small {
        width: 1rem;
        height: .5rem;

        &:before {
            content: '';
            width: .65rem;
            height: 1.5rem;
            border-radius: 50%;
            background: radial-gradient(circle at -568% 47%,transparent 87%,white 35%);
            position: absolute;
            top: .12rem;
            left: 0rem;
            transform: rotate(-14deg);
        }

        &:after {
            content: '';
            width: .65rem;
            height: 1.5rem;
            border-radius: 50%;
            background: radial-gradient(circle at 674% 47%,transparent 87%,white 35%);
            position: absolute;
            top: .12rem;
            right: 0rem;
            transform: rotate(14deg);
        }
    }
`

const StalactiteBottom = styled.div`
    border-radius: 50%;
    background-color: white;
    position: absolute;

    &.big {
        width: .6rem;
        height: 6rem;
        bottom: 0;
        left: .69rem;

        &:before {
            content: '';
            width: 1rem;
            height: 1rem;
            border-radius: 50%;
            background-color: white;
            position: absolute;
            top: 0.2rem;
            left: -0.1rem;
        }
    }

    &.medium {
        width: .55rem;
        height: 2rem;
        bottom: .7rem;
        left: .4rem;

        &:before {
            content: '';
            width: .35rem;
            height: 2.5rem;
            border-radius: 50%;
            background-color: white;
            position: absolute;
            bottom: -.8rem;
            left: 0rem;
        }
    }

    &.small {
        width: .53rem;
        height: 1.5rem;
        bottom: 1rem;
        left: .25rem;

        &:before {
            content: '';
            width: .4rem;
            height: 1.5rem;
            border-radius: 50%;
            background-color: white;
            position: absolute;
            bottom: -.5rem;
            left: .05rem;
        }

        &:after {
            content: '';
            width: .2rem;
            height: 1rem;
            border-radius: 50%;
            background-color: white;
            position: absolute;
            bottom: -1rem;
            left: .15rem;
        }
    }
`

function Frame({ children }) {
    return (
        <FrameContainer>
            <ContentContainer>
                <StalactiteContainer className="rightTopBig big">
                    <StalactiteTop className="big"/>
                    <StalactiteBottom className="big"/>
                </StalactiteContainer>

                <StalactiteContainer className="rightTopMediumOne medium">
                    <StalactiteTop className="medium"/>
                    <StalactiteBottom className="medium"/>
                </StalactiteContainer>

                <StalactiteContainer className="rightTopMediumTwo medium">
                    <StalactiteTop className="medium"/>
                    <StalactiteBottom className="medium"/>
                </StalactiteContainer>

                <StalactiteContainer className="rightTopSmall small">
                    <StalactiteTop className="small"/>
                    <StalactiteBottom className="small"/>
                </StalactiteContainer>

                <StalactiteContainer className="rightBottomSmall small">
                    <StalactiteTop className="small"/>
                    <StalactiteBottom className="small"/>
                </StalactiteContainer>

                <StalactiteContainer className="rightBottomMedium medium">
                    <StalactiteTop className="medium"/>
                    <StalactiteBottom className="medium"/>
                </StalactiteContainer>

                <StalactiteContainer className="leftTopSmall small">
                    <StalactiteTop className="small"/>
                    <StalactiteBottom className="small"/>
                </StalactiteContainer>

                <StalactiteContainer className="leftTopMedium medium">
                    <StalactiteTop className="medium"/>
                    <StalactiteBottom className="medium"/>
                </StalactiteContainer>
                {children}
            </ContentContainer>
        </FrameContainer>
    )
}

export default Frame