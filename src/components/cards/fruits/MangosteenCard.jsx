import styled from "styled-components"
import { darken, lighten } from "polished"

const MangosteenCardContainer = styled.div`
    
`

const MangosteenContainer = styled.div`
    position: absolute;
    width: 3rem;
    height: 3.5rem;
    display: flex;
    align-items: flex-end;

    &.mangosteen {
        top: .7rem;
        right: .3rem;
    }

    &.halfMangosteen {
        bottom: 1rem;
        right: 1.6rem;
    }
`

const MangosteenStem = styled.div`
    width: 0.25rem;
    height: 0.6rem;
    background: linear-gradient(0deg, rgba(0,133,33,1) 5%, rgba(0,184,46,1) 78%);
    border-radius: 50% 50% 0 0;
    position: absolute;
    top: 0.45rem;
    left: 1.2rem;
    z-index: 2;
    transform: rotate(-39deg);
`

const MangosteenTop = styled.div`
    border-radius: 50%;
    background-color: #00b82e;
    position: absolute;

    &.one {
        width: .8rem;
        height: .5rem;
        top: .7rem;
        left: .9rem;

        &:before {
            content: '';
            width: .6rem;
            height: .4rem;
            border-radius: 50%;
            background-color: ${darken(.1, "#00b82e")};
            position: absolute;
            right: .15rem;
            top: 0;
            z-index: 1;
        }
    }

    &.two {
        width: .8rem;
        height: .5rem;
        top: .7rem;
        left: 1.4rem;

        &:before {
            content: '';
            width: .6rem;
            height: .4rem;
            border-radius: 50%;
            background-color: ${darken(.1, "#00b82e")};
            position: absolute;
            left: .1rem;
            top: 0;
            z-index: 1;
        }
    }

    &.three {
        width: .4rem;
        height: .6rem;
        top: .4rem;
        left: 1.35rem;
        transform: rotate(90deg);

        &:before {
            content: '';
            width: .3rem;
            height: .5rem;
            border-radius: 50%;
            background-color: ${darken(.1, "#00b82e")};
            position: absolute;
            left: 0.05rem;
            bottom: 0;
        }
    }

    &.four {
        width: .6rem;
        height: .4rem;
        top: 1.05rem;
        left: 1.25rem;

        &:before {
            content: '';
            width: .5rem;
            height: .4rem;
            border-radius: 50%;
            background-color: ${darken(.1, "#00b82e")};
            position: absolute;
            left: 0.0rem;
            top: -.1rem;
        }
    }
`

const MangosteenBody = styled.div`
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    background: radial-gradient(circle at calc(100% - .6rem) calc(100% - 1.7rem), rgba(208,0,255,1) 15%, rgba(121,0,158,1) 54%);
    display: flex;
    justify-content: center;
    align-items: center;
`

const MangosteenInside = styled.div`
    width: 2.8rem;
    height: 2.8rem;
    border-radius: 50%;
    background-color: #ff8ab3;
    position: relative;
`

const MangosteenInsideWhite = styled.div`
    position: absolute;
    border-radius: 50%;
    background-color: #fff4d1;

    &.one {
        width: 1.3rem;
        height: 0.8rem;
        top: 1.8rem;
        left: 0.7rem;

        &:before {
            content: '';
            width: 1.4rem;
            height: 1.4rem;
            position: absolute;
            top: -1rem;
            border-radius: 50%;
            background-color: #fff4d1;
        }

        
    }
    &.two {
        width: 0.7rem;
        height: 1.2rem;
        top: 1.15rem;
        left: 0.2rem;
        transform: rotate(-35deg);

        &:after {
            content: '';
            background: radial-gradient(circle at 102% 50%,transparent 84%,${darken(.7,'#fff4d1')} 35%);
            width: 1.7rem;
            height: 2rem;
            border-radius: 50%;
            position: absolute;
            top: 0.4rem;
            left: 0.2rem;
            transform: rotate(-119deg) rotateY(180deg);
        }
    }
    &.three {
        width: 0.7rem;
        height: 1.1rem;
        top: 1.25rem;
        left: 1.8rem;
        transform: rotate(35deg);

        &:after {
            content: '';
            background: radial-gradient(circle at 102% 50%,transparent 84%,${darken(.7,'#fff4d1')} 35%);
            width: 1.7rem;
            height: 2rem;
            border-radius: 50%;
            position: absolute;
            top: 0.4rem;
            left: -1.3rem;
            transform: rotate(-66deg) rotateY(180deg);
        }
    }
    &.four {
        width: 0.8rem;
        height: 0.9rem;
        top: 0.55rem;
        left: 1.8rem;

        &:after {
            content: '';
            background: radial-gradient(circle at 102% 50%,transparent 84%,${darken(.7,'#fff4d1')} 35%);
            width: 1.6rem;
            height: 1.8rem;
            border-radius: 50%;
            position: absolute;
            top: 0.4rem;
            left: -.8rem;
            transform: rotate(-79deg) rotateY(180deg);
        }
    }
    &.five {
        width: 0.8rem;
        height: 0.9rem;
        top: 0.55rem;
        left: 0.2rem;

        &:after {
            content: '';
            background: radial-gradient(circle at 102% 50%,transparent 84%,${darken(.7,'#fff4d1')} 35%);
            width: 1.3rem;
            height: 1.5rem;
            border-radius: 50%;
            position: absolute;
            top: 0.4rem;
            left: -.1rem;
            transform: rotate(-94deg) rotateY(180deg);
        }
    }
    &.six {
        width: 1.2rem;
        height: 0.9rem;
        top: 0.15rem;
        left: 0.8rem;

        &:after {
            content: '';
            background: radial-gradient(circle at 102% 50%,transparent 84%,${darken(.7,'#fff4d1')} 35%);
            width: .8rem;
            height: .9rem;
            border-radius: 50%;
            position: absolute;
            top: 0.5rem;
            left: -.4rem;
            transform: rotate(-48deg) rotateY(180deg);
        }
        
        &:before {
            content: '';
            background: radial-gradient(circle at 102% 50%,transparent 84%,${darken(.7,'#fff4d1')} 35%);
            width: .8rem;
            height: .9rem;
            border-radius: 50%;
            position: absolute;
            top: 0.55rem;
            left: .6rem;
            transform: rotate(62deg);
        }
    }
`

function MangosteenCard() {
    return (
        <MangosteenCardContainer>
            <MangosteenContainer className="mangosteen">
                <MangosteenStem />
                <MangosteenTop className="one"/>
                <MangosteenTop className="two"/>
                <MangosteenTop className="three"/>
                <MangosteenTop className="four"/>
                <MangosteenBody />
            </MangosteenContainer>

            <MangosteenContainer className="halfMangosteen">
                <MangosteenBody>
                    <MangosteenInside>
                        <MangosteenInsideWhite className="one"/>
                        <MangosteenInsideWhite className="two"/>
                        <MangosteenInsideWhite className="three"/>
                        <MangosteenInsideWhite className="four"/>
                        <MangosteenInsideWhite className="five"/>
                        <MangosteenInsideWhite className="six"/>
                    </MangosteenInside>
                </MangosteenBody>
            </MangosteenContainer>
        </MangosteenCardContainer>
    )
}

export default MangosteenCard