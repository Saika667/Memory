import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faArrowRotateRight } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';


const ButtonContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 15px;
    position: relative;
    z-index: 1;
`

const Button = styled.div`
    border-radius: 10px;
    margin: 0 20px;
    cursor: pointer;
`

const ButtonLink = styled.div`
    text-decoration: none;
`

const ButtonContent = styled.div`
    background-color: blueviolet;
    padding: 5px 25px;
    border-radius: 10px;
    display: flex;
    justify-content: space-around;
    align-items: center;
`
const IconContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 10px 0 0;
    color: white;
`
const LabelButton = styled.p`
    text-transform: uppercase;
    font-weight: bold;
    font-size: 1.25rem;
    color: white;
`

function PlayButton({ difficulty, statut, click = null, collection }) {
    const navigate = useNavigate()

    function handleClick() {
        console.log(collection)
        if (collection === null || difficulty === null) {
            return
        }
        if (click !== null) {
            click()
        }
        navigate(`/game/${collection}/${difficulty}`)
    }
    return (
        <ButtonContainer>
            <Button>
                <ButtonLink onClick={() => handleClick()}>
                {/* <ButtonLink onClick={() => click()} to={`/game/${collection}/${difficulty}`}> */}
                    <ButtonContent>
                        {statut === 'replay' ?
                            <IconContainer>
                                <FontAwesomeIcon icon={faArrowRotateRight} />
                            </IconContainer> :
                            <IconContainer>
                                <FontAwesomeIcon icon={faPlay} />
                            </IconContainer>
                        } 
                        <LabelButton>
                            Jouer
                        </LabelButton>
                    </ButtonContent>
                </ButtonLink>
            </Button>
        </ButtonContainer>
    )
}

export default PlayButton