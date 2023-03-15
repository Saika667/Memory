import styled from "styled-components"
import { StarfishBodyCenter, StarfishBranch, StarfishBranchContainer, StarfishBranchContent, StarfishBranchShadow, StarfishContainer, StarfishPoint } from "../cards/ocean/StarfishCard"
import { SeaweedContainer, Seaweed } from "../cards/ocean/SeaweedCard"
import { ShellfishContainer, ShellfishTop, ShellfishBottom } from "../cards/ocean/ShellfishCard"

const ButtonContainer = styled.div`

`

const Button = styled.div`
    height: 4.5rem;
    width: 7rem;
    border-radius: 10px;
    background-image: radial-gradient(circle, rgba(243,223,69,1) 10%, rgba(243,92,69,1) 70%);
    position: relative;
    z-index: 1;
    
    overflow: hidden;
    //cursor: pointer;

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

    &:hover {
        &:before {
            opacity: 1;
        }
    }
`

const Element = styled.div`
    position: absolute;

    &.starfish {
        top: 4rem;
        left: 1rem;
        transform-origin: 50% 50%;
        transform: rotate(-45deg);
        z-index: 2;
    }

    &.seaweedOne {
        width: 3.5rem;
        height: 6.5rem;
        top: -.1rem;
        right: -.2rem;
    }

    &.seaweedTwo {
        width: 2.7rem;
        height: 5rem;
        z-index: 4;
        top: 1.6rem;
        left: .3rem;
    }

    &.shellfish {
        width: 4rem;
        height: 3.3rem;
        top: 2rem;
        left: .1rem;
        transform: rotate(-45deg);
    }
`

const LabelButton = styled.p`
    font-weight: bold;
    font-size: 35px;
    padding: 10px 20px;
    position: relative;
    z-index: 7;
    user-select: none;
    text-shadow: 0px 0px 10px white;
`

export const Filter = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: .8;
    z-index: 8;
    border-radius: 10px;
    background-color: #464444;
`

export const Buffer = styled.p`
    position: absolute;
    top: 1.15rem;
    left: .15rem;
    color: red;
    font-size: 1.25rem;
    font-weight: bold;
    padding: 0 3px;
    border: 2px solid red;
    border-radius: 10px;
    transform: rotate(-23deg);
    z-index: 9;
    user-select: none;
    
`

function OceanCollectionButton({ disabled }) {
    return (
        <ButtonContainer className={`${disabled ? 'disabled' : ''}`}>
            <Button>
                <Filter />
                <Buffer>Arrive bientôt</Buffer>
                <Element className="starfish">
                    <StarfishContainer className="big">
                        <StarfishBodyCenter>
                        <StarfishPoint className="six" />
                        </StarfishBodyCenter>
                        <StarfishBranchContainer className="one">
                            <StarfishBranchShadow />
                            <StarfishBranch />
                            <StarfishBranchContent />
                            <StarfishPoint className="one" />
                            <StarfishPoint className="two" />
                            <StarfishPoint className="three" />
                            <StarfishPoint className="four" />
                            <StarfishPoint className="five" />
                        </StarfishBranchContainer>

                        <StarfishBranchContainer className="two">
                            <StarfishBranchShadow />
                            <StarfishBranch />
                            <StarfishBranchContent />
                            <StarfishPoint className="one" />
                            <StarfishPoint className="two" />
                            <StarfishPoint className="three" />
                            <StarfishPoint className="four" />
                            <StarfishPoint className="five" />
                        </StarfishBranchContainer>

                        <StarfishBranchContainer className="three">
                            <StarfishBranchShadow />
                            <StarfishBranch />
                            <StarfishBranchContent />
                            <StarfishPoint className="one" />
                            <StarfishPoint className="two" />
                            <StarfishPoint className="three" />
                            <StarfishPoint className="four" />
                            <StarfishPoint className="five" />
                        </StarfishBranchContainer>

                        <StarfishBranchContainer className="four">
                            <StarfishBranchShadow />
                            <StarfishBranch />
                            <StarfishBranchContent />
                            <StarfishPoint className="one" />
                            <StarfishPoint className="two" />
                            <StarfishPoint className="three" />
                            <StarfishPoint className="four" />
                            <StarfishPoint className="five" />
                        </StarfishBranchContainer>

                        <StarfishBranchContainer className="five">
                            <StarfishBranchShadow />
                            <StarfishBranch />
                            <StarfishBranchContent />
                            <StarfishPoint className="one" />
                            <StarfishPoint className="two" />
                            <StarfishPoint className="three" />
                            <StarfishPoint className="four" />
                            <StarfishPoint className="five" />
                        </StarfishBranchContainer>
                    </StarfishContainer>
                </Element>

                <Element className="seaweedOne">
                    <SeaweedContainer className="one">
                        <Seaweed className="firstSeaweed one" />
                        <Seaweed className="firstSeaweed two" />
                        <Seaweed className="firstSeaweed three" />
                        <Seaweed className="firstSeaweed four" />
                        <Seaweed className="firstSeaweed five" />
                        <Seaweed className="firstSeaweed six" />
                        <Seaweed className="firstSeaweed seven" />
                        <Seaweed className="firstSeaweed eight" />
                        <Seaweed className="firstSeaweed nine" />
                        <Seaweed className="firstSeaweed ten" />
                        <Seaweed className="firstSeaweed eleven" />
                    </SeaweedContainer>
                </Element>

                <Element className="seaweedTwo">
                    <SeaweedContainer className="two">
                        <Seaweed className="secondSeaweed one" />
                        <Seaweed className="secondSeaweed two" />
                        <Seaweed className="secondSeaweed three" />
                        <Seaweed className="secondSeaweed four" />
                        <Seaweed className="secondSeaweed five" />
                        <Seaweed className="secondSeaweed six" />
                        <Seaweed className="secondSeaweed seven" />
                        <Seaweed className="secondSeaweed eight" />
                        <Seaweed className="secondSeaweed nine" />
                        <Seaweed className="secondSeaweed ten" />
                    </SeaweedContainer>
                </Element>

                <Element className="shellfish">
                    <ShellfishContainer>
                        <ShellfishTop className="one" />
                        <ShellfishTop className="two" />
                        <ShellfishTop className="three" />
                        <ShellfishTop className="four" />
                        <ShellfishTop className="five" />
                        <ShellfishTop className="six" />
                        <ShellfishBottom className="one" />
                        <ShellfishBottom className="two" />
                        <ShellfishBottom className="three" />
                    </ShellfishContainer>
                </Element>
                <LabelButton>
                  Ocean
                </LabelButton>
            </Button>
        </ButtonContainer>
    )
}

export default OceanCollectionButton