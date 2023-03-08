import styled from "styled-components"
import Snowflake from "../components/decoration/element/Snowflake"
import SnowflakeMedium from "../components/decoration/element/SnowflakeMedium"
import ButtonFilter from "../components/button/ButtonFilter"
import ButtonPlay from "../components/button/ButtonPlay"
import { GameTitle, PageContainer } from "../utils/styles/Atoms"
import ButtonDifficulty from "../components/button/ButtonDifficulty"

const TitleContainer = styled.div`
    display: flex;
    justify-content: center;
`

const DecorationTitle = styled.div`
    width: 7.5rem;
`

const MenuContainer = styled.div`

`

const SubTitle = styled.h2`
    color: black;
`

const SelectorContainer = styled.div`
    display: flex;
    justify-content: space-around;
`
function HomePage() {


    return (
        <PageContainer>
            <TitleContainer>
                <DecorationTitle>
                    <Snowflake />
                    <SnowflakeMedium />
                </DecorationTitle>
                
                <GameTitle>Memory</GameTitle>

                <DecorationTitle>
                    <Snowflake />
                    <SnowflakeMedium />
                </DecorationTitle>
            </TitleContainer>

            <MenuContainer>
                <SubTitle>Mode :</SubTitle>
                <SelectorContainer>
                    <ButtonFilter label="solo" />
                    <ButtonFilter label="duo" />
                </SelectorContainer>

                <SubTitle>Collections :</SubTitle>
                <SelectorContainer>

                </SelectorContainer>

                <SubTitle>Difficulté :</SubTitle>
                <SelectorContainer>
                    <ButtonDifficulty label="facile"/>
                    <ButtonDifficulty label="moyen"/>
                    <ButtonDifficulty label="difficile"/>
                </SelectorContainer>
            </MenuContainer>

            <ButtonPlay />
        </PageContainer>
    )
}

export default HomePage