import styled from "styled-components"
import { darken, lighten } from "polished"

const OrangeCardContainer = styled.div`
    
`

const OrangeContainer = styled.div`
    position: absolute;
    width: 3rem;
    height: 3rem;
    display: flex;
    align-items: flex-end;

    &.orange {
        top : 1rem;
        left : .5rem;
    }

    &.halfOrange {
        top : 3.5rem;
        left :2.5rem;
        transform: rotateZ(47deg) rotateX(-53deg) rotateY(11deg);
    }
`

const Orange = styled.div`
    width: 3rem;
    height: 2.8rem;
    background-color: orange;
    border-radius: 50%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
`

const ImperfectionSkin = styled.div`
    width: .1rem;
    height: .1rem;
    background-color: ${darken(.1, "orange")};
    border-radius: 50%;
    position: absolute;

    &.one {
        top: 10px;
        left: 10px;
    }
    &.two {
        top: 5px;
        left: 16px;
    }
    &.three {
        top: 10px;
        left: 20px;
    }
    &.four {
        top: 8px;
        left: 25px;
    }
    &.five {
        top: 5px;
        left: 34px;
    }
    &.six {
        top: 13px;
        left: 13px;
    }
    &.seven {
        top: 11px;
        left: 32px;
    }
    &.eight {
        top: 10px;
        left: 42px;
    }
    &.nine {
        top: 13px;
        left: 37px;
    }
    &.ten {
        top: 15px;
        left: 30px;
    }
`

const OrangePeduncleContainer = styled.div`
    position: absolute;
    top: .25rem;
    left: 1.4rem;
    z-index: 2;
    width: .42rem;
    height: .4rem;
    display: flex;
    justify-content: center;
`

const OrangePeduncle = styled.div`
    width: .12rem;
    height: .2rem;
    background: linear-gradient(0deg, rgba(24,211,39,1) 0%, rgba(16,145,6,1) 87%);
    border-radius: 50% 50% 0 0;
    position: absolute;
    top: .063rem;
    left: .15rem;
    z-index: 2;
    box-sizing: border-box;
    transform: rotate(19deg);
`

const OrangePeduncleBot = styled.div`
    border-radius: 50%;
    width: 0.2rem;
    height: 0.15rem;
    background-color: #18D327;
    position: absolute;

    &.one {
        bottom: 0;
        left: .188rem;
    }

    &.two {
        bottom: .125rem;
        left: .22rem;
    }

    &.three {
        bottom: .188rem;
        left: .125rem;
    }

    &.four {
        bottom: .125rem;
        left: 0;
    }

    &.five {
        bottom: 0;
        left: .03rem;
    }
`

const Mesocarp = styled.div`
    width: 2.9rem;
    height: 2.7rem;
    background-color: ${lighten(.4, 'orange')};
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const CarpelLodge = styled.div`
    width: 2.7rem;
    height: 2.5rem;
    background-color: orange;
    border-radius: 50%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
`
const OrangeCenter = styled.div`
    background-color: ${lighten(.4, 'orange')};
    width: .4rem;
    height: .4rem;
    border-radius: 50%;
`
const Endocarp = styled.div`
    background-color: ${lighten(.4, 'orange')};
    width: .1rem;
    height: 1.3rem;
    position: absolute;

    &.one {
        top: 0;
        left: 1.3rem;
    }
    &.two {
        top: 0.15rem;
        left: 1.8rem;
        transform: rotate(45deg);
    }
    &.three {
        top: 0.6rem;
        left: 2.05rem;
        transform: rotate(90deg);
    }
    &.four {
        top: 1.1rem;
        left: 1.8rem;
        transform: rotate(135deg);
    }
    &.five {
        bottom: 0;
        left: 1.3rem;
    }
    &.six {
        top: 1.1rem;
        left: 0.8rem;
        transform: rotate(-135deg);
    }
    &.seven {
        top: 0.6rem;
        left: 0.55rem;
        transform: rotate(90deg);
    }
    &.eight {
        top: 0.1rem;
        left: 0.8rem;
        transform: rotate(-45deg);
    }
`
const OrangeBody = styled.div`
    width: 3.2rem;
    height: 4.3rem;
    border-radius: 50%;
    background-color: orange;
    position: absolute;
    bottom: -1.35rem;
    left: -0.1rem;
`

function OrangeCard() {
    return (
        <OrangeCardContainer>
            <OrangeContainer className="orange">
                <OrangePeduncleContainer>
                    <OrangePeduncle />
                    <OrangePeduncleBot className="one"/>
                    <OrangePeduncleBot className="two"/>
                    <OrangePeduncleBot className="three"/>
                    <OrangePeduncleBot className="four"/>
                    <OrangePeduncleBot className="five"/>
                </OrangePeduncleContainer>
                
                <Orange>
                    <ImperfectionSkin className="one"/>
                    <ImperfectionSkin className="two"/>
                    <ImperfectionSkin className="three"/>
                    <ImperfectionSkin className="four"/>
                    <ImperfectionSkin className="five"/>
                    <ImperfectionSkin className="six"/>
                    <ImperfectionSkin className="seven"/>
                    <ImperfectionSkin className="eight"/>
                    <ImperfectionSkin className="nine"/>
                    <ImperfectionSkin className="ten"/>
                </Orange>
            </OrangeContainer>

            <OrangeContainer className="halfOrange">
                <OrangeBody />
                <Orange>
                    <Mesocarp>
                        <CarpelLodge>
                            <OrangeCenter />
                            <Endocarp className="one" />
                            <Endocarp className="two" />
                            <Endocarp className="three" />
                            <Endocarp className="four" />
                            <Endocarp className="five" />
                            <Endocarp className="six" />
                            <Endocarp className="seven" />
                            <Endocarp className="eight" />
                        </CarpelLodge>
                    </Mesocarp>
                </Orange>
            </OrangeContainer>
        </OrangeCardContainer>
    )
}

export default OrangeCard