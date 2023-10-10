import styled from "styled-components";
import Frame from "./Frame";
import PlayButton from "./button/PlayButton";
import HomeButton from "./button/HomeButton";
import { useParams } from "react-router-dom";

const ModalContainer = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    &.hidden {
        display: none;
    }
    
`
const Filter = styled.div`
    background: #2e0057;
    opacity: .3;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
`

const ResultContainer = styled.div`
    background-color: #2e0057;
    padding: 60px;
    border-radius: 10px;
`

const Text = styled.h2`
    text-align: center;
    color: white;
    padding-bottom: 1.5rem;
`

const TextInformation = styled.p`
    color: white;
`

const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
 `

function Modal({ result, time, transformTime, pairsFound, isVisible, numberOfGames, setNumberOfGames, closeModal, collection, funcReplay }) {
    const { difficulty } = useParams();
    
    return (
        <ModalContainer className={`${ isVisible ? '' : 'hidden'} `}>
            <Filter />
            <Frame>
                <ResultContainer>
                    { result === 'win' ? 
                    <Text>Gagné !</Text> : 
                    <Text>Perdu, essaie encore !</Text>}

                    <TextInformation>
                        { time === 0 ? 'Temps écoulé...' : `${transformTime(time)} temps restant.` }
                    </TextInformation>

                    {result === 'win' ?
                        <TextInformation>Toutes les paires trouvées !</TextInformation> :
                        <TextInformation>
                            {pairsFound <= 1 ? `${pairsFound} paire trouvée.` : `${pairsFound} paires trouvées.`}
                        </TextInformation>
                    }

                    <ButtonContainer>
                        <PlayButton difficulty={difficulty} statut={'replay'} collection={collection}
                            click={() => {
                                setNumberOfGames(numberOfGames + 1)
                                closeModal(false)
                                funcReplay(difficulty)
                            }}
                        />
                        <HomeButton />
                    </ButtonContainer>
                </ResultContainer>
            </Frame>
        </ModalContainer>
    )
}

export default Modal