import styled from "styled-components"
import { darken } from "polished"

const PomegranateCardContainer = styled.div`
    
`

const PomegranateContainer = styled.div`
    position: absolute;
    width: 4.5rem;
    height: 4.5rem;
    display: flex;
    justify-content: center;
    align-items: flex-end;

    &.pomegranate {
        top: .5rem;
        left: .0rem;
    }

    &.halfPomegranate {
        bottom: .5rem;
        right: .0rem;
        transform: rotate(45deg);
    }
`

const PomegranateBody = styled.div`
    width: 4.1rem;
    height: 3.7rem;
    border-radius: 50%;
    background: radial-gradient(circle at calc(100% - 3rem) calc(100% - 2.5rem),rgba(255,92,105,1) 12%,rgba(245,0,20,1) 39%);
    display: flex;
    justify-content: center;
    align-items: center;
`

const PomegranateBodyTopContainer = styled.div`
    position: absolute;
    top: .4rem;
    left: 2.4rem;
`
const PomegranateBodyTop = styled.div`
    width: 0.4rem;
    height: 0.5rem;
    background: radial-gradient(circle at 252% 15%,transparent 72%,#f50014 26%);
    position: relative;

    &:before {
        content: '';
        width: 0.7rem;
        height: 0.5rem;
        background: radial-gradient(circle at 252% 15%,transparent 72%,#f50014 26%);
        transform: rotateY(180deg);
        position: absolute;
        left: -.65rem;
    }
`

const PomegranateBodyTopElt = styled.div`
    width: .3rem;
    height: .3rem;
    border-radius: 7pc 50%;
    background-color: #f50014;
    position: absolute;

    &.one {
        top: -.2rem;
        left: .1rem;
    }
    &.two {
        top: -.25rem;
        left: -.05rem;
        transform: rotate(-15deg);
    }
    &.three {
        top: -.25rem;
        left: -.25rem;
        transform: rotate(-45deg);
    }
    &.four {
        top: -.25rem;
        left: -.4rem;
        transform: rotate(-69deg);
    }
    &.five {
        top: -.2rem;
        left: -.55rem;
        transform: rotate(90deg);
    }
`

const PomegranateInside = styled.div`
    width: 3.9rem;
    height: 3.5rem;
    border-radius: 50%;
    background-color: #ffd1d5;
`

