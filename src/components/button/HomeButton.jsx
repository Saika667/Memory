import styled from "styled-components"
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'

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

const ButtonLink = styled(Link)`
    text-decoration: none;
`

const ButtonContent = styled.div`
    background-image: linear-gradient(175deg, rgba(105,7,193,1) 12%, rgba(199,8,251,1) 70%);
    padding: 5px 25px;
    border-radius: 10px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    transform: scale(1);
    position: relative;

    &:before {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        border-radius: 10px;
        background-image: linear-gradient(175deg,rgba(199,8,251,1) 17%,rgba(105,7,193,1) 105%);
        z-index: -1;
        transition: all 500ms linear;
        opacity: 0;
    }

    &:hover {
        &:before {
            opacity: 1;
            transform: scale(1.1);
        }
    }
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

function HomeButton() {
    return (
        <ButtonContainer>
            <Button>
                <ButtonLink to={`/home`}>
                    <ButtonContent>
                        <IconContainer>
                            <FontAwesomeIcon icon={faHouse} />
                        </IconContainer>

                        <LabelButton>
                            Accueil
                        </LabelButton>
                    </ButtonContent>
                </ButtonLink>
            </Button>
        </ButtonContainer>
    )
}

export default HomeButton