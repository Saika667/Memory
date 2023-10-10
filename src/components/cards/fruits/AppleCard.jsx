import styled from "styled-components"
import { darken } from "polished"

const AppleCardContainer = styled.div`

`

const AppleContainer = styled.div`
    width: 2.6rem;
    height: 3rem;
    position: absolute;
    display: flex;
    justify-content: flex-end;
    align-items: center;
   flex-direction: column;
   overflow: hidden;
   
   &.apple {
        top: .8rem;
        left: .325rem;
   }

   &.halfApple {
        top: 3.125rem;
        left: 2rem;
   }
`
const Peduncle = styled.div`
    width: .125rem;
    height: .7rem;
    background-color: brown;
    z-index: 3;
    position: absolute;
    top: .063rem;
    transform: rotate(10deg);
    border-radius: 50%;

    &.halfApplePeduncle {
        left: 1.313rem;
        top: .25rem;
    }
`
const Shadow = styled.div`
    width: .8rem;
    height: .3rem;
    border-radius: 50%;
    background-color: ${darken(.2, '#ADFF2F')};
    position: absolute;
    top: .47rem;
    z-index: 2;
    opacity: .5;

    &.halfAppleShadow {
        &:after {
            content: '';
            width: .9rem;
            height: .6rem;
            background-color: ${darken(.2, '#ADFF2F')};
            border-radius: 50%;
            position: absolute;
            top: 0;
        }
    }
`

const AppleBody = styled.div`
    width: 2.56rem;
    height: 2.5rem;
    position: relative;
`

const Apple = styled.div`
    width: 1.5rem;
    height: 2.5rem;
    border-radius: 50%;
    background-color: greenyellow;
    
    &:before {
        content: '';
        width: 2rem;
        height: 1rem;
        background-color: greenyellow;
        border-radius: 50%;
        position: absolute;
        left: .325rem;
        top: -.125rem;
    }
    &:after {
        content: '';
        width: 1.5rem;
        height: 2.5rem;
        background-color: greenyellow;
        border-radius: 50%;
        position: absolute;
        left: 1rem;
        transform: rotate(15deg);
    }
`
const AppleMiddle = styled.div`
    width: 1.5rem;
    height: 2.4rem;
    border-radius: 50%;
    background-color: beige;
    z-index: 3;
    position: absolute;
    top: .063rem;
    
    &:after {
        content: '';
        width: 1.5rem;
        height: 2.37rem;
        background-color: beige;
        border-radius: 50%;
        position: absolute;
        left: 1rem;
        transform: rotate(15deg);
    }
`
export const SeedContainer = styled.div`
    position: absolute;
    z-index: 3;
    width: .35rem;
    height: .55rem;
    overflow: hidden;
    display: flex;
    justify-content: center;

    &.left {
        transform: rotate(20deg);
        top: .938rem;
        left: .75rem;
    }

    &.right {
        transform: rotate(-20deg);
        top: .938rem;
        left: 1.375rem;
    }
`

export const TopSeed = styled.div`
    width: .3rem;
    height: .4rem;
    background-color: brown;
    position: relative;

    &:before, &:after {
        content: '';
        width: .3rem;
        height: .6rem;
        background-color: beige;
        position: absolute;
        
    }
    &:before {
        left: -.188rem;
        top: -.25rem;
        transform: rotate(25deg);
    }
    &:after {
        left: .188rem;
        top: -.313rem;
        transform: rotate(-25deg);
    }
`

export const BottomSeed = styled.div`
    width: .3rem;
    height: .4rem;
    background-color: brown;
    border-radius: 50%;
    position: absolute;
    bottom: 0;
`

function AppleCard() {
    return (
        <AppleCardContainer>
            <AppleContainer className="apple">
                <Peduncle />
                <Shadow />
                <AppleBody>
                    <Apple />
                </AppleBody>
            </AppleContainer>

            <AppleContainer className="halfApple">
                <Peduncle className="halfApplePeduncle"/>
                <Shadow className="halfAppleShadow"/>
                <AppleBody>
                    <Apple />
                    <AppleMiddle />

                    <SeedContainer className="left">
                        <TopSeed />
                        <BottomSeed />
                    </SeedContainer>

                    <SeedContainer className="right">
                        <TopSeed />
                        <BottomSeed />
                    </SeedContainer>
                </AppleBody>
            </AppleContainer>
        </AppleCardContainer>
    )
}

export default AppleCard