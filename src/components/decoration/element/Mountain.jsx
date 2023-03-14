import styled from "styled-components"

const MountainContainer = styled.div`
    position: relative;

    &.mountainMedium {
        width: 11.25rem;
        height: 15rem;
    }
    &.mountainSmall {
        width: 10rem;
        height: 10rem;
    }
`

const MountainLeft = styled.div`
    &.mediumMountain {
        width: 4rem;
        height: 11rem;
        border-radius: 50%;
        background-color: #ffffff;
        position: absolute;
        top: -.8rem;
        right: 6rem;
        transform: rotate(35deg);

        &:before {
            content: '';
            width: 3rem;
            height: 3rem;
            border-radius: 50%;
            background-color: white;
            position: absolute;
            top: 3.1rem;
            right: -2.1rem;
        }
    }
    
    &.smallMountain {
        width: 3rem;
        height: 9rem;
        border-radius: 50%;
        background-color: #2e0057;
        position: absolute;
        top: -.7rem;
        right: 5.8rem;
        transform: rotate(35deg);

        &:before {
            content: '';
            width: 3rem;
            height: 4rem;
            background-color: #2e0057;
            position: absolute;
            top: 2.3rem;
            right: -2.8rem;
        }

        &:after {
            content: '';
            width: 1.3rem;
            height: 3rem;
            border-radius: 50%;
            background-color: #ffffff;
            position: absolute;
            top: .17rem;
            right: 1.35rem;
            transform: rotate(9deg);
        }
    }
`
const MountainRight = styled.div`
    &.mediumMountain {
        width: 4rem;
        height: 11rem;
        border-radius: 50%;
        background-color: #ffffff;
        position: absolute;
        top: -.8rem;
        right: .4rem;
        transform: rotate(-35deg);
    }

    &.smallMountain {
        width: 3rem;
        height: 9rem;
        border-radius: 50%;
        background-color: #2e0057;
        position: absolute;
        top: -.7rem;
        right: 1.3rem;
        transform: rotate(-35deg);

        &:before {
            content: '';
            width: 1.3rem;
            height: 3rem;
            border-radius: 50%;
            background-color: #ffffff;
            position: absolute;
            top: -.03rem;
            right: .45rem;
            transform: rotate(-15deg);
        }

        &:after {
            content: '';
            width: 1.8rem;
            height: 2.8rem;
            border-radius: 50%;
            background-color: #ffffff;
            position: absolute;
            top: -.23rem;
            right: 1.25rem;
            transform: rotate(24deg);
        }
    }
`
const MountainBottom = styled.div`

    &.mediumMountain {
        background: linear-gradient(0deg, rgba(222,218,213,1) 20%, rgba(255,255,255,1) 77%);
        width: 12.2rem;
        height: 7.8rem;
        border-radius: 13px 20px 0 0;
        position: absolute;
        top: 6rem;
    }

    &.smallMountain {
        background: linear-gradient(0deg, rgba(28,0,52,1) 20%, rgba(46,0,87,1) 77%);
        width: 10rem;
        height: 4.5rem;
        border-radius: 13px 13px 0 0;
        position: absolute;
        top: 5.5rem;
    }
`

function Mountain({ classLabel }) {
    const mountainClasses = `${classLabel === 'mountainMedium' ? 'mediumMountain' : ''}
                             ${classLabel === 'mountainSmall' ? 'smallMountain' : ''}`;
    return (
            <MountainContainer className={classLabel}>
                <MountainLeft className={mountainClasses} />
                <MountainRight className={mountainClasses}/>
                <MountainBottom className={mountainClasses}/>
            </MountainContainer>
    )
}

export default Mountain