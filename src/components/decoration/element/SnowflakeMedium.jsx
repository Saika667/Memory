import styled from "styled-components"

const SnowflakeContainer = styled.div`
    //background-color: blue;
    position: absolute;
    top: 1rem;
    left: 1rem;
`
const SnowflakeComponent = styled.div`
    //70px
    height: 2.5rem;
    width: 2.5rem;
    position: relative;
`
const BranchContainer = styled.div`
    height: 1.25rem;
    width: 1.25rem;
    position: absolute;
    display: flex;
    justify-content: center;

    &.branchOne {
        top: 0;
        left: 10px;
    }

    &.branchTwo {
        transform: rotate(55deg);
        top: 5px;
        left: 18px;
    }

    &.branchThree {
        transform: rotate(125deg);
        bottom: 5px;
        left: 18px;
    }

    &.branchFour {
        bottom: 0;
        left: 10px;
        transform: rotate(180deg);
    }

    &.branchFive {
        transform: rotate(-55deg);
        top: 5px;
        left: 1px;
    }

    &.branchSix {
        transform: rotate(-125deg);
        bottom: 5px;
        left: 1px;
    }
`

const Branch = styled.div`
    background-color: white;
    height: 1.25rem;
    //4px
    width: .2rem;
    border-radius: 88% 88% 0 0;
    position: relative;
`
const LittleBranch = styled.div`
    width: 2px;
    border-radius: 88% 88% 0 0;
    position: absolute;
    background-color: white;

    &.littleBranchOne {
        height: .3rem;
        transform: rotate(45deg);
        top: .213rem;
        left: .188rem;
    }

    &.littleBranchTwo {
        height: .3rem;
        transform: rotate(-45deg);
        top: .213rem;
        left: -.1rem;
    }

    &.littleBranchThree {
        height: .4rem;
        transform: rotate(45deg);
        top: .538rem;
        left: .15rem;
    }

    &.littleBranchFour {
        height: .4rem;
        transform: rotate(-45deg);
        top: .538rem;
        left: -.1rem;
    }
`

function SnowflakeMedium() {

    return (
        <SnowflakeContainer>
            <SnowflakeComponent>
                <BranchContainer className="branchOne">
                    <Branch>
                        <LittleBranch className="littleBranchOne"/>
                        <LittleBranch className="littleBranchTwo"/>
                        <LittleBranch className="littleBranchThree"/>
                        <LittleBranch className="littleBranchFour"/>
                    </Branch>
                </BranchContainer>

                <BranchContainer className="branchTwo">
                    <Branch>
                        <LittleBranch className="littleBranchOne"/>
                        <LittleBranch className="littleBranchTwo"/>
                        <LittleBranch className="littleBranchThree"/>
                        <LittleBranch className="littleBranchFour"/>
                    </Branch>
                </BranchContainer>

                <BranchContainer className="branchThree">
                    <Branch>
                        <LittleBranch className="littleBranchOne"/>
                        <LittleBranch className="littleBranchTwo"/>
                        <LittleBranch className="littleBranchThree"/>
                        <LittleBranch className="littleBranchFour"/>
                    </Branch>
                </BranchContainer>

                <BranchContainer className="branchFour">
                    <Branch>
                        <LittleBranch className="littleBranchOne"/>
                        <LittleBranch className="littleBranchTwo"/>
                        <LittleBranch className="littleBranchThree"/>
                        <LittleBranch className="littleBranchFour"/>
                    </Branch>
                </BranchContainer>

                <BranchContainer className="branchFive">
                    <Branch>
                        <LittleBranch className="littleBranchOne"/>
                        <LittleBranch className="littleBranchTwo"/>
                        <LittleBranch className="littleBranchThree"/>
                        <LittleBranch className="littleBranchFour"/>
                    </Branch>
                </BranchContainer>

                <BranchContainer className="branchSix">
                    <Branch>
                        <LittleBranch className="littleBranchOne"/>
                        <LittleBranch className="littleBranchTwo"/>
                        <LittleBranch className="littleBranchThree"/>
                        <LittleBranch className="littleBranchFour"/>
                    </Branch>
                </BranchContainer>
            </SnowflakeComponent>
        </SnowflakeContainer>
    )
}

export default SnowflakeMedium