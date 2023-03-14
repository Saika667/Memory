import styled from "styled-components"

const StarfishCardContainer = styled.div`

`

export const StarfishContainer = styled.div`
    position: absolute;

    &.big {
        width: 4.5rem;
        height: 4.6rem;
    }

    &.small {

    }
`

export const StarfishBodyCenter = styled.div`
    width: 1.5rem;
    height: 1.5rem;
    background: #ff962e;
    border-radius: 50%;
    position: absolute;
    top: 1.8rem;
    left: 1.5rem;
`

export const StarfishBranchContainer = styled.div`
    width: 1.3rem;
    height: 2rem;
    display: flex;
    justify-content: center;
    overflow: hidden;
    position: absolute;
    border-radius: 5px;

    &.one {
        left: 1.6rem;
    }
    &.two {
        left: .15rem;
        top: .9rem;
        transform: rotate(-65deg);
        z-index: 1;
    }
    &.three {
        right: .15rem;
        top: .9rem;
        transform: rotate(65deg);
    }
    &.four {
        left: .75rem;
        bottom: -.15rem;
        transform: rotate(-150deg);
    }
    &.five {
        right : .75rem;
        bottom: -.15rem;
        transform: rotate(150deg);
    }
`

export const StarfishBranchShadow = styled.div`
    width: .5rem;
    height: .5rem;
    background: #e67300;
    border-radius: 50%;
    position: relative;

    &:before {
        content: '';
        width: .45rem;
        height: 1.9rem;
        background: #e67300;
        position: absolute;
        top: .2rem;
        left: -.21rem;
        transform: rotate(14deg);
    }

    &:after {
        content: '';
        width: .45rem;
        height: 1.9rem;
        background: #e67300;
        position: absolute;
        top: .2rem;
        right: -.21rem;
        transform: rotate(-14deg);
    }
`

export const StarfishBranch = styled.div`
    width: .3rem;
    height: .3rem;
    background: #ff962e;
    border-radius: 50%;
    position: absolute;
    top: .4rem;

    &:before {
        content: '';
        width: .25rem;
        height: 1.45rem;
        background: #ff962e;
        position: absolute;
        top: .2rem;
        left: -.12rem;
        transform: rotate(10deg);
    }

    &:after {
        content: '';
        width: .25rem;
        height: 1.45rem;
        background: #ff962e;
        position: absolute;
        top: .2rem;
        right: -.1rem;
        transform: rotate(-10deg);
    }
`

export const StarfishBranchContent = styled.div`
    width: .3rem;
    height: 1rem;
    background: #ff962e;
    position: absolute;
    bottom: 0;
    left: .5rem;
`

export const StarfishPoint = styled.div`
    border: 1px solid #d16900;
    border-radius: 50%;
    position: absolute;

    &.one {
        width: .1rem;
        height: .05rem;
        top: .65rem;
        left: .55rem;
    }
    &.two {
        width: .17rem;
        height: .05rem;
        top: .9rem;
        left: .52rem;
    }
    &.three {
        width: .22rem;
        height: .08rem;
        top: 1.2rem;
        left: .5rem;
    }
    &.four {
        width: .3rem;
        height: .12rem;
        top: 1.5rem;
        left: .47rem;
    }
    &.five {
        width: .3rem;
        height: .12rem;
        top: 1.8rem;
        left: .47rem;
    }
    &.six {
        width: .5rem;
        height: .3rem;
        top: .5rem;
        left: .47rem;
    }
`

function StarfishCard() {
    return (
        <StarfishCardContainer>
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
        </StarfishCardContainer>
    )
}

export default StarfishCard