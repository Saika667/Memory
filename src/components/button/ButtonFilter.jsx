import styled from "styled-components"

const ButtonContainer = styled.div`

`

const Button = styled.div`
    border: 2px solid blue;
    border-radius: 10px;
    background-color: aqua;
    margin: 15px 30px;
`

const LabelButton = styled.p`
    text-transform: uppercase;
    padding: 10px 20px;
`

function ButtonFilter({ label }) {
    return (
        <ButtonContainer>
            <Button>
                <LabelButton>
                    {label}
                </LabelButton>
            </Button>
        </ButtonContainer>
    )
}

export default ButtonFilter