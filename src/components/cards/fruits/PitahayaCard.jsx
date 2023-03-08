import styled from "styled-components"
import { darken } from "polished"

const PitahayaCardContainer = styled.div`
    
`

const PitahayaContainer = styled.div`
    position: absolute;

    &.pitahaya {
        width: 4rem;
        height: 5.5rem;
        top: .5rem;
        left: .5rem;
    }

    &.halfPitahaya {
        width: 3rem;
        height: 3rem;
        bottom: .5rem;
        right: .5rem;
        z-index: 4;
    }
`

const Pitahaya = styled.div`
    width: 3rem;
    height: 4rem;
    border-radius: 50%;
    background-color: #ff2986;
    position: absolute;
    bottom: 0;
    left: .5rem;
`
const ScalesContainer = styled.div`
    position: absolute;

    &.top {
        top: -.4rem;
        left: 1.6rem;
    }
    &.one {
        bottom: 1.45rem;
        left: 0.9rem;
        z-index: 4;
    }
    &.two {
        bottom: 1.35rem;
        left: 2.3rem;
        transform: rotateY(-38deg) rotateZ(59deg);
        z-index: 4;
    }
    &.three {
        bottom: .3rem;
        left: .3rem;
        transform: rotateY(38deg) rotateZ(-59deg);
        z-index: 4;
    }
    &.four {
        bottom: 2.2rem;
        left: 1.9rem;
        transform: rotateY(-32deg) rotateX(14deg) rotateZ(16deg);
        z-index: 3;
    }
    &.five {
        bottom: 1.9rem;
        left: .3rem;
        transform: rotateY(32deg) rotateX(-7deg) rotateZ(-20deg);
        z-index: 3;
    }
    &.six {
        bottom: 2.2rem;
        left: 3.1rem;
        transform: rotateY(-68deg) rotateX(10deg) rotateZ(53deg);
        z-index: 3;
    }
    &.seven {
        bottom: 1.2rem;
        left: -.3rem;
        transform: rotateY(56deg) rotateX(2deg) rotateZ(-49deg);
        z-index: 3;
    }
    &.eight {
        bottom: 2.8rem;
        left: .9rem;
        z-index: 2;
    }
    &.nine {
        bottom: 2.4rem;
        left: 2.6rem;
        transform: rotateY(-68deg) rotateX(10deg) rotateZ(-42deg);
        z-index: 2;
    }
    &.ten {
        bottom: 3.1rem;
        left: .1rem;
        transform: rotateY(56deg) rotateX(5deg) rotateZ(24deg);
        z-index: 2;
    }
    &.eleven {
        bottom: 3.1rem;
        left: 1.7rem;
        transform: rotateY(42deg) rotateZ(-19deg);
        z-index: 1;
    }
    &.twelve {
        bottom: 3.6rem;
        left: .63rem;
        transform: rotateY(42deg) rotateZ(19deg);
        z-index: 2;
    }
    &.thirteen {
        bottom: 3.7rem;
        left: 2.1rem;
        transform: rotateY(71deg) rotateX(29deg) rotateZ(-22deg);
        z-index: 1;
    }
    &.fourteen {
        bottom: 4.2rem;
        left: .83rem;
        transform: rotateY(-61deg) rotateX(28deg) rotateZ(28deg);
        z-index: 1;
    }
    &.fifteen {
        bottom: 4.1rem;
        left: .9rem;
        z-index: 1;
    }
    &.sixteen {
        bottom: 4.4rem;
        left: .8rem;
        transform: rotateY(47deg) rotateX(-39deg) rotateZ(-15deg);
    }
    &.seventeen {
        bottom: 4.5rem;
        left: 1.3rem;
        transform: rotateY(-47deg) rotateX(-39deg) rotateZ(15deg);
    }
`
const ScaleBorder = styled.div`
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 7pc 50% 7pc 50%; 
    transform: rotate(-45deg);
    position: absolute;
    background: ${darken(.2, "#ff2986")};
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
`

const Scale = styled.div`
    width: 1.2rem;
    height: 1.2rem;
    border-radius: 7pc 50% 7pc 50%;
    background-color: #ff2986;
    overflow: hidden;
    position: relative;

    &:before {
        content: '';
        width: 0.8rem;
        height: 0.8rem;
        position: absolute;
        left: .563rem;
        bottom: .563rem;
        transform: rotate(45deg);
        background: linear-gradient(0deg, rgba(255,41,134,1) 2%, rgba(93,242,16,1) 40%);
    }
`

