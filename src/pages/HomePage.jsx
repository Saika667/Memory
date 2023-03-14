import styled from "styled-components"
import Snowflake from "../components/decoration/element/Snowflake"
import SnowflakeMedium from "../components/decoration/element/SnowflakeMedium"
import FilterButton from "../components/button/FilterButton"
import PlayButton from "../components/button/PlayButton"
import DifficultyButton from "../components/button/DifficultyButton"
import Mountain from "../components/decoration/element/Mountain"
import Snowman from "../components/decoration/element/Snowman"
import Fir from "../components/decoration/element/Fir"
import Frame from "../components/Frame"
import FruitCollectionButton from "../components/button/FruitCollectionButton"
import OceanCollectionButton from "../components/button/OceanCollectionButton"
import { GameTitle, PageContainer } from "../utils/styles/Atoms"
import { SnowflakeFall, SnowflakeFallTwo, animationDelay} from "./GamePage"
import { useState } from "react"

const TitleContainer = styled.div`
    display: flex;
    justify-content: center;
`

const DecorationTitle = styled.div`
    width: 7.5rem;
`

const ParamContainer = styled.div`
    height: auto;
    padding: 40px;
    border-radius: 30px;
    box-shadow: 0px 0px 11px 1px rgba(0,0,0,0.7);
    position: relative;
    z-index: 5;
`

const Filter = styled.div`
    background: #2e0057;
    border-radius: 30px;
    opacity: .3;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
`
const MenuContainer = styled.div`
    position: relative;
    z-index: 1;
`

const Selector = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 10px 0;
`

const SubTitle = styled.h2`
    color: black;
    width: 110px;
    line-height: 60px;
`

const SelectorContainer = styled.div`
    display: flex;
    justify-content: space-around;
    width: calc(100% - 110px);
`

const MountainComponent = styled.div`
    position: absolute;

    &.mediumMountainOne {
        bottom: 1.7rem;
        left: 4rem;
        z-index: 2;
    }
    &.mediumMountainTwo {
        bottom: -1.2rem;
        right: 0;
    }
    &.smallMountainOne {
        bottom: 6.7rem;
        left: -3rem;
        z-index: 1;
    }
    &.smallMountainTwo {
        bottom: -1.3rem;
        left: 11.3rem;
        z-index: 4;
    }
    &.smallMountainThree {
        bottom: -4.3rem;
        left: 19.8rem;
        z-index: 5;
    }
    &.smallMountainFour {
        bottom: -2.7rem;
        right: 5.8rem;
        z-index: 1;
    }
`

const Hill = styled.div`
    border-radius: 0 7pc 0 7pc;
    background: linear-gradient(50deg, rgba(222,218,213,1) 22%, rgba(255,255,255,1) 70%);
    position: absolute;
    
    &.one {
        width: 11rem;
        height: 15rem;
        bottom: -5.2rem;
        left: -.2rem;
        z-index: 3;
        transform: rotate(-45deg);
    }

    &.two {
        width: 9rem;
        height: 9rem;
        bottom: -5.5rem;
        left: 6.4rem;
        z-index: 5;
        transform: rotate(-54deg);
    }

    &.three {
        width: 9rem;
        height: 9rem;
        bottom: -5.2rem;
        right: -1.1rem;
        z-index: 2;
        transform: rotate(-84deg);
    }
`

const SnowmanComponent = styled.div`
    position: absolute;
    bottom: .4rem;
    right: 2rem;
    z-index: 3;
    transform: rotate(10deg);
`

const FirComponent = styled.div`
    position: absolute;

    &.one {
        bottom: 8rem;
        left: 0.6rem;
        z-index: 3;
    }
    &.two {
        bottom: 0.2rem;
        left: 5.6rem;
        z-index: 5;
    }
    &.three {
        bottom: 4.6rem;
        left: 8.6rem;
        z-index: 3;
    }
    &.four {
        bottom: -0.6rem;
        left: 15.6rem;
        z-index: 4;
    }
    &.five {
        bottom: -1.3rem;
        left: 1.9rem;
        z-index: 4;
    }
    &.six {
        bottom: 2.4rem;
        right: -0.9rem;
        z-index: 2;
    }