const SeedContainer = styled.div`
    position: absolute;

    &.seedOne {
        top: 1.2rem;
        left: 2.4rem;
        transform: rotate(20deg);
    }
    &.seedTwo {
        top: 1rem;
        left: 2.7rem;
        transform: rotate(81deg);
    }
    &.seedThree {
        top: 1.2rem;
        left: 3.1rem;
        transform: rotate(-40deg);
    }
    &.seedFour {
        top: 1.5rem;
        left: 3.4rem;
        transform: rotate(-63deg);
    }
    &.seedFive {
        top: 1.85rem;
        left: 3.65rem;
        transform: rotate(168deg);
    }
    &.seedSix {
        top: 2.2rem;
        left: 3.75rem;
        transform: rotate(-40deg);
    }
    &.seedSeven {
        top: 2.6rem;
        left: 3.85rem;
    }
    &.seedEight {
        top: 3rem;
        left: 3.65rem;
        transform: rotate(40deg);
    }
    &.seedNine {
        top: 3.35rem;
        left: 3.4rem;
        transform: rotate(200deg);
    }
    &.seedTen {
        top: 1.6rem;
        left: 2.3rem;
    }
    &.seedEleven {
        top: 1.1rem;
        left: 1.8rem;
        transform: rotate(-20deg);
    }
    &.seedTwelve {
        top: 1rem;
        left: 1.45rem;
        transform: rotate(60deg);
    }
    &.seedThirteen {
        top: 1.5rem;
        left: 1.8rem;
        transform: rotate(192deg);
    }
    &.seedFourteen {
        top: 1.9rem;
        left: 1.8rem;
        transform: rotate(159deg);
    }
    &.seedFifteen {
        top: 2.05rem;
        left: 2.3rem;
        transform: rotate(14deg);
    }
    &.seedSixteen {
        top: 2.35rem;
        left: 1.8rem;
    }
    &.seedSeventeen {
        top: 2.7rem;
        left: 1.65rem;
        transform: rotate(40deg);
    }
    &.seedEighteen {
        top: 2.9rem;
        left: 1.3rem;
        transform: rotate(70deg);
    }
    &.seedNineteen {
        top: 2.95rem;
        left: .85rem;
        transform: rotate(-70deg);
    }
    &.seedTwenty {
        top: 2rem;
        left: 2.8rem;
        transform: rotate(-110deg);
    }
    &.seedTwentyOne {
        top: 2.95rem;
        left: 2.1rem;
        transform: rotate(-110deg);
    }
    &.seedTwentyTwo {
        top: 3.1rem;
        left: 2.4rem;
        transform: rotate(-210deg);
    }
    &.seedTwentyThree {
        top: 3.5rem;
        left: 2.6rem;
        transform: rotate(-22deg);
    }
    &.seedTwentyFour {
        top: 3.85rem;
        left: 2.5rem;
        transform: rotate(-131deg);
    }
    &.seedTwentyFive {
        top: 3.9rem;
        left: 2.1rem;
        transform: rotate(-73deg);
    }
    &.seedTwentySix {
        top: 3.75rem;
        left: 1.65rem;
        transform: rotate(-97deg);
    }
    &.seedTwentySeven {
        top: 3.6rem;
        left: 1.25rem;
        transform: rotate(-221deg);
    }
    &.seedTwentyEight {
        top: 3.3rem;
        left: 1.35rem;
        transform: rotate(-288deg);
    }
    &.seedTwentyNine {
        top: 3.1rem;
        left: 1.65rem;
        transform: rotate(-122deg);
    }
    &.seedThirty {
        top: 3.6rem;
        left: 3.1rem;
        transform: rotate(267deg);
    }
    &.seedThirtyOne {
        top: 3.3rem;
        left: 2.9rem;
        transform: rotate(173deg);
    }
    &.seedThirtyTwo {
        top: 2.85rem;
        left: 2.8rem;
        transform: rotate(-29deg);
    }
    &.seedThirtyThree {
        top: 2.55rem;
        left: 2.5rem;
        transform: rotate(-71deg);
    }
    &.seedThirtyFour {
        top: 2.35rem;
        left: 2.4rem;
        transform: rotate(-111deg);
    }
    &.seedThirtyFive {
        top: 2.65rem;
        left: .5rem;
        transform: rotate(-202deg);
    }
    &.seedThirtySix {
        top: 2.25rem;
        left: .5rem;
        transform: rotate(-167deg);
    }
    &.seedThirtySeven {
        top: 1.8rem;
        left: .6rem;
    }
    &.seedThirtyEight {
        top: 1.4rem;
        left: .8rem;
        transform: rotate(-143deg);
    }
    &.seedThirtyNine {
        top: 1.2rem;
        left: 1.1rem;
        transform: rotate(-78deg);
    }
    &.seedFourty {
        top: 3.55rem;
        left: 1.55rem;
        transform: rotate(-70deg);
    }
    &.seedFourtyOne {
        top: 3.35rem;
        left: 1.7rem;
        transform: rotate(83deg);
    }
    &.seedFourtyTwo {
        top: 3.6rem;
        left: 1.9rem;
        transform: rotate(-47deg);
    }
    &.seedFourtyThree {
        top: 3.15rem;
        left: 2.1rem;
        transform: rotate(79deg);
    }
    &.seedFourtyFour {
        top: 3.4rem;
        left: 2.3rem;
        transform: rotate(-165deg);
    }
    &.seedFourtyFive {
        top: 3.7rem;
        left: 2.35rem;
        transform: rotate(56deg);
    }
    &.seedFourtySix {
        top: 3.45rem;
        left: 2.1rem;
        transform: rotate(-209deg);
    }
    &.seedFourtySeven {
        top: 3.3rem;
        left: 3.2rem;
        transform: rotate(43deg);
    }
    &.seedFourtyEight {
        top: 3.05rem;
        left: 3.1rem;
        transform: rotate(-86deg);
    }
    &.seedFourtyNine {
        top: 2.9rem;
        left: 3.4rem;
        transform: rotate(-169deg);
    }
    &.seedFifty {
        top: 2.62rem;
        left: 3.62rem;
        transform: rotate(-7deg);
    }
    &.seedFiftyOne {
        top: 2.7rem;
        left: 3.05rem;
    }
    &.seedFiftyTwo {
        top: 2.72rem;
        left: 3.25rem;
        transform: rotate(191deg);
    }
    &.seedFiftyThree {
        top: 2.45rem;
        left: 3.55rem;
        transform: rotate(-135deg);
    }
    &.seedFiftyFour {
        top: 2.1rem;
        left: 3.45rem;
        transform: rotate(169deg);
    }
    &.seedFiftyFive {
        top: 2.4rem;
        left: 3.25rem;
        transform: rotate(-105deg);
    }
    &.seedFiftySix {
        top: 2.48rem;
        left: 2.77rem;
        transform: rotate(-29deg);
    }
    &.seedFiftySeven {
        top: 2.3rem;
        left: 2.92rem;
        transform: rotate(-7deg);
    }
    &.seedFiftyEight {
        top: 2.2rem;
        left: 3.15rem;
        transform: rotate(-61deg);
    }
    &.seedFiftyNine {
        top: 2.15rem;
        left: 2.6rem;
        transform: rotate(-47deg);
    }
    &.seedSixty {
        top: 1.7rem;
        left: 3.35rem;
        transform: rotate(116deg);
    }
    &.seedSixtyOne {
        top: 1.9rem;
        left: 3.15rem;
        transform: rotate(-47deg);
    }
    &.seedSixtyTwo {
        top: 1.62rem;
        left: 3.05rem;
        transform: rotate(37deg);
    }
    &.seedSixtyThree {
        top: 1.82rem;
        left: 2.65rem;
        transform: rotate(62deg);
    }
    &.seedSixtyFour {
        top: 1.65rem;
        left: 2.5rem;
        transform: rotate(214deg);
    }
    &.seedSixtyFive {
        top: 1.36rem;
        left: 2.9rem;
        transform: rotate(-67deg);
    }
    &.seedSixtySix {
        top: 1.22rem;
        left: 2.7rem;
        transform: rotate(-125deg);
    }
    &.seedSixtySeven {
        top: 1.46rem;
        left: 2.6rem;
        transform: rotate(-67deg);
    }
    &.seedSixtyEight {
        top: 1.6rem;
        left: 2.85rem;
        transform: rotate(64deg);
    }
    &.seedSixtyNine {
        top: 1.2rem;
        left: 1.5rem;
        transform: rotate(64deg);
    }
    &.seedSeventy {
        top: 1.4rem;
        left: 1.6rem;
        transform: rotate(217deg);
    }
    &.seedSeventyOne {
        top: 1.4rem;
        left: 1.2rem;
        transform: rotate(-84deg);
    }
    &.seedSeventyTwo {
        top: 1.8rem;
        left: 1.5rem;
        transform: rotate(213deg);
    }
    &.seedSeventyThree {
        top: 1.65rem;
        left: 1.2rem;
        transform: rotate(-106deg);
    }
    &.seedSeventyFour {
        top: 1.62rem;
        left: .9rem;
        transform: rotate(40deg);
    }
    &.seedSeventyFive {
        top: 2.1rem;
        left: 1.6rem;
        transform: rotate(-9deg);
    }
    &.seedSeventySix {
        top: 1.88rem;
        left: 1.14rem;
        transform: rotate(87deg);
    }
    &.seedSeventySeven {
        top: 2.05rem;
        left: .8rem;
        transform: rotate(4deg);
    }
    &.seedSeventyEight {
        top: 2.1rem;
        left: 1.3rem;
        transform: rotate(115deg);
    }
    &.seedSeventyNine {
        top: 2.38rem;
        left: 1.48rem;
        transform: rotate(123deg);
    }
    &.seedEighty {
        top: 2.65rem;
        left: 1.4rem;
        transform: rotate(71deg);
    }
    &.seedEightyOne {
        top: 2.2rem;
        left: 1.08rem;
        transform: rotate(134deg);
    }
    &.seedEightyTwo {
        top: 2.35rem;
        left: .8rem;
        transform: rotate(92deg);
    }
    &.seedEightyThree {
        top: 2.45rem;
        left: 1.2rem;
        transform: rotate(-90deg);
    }
    &.seedEightyFour {
        top: 2.58rem;
        left: .75rem;
        transform: rotate(123deg);
    }
    &.seedEightyFive {
        top: 2.65rem;
        left: 1.05rem;
        transform: rotate(-35deg);
    }
    &.seedEightySix {
        top: 2.8rem;
        left: .88rem;
        transform: rotate(102deg);
    }
`

