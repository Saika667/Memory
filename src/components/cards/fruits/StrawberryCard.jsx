import styled from "styled-components"

const StrawberryCardContainer = styled.div`

`

const StrawberryContainer = styled.div`
    position: absolute;
    width: 4rem;
    height: 4.5rem;

    &.strawberryOne {
        top: 1.2rem;
        left: .3rem;
        transform: rotate(55deg);
    }
`

const Strawberry = styled.div`
    position: relative;
    width: 4rem;
    height: 4.5rem;
`

const StrawberryBodyTop = styled.div`
    width: 2rem;
    height: 2rem;
    position: absolute;
    top: .5rem;
    background-color: #e10505;
    border-radius: 50%;
    
    &.left {
        left: 0;

        &:before {
            content: '';
            width: 1rem;
            height: 3.5rem;
            border-radius: 50%;
            background-color: #e10505;
            position: absolute;
            top: .65rem;
            left: 0.5rem;
            transform: rotate(-30deg);
        }

        &:after {
            content: '';
            width: 3.2rem;
            height: .7rem;
            border-radius: 50%;
            background-color: #e10505;
            position: absolute;
            left: 0.4rem;
            top: -0.1rem;
        }
    }
    &.right {
        right: 0;

        &:before {
            content: '';
            width: 1rem;
            height: 3.5rem;
            border-radius: 50%;
            background-color: #e10505;
            position: absolute;
            top: 0.65rem;
            right: 0.5rem;
            transform: rotate(30deg);
        }

        &:after {
            content: '';
            width: 1.6rem;
            height: 2.2rem;
            background-color: #e10505;
            position: absolute;
            top: 0.6rem;
            left: -.9rem;
        }
    }
`

const StrawberryBodyBottom = styled.div`
    width: 1.5rem;
    height: 1.5rem;
    position: absolute;
    bottom: 0;
    left: 1.25rem;
    background-color: #e10505;
    border-radius: 50%;
`

const StrawberryLeaf = styled.div`
    position: absolute;
    background-color: green;
    border-radius: 50%;
    width: 0.25rem;
    height: 0.6rem;
    z-index: 1;

    &.one {
        top: .2rem;
        left: 3rem;
        transform: rotate(-80deg);
    }
    &.two {
        top: .2rem;
        left: 2.8rem;
        transform: rotate(-60deg);
    }
    &.three {
        top: .2rem;
        left: 2.6rem;
        transform: rotate(-55deg);
    }
    &.four {
        top: .2rem;
        left: 2.4rem;
        transform: rotate(-45deg);
    }
    &.five {
        top: .2rem;
        left: 2.2rem;
        transform: rotate(-35deg);
    }
    &.six {
        top: .2rem;
        left: 2rem;
        transform: rotate(-30deg);
    }
    &.seven {
        top: .2rem;
        left: 1.8rem;
    }
    &.eight {
        top: .2rem;
        left: 1.6rem;
        transform: rotate(30deg);
    }
    &.nine {
        top: .2rem;
        left: 1.4rem;
        transform: rotate(35deg);
    }
    &.ten {
        top: .2rem;
        left: 1.2rem;
        transform: rotate(45deg);
    }
    &.eleven {
        top: .2rem;
        left: 1rem;
        transform: rotate(55deg);
    }
    &.twelve {
        top: .2rem;
        left: .8rem;
        transform: rotate(60deg);
    }
    &.thirteen {
        top: .2rem;
        left: .6rem;
        transform: rotate(80deg);
    }
`

const StrawberryStem = styled.div`
    position: absolute;
    left: 1.85rem;
    width: 0.2rem;
    height: 0.3rem;
    background: radial-gradient(circle at 168% -64%,transparent 53%,green 35%);

    &:before {
        content: '';
        border-radius: 50%;
        background-color: green;
        width: 2.5rem;
        height: .35rem;
        position: absolute;
        top: .25rem;
        left: -1.2rem;
        z-index: 2;
    }
`

