import styled from "styled-components"
import { Buffer, Filter } from "./OceanCollectionButton"
import { useState } from "react"
import SnowflakeMedium from "../decoration/element/SnowflakeMedium"

const ButtonContainer = styled.div`
    position: relative;
`

const Button = styled.div`
    position: relative;
    border-radius: 10px;
    width: 5rem;
    height: 2.5rem;
    background-image: radial-gradient(circle, rgba(243,223,69,1) 10%, rgba(243,92,69,1) 70%);
    cursor: pointer;
    z-index: 1;

    &:before {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        border-radius: 10px;
        background-image: radial-gradient(circle, rgba(255,255,255,1) 10%, rgba(24,181,231,1) 70%);
        z-index: -1;
        transition: all 500ms linear;
        opacity: 0;
    }

    &:hover, &.active {
        &:before {
            opacity: 1;
        }
    }
`

const LabelButton = styled.p`
    text-transform: uppercase;
    text-align: center;
    font-size: 1.25rem;
    font-weight: bold;
    line-height: 2.5rem;
`

const BufferElement = styled(Buffer)`
    top: -.1rem;
    left: -1rem;
`

const SnowflakeElement = styled.div`
    position: absolute;
    height: 2.5rem;
    width: 2.5rem;
    opacity: 0;
    transform-origin: center center;
    transform: rotate(80deg);
    transition: all 500ms;

    &.one {
        top: -.6rem;
        left: -1rem;

    }
    &.two {
        bottom: 0rem;
        right: -0.8rem;
    }

    &.active {
        transform: rotate(0);
        opacity: 1;
        z-index: 3;
    }
`

function FilterButton({ label, initialActive = false }) {
    const [activeButton, setActiveButton]= useState(initialActive)

    return (
        <ButtonContainer>
            <SnowflakeElement className={`one ${activeButton ? 'active' : ''}`}>
                <SnowflakeMedium />
            </SnowflakeElement>

            <SnowflakeElement className={`two ${activeButton ? 'active' : ''}`}>
                <SnowflakeMedium />
            </SnowflakeElement>

            {label === 'duo' ?
                <Button onClick={() => setActiveButton(!activeButton)} className={`two ${activeButton ? 'active' : ''}`}>
                    <Filter />
                    <BufferElement>Arrive&nbsp;bientôt</BufferElement>
                    <LabelButton>
                        {label}
                    </LabelButton>
                </Button> 
                :
                <Button onClick={() => setActiveButton(!activeButton)} className={`two ${activeButton ? 'active' : ''}`}>
                    <LabelButton>
                        {label}
                    </LabelButton>
                </Button> 
            }
            
        </ButtonContainer>
    )
}

export default FilterButton