`

const SnowflakeContainer = styled.div`
    height: 75px;
    width: 100%;
    position: absolute;
    top: -75px;
    display: flex;
    justify-content: space-around;
`

const SnowflakeContainerComp = styled.div`
    background-color: green;
    width: 70px;
    ${animationDelay(7, 700, 'one')}
    ${animationDelay(7, 1400, 'two')}
    ${animationDelay(7, 1200, 'three')}
    ${animationDelay(7, 1850, 'four')}
    ${animationDelay(7, 1900, 'five')}
    ${animationDelay(7, 1200, 'six')}
    transform: translateZ(0deg);

    &.compOne {
        & > div {
            animation: ${SnowflakeFallTwo} 7000ms ease-in-out forwards infinite;
        }
    }

    &.compTwo {
        & > div {
            animation: ${SnowflakeFall} 8000ms ease-in-out forwards infinite;
        }
    }

    &.compThree {
        & > div {
            animation: ${SnowflakeFallTwo} 9400ms ease-in-out forwards infinite;
        }
    }

    &.compFour {
        & > div {
            animation: ${SnowflakeFall} 8600ms ease-in-out forwards infinite;
        }
    }

    &.compFive {
        & > div {
            animation: ${SnowflakeFall} 9400ms ease-in-out forwards infinite;
        }
    }

    &.compSix {
        & > div {
            animation: ${SnowflakeFallTwo} 9000ms ease-in-out forwards infinite;
        }
    }
`

const SnowflakeSmall = styled.div`
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    background-color: white;
    filter: blur(3px);
    position: absolute;
    z-index: 5;

    &.verySmall {
        width: 1rem;
        height: 1rem;
    }