const Seed = styled.div`
    width: .3rem;
    height: .5rem;
    border-radius: 50%;
    background: #ff1f31;
    position: relative;

    &:before {
        content: '';
        width: .2rem;
        height: .4rem;
        border-radius: 50%;
        background-color: ${darken(.2, '#ff1f31')};
        position: absolute;
        top: 0.1rem;
        left: 0.05rem;
    }

    &:after {
        content: '';
        width: .08rem;
        height: .2rem;
        border-radius: 50%;
        background-color: #ffe0e3;
        position: absolute;
        top: 0.15rem;
        left: 0.05rem;
    }
`

function PomegranateCard() {
    return (
        <PomegranateCardContainer>
            <PomegranateContainer className="pomegranate">
                <PomegranateBodyTopContainer>
                    <PomegranateBodyTopElt className="one" />
                    <PomegranateBodyTopElt className="two" />
                    <PomegranateBodyTopElt className="three" />
                    <PomegranateBodyTopElt className="four" />
                    <PomegranateBodyTopElt className="five" />
                    <PomegranateBodyTop />
                </PomegranateBodyTopContainer>
                <PomegranateBody />
            </PomegranateContainer>

            <PomegranateContainer className="halfPomegranate">
                <PomegranateBodyTopContainer>
                    <PomegranateBodyTopElt className="one" />
                    <PomegranateBodyTopElt className="two" />
                    <PomegranateBodyTopElt className="three" />
                    <PomegranateBodyTopElt className="four" />
                    <PomegranateBodyTopElt className="five" />
                    <PomegranateBodyTop />
                </PomegranateBodyTopContainer>
                
                <PomegranateBody>
                    <PomegranateInside>
                        <SeedContainer className="seedOne">
                            <Seed />
                        </SeedContainer>
                        <SeedContainer className="seedTwo">
                            <Seed />
                        </SeedContainer>
                        <SeedContainer className="seedThree">
                            <Seed />
                        </SeedContainer>
                        <SeedContainer className="seedFour">
                            <Seed />
                        </SeedContainer>
                        <SeedContainer className="seedFive">
                            <Seed />
                        </SeedContainer>
                        <SeedContainer className="seedSix">
                            <Seed />
                        </SeedContainer>
                        <SeedContainer className="seedSeven">
                            <Seed />
                        </SeedContainer>
                        <SeedContainer className="seedEight">
                            <Seed />
                        </SeedContainer>
                        <SeedContainer className="seedNine">
                            <Seed />
                        </SeedContainer>
                        <SeedContainer className="seedTen">
                            <Seed />
                        </SeedContainer>
                        <SeedContainer className="seedEleven">
                            <Seed />
                        </SeedContainer>
                        <SeedContainer className="seedTwelve">
                            <Seed />
                        </SeedContainer>
                        <SeedContainer className="seedThirteen">
                            <Seed />
                        </SeedContainer>
                        <SeedContainer className="seedFourteen">
                            <Seed />
                        </SeedContainer>
                        <SeedContainer className="seedFifteen">
                            <Seed />
                        </SeedContainer>
                        <SeedContainer className="seedSixteen">
                            <Seed />
                        </SeedContainer>
                        <SeedContainer className="seedSeventeen">
                            <Seed />
                        </SeedContainer>
                        <SeedContainer className="seedEighteen">
                            <Seed />
                        </SeedContainer>
                        <SeedContainer className="seedNineteen">
                            <Seed />
                        </SeedContainer>
                        <SeedContainer className="seedTwenty">
                            <Seed />
                        </SeedContainer>
                        <SeedContainer className="seedTwentyOne">
                            <Seed />
                        </SeedContainer>
                        <SeedContainer className="seedTwentyTwo">
                            <Seed />
                        </SeedContainer>
                        <SeedContainer className="seedTwentyThree">
                            <Seed />
                        </SeedContainer>
                        <SeedContainer className="seedTwentyFour">
                            <Seed />
                        </SeedContainer>
                        <SeedContainer className="seedTwentyFive">
                            <Seed />
                        </SeedContainer>
                        <SeedContainer className="seedTwentySix">
                            <Seed />
                        </SeedContainer>
                        <SeedContainer className="seedTwentySeven">
                            <Seed />
                        </SeedContainer>
                        <SeedContainer className="seedTwentyEight">
                            <Seed />
                        </SeedContainer>
                        <SeedContainer className="seedTwentyNine">
                            <Seed />
                        </SeedContainer>
                        <SeedContainer className="seedThirty">
                            <Seed />
                        </SeedContainer>
                        <SeedContainer className="seedThirtyOne">
                            <Seed />
                        </SeedContainer>
                        <SeedContainer className="seedThirtyTwo">
                            <Seed />
                        </SeedContainer>
                        <SeedContainer className="seedThirtyThree">
                            <Seed />
                        </SeedContainer>
                        <SeedContainer className="seedThirtyFour">
                            <Seed />
                        </SeedContainer>
                        <SeedContainer className="seedThirtyFive">
                            <Seed />
                        </SeedContainer>
                        <SeedContainer className="seedThirtySix">
                            <Seed />
                        </SeedContainer>
                        <SeedContainer className="seedThirtySeven">
                            <Seed />
                        </SeedContainer>
                        <SeedContainer className="seedThirtyEight">
                            <Seed />
                        </SeedContainer>
                        <SeedContainer className="seedThirtyNine">
                            <Seed />
                        </SeedContainer>
                        <SeedContainer className="seedFourty">
                            <Seed />
                        </SeedContainer>
                        <SeedContainer className="seedFourtyOne">
                            <Seed />
                        </SeedContainer>
                        <SeedContainer className="seedFourtyTwo">
                            <Seed />
                        </SeedContainer>
                        <SeedContainer className="seedFourtyThree">
                            <Seed />
                        </SeedContainer>
                        <SeedContainer className="seedFourtyFour">
                            <Seed />
                        </SeedContainer>
                        <SeedContainer className="seedFourtyFive">
                            <Seed />
                        </SeedContainer>
                        <SeedContainer className="seedFourtySix">
                            <Seed />
                        </SeedContainer>
                        <SeedContainer className="seedFourtySeven">
                            <Seed />
                        </SeedContainer>
                        <SeedContainer className="seedFourtyEight">
                            <Seed />
                        </SeedContainer>
                        <SeedContainer className="seedFourtyNine">
                            <Seed />
                        </SeedContainer>
                        <SeedContainer className="seedFifty">
                            <Seed />
                        </SeedContainer>
                        <SeedContainer className="seedFiftyOne">
                            <Seed />
                        </SeedContainer>
                        <SeedContainer className="seedFiftyTwo">
                            <Seed />
                        </SeedContainer>
                        <SeedContainer className="seedFiftyThree">
                            <Seed />
                        </SeedContainer>
                        <SeedContainer className="seedFiftyFour">
                            <Seed />
                        </SeedContainer>
                        <SeedContainer className="seedFiftyFive">
                            <Seed />
                        </SeedContainer>
                        <SeedContainer className="seedFiftySix">
                            <Seed />
                        </SeedContainer>
                        <SeedContainer className="seedFiftySeven">
                            <Seed />
                        </SeedContainer>
                        <SeedContainer className="seedFiftyEight">
                            <Seed />
                        </SeedContainer>
                        <SeedContainer className="seedFiftyNine">
                            <Seed />
                        </SeedContainer>
                        <SeedContainer className="seedSixty">
                            <Seed />
                        </SeedContainer>
                        <SeedContainer className="seedSixtyOne">
                            <Seed />
                        </SeedContainer>
                        <SeedContainer className="seedSixtyTwo">
                            <Seed />
                        </SeedContainer>
                        <SeedContainer className="seedSixtyThree">
                            <Seed />
                        </SeedContainer>
                        <SeedContainer className="seedSixtyFour">
                            <Seed />
                        </SeedContainer>
                        <SeedContainer className="seedSixtyFive">
                            <Seed />
                        </SeedContainer>
                        <SeedContainer className="seedSixtySix">
                            <Seed />
                        </SeedContainer>
                        <SeedContainer className="seedSixtySeven">
                            <Seed />
                        </SeedContainer>
                        <SeedContainer className="seedSixtyEight">
                            <Seed />
                        </SeedContainer>
                        <SeedContainer className="seedSixtyNine">
                            <Seed />
                        </SeedContainer>
                        <SeedContainer className="seedSeventy">
                            <Seed />
                        </SeedContainer>
                        <SeedContainer className="seedSeventyOne">
                            <Seed />
                        </SeedContainer>
                        <SeedContainer className="seedSeventyTwo">
                            <Seed />
                        </SeedContainer>
                        <SeedContainer className="seedSeventyThree">
                            <Seed />
                        </SeedContainer>
                        <SeedContainer className="seedSeventyFour">
                            <Seed />
                        </SeedContainer>
                        <SeedContainer className="seedSeventyFive">
                            <Seed />
                        </SeedContainer>
                        <SeedContainer className="seedSeventySix">
                            <Seed />
                        </SeedContainer>
                        <SeedContainer className="seedSeventySeven">
                            <Seed />
                        </SeedContainer>
                        <SeedContainer className="seedSeventyEight">
                            <Seed />
                        </SeedContainer>
                        <SeedContainer className="seedSeventyNine">
                            <Seed />
                        </SeedContainer>
                        <SeedContainer className="seedEighty">
                            <Seed />
                        </SeedContainer>
                        <SeedContainer className="seedEightyOne">
                            <Seed />
                        </SeedContainer>
                        <SeedContainer className="seedEightyTwo">
                            <Seed />
                        </SeedContainer>
                        <SeedContainer className="seedEightyThree">
                            <Seed />
                        </SeedContainer>
                        <SeedContainer className="seedEightyFour">
                            <Seed />
                        </SeedContainer>
                        <SeedContainer className="seedEightyFive">
                            <Seed />
                        </SeedContainer>
                        <SeedContainer className="seedEightySix">
                            <Seed />
                        </SeedContainer>
                    </PomegranateInside>
                </PomegranateBody>
            </PomegranateContainer>
        </PomegranateCardContainer>
    )
}

export default PomegranateCard