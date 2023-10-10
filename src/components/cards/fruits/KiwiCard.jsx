import styled from "styled-components"
import { darken, lighten } from "polished"

const KiwiCardContainer = styled.div`

`

const KiwiContainer = styled.div`
    position: absolute;

    &.kiwi {
        top: 1.5rem;
        left: .3rem;
        transform: rotate(180deg);
    }

    &.halfKiwi {
        top: 2.4rem;
        left: 1.4rem;
    }
`

const Kiwi = styled.div`
    width: 4rem;
    height: 3rem;
    border-radius: 50%;
    background-color: #603616;
    position: relative;

    &:before {
        content: '';
        border-radius: 50%;
        width: .2rem;
        height: .4rem;
        background: ${darken(.1, "#603616")};
        position: absolute;
        right: -.05rem;
        top: 1.3rem;
    }
`

const HalfKiwiSkin = styled.div`
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    background-color: #603616;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: rotateZ(27deg) rotateX(-42deg) rotateY(34deg);
`

const HalfKiwiInside = styled.div`
    width: 2.9rem;
    height: 2.9rem;
    border-radius: 50%;
    background-color: #18a023;
    display: flex;
    justify-content: center;
    align-items: center;
`
const HalfKiwiCenter = styled.div`
    width: 1.3rem;
    height: .8rem;
    border-radius: 50%;
    background: ${lighten(.3,"#18a023")};
    filter: blur(.07rem);
`

const SeedContainer = styled.div`
    position: absolute;
    height: .28rem;
    width: .1rem;
    overflow: hidden;
    

    &.seedOne {
        top: .75rem;
        left: 1.5rem;
        transform: rotate(180deg);
    }
    &.seedTwo {
        top: .75rem;
        left: 1.3rem;
        transform: rotate(170deg);
    }
    &.seedThree {
        top: .8rem;
        left: 1.7rem;
        transform: rotate(190deg);
    }
    &.seedFour {
        top: .85rem;
        left: 1.9rem;
        transform: rotate(200deg);
    }
    &.seedFive {
        top: .75rem;
        left: 1.05rem;
        transform: rotate(160deg);
    }
    &.seedSix {
        top: .9rem;
        left: .9rem;
        transform: rotate(150deg);
    }
    &.seedSeven {
        top: .95rem;
        left: 2.15rem;
        transform: rotate(210deg);
    }
    &.seedEight {
        top: 1.05rem;
        left: 2.25rem;
        transform: rotate(240deg);
    }
    &.seedNine {
        top: 1.2rem;
        left: 2.35rem;
        transform: rotate(260deg);
    }
    &.seedTen {
        top: 1.35rem;
        left: 2.35rem;
        transform: rotate(280deg);
    }
    &.seedEleven {
        top: 1.5rem;
        left: 2.3rem;
        transform: rotate(290deg);
    }
    &.seedTwelve {
        top: 1.65rem;
        left: 2.2rem;
        transform: rotate(310deg);
    }
    &.seedThirteen {
        top: 1.8rem;
        left: 2.05rem;
        transform: rotate(-20deg);
    }
    &.seedFourteen {
        top: 1.88rem;
        left: 1.88rem;
        transform: rotate(-10deg);
    }
    &.seedFifteen {
        top: 1.9rem;
        left: 1.7rem;
        transform: rotate(-10deg);
    }
    &.seedSixteen {
        top: 1.95rem;
        left: 1.5rem;
    }
    &.seedSeventeen {
        top: 1.95rem;
        left: 1.35rem;
        transform: rotate(10deg);
    }
    &.seedEighteen {
        top: 1.9rem;
        left: 1.15rem;
        transform: rotate(10deg);
    }
    &.seedNineteen {
        top: 1.9rem;
        left: 1rem;
        transform: rotate(20deg);
    }
    &.seedTwenty {
        top: 1.8rem;
        left: .85rem;
        transform: rotate(35deg);
    }
    &.seedTwentyOne {
        top: 1.7rem;
        left: .7rem;
        transform: rotate(50deg);
    }
    &.seedTwentyTwo {
        top: 1.55rem;
        left: .6rem;
        transform: rotate(65deg);
    }
    &.seedTwentyThree {
        top: 1.45rem;
        left: .55rem;
        transform: rotate(80deg);
    }
    &.seedTwentyFour {
        top: 1.25rem;
        left: .55rem;
        transform: rotate(90deg);
    }
    &.seedTwentyFive {
        top: 1.1rem;
        left: .65rem;
        transform: rotate(110deg);
    }
    &.seedTwentySix {
        top: .95rem;
        left: .7rem;
        transform: rotate(130deg);
    }
`

