import styled from "styled-components"
import Snowman from "./element/Snowman"
import Mountain from "./element/Mountain"
import Fir from "./element/Fir"

const DecorationBandContainer = styled.div`
    min-height: 100vh;
    width: 180px;
    background: linear-gradient(170deg, rgba(1,167,253,1) 10%, rgba(255,255,255,1) 55%);
    position: absolute;
    z-index: 1;
    overflow: hidden;
`

const Filter = styled.div`
    position: absolute;
    background-color: blue;
    opacity: .3;
    z-index: 6;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
`

const Hill = styled.div`
    position: absolute;

    &.hillOne {
        width: 10rem;
        height: 15rem;
        border-radius: 0 7pc 0 7pc;
        background: linear-gradient(0deg, rgba(222,218,213,1) 20%, rgba(255,255,255,1) 77%);
        bottom: -2.7rem;
        left: -.2rem;
        z-index: 3;
    }
    &.hillTwo {
        width: 14.1rem;
        height: 14rem;
        border-radius: 7pc 0 7pc 0;
        background: linear-gradient(0deg, rgba(222,218,213,1) 20%, rgba(255,255,255,1) 77%);
        bottom: -6.7rem;
        right: -2.4rem;
        transform: rotate(-17deg);
        z-index: 4;
    }

`

const MountainComponent = styled.div`
    position: absolute;

    &.mountainBack {
        bottom: 13.7rem;
        z-index: 1;
    }
    &.mountainSmallOne {
        bottom: 10.9rem;
        left: -1.8rem;
        z-index: 2;
    }
    &.mountainSmallTwo {
        bottom: 8.4rem;
        left: 6.8rem;
        z-index: 2;
    }
`

const SnowmanComponent = styled.div`
    position: absolute;
    bottom: .6rem;
    left: 5rem;
    transform: rotate(10deg);
    z-index: 5;
`

const FirComponent = styled.div`
    position: absolute;
    
    &.one {
        bottom: 12rem;
        left: 1.5rem;
        z-index: 2;
    }
    &.two {
        bottom: 8rem;
        left: 8rem;
        z-index: 2;
    }
    &.three {
        bottom: 6.7rem;
        left: 4.3rem;
        z-index: 3;
    }
`
function DecorationBand() {
    return (
        <DecorationBandContainer>
            <Filter />
            <MountainComponent className="mountainBack">
                <Mountain classLabel={'mountainMedium'} />
            </MountainComponent>
            <MountainComponent className="mountainSmallOne">
                <Mountain classLabel={'mountainSmall'} />
            </MountainComponent>
            <MountainComponent className="mountainSmallTwo">
                <Mountain classLabel={'mountainSmall'} />
            </MountainComponent>
            
            <Hill className="hillOne"/>
            <Hill className="hillTwo"/>

            <FirComponent className="one">
                <Fir />
            </FirComponent>

            <FirComponent className="two">
                <Fir />
            </FirComponent>

            <FirComponent className="three">
                <Fir />
            </FirComponent>
         
            <SnowmanComponent>
                <Snowman />
            </SnowmanComponent>
        </DecorationBandContainer>
    )
}

export default DecorationBand