import styled from "styled-components"
import PineappleCard from "./fruits/PineappleCard"
import WatermelonCard from "./fruits/WatermelonCard"
import { CoconutContainer, Coconut, CoconutHole } from "./fruits/CoconutCard"
import { BlueberryContainer, Blueberry, BlueberryBottom } from "./fruits/BlueberryCard"
const BackCardContainer = styled.div`
    position: absolute;
    backface-visibility: hidden;
    transform: rotateY(-180deg);
`

const BackCardContent = styled.div`
    width: 6rem;
    height: 7rem;
    position: relative;
    background: radial-gradient(circle, rgba(0,255,55,1) 25%, rgba(216,231,24,1) 63%);
`
const Text = styled.p`
    position: absolute;
    top: 1rem;
    left: 1.5rem;
    font-family: sans-serif;
    font-size: 86px;
    color: #ffefef;
    z-index: 8;
    transform: rotateY(180deg);
`

const FruitContainer = styled.div`
    position: absolute;

    &.pineapple {
        top: -1rem;
        left: -.3rem;
    }
    &.watermelon {
        z-index: 3;
        top: 0rem;
        left: 2.5rem;
        transform: rotate(45deg);
    }
    &.coconut {
        z-index: 4;
        top: 1.6rem;
        left: .2rem;
    }

    &.blueberryOne {
        z-index: 5;
        top: 5rem;
        left: .2rem;
    }

    &.blueberryTwo {
        z-index: 6;
        top: 6.5rem;
        left: 1.6rem;
        transform: rotate(-125deg);
    }

    &.blueberryThree {
        z-index: 7;
        top: 5.4rem;
        left: 2rem;
        transform: rotate(180deg);
    }
`

function BackCard() {

    return (
        <BackCardContainer>
            <BackCardContent>
                <Text>?</Text>
                <FruitContainer className="pineapple">
                    <PineappleCard />
                </FruitContainer>

                <FruitContainer className="watermelon">
                    <WatermelonCard />
                </FruitContainer>

                <FruitContainer className="coconut">
                    <CoconutContainer className="coco">
                        <Coconut>
                            <CoconutHole className="one"/>
                            <CoconutHole className="two"/>
                            <CoconutHole className="three"/>
                        </Coconut>
                    </CoconutContainer>
                </FruitContainer>

                <FruitContainer className="blueberryOne">
                    <BlueberryContainer>
                        <Blueberry />
                        <BlueberryBottom className="one"/>
                        <BlueberryBottom className="two"/>
                        <BlueberryBottom className="three"/>
                        <BlueberryBottom className="four"/>
                        <BlueberryBottom className="five"/>
                        <BlueberryBottom className="six"/>
                    </BlueberryContainer>
                </FruitContainer>

                <FruitContainer className="blueberryTwo">
                    <BlueberryContainer>
                        <Blueberry />
                        <BlueberryBottom className="one"/>
                        <BlueberryBottom className="two"/>
                        <BlueberryBottom className="three"/>
                        <BlueberryBottom className="four"/>
                        <BlueberryBottom className="five"/>
                        <BlueberryBottom className="six"/>
                    </BlueberryContainer>
                </FruitContainer>   

                <FruitContainer className="blueberryThree">
                    <BlueberryContainer>
                        <Blueberry />
                        <BlueberryBottom className="one"/>
                        <BlueberryBottom className="two"/>
                        <BlueberryBottom className="three"/>
                        <BlueberryBottom className="four"/>
                        <BlueberryBottom className="five"/>
                        <BlueberryBottom className="six"/>
                    </BlueberryContainer>
                </FruitContainer> 
            </BackCardContent>
        </BackCardContainer>
    )
}

export default BackCard