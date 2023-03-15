import styled from "styled-components"
import PineappleCard from "../cards/fruits/PineappleCard"
import WatermelonCard from "../cards/fruits/WatermelonCard"
import { CoconutContainer, Coconut, CoconutHole } from "../cards/fruits/CoconutCard"
import { BlueberryContainer, Blueberry, BlueberryBottom } from "../cards/fruits/BlueberryCard"
import { useState } from "react"
import SnowflakeMedium from "../decoration/element/SnowflakeMedium"

const ButtonContainer = styled.div`
    position: relative;

`

const Button = styled.div`
    height: 4.5rem;
    width: 7rem;
    border-radius: 10px;
    background-image: radial-gradient(circle, rgba(243,223,69,1) 10%, rgba(243,92,69,1) 70%);
    position: relative;
    z-index: 1;
    overflow: hidden;
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;

    &:before {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        border-radius: 10px;
        background-image: radial-gradient(circle, rgba(255,255,255,1) 10%, rgba(24,181,231,1) 70%);
        z-index: -1;
        transition: all 500ms linear;
        opacity: 0;
    }

    &:hover {
        &:before {
            opacity: 1;
        }
    }
    &.active {
        &:before {
            opacity: 1;
        }
    }
`

const Fruit = styled.div`
    position: absolute;

    &.pineapple {
        top: -1rem;
        left: 0;
        z-index: 2;
    }

    &.watermelon {
        top: 3rem;
        left: .5rem;
        transform: rotate(-45deg);
    }

    &.coconut {
        z-index: 4;
        top: 7.7rem;
        left: -1.8rem;
        transform: rotate(-85deg);
    }

    &.blueberryOne {
        z-index: 5;
        top: 3.6rem;
        right: 3.4rem;
    }

    &.blueberryTwo {
        z-index: 6;
        top: 4rem;
        left: 4rem;
        transform: rotate(125deg);
    }
`

const LabelButton = styled.p`
    font-weight: bold;
    font-size: 35px;
    padding: 10px 20px;
    z-index: 7;
    user-select: none;
    text-shadow: 0 0 10px white;
`
const SnowflakeElement = styled.div`
    position: absolute;
    height: 2.5rem;
    width: 2.5rem;
    opacity: 0;
    transform-origin: center center;
    transform: rotate(80deg);
    transition: all 500ms;

    &.one {
        top: -.6rem;
        left: -1rem;

    }
    &.two {
        bottom: -0.3rem;
        right: -0.8rem;
    }

    &.active {
        transform: rotate(0);
        opacity: 1;
        z-index: 3;
    }
`

function FruitCollectionButton() {
    const [activeButton, setActiveButton]= useState(false)

    return (
        <ButtonContainer>
            <SnowflakeElement className={`one ${activeButton ? 'active' : ''}`}>
                <SnowflakeMedium />
            </SnowflakeElement>

            <SnowflakeElement className={`two ${activeButton ? 'active' : ''}`}>
                <SnowflakeMedium />
            </SnowflakeElement>

            <Button
                onClick={() => setActiveButton(!activeButton)}
                className={`${activeButton ? 'active' : ''}`}
            >
                <Fruit className="pineapple">
                    <PineappleCard />
                </Fruit>

                <Fruit className="watermelon">
                    <WatermelonCard />
                </Fruit>

                <Fruit className="coconut">
                    <CoconutContainer className="coco">
                        <Coconut>
                            <CoconutHole className="one"/>
                            <CoconutHole className="two"/>
                            <CoconutHole className="three"/>
                        </Coconut>
                    </CoconutContainer>
                </Fruit>

                <Fruit className="blueberryOne">
                    <BlueberryContainer>
                        <Blueberry />
                        <BlueberryBottom className="one"/>
                        <BlueberryBottom className="two"/>
                        <BlueberryBottom className="three"/>
                        <BlueberryBottom className="four"/>
                        <BlueberryBottom className="five"/>
                        <BlueberryBottom className="six"/>
                    </BlueberryContainer>
                </Fruit>

                <Fruit className="blueberryTwo">
                    <BlueberryContainer>
                        <Blueberry />
                        <BlueberryBottom className="one"/>
                        <BlueberryBottom className="two"/>
                        <BlueberryBottom className="three"/>
                        <BlueberryBottom className="four"/>
                        <BlueberryBottom className="five"/>
                        <BlueberryBottom className="six"/>
                    </BlueberryContainer>
                </Fruit>

                <LabelButton>
                  Fruit
                </LabelButton>
            </Button>
        </ButtonContainer>
    )
}

export default FruitCollectionButton