import styled from "styled-components"

const CardPairContainer = styled.div`
    position: relative;
    width: 5rem;
    height: 4rem;
`

const CardBorder = styled.div`
    width: 2.2rem;
    height: 3.1rem;
    background-color: purple;
    border-radius: 3px;
    position: absolute;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;

    &.front {
        top: .3rem;
        left: .3rem;
        transform: rotate(-15deg);
    }
    &.back {
        top: .65rem;
        right: .3rem;
        transform: rotate(15deg);

        > div {
            background-image: radial-gradient(circle, rgba(243,223,69,1) 10%, rgba(243,92,69,1) 70%);
        }
    }
`

const Card = styled.div`
    width: 1.8rem;
    height: 2.7rem;
    background-color: white;
`

const Fruit = styled.div`
    width: 1.2rem;
    height: 1.5rem;
    border-radius: 50%;
    background-color: #eb1700;
    position: absolute;
    top: 1rem;
    left: .3rem;

    &:before {
        content: '';
        width: 1rem;
        height: 1.5rem;
        border-radius: 50%;
        background-color: #eb1700;
        position: absolute;
        right: -.4rem;
    }

    &:after {
        content: '';
        width: .1rem;
        height: .5rem;
        border-radius: 50%;
        background-color: brown;
        position: absolute;
        right: .3rem;
        top: -.2rem;
    }

    &.back {
        background-color: gray;

        &:before, &:after {
            background-color: gray;
        }
    }
`

const LeafFruit = styled.div`
    width: .6rem;
    height: .6rem;
    border-radius: 7pc 0 7pc 0;
    background-color: green;
    transform: rotate(80deg);
    position: absolute;
    top: .55rem;
    left: .5rem;

    &.back {
        background-color: gray;
    }
`

const Text = styled.div`
    font-size: 1.6rem;
    text-align: center;
    margin: 0.6rem 0 0 0;
    font-family: sans-serif;
    position: relative;
    z-index: 1;
`

function CardPair() {
    return (
        <CardPairContainer>
            <CardBorder className="front">
                <Card>
                    <Fruit />
                    <LeafFruit />
                </Card>
            </CardBorder>

            <CardBorder className="back">
                <Card>
                    <Fruit className="back" />
                    <LeafFruit className="back"/>
                   <Text>?</Text> 
                </Card>
            </CardBorder>
        </CardPairContainer>
    )
}

export default CardPair