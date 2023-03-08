import styled from "styled-components"

const ButtonContainer =  styled.div`

`

const Button = styled.div`
    width: 7rem;
    border: 2px blue solid;
    padding: 5px 0;
    border-radius: 10px;
`

const LabelButton = styled.p`
    text-align: center;
    text-transform: uppercase;
`

const BarsContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: flex-end;
    width: 6rem;
    margin: auto;
`

const Bar = styled.div`
    width: .8rem;
    box-sizing: border-box;

    &.one {
        height: .4rem;
        border: 2px solid #33FF00;
        &.full {
            background-color: #33FF00;
        }
    }

    &.two {
        height: .8rem;
        border: 2px solid #99FF00;
        &.full {
            background-color: #99FF00;
        }
    }

    &.three {
        height: 1.2rem;
        border: 2px solid #FFCE30;
        &.full {
            background-color: #FFCE30;
        }
    }

    &.four {
        height: 1.6rem;
        border: 2px solid #FF9900;
        &.full {
            background-color: #FF9900;
        }
    }

    &.five {
        height: 2rem;
        border: 2px solid #e83845;
        &.full {
            background-color: #e83845;
        }
    }
`

function ButtonDifficulty({ label }) {
    return (
        <ButtonContainer>
            <Button>
                <BarsContainer>
                    <Bar className="one full"/>
                    <Bar className="two full"/>
                    <Bar className={`three ${label === 'moyen' || label === 'difficile' ? 'full' : ''}`}/>
                    <Bar className={`four ${label === 'difficile' ? 'full' : ''}`}/>
                    <Bar className={`five ${label === 'difficile' ? 'full' : ''}`}/>
                </BarsContainer>
                <LabelButton>
                    {label}
                </LabelButton>
            </Button>
        </ButtonContainer>
    )
}

export default ButtonDifficulty