const ScaleTop = styled.div`
    width: 0.4rem;
    height: 0.5rem;
    background: radial-gradient(circle at 252% 15%,transparent 72%,#ff2986 26%);
    position: relative;

    &:before {
        content: '';
        width: 0.7rem;
        height: 0.5rem;
        background: radial-gradient(circle at 252% 15%,transparent 72%,#ff2986 26%);
        transform: rotateY(180deg);
        position: absolute;
        left: -.65rem;
    }

    &:after {
        content: '';
        width: 1.1rem;
        height: 1.1rem;
        border-radius: 7pc 50%;
        background: linear-gradient(45deg, rgba(255,41,134,1) 40%, rgba(93,242,16,1) 70%);
        position: absolute;
        top: -.8rem;
        left: -.65rem;
        transform: rotate(-45deg);
    }
`

const PitahayaSkin = styled.div`
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    background-color: #ff2986;
    display: flex;
    justify-content: center;
    align-items: center;
`

const PitahayaInside = styled.div`
    width: 2.8rem;
    height: 2.8rem;
    border-radius: 50%;
    background-color: #ffffff;
    position: relative;
`

const Seed = styled.div`
    width: .1rem;
    height: .1rem;
    border-radius: 50%;
    background-color: black;
    position: absolute;

    &.seedOne {
        top: 1.1rem;
        left: 1.1rem;
    }
    &.seedTwo {
        top: 2.3rem;
        left: 1.9rem;
    }
    &.seedThree {
        top: .1rem;
        left: .9rem;
    }
    &.seedFour {
        top: .4rem;
        left: 1.6rem;
    }
    &.seedFive {
        top: .8rem;
        left: 2.4rem;
    }
    &.seedSix {
        top: 1.4rem;
        left: 2.1rem;
    }
    &.seedSeven {
        top: 1.6rem;
        left: 1.1rem;
    }
    &.seedEight {
        top: 1.4rem;
        left: .1rem;
    }
    &.seedNine {
        top: 2.1rem;
        left: .8rem;
    }
    &.seedTen {
        top: 2.6rem;
        left: 1.3rem;
    }
    &.seedEleven {
        top: 1.9rem;
        left: 1.6rem;
    }
    &.seedTwelve {
        top: .8rem;
        left: .6rem;
    }
    &.seedThirteen {
        top: .6rem;
        left: 2.1rem;
    }
    &.seedFourteen {
        top: 1.1rem;
        left: 1.8rem;
    }
    &.seedFifteen {
        top: 2.1rem;
        left: 2.3rem;
    }
    &.seedSixteen {
        top: 1.6rem;
        left: 2.6rem;
    }
    &.seedSeventeen {
        top: .6rem;
        left: 1.3rem;
    }
    &.seedEighteen {
        top: 2.3rem;
        left: .4rem;
    }
    &.seedNineteen {
        top: 1.3rem;
        left: 1.6rem;
    }
    &.seedTwenty {
        top: 1.6rem;
        left: .6rem;
    }
    &.seedTwentyOne {
        top: 1.3rem;
        left: 2.4rem;
        opacity: .5;
    }
    &.seedTwentyTwo {
        top: 1.4rem;
        left: 1.4rem;
        opacity: .5;
    }
    &.seedTwentyThree {
        top: 2.3rem;
        left: 1.4rem;
        opacity: .5;
    }
    &.seedTwentyFour {
        top: 1.6rem;
        left: 1.9rem;
        opacity: .5;
    }
    &.seedTwentyFive {
        top: .3rem;
        left: .6rem;
        opacity: .5;
    }
    &.seedTwentySix {
        top: 1.1rem;
        left: .4rem;
        opacity: .5;
    }
    &.seedTwentySeven {
        top: .3rem;
        left: 1.9rem;
        opacity: .5;
    }
    &.seedTwentyEight {
        top: .9rem;
        left: 1.6rem;
        opacity: .5;
    }
    &.seedTwentyNine {
        top: .9rem;
        left: 1.6rem;
        opacity: .5;
    }
    &.seedThirty {
        top: .8rem;
        left: .9rem;
        opacity: .5;
    }
    &.seedThirtyOne {
        top: 1.8rem;
        left: 2.1rem;
        opacity: .5;
    }
    &.seedThirtyTwo {
        top: .1rem;
        left: 1.3rem;
        opacity: .5;
    }
    &.seedThirtyThree {
        top: .4rem;
        left: 1.1rem;
        opacity: .5;
    }
    &.seedThirtyFour {
        top: 1.4rem;
        left: .8rem;
        opacity: .5;
    }
    &.seedThirtyFive {
        top: 1.9rem;
        left: .4rem;
        opacity: .5;
    }
    &.seedThirtySix {
        top: .8rem;
        left: .1rem;
        opacity: .5;
    }
`