const SeedContainer = styled.div`
    position: absolute;
    height: .26rem;
    width: .1rem;
    overflow: hidden;
    transform: rotate(180deg);

    &.seedOne {
        top: 4.1rem;
        left: 1.9rem;
    }
    &.seedTwo {
        top: 3.8rem;
        left: 1.6rem;
    }
    &.seedThree {
        top: 3.8rem;
        left: 2.3rem;
    }
    &.seedFour {
        top: 3.4rem;
        left: 1.2rem;
    }
    &.seedFive {
        top: 3.4rem;
        left: 1.9rem;
    }
    &.seedSix {
        top: 3.4rem;
        left: 2.7rem;
    }
    &.seedSeven {
        top: 2.9rem;
        left: 1.6rem;
    }
    &.seedEight {
        top: 2.9rem;
        left: 2.3rem;
    }
    &.seedNine {
        top: 2.9rem;
        left: 3rem;
    }
    &.seedTen {
        top: 2.9rem;
        left: .9rem;
    }
    &.seedEleven {
        top: 2.4rem;
        left: .5rem;
    }
    &.seedTwelve {
        top: 2.4rem;
        left: 1.25rem;
    }
    &.seedThirteen {
        top: 2.4rem;
        left: 1.9rem;
    }
    &.seedFourteen {
        top: 2.4rem;
        left: 2.7rem;
    }
    &.seedFifteen {
        top: 2.4rem;
        left: 3.35rem;
    }
    &.seedSixteen {
        top: 1.9rem;
        left: 3.6rem;
    }
    &.seedSeventeen {
        top: 1.9rem;
        left: 3rem;
    }
    &.seedEighteen {
        top: 1.9rem;
        left: 2.35rem;
    }
    &.seedNineteen {
        top: 1.9rem;
        left: 1.65rem;
    }
    &.seedTwenty {
        top: 1.9rem;
        left: .9rem;
    }
    &.seedTwentyOne {
        top: 1.9rem;
        left: .2rem;
    }
    &.seedTwentyTwo {
        top: 1.35rem;
        left: .1rem;
    }
    &.seedTwentyThree {
        top: 1.35rem;
        left: .6rem;
    }
    &.seedTwentyFour {
        top: 1.35rem;
        left: 1.3rem;
    }
    &.seedTwentyFive {
        top: 1.35rem;
        left: 2rem;
    }
    &.seedTwentySix {
        top: 1.35rem;
        left: 2.65rem;
    }
    &.seedTwentySeven {
        top: 1.35rem;
        left: 3.3rem;
    }

    &.seedTwentyEight {
        top: 1.35rem;
        left: 3.8rem;
    }

    &.seedTwentyNine {
        top: .8rem;
        left: 3.55rem;
    }

    &.seedThirty {
        top: .8rem;
        left: 3rem;
    }

    &.seedThirtyOne {
        top: .8rem;
        left: 2.45rem;
    }

    &.seedThirtyTwo {
        top: .8rem;
        left: 1.7rem;
    }

    &.seedThirtyThree {
        top: .8rem;
        left: 1rem;
    }

    &.seedThirtyFour {
        top: .8rem;
        left: .4rem;
    }
`

const TopSeed = styled.div`
    width: .15rem;
    height: .15rem;
    background-color: #f8edc6;
    position: relative;

    &:before, &:after {
        content: '';
        height: .3rem;
        width: .2rem;
        position: absolute;
        background-color: #e10505;
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
    background-color: #f8edc6;
    position: absolute;
    bottom: .1rem;
    left: .02rem;
`

function StrawberryCard() {
    return (
        <StrawberryCardContainer>
           <StrawberryContainer className="strawberryOne">
                <Strawberry>
                    <StrawberryStem />
                    <StrawberryLeaf className="one"/>
                    <StrawberryLeaf className="two"/>
                    <StrawberryLeaf className="three"/>
                    <StrawberryLeaf className="four"/>
                    <StrawberryLeaf className="five"/>
                    <StrawberryLeaf className="six"/>
                    <StrawberryLeaf className="seven"/>
                    <StrawberryLeaf className="eight"/>
                    <StrawberryLeaf className="nine"/>
                    <StrawberryLeaf className="ten"/>
                    <StrawberryLeaf className="eleven"/>
                    <StrawberryLeaf className="twelve"/>
                    <StrawberryLeaf className="thirteen"/>

                    <StrawberryBodyTop className="right"/>
                    <StrawberryBodyTop className="left"/>
                    <StrawberryBodyBottom />

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

                    <SeedContainer className="seedTwentySeven">
                        <TopSeed />
                        <BottomSeed />
                    </SeedContainer>

                    <SeedContainer className="seedTwentyEight">
                        <TopSeed />
                        <BottomSeed />
                    </SeedContainer>

                    <SeedContainer className="seedTwentyNine">
                        <TopSeed />
                        <BottomSeed />
                    </SeedContainer>

                    <SeedContainer className="seedThirty">
                        <TopSeed />
                        <BottomSeed />
                    </SeedContainer>

                    <SeedContainer className="seedThirtyOne">
                        <TopSeed />
                        <BottomSeed />
                    </SeedContainer>

                    <SeedContainer className="seedThirtyTwo">
                        <TopSeed />
                        <BottomSeed />
                    </SeedContainer>

                    <SeedContainer className="seedThirtyThree">
                        <TopSeed />
                        <BottomSeed />
                    </SeedContainer>

                    <SeedContainer className="seedThirtyFour">
                        <TopSeed />
                        <BottomSeed />
                    </SeedContainer>
                </Strawberry>
           </StrawberryContainer>
        </StrawberryCardContainer>
    )
}

export default StrawberryCard