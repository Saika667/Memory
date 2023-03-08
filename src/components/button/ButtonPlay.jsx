import styled from "styled-components"
import { Link } from 'react-router-dom'

const ButtonContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Button = styled.div`
    border-radius: 10px;
    background-color: blue;
`

const ButtonLink = styled(Link)`
    text-decoration: none;
`

const LabelButton = styled.p`
    text-transform: uppercase;
    font-weight: bold;
    font-size: 20px;
    padding: 15px 20px;
    color: white;
    background-color: blueviolet;
    border-radius: 10px;
`

function ButtonPlay() {
    return (
        <ButtonContainer>
            <Button>
                <ButtonLink to="/game">
                    <LabelButton>
                        Jouer
                    </LabelButton>
                </ButtonLink>
            </Button>
        </ButtonContainer>
    )
}

export default ButtonPlay