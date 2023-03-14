import styled from "styled-components"

const FirContainer = styled.div`
    position: relative;
    width: 3rem;
    height: 4.5rem;
`

const FirBranch = styled.div` 
    width: 1rem;
    height: 1.5rem;
    border-radius: 50%;
    position: absolute;
    z-index: 1;

    &:before  {
        content: '';
        width: 1rem;
        height: 1.5rem;
        border-radius: 50%;
        position: absolute;
    }

    &.branchOne {
        background: radial-gradient(circle at 128% 41%,transparent 53%,green 35%);
        left: .45rem;
        transform: rotate(-103deg);

        &:before {
            background: radial-gradient(circle at 128% 41%,transparent 53%,green 35%);
            transform: rotate(-158deg) rotateY(-180deg);
            top: 1.1rem;
            right: .2rem;
        }
    }

    &.branchTwo {
        background: radial-gradient(circle at 128% 33%,transparent 50%,green 35%);
        top: .55rem;
        left: .44rem;
        transform: rotate(-118deg);

        &:before {
            background: radial-gradient(circle at 128% 33%,transparent 50%,green 35%);
            transform: rotate(-127deg) rotateY(-180deg);
            top: 1rem;
            right: .5rem;
        }
    }
    &.branchThree, &.branchFour {
        background: radial-gradient(circle at 128% 33%,transparent 50%,green 35%);
        transform: rotate(-110deg);
        left: .44rem;

        &:before {
            background: radial-gradient(circle at 128% 33%,transparent 50%,green 35%);
            transform: rotate(-141deg) rotateY(-180deg);
            top: 1.1rem;
            right: .35rem;
        }
    }
    &.branchThree {
        top: 1.15rem;
    }
    &.branchFour {
        top: 1.75rem;
    }
`

const TreeTrunk = styled.div`
    width: .6rem;
    height: 1.8rem;
    background-color: brown;
    position: absolute;
    bottom: 0;
    left: 1.2rem;
`

function Fir() {
    return (
        <FirContainer className="one">
            <FirBranch className="branchOne"/>
            <FirBranch className="branchTwo"/>
            <FirBranch className="branchThree"/>
            <FirBranch className="branchFour"/>
            <TreeTrunk />
        </FirContainer>
    )
}

export default Fir