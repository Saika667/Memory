import styled from "styled-components"

const StopwatchContainer = styled.div`
    width: 3.5rem;
    height: 3.7rem;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: flex-end;
`
const StopwatchTopContainer = styled.div`
    position: absolute;
    
    &.left {
        top: .8rem;
        left: .3rem;
        transform: rotate(-45deg);
    }

    &.right {
        top: .8rem;
        right: .3rem;
        transform: rotate(45deg);
    }

    &.center {
        top: .4rem;
    }
`
const StopwatchTop = styled.div`
    width: .3rem;
    height: .6rem;
    background-color: #61000b;
    position: relative;

    &:before {
        content: '';
        width: .55rem;
        height: .2rem;
        border-radius: 5px;
        background-color: #fa2e00;
        position: absolute;
        top: 0;
        left: -.14rem;
    }
`
const Ring = styled.div`
    width: 0.6rem;
    height: 0.5rem;
    border-radius: 50%;
    background: radial-gradient(circle at 50% 54%,transparent 59%,gray 35%);
    position: absolute;
    top: -0.5rem;
    left: -.05rem;
`

const StopwatchTopCenter = styled.div`
    width: .5rem;
    height: .5rem;
    background-color: #61000b;
    position: relative;

    &:before {
        content: '';
        width: .75rem;
        height: .2rem;
        border-radius: 5px;
        background-color: #fa2e00;
        position: absolute;
        top: 0;
        left: -.1rem;
        z-index: 1;
    }

    &:after {
        content: '';
        width: .3rem;
        height: .2rem;
        border-radius: 2px 2px 0 0;
        background-color: #61000b;
        position: absolute;
        top: -.15rem;
        left: .1rem;
    }
`

const StopwatchBody =styled.div`
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    background-color: #d10000;
    position: relative;

    &:before {
        content: '';
        width: 2.6rem;
        height: 2.6rem;
        border-radius: 50%;
        background-color: #850000;
        position: absolute;
        top: .2rem;
        left: .23rem;
    }

    &:after {
        content: '00 : 00';
        width: 2rem;
        height: 1rem;
        border-radius: 5px;
        background-color: #008540;
        position: absolute;
        top: 1rem;
        left: .5rem;
        font-size: 12px;
        line-height: 14px;
        padding-left: 3px;
        box-sizing: border-box;
    }
`

function Stopwatch() {
    return (
        <StopwatchContainer>
            <StopwatchTopContainer className="left">
                <StopwatchTop />
            </StopwatchTopContainer>

            <StopwatchTopContainer className="center">
                <Ring />
                <StopwatchTopCenter />
            </StopwatchTopContainer>

            <StopwatchTopContainer className="right">
                <StopwatchTop />
            </StopwatchTopContainer>

            <StopwatchBody>

            </StopwatchBody>
        </StopwatchContainer>
    )
}

export default Stopwatch