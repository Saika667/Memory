import styled from "styled-components"
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
import { useState } from "react"
import SnowflakeBarAnimate from "../components/decoration/SnowflakeBarAnimate"

const TitleContainer = styled.div`
    display: flex;
    justify-content: center;
`

const DecorationTitle = styled.div`
    width: 7.5rem;
`

const ParamContainer = styled.div`
    height: auto;
    padding: 2.5rem;
    border-radius: 30px;
    box-shadow: 0 0 11px 1px rgba(0,0,0,0.7);
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
    margin: .625rem;
`

const SubTitle = styled.h2`
    color: black;
    width: 6.875rem;
    line-height: 3.75rem;
`

const SelectorContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: calc(100% - 6.875rem);
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

function HomePage() {
    const [difficulty, setDifficulty] = useState('facile')
    const [collection, setCollection] = useState(null)

    function toggleCollection(nextCollection) {
        if (collection === nextCollection) {
            setCollection(null)
        } else {
            setCollection(nextCollection)
        }
    }

    return (
        <PageContainer>
            <SnowflakeBarAnimate classPage={'home'} />
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
                                <FilterButton label="solo" initialActive={true}/>
                                <FilterButton label="duo" />
                            </SelectorContainer>
                        </Selector>
                        
                        <Selector>
                            <SubTitle>Collections :</SubTitle>
                            <SelectorContainer>
                                <FruitCollectionButton isActive={collection === "fruit"} click={() => toggleCollection('fruit')} />
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