function PitahayaCard() {
    return(
        <PitahayaCardContainer>
            <PitahayaContainer className="pitahaya">
                <Pitahaya>
                    <ScalesContainer className="top">
                        <ScaleTop />
                    </ScalesContainer>
                    <ScalesContainer className="one">
                        <ScaleBorder>
                            <Scale />
                        </ScaleBorder>
                    </ScalesContainer>
                    <ScalesContainer className="two">
                        <ScaleBorder>
                            <Scale />
                        </ScaleBorder>
                    </ScalesContainer>
                    <ScalesContainer className="three">
                        <ScaleBorder>
                            <Scale />
                        </ScaleBorder>
                    </ScalesContainer>
                    <ScalesContainer className="four">
                        <ScaleBorder>
                            <Scale />
                        </ScaleBorder>
                    </ScalesContainer>
                    <ScalesContainer className="five">
                        <ScaleBorder>
                            <Scale />
                        </ScaleBorder>
                    </ScalesContainer>
                    <ScalesContainer className="six">
                        <ScaleBorder>
                            <Scale />
                        </ScaleBorder>
                    </ScalesContainer>
                    <ScalesContainer className="seven">
                        <ScaleBorder>
                            <Scale />
                        </ScaleBorder>
                    </ScalesContainer>
                    <ScalesContainer className="eight">
                        <ScaleBorder>
                            <Scale />
                        </ScaleBorder>
                    </ScalesContainer>
                    <ScalesContainer className="nine">
                        <ScaleBorder>
                            <Scale />
                        </ScaleBorder>
                    </ScalesContainer>
                    <ScalesContainer className="ten">
                        <ScaleBorder>
                            <Scale />
                        </ScaleBorder>
                    </ScalesContainer>
                    <ScalesContainer className="eleven">
                        <ScaleBorder>
                            <Scale />
                        </ScaleBorder>
                    </ScalesContainer>
                    <ScalesContainer className="twelve">
                        <ScaleBorder>
                            <Scale />
                        </ScaleBorder>
                    </ScalesContainer>
                    <ScalesContainer className="thirteen">
                        <ScaleBorder>
                            <Scale />
                        </ScaleBorder>
                    </ScalesContainer>
                    <ScalesContainer className="fourteen">
                        <ScaleBorder>
                            <Scale />
                        </ScaleBorder>
                    </ScalesContainer>
                    <ScalesContainer className="fifteen">
                        <ScaleBorder>
                            <Scale />
                        </ScaleBorder>
                    </ScalesContainer>
                    <ScalesContainer className="sixteen">
                        <ScaleBorder>
                            <Scale />
                        </ScaleBorder>
                    </ScalesContainer>
                    <ScalesContainer className="seventeen">
                        <ScaleBorder>
                            <Scale />
                        </ScaleBorder>
                    </ScalesContainer>
                </Pitahaya>
            </PitahayaContainer>

            <PitahayaContainer className="halfPitahaya">
                <PitahayaSkin>
                    <PitahayaInside>
                        <Seed className="seedOne" />
                        <Seed className="seedTwo" />
                        <Seed className="seedThree" />
                        <Seed className="seedFour" />
                        <Seed className="seedFive" />
                        <Seed className="seedSix" />
                        <Seed className="seedSeven" />
                        <Seed className="seedEight" />
                        <Seed className="seedNine" />
                        <Seed className="seedTen" />

                        <Seed className="seedEleven" />
                        <Seed className="seedTwelve" />
                        <Seed className="seedThirteen" />
                        <Seed className="seedFourteen" />
                        <Seed className="seedFifteen" />
                        <Seed className="seedSixteen" />
                        <Seed className="seedSeventeen" />
                        <Seed className="seedEighteen" />
                        <Seed className="seedNineteen" />
                        <Seed className="seedTwenty" />

                        <Seed className="seedTwentyOne" />
                        <Seed className="seedTwentyTwo" />
                        <Seed className="seedTwentyThree" />
                        <Seed className="seedTwentyFour" />
                        <Seed className="seedTwentyFive" />
                        <Seed className="seedTwentySix" />
                        <Seed className="seedTwentySeven" />
                        <Seed className="seedTwentyEight" />
                        <Seed className="seedTwentyNine" />
                        <Seed className="seedThirty" />
                        <Seed className="seedThirtyOne" />
                        <Seed className="seedThirtyTwo" />
                        <Seed className="seedThirtyThree" />
                        <Seed className="seedThirtyFour" />
                        <Seed className="seedThirtyFive" />
                        <Seed className="seedThirtySix" />
                    </PitahayaInside>
                </PitahayaSkin>
            </PitahayaContainer>
        </PitahayaCardContainer>
    )
}

export default PitahayaCard