import styled from "styled-components"
import Mountain from "./Mountain"
import Fir from "./Fir"
import Snowman from "./Snowman"
import SnowflakeMedium from "./SnowflakeMedium"

const FolioImageContainer = styled.div`
    position: absolute;
    left: 1rem;
    top: 1rem;
    width: 30rem;
    height: 20rem;
    overflow: hidden;
    background: linear-gradient(170deg,rgba(1,167,253,1) 36%,rgba(255,255,255,1) 82%);
    z-index: 12;
`
const ElementComponent = styled.div`
    position: absolute;

    &.snowman {
        bottom: 0;
        right: 1rem;
        z-index: 3;
    }
    &.mountainOne {
        bottom: -1.3rem;
        right: 0;
    }
    &.mountainTwo {
        bottom: -0.5rem;
        right: 6rem;
    }
    &.mountainThree {
        bottom: 3.1rem;
        left: -3.4rem;
    }
    &.mountainFour {
        bottom: -1.1rem;
        left: 0;
    }
    &.firOne {
        bottom: 3.6rem;
        right: -1rem;
    }
    &.firTwo {
        bottom: -1rem;
        right: 8rem;
        z-index: 1;
    }
    &.firThree {
        bottom: 2.8rem;
        left: 15.9rem;
    }
    &.firFour {
        bottom: -0.2rem;
        left: 5.1rem;
    }
    &.firFive {
        bottom: 0.5rem;
        left: 11.6rem;
    }

    &.snowflakeOne {
        top: 9.5rem;
        left: 14.1rem;
    }
    &.snowflakeTwo {
        top: 3.9rem;
        left: 26.6rem;
    }
    &.snowflakeThree {
        top: 7.5rem;
        left: 5.9rem;
    }
    &.snowflakeFour {
        top: 2.1rem;
        left: 1.8rem;
    }
    &.snowflakeFive {
        top: 0.5rem;
        left: 19rem;
    }
`
const Hill = styled.div`
    border-radius: 0 7pc 0 7pc;
    background: linear-gradient(50deg, rgba(222,218,213,1) 22%, rgba(255,255,255,1) 60%);
    position: absolute;

    &.one {
        width: 10rem;
        height: 9rem;
        bottom: -4.9rem;
        right: -1rem;
        transform: rotate(-86deg);
        z-index: 2;
    }
    &.two {
        width: 10rem;
        height: 9rem;
        bottom: -4.7rem;
        right: 7.8rem;
        transform: rotate(-64deg);
        z-index: 1;
    }

    &.three {
        width: 5rem;
        height: 8rem;
        bottom: -4.3rem;
        left: 7.5rem;
        transform: rotate(-55deg);
    }
`

const Title = styled.h2`
    text-align: center;
    font-size: 80px;
    color: #2e0057;
    text-shadow: 0 0 10px white;
`
const SmallSnowflake = styled.div`
    width: .7rem;
    height: .7rem;
    border-radius: 50%;
    background-color: white;
    filter: blur(3px);
    position: absolute;

    &.one {
        top: 3rem;
        left: 24rem;
    }
    &.two {
        top: 13rem;
        left: 9rem;
    }
    &.three {
        top: 8rem;
        left: 12rem;
    }
    &.four {
        top: 1rem;
        left: 16rem;
    }
    &.five {
        top: 6.9rem;
        left: 19rem;
    }
    &.six {
        top: 6rem;
        left: 5rem;
    }
    &.seven {
        top: 0.7rem;
        left: 0.9rem;
    }
`

function FolioImage() {
    return (
        <FolioImageContainer>
            <Title>Memory</Title>
            <ElementComponent className="snowman">
                <Snowman />
            </ElementComponent>
            
            <ElementComponent className="mountainOne">
                <Mountain classLabel={'mountainMedium'} />
            </ElementComponent>

            <ElementComponent className="mountainTwo">
                <Mountain classLabel={'mountainSmall'} />
            </ElementComponent>

            <ElementComponent className="mountainThree">
                <Mountain classLabel={'mountainSmall'} />
            </ElementComponent>

            <ElementComponent className="mountainFour">
                <Mountain classLabel={'mountainSmall'} />
            </ElementComponent>
            
            <Hill className="one" />
            <Hill className="two" />
            <Hill className="three" />
            <ElementComponent className="firOne">
                <Fir />
            </ElementComponent>
            <ElementComponent className="firTwo">
                <Fir />
            </ElementComponent>
            <ElementComponent className="firThree">
                <Fir />
            </ElementComponent>
            <ElementComponent className="firFour">
                <Fir />
            </ElementComponent>
            <ElementComponent className="firFive">
                <Fir />
            </ElementComponent>

            <ElementComponent className="snowflakeOne">
                <SnowflakeMedium />
            </ElementComponent>

            <ElementComponent className="snowflakeTwo">
                <SnowflakeMedium />
            </ElementComponent>

            <ElementComponent className="snowflakeThree">
                <SnowflakeMedium />
            </ElementComponent>

            <ElementComponent className="snowflakeFour">
                <SnowflakeMedium />
            </ElementComponent>

            <ElementComponent className="snowflakeFive">
                <SnowflakeMedium />
            </ElementComponent>

            <SmallSnowflake className="one" />
            <SmallSnowflake className="two" />
            <SmallSnowflake className="three" />
            <SmallSnowflake className="four" />
            <SmallSnowflake className="five" />
            <SmallSnowflake className="six" />
            <SmallSnowflake className="seven" />
        </FolioImageContainer>
    )
}

export default FolioImage