const TopSeed = styled.div`
    width: .1rem;
    height: .2rem;
    background-color: black;
    position: relative;

    &:before, &:after {
        content: '';
        height: .3rem;
        width: .2rem;
        position: absolute;
        background-color: #18a023;
    }

    &:before {
        transform: rotate(15deg);
        left: -.15rem;
        top: -.12rem;
    }

    &:after {
        transform: rotate(-15deg);
        right: -.15rem;
        top: -.12rem;
    }
`

const BottomSeed = styled.div`
    width: .1rem;
    height: .1rem;
    border-radius: 50%;
    background-color: black;
    position: absolute;
    bottom: 0;
`

const BodyKiwi = styled.div`
    width: 2.95rem;
    height: 2.1rem;
    border-radius: 0 0 7pc 7pc ;
    background-color: #603616;
    transform: rotate(-25deg);
    position: absolute;
    left: 0.45rem;
    bottom: -0.49rem;

    &:before {
        content: '';
        width: 2.95rem;
        height: 2.1rem;
        border-radius: 0 0 7pc 7pc ;
        background: radial-gradient(circle at 66% 4%,transparent 67%,${darken(.1,'#603616')} 35%);
        position: absolute;
        bottom: 0;
    }
`

function KiwiCard() {
    return(
        <KiwiCardContainer>
            <KiwiContainer className="kiwi">
                <Kiwi />
            </KiwiContainer>

            <KiwiContainer className="halfKiwi">
                <BodyKiwi />
                <HalfKiwiSkin>
                    <HalfKiwiInside>
                        <HalfKiwiCenter />

                        <SeedContainer className="seedOne">
                        <TopSeed />
                        <BottomSeed />
                    </SeedContainer>

                    <SeedContainer className="seedTwo">
                        <TopSeed />
                        <BottomSeed />
                    </SeedContainer>

                    <SeedContainer className="seedThree">
                        <TopSeed />
                        <BottomSeed />
                    </SeedContainer>

                    <SeedContainer className="seedFour">
                        <TopSeed />
                        <BottomSeed />
                    </SeedContainer>

                    <SeedContainer className="seedFive">
                        <TopSeed />
                        <BottomSeed />
                    </SeedContainer>

                    <SeedContainer className="seedSix">
                        <TopSeed />
                        <BottomSeed />
                    </SeedContainer>

                    <SeedContainer className="seedSeven">
                        <TopSeed />
                        <BottomSeed />
                    </SeedContainer>

                    <SeedContainer className="seedEight">
                        <TopSeed />
                        <BottomSeed />
                    </SeedContainer>

                    <SeedContainer className="seedNine">
                        <TopSeed />
                        <BottomSeed />
                    </SeedContainer>

                    <SeedContainer className="seedTen">
                        <TopSeed />
                        <BottomSeed />
                    </SeedContainer>

                    <SeedContainer className="seedEleven">
                        <TopSeed />
                        <BottomSeed />
                    </SeedContainer>

                    <SeedContainer className="seedTwelve">
                        <TopSeed />
                        <BottomSeed />
                    </SeedContainer>

                    <SeedContainer className="seedThirteen">
                        <TopSeed />
                        <BottomSeed />
                    </SeedContainer>

                    <SeedContainer className="seedFourteen">
                        <TopSeed />
                        <BottomSeed />
                    </SeedContainer>

                    <SeedContainer className="seedFifteen">
                        <TopSeed />
                        <BottomSeed />
                    </SeedContainer>

                    <SeedContainer className="seedSixteen">
                        <TopSeed />
                        <BottomSeed />
                    </SeedContainer>

                    <SeedContainer className="seedSeventeen">
                        <TopSeed />
                        <BottomSeed />
                    </SeedContainer>

                    <SeedContainer className="seedEighteen">
                        <TopSeed />
                        <BottomSeed />
                    </SeedContainer>

                    <SeedContainer className="seedNineteen">
                        <TopSeed />
                        <BottomSeed />
                    </SeedContainer>

                    <SeedContainer className="seedTwenty">
                        <TopSeed />
                        <BottomSeed />
                    </SeedContainer>

                    <SeedContainer className="seedTwentyOne">
                        <TopSeed />
                        <BottomSeed />
                    </SeedContainer>

                    <SeedContainer className="seedTwentyTwo">
                        <TopSeed />
                        <BottomSeed />
                    </SeedContainer>

                    <SeedContainer className="seedTwentyThree">
                        <TopSeed />
                        <BottomSeed />
                    </SeedContainer>

                    <SeedContainer className="seedTwentyFour">
                        <TopSeed />
                        <BottomSeed />
                    </SeedContainer>

                    <SeedContainer className="seedTwentyFive">
                        <TopSeed />
                        <BottomSeed />
                    </SeedContainer>

                    <SeedContainer className="seedTwentySix">
                        <TopSeed />
                        <BottomSeed />
                    </SeedContainer>
                    </HalfKiwiInside>
                </HalfKiwiSkin>
            </KiwiContainer>
        </KiwiCardContainer>
    )
}

export default KiwiCard