import styled from "styled-components"

const SnowflakeContainer = styled.div`
    position: absolute;
    transform-origin: 50% 50%;
    height: 4.375rem;
    width: 4.375rem;
    &.homePage {
        z-index: 5;
    }
`
const SnowflakeComponent = styled.div`
    //70px
    height: 4.375rem;
    width: 4.375rem;
    position: relative;
`
const BranchContainer = styled.div`
    //35px
    height: 2.188rem;
    //20px
    width: 1.25rem;
    position: absolute;
    display: flex;
    justify-content: center;

    &.branchOne {
        top: 0;
        left: 1.563rem;
    }

    &.branchTwo {
        transform: rotate(55deg);
        top: .438rem;
        left: 2.5rem;
    }

    &.branchThree {
        transform: rotate(125deg);
        bottom: .375rem;
        left: 2.5rem;
    }

    &.branchFour {
        bottom: 0;
        left: 1.563rem;
        transform: rotate(180deg);
    }

    &.branchFive {
        transform: rotate(-55deg);
        top: .438rem;
        left: .625rem;
    }

    &.branchSix {
        transform: rotate(-125deg);
        bottom: .375rem;
        left: .625rem;
    }
`

const Branch = styled.div`
    background-color: white;
    height: 2.188rem;
    //4px
    width: .25rem;
    border-radius: 88% 88% 0 0;
    position: relative;
`
const LittleBranch = styled.div`
    width: .188rem;
    border-radius: 88% 88% 0 0;
    position: absolute;
    background-color: white;

    &.littleBranchOne {
        height: .375rem;
        transform: rotate(45deg);
        top: .313rem;
        left: .188rem;
    }

    &.littleBranchTwo {
        height: .375rem;
        transform: rotate(-45deg);
        top: .313rem;
        left: -.125rem;
    }

    &.littleBranchThree {
        height: .625rem;
        transform: rotate(45deg);
        top: .938rem;
        left: .25rem;
    }

    &.littleBranchFour {
        height: .625rem;
        transform: rotate(-45deg);
        top: .938rem;
        left: -.25rem;
    }
`

function Snowflake({classNames}) {

    return (
        <SnowflakeContainer className={classNames}>
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

export default Snowflake