import styled from "styled-components"
import { darken } from "polished"

const WatermelonCardContainer = styled.div`

`

const WatermelonContainer = styled.div`
    position: absolute;
    top: 2.5rem;
    left: -.5rem;
    transform: rotate(40deg);
`

const Watermelon = styled.div`
    width: 5rem;
    height: 2.5rem;
    border-radius: 0 0 7pc 7pc;
    position: relative;
    background-color: #18b940;
    display: flex;
    justify-content: center;
    align-items: flex-start;
`

const WatermelonWhite = styled.div`
    width: 4.8rem;
    height: 2.4rem;
    border-radius: 0 0 7pc 7pc;
    background-color: #a5f3b8;
    display: flex;
    justify-content: center;
    align-items: flex-start;
`

const WatermelonInside = styled.div`
    width: 4.6rem;
    height: 2.3rem;
    border-radius: 0 0 7pc 7pc;
    background-color: #dd3b22;
`

const SeedContainer = styled.div`
    position: absolute;
    height: .28rem;
    width: .16rem;
    overflow: hidden;

    &.seedOne {
        top: 0.3rem;
        left: 0.8rem;
        transform: rotate(90deg);
    }
    &.seedTwo {
        top: 1.2rem;
        left: 1.2rem;
        transform: rotate(45deg);
    }
    &.seedThree {
        top: .6rem;
        left: 1.5rem;
        transform: rotate(58deg)
    }
    &.seedFour {
        top: 1.6rem;
        left: 2.2rem;
    }
    &.seedFive {
        top: 1.3rem;
        left: 2.7rem;
        transform: rotate(-21deg);
    }
    &.seedSix {
        top: 1.1rem;
        left: 3.5rem;
        transform: rotate(-45deg);
    }
    &.seedSeven {
        top: 0.6rem;
        left: 4rem;
        transform: rotate(-77deg);
    }
    &.seedEight {
        top: 0.6rem;
        left: 3.3rem;
        transform: rotate(-63deg);
    }
    &.seedNine {
        top: 0.1rem;
        left: 3.7rem;
        transform: rotate(-90deg);
    }
`

const TopSeed = styled.div`
    width: .16rem;
    height: .2rem;
    background-color: black;
    position: relative;

    &:before, &:after {
        content: '';
        height: .3rem;
        width: .2rem;
        position: absolute;
        background-color: #dd3b22;
    }

    &:before {
        transform: rotate(25deg);
        left: -.15rem;
        top: -.12rem;
    }

    &:after {
        transform: rotate(-25deg);
        right: -.17rem;
        top: -.12rem;
    }
`

const BottomSeed = styled.div`
    width: .16rem;
    height: .16rem;
    border-radius: 50%;
    background-color: black;
    position: absolute;
    bottom: 0;
`

function WatermelonCard() {
    return (
        <WatermelonCardContainer>
           <WatermelonContainer>
                <Watermelon>
                    <WatermelonWhite>
                        <WatermelonInside>
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
                        </WatermelonInside>
                    </WatermelonWhite>
                </Watermelon>
           </WatermelonContainer>
        </WatermelonCardContainer>
    )
}

export default WatermelonCard