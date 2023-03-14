import styled from "styled-components"

const SeaweedCardContainer = styled.div`
    
`

export const SeaweedContainer = styled.div`
    position: absolute;

    &.one {
        width: 3.5rem;
        height: 6.5rem;
    }
    &.two {
        width: 2.7rem;
        height: 5rem;
        bottom: 1rem;
        right: .5rem;
    }
`

export const Seaweed = styled.div`
    position: absolute;
    background: #00c257;
    border-radius: 50%;

    &.firstSeaweed {
        width: .7rem;
        height: 1.5rem;

        &.one {    
            bottom: 0rem;
            left: 1.5rem;
        }
        &.two {
            bottom: 1rem;
            left: 1.3rem;
        }
        &.three {
            bottom: 1.8rem;
            left: 1.5rem;
        }
        &.four {
            bottom: 2.8rem;
            left: 1.7rem;
        }
        &.five {
            bottom: 1.8rem;
            left: .65rem;
            transform: rotate(-45deg);
        }
        &.six {
            bottom: 2.8rem;
            left: .2rem;
            transform: rotate(-15deg);
        }
        &.seven {
            bottom: 3.8rem;
            left: .2rem;
        }
        &.eight {
            bottom: 3.8rem;
            left: 2rem;
        }
        &.nine {
            bottom: 4.8rem;
            left: 1.8rem;
        }
        &.ten {
            bottom: 1.2rem;
            left: 2rem;
            transform: rotate(30deg);
        }
        &.eleven {
            bottom: 2.2rem;
            left: 2.5rem;
            transform: rotate(10deg);
        }
    }

    &.secondSeaweed {
        width: .5rem;
        height: 1rem;

        &.one {
            bottom: 0rem;
            left: 1rem;
        }
        &.two {
            bottom: .7rem;
            left: 1.2rem;
        }
        &.three {
            bottom: 1.4rem;
            left: 1rem;
        }
        &.four {
            bottom: 2.1rem;
            left: .8rem;
        }
        &.five {
            bottom: 2.8rem;
            left: .9rem;
        }
        &.six {
            bottom: 3.5rem;
            left: .7rem;
        }
        &.seven {
            bottom: 4.1rem;
            left: .5rem;
        }
        &.eight {
            bottom: 1.4rem;
            left: 1.6rem;
            transform: rotate(40deg);
        }
        &.nine {
            bottom: 2.1rem;
            left: 1.95rem;
        }
        &.ten {
            bottom: 2.8rem;
            left: 2rem;
            transform: rotate(20deg);
        }
    }
`

function SeaweedCard() {
    return (
        <SeaweedCardContainer>
            <SeaweedContainer className="one">
                <Seaweed className="firstSeaweed one" />
                <Seaweed className="firstSeaweed two" />
                <Seaweed className="firstSeaweed three" />
                <Seaweed className="firstSeaweed four" />
                <Seaweed className="firstSeaweed five" />
                <Seaweed className="firstSeaweed six" />
                <Seaweed className="firstSeaweed seven" />
                <Seaweed className="firstSeaweed eight" />
                <Seaweed className="firstSeaweed nine" />
                <Seaweed className="firstSeaweed ten" />
                <Seaweed className="firstSeaweed eleven" />
            </SeaweedContainer>

            <SeaweedContainer className="two">
                <Seaweed className="secondSeaweed one" />
                <Seaweed className="secondSeaweed two" />
                <Seaweed className="secondSeaweed three" />
                <Seaweed className="secondSeaweed four" />
                <Seaweed className="secondSeaweed five" />
                <Seaweed className="secondSeaweed six" />
                <Seaweed className="secondSeaweed seven" />
                <Seaweed className="secondSeaweed eight" />
                <Seaweed className="secondSeaweed nine" />
                <Seaweed className="secondSeaweed ten" />
            </SeaweedContainer>
        </SeaweedCardContainer>
    )
}

export default SeaweedCard