import { darken } from "polished"
import styled from "styled-components"
import { SeedContainer, TopSeed, BottomSeed } from "./AppleCard"

const PearCardContainer = styled.div`
    
`

const PearContainer = styled.div`
    position: absolute;
    width: 3rem;
    height: 5rem;
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    

    &.pear {
        top: 0;
        left: 1.8rem;
    }

    &.halfPear {
        bottom: -1.1rem;
        right: 0.6rem;
        transform: rotate(105deg);
        z-index: 2;
    }
`
const PearBodyTopContainer = styled.div`
    position: absolute;
    left: .6rem;
    top: .5rem;
`

const ShadowPedunclePear = styled.div`
    width: .5rem;
    height: .3rem;
    border-radius: 50%;
    background-color: ${darken(.2, '#ADFF2F')};
    position: absolute;
    top: 4px;
    left: 13px;
    z-index: 2;
    opacity: .3;
`

const PearBodyTop = styled.div`
    width: 1.5rem;
    height: 2rem;
    background-color: greenyellow;
    border-radius: 20px 20px 0 0;
    transform: rotate(7deg);
    position: relative;

    &:after {
        content: '';
        width: 1rem;
        height: 2rem;
        transform: rotate(-20deg);
        background-color: #ADFF2F;
        border-radius: 20px 20px 0 0;
        position: absolute;
        top: 2px;
        left: .8rem;
        z-index: 1;
    }
    &.peduncle {
        &:before {
            content: '';
            width: .5rem;
            height: .5rem;
            background: radial-gradient(circle at 100% 64%,transparent 69%,brown 35%);
            position: absolute;
            left: 15px;
            top: -3px;
            z-index: 2;
            transform: rotate(7deg)
        }
    }
`

const PearBodyBot = styled.div`
    width: 2rem;
    height: 3rem;
    background-color: greenyellow;
    border-radius: 50%;
    position: relative;

    &:after {
        content: '';
        width: 2rem;
        height: 2.8rem;
        background-color: ${darken(.2, '#ADFF2F')};
        border-radius: 50%;
        position: absolute;
        top: .188rem;
        left: .85rem;
    }

    &:before {
        content: '';
        width: 2rem;
        height: 3rem;
        background-color: #ADFF2F;
        border-radius: 50%;
        position: absolute;
        top: 0;
        left: .9rem;
        z-index: 2;
    }
`

const PearBodyTopHalf = styled.div`
    width: 1.5rem;
    height: 1.9rem;
    background-color: beige;
    border-radius: 20px 20px 0 0;
    transform: rotate(7deg);
    position: absolute;
    top: 0.05rem;
    z-index: 3;

    &:after {
        content: '';
        width: 1rem;
        height: 2rem;
        transform: rotate(-20deg);
        background-color: beige;
        border-radius: 20px 20px 0 0;
        position: absolute;
        top: 2px;
        left: .8rem;
        z-index: 1;
    }
`

const PearBodyBotHalf = styled.div`
    width: 1.9rem;
    height: 2.9rem;
    background-color: beige;
    border-radius: 50%;
    position: absolute;
    bottom: .05rem;
    left: 0;

    &:before {
        content: '';
        width: 2.1rem;
        height: 2.9rem;
        background-color: beige;
        border-radius: 50%;
        position: absolute;
        top: 0;
        left: .8rem;
        z-index: 2;
    }
`

const SeedComponent = styled(SeedContainer)`
    &.seedOne {
        transform: rotate(20deg);
        top: 3.338rem;
        left: 0.875rem;
    }

    &.seedTwo {
        transform: rotate(-20deg);
        top: 3.338rem;
        left: 1.675rem;
    }
`

function PearCard() {
    return (
        <PearCardContainer>
            <PearContainer className="pear">
                <PearBodyTopContainer>
                    <ShadowPedunclePear />
                    <PearBodyTop className="peduncle"/>
                </PearBodyTopContainer>
                <PearBodyBot />
            </PearContainer>

            <PearContainer className="halfPear">
                <PearBodyTopContainer>
                    <PearBodyTop />
                    <PearBodyTopHalf />
                </PearBodyTopContainer>
                <PearBodyBot />
                <PearBodyBotHalf />
                <SeedComponent className="seedOne">
                    <TopSeed />
                    <BottomSeed />
                </SeedComponent>

                <SeedComponent className="seedTwo">
                    <TopSeed />
                    <BottomSeed />
                </SeedComponent>
            </PearContainer>
        </PearCardContainer>
    )
}

export default PearCard