import styled from "styled-components"

const ButtonContainer =  styled.div`
    margin: 0 10px;
`

const Button = styled.div`
    width: 5.5rem;
    padding: 5px 0 0 0;
    border-radius: 10px;
    background-color:  #5d5a5a;
    cursor: pointer;

    &.active {
        background-color: #2e0057;
    }
`

const LabelButton = styled.p`
    text-align: center;
    text-transform: uppercase;
    color:  #c1bfbf;

    &.active {
        color: white;
    }
`

const BarsContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: flex-end;
    width: 4.4rem;
    margin: auto;
`

const Bar = styled.div`
    width: .7rem;
    box-sizing: border-box;

    &.one {
        height: .4rem;
        border: 2px solid #a9a4a4;

        &.full {
            background-color: #a9a4a4;
        }

        &.active {
            border: 2px solid #33FF00;
            background-color: #33FF00;
        }
    }

    &.two {
        height: .8rem;
        border: 2px solid #a9a4a4;
        &.full {
            background-color: #a9a4a4;
        }
        &.active {
            border: 2px solid #99FF00;
            background-color: #99FF00;
        }
    }

    &.three {
        height: 1.2rem;
        border: 2px solid #a9a4a4;
        &.full {
            background-color: #a9a4a4;

            &.active {
                border: 2px solid #FFCE30;
                background-color: #FFCE30;
            }
        }
        
        &.active {
            border: 2px solid #FFCE30;
        }
    }

    &.four {
        height: 1.6rem;
        border: 2px solid #a9a4a4;
        &.full {
            background-color: #a9a4a4;

            &.active {
                border: 2px solid #FF9900;
                background-color: #FF9900;
            }
        }
        
        &.active {
            border: 2px solid #FF9900;
        }
    }

    &.five {
        height: 2rem;
        border: 2px solid #a9a4a4;
        &.full {
            background-color: #a9a4a4;

            &.active {
                border: 2px solid #e83845;
                background-color: #e83845;
            }
        }

        &.active {
            border: 2px solid #e83845;
        }
    }
`

function DifficultyButton({ label, click, isActive }) {

    return (
        <ButtonContainer onClick={click}>
            <Button className={`${isActive ? 'active' : ''}`}>
                <BarsContainer className={`${isActive ? 'active' : ''}`}>
                    <Bar className={`one full ${isActive ? 'active' : ''}`}/>
                    <Bar className={`two full ${isActive ? 'active' : ''}`}/>
                    <Bar className={
                            `three ${label === 'moyen' || label === 'difficile' ? 'full' : ''}
                            ${isActive ? 'active' : ''}`
                        }
                    />
                    <Bar className={
                            `four ${label === 'difficile' ? 'full' : ''}
                            ${isActive ? 'active' : ''}`
                        }
                    />
                    <Bar className={
                            `five ${label === 'difficile' ? 'full' : ''} 
                            ${isActive ? 'active' : ''}`
                        }
                    />
                </BarsContainer>

                <LabelButton className={`${isActive ? 'active' : ''}`}>
                    {label}
                </LabelButton>
            </Button>
        </ButtonContainer>
    )
}

export default DifficultyButton