`

function HomePage() {
    const [difficulty, setDifficulty] = useState('facile')
    const [collection, setCollection] = useState('fruit')

    return (
        <PageContainer>
            <SnowflakeContainer>
                <SnowflakeContainerComp className="compOne">
                    <Snowflake classNames="one homePage" />
                    <SnowflakeSmall className="one"/>
                    <SnowflakeMedium classNames="one homePage"/>
                    <SnowflakeSmall className="one verySmall"/>
                    <SnowflakeMedium classNames="one homePage"/>
                    <SnowflakeSmall className="one"/>
                    <SnowflakeSmall className="one verySmall"/>
                </SnowflakeContainerComp>

                <SnowflakeContainerComp className="compTwo">
                    <SnowflakeMedium classNames="two homePage"/>
                    <SnowflakeSmall className="two"/>
                    <SnowflakeMedium classNames="two homePage"/>
                    <SnowflakeSmall className="two verySmall"/>
                    <SnowflakeMedium classNames="two homePage"/>
                    <Snowflake classNames="two homePage"/>
                    <SnowflakeSmall className="two verySmall"/>
                </SnowflakeContainerComp>

                <SnowflakeContainerComp className="compThree">
                    <SnowflakeMedium classNames="three homePage"/>
                    <SnowflakeMedium classNames="three homePage"/>
                    <SnowflakeSmall className="three"/>
                    <Snowflake classNames="three homePage"/>
                    <SnowflakeMedium classNames="three homePage"/>
                    <SnowflakeSmall className="three verySmall"/>
                    <SnowflakeSmall className="three"/>
                </SnowflakeContainerComp>

                <SnowflakeContainerComp className="compFour">
                    <SnowflakeSmall className="four verySmall"/>
                    <SnowflakeSmall className="four"/>
                    <Snowflake classNames="four homePage"/>
                    <SnowflakeMedium classNames="four homePage"/>
                    <SnowflakeMedium classNames="four homePage"/>
                    <SnowflakeSmall className="four verySmall"/>
                </SnowflakeContainerComp>

                <SnowflakeContainerComp className="compFive">
                    <SnowflakeMedium classNames="five homePage"/>
                    <Snowflake classNames="five homePage"/>
                    <SnowflakeSmall className="five verySmall"/>
                    <SnowflakeSmall className="five"/>
                    <SnowflakeMedium classNames="five homePage"/>
                    <SnowflakeSmall className="five"/>
                    <SnowflakeMedium classNames="five homePage"/>
                </SnowflakeContainerComp>

                <SnowflakeContainerComp className="compSix">
                    <SnowflakeMedium classNames="six homePage"/>
                    <SnowflakeSmall className="six"/>
                    <SnowflakeMedium classNames="six homePage"/>
                    <Snowflake classNames="six homePage"/>
                    <SnowflakeSmall className="six verySmall"/>
                    <SnowflakeSmall className="six"/>
                    <SnowflakeMedium classNames="six homePage"/>
                </SnowflakeContainerComp>
            </SnowflakeContainer>

            <TitleContainer>
                <DecorationTitle>
                    
                </DecorationTitle>
                
                <GameTitle>Memory</GameTitle>

                <DecorationTitle>
                    
                </DecorationTitle>
            </TitleContainer>

            <Frame>
                <ParamContainer>
                    <Filter />
                    <MenuContainer>
                        <Selector>
                            <SubTitle>Mode :</SubTitle>
                            <SelectorContainer>
                                <FilterButton label="solo" />
                                <FilterButton label="duo" />
                            </SelectorContainer>
                        </Selector>
                        
                        <Selector>
                            <SubTitle>Collections :</SubTitle>
                            <SelectorContainer>
                                <FruitCollectionButton isActive={collection === "fruit"} click={() => setCollection('fruit')} />
                                <OceanCollectionButton isActive={collection === "ocean"} disabled={true} />
                            </SelectorContainer>
                        </Selector>

                        <Selector>
                            <SubTitle>Difficulté :</SubTitle>
                            <SelectorContainer>
                                <DifficultyButton label="facile" isActive={difficulty === "facile"} click={() => setDifficulty('facile')} />
                                <DifficultyButton label="moyen" isActive={difficulty === "moyen"} click={() => setDifficulty('moyen')}/>
                                <DifficultyButton label="difficile" isActive={difficulty === "difficile"} click={() => setDifficulty('difficile')}/>
                            </SelectorContainer>
                        </Selector>
                    </MenuContainer>

                    <PlayButton difficulty={difficulty} collection={collection} />
                </ParamContainer>
            </Frame>

            <MountainComponent className="mediumMountainOne">
                <Mountain classLabel={'mountainMedium'} />
            </MountainComponent>

            <MountainComponent className="smallMountainOne">
                <Mountain classLabel={'mountainSmall'} />
            </MountainComponent>

            <MountainComponent className="smallMountainTwo">
                <Mountain classLabel={'mountainSmall'} />
            </MountainComponent>

            <MountainComponent className="smallMountainThree">
                <Mountain classLabel={'mountainSmall'} />
            </MountainComponent>

            <FirComponent className="one">
                <Fir />
            </FirComponent>

            <FirComponent className="two">
                <Fir />
            </FirComponent>

            <FirComponent className="three">
                <Fir />
            </FirComponent>

            <FirComponent className="four">
                <Fir />
            </FirComponent>

            <FirComponent className="five">
                <Fir />
            </FirComponent>
            <Hill className="one"/>
            <Hill className="two"/>

            <SnowmanComponent>
                <Snowman />
            </SnowmanComponent>

            <MountainComponent className="mediumMountainTwo">
                <Mountain classLabel={'mountainMedium'} />
            </MountainComponent>

            <MountainComponent className="smallMountainFour">
                <Mountain classLabel={'mountainSmall'} />
            </MountainComponent>

            <FirComponent className="six">
                <Fir />
            </FirComponent>

            <Hill className="three"/>
        </PageContainer>
    )
}

export default HomePage