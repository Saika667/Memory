import styled from "styled-components"
import { GameTitle, PageContainer } from "../utils/styles/Atoms"
import Card from "../components/cards/Card"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { cardTable } from "../data/table"
import DecorationBand from "../components/decoration/DecorationBand"
import Modal from "../components/Modal"
import Stopwatch from "../components/decoration/element/Stopwatch"
import CardPair from "../components/decoration/element/CardPair"
import SnowflakeBarAnimate from "../components/decoration/SnowflakeBarAnimate"

const Page = styled.div`
    display: flex;
`

const Band = styled.div`
    min-height: 100vh;
    width: 11.25rem;
    min-width: 11.25rem;
`

const ModuleBand = styled.div`
    margin: 1.25rem .938rem;
    position: relative;
    z-index: 1;
`

const TitleModule = styled.h2`
    font-size: 1.125rem;
    padding-bottom: .625rem;
    font-weight: bold;
    text-shadow: 0 0 11px white;
`

const ModuleBandContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const TimerContainer = styled.div`
    width: 6.25rem;
    display: flex;
    justify-content: center;
    align-items: center;
`

const TextInformation = styled.div`
    font-size: 1.563rem;
    font-weight: bold;
    padding: 0 .625rem;
    text-shadow: 0 0 10px white;

    &.largeSize {
        font-size: 3.125rem;
    }
`

const GameContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background: linear-gradient(170deg, rgba(1,167,253,1) 27%, rgba(255,255,255,1) 70%);
`

const Game = styled.div.attrs(props => ({
    elementColumn: props.elementColumn,
    elementRow: props.elementRow
}))`
    display: grid;
    grid-template-columns: ${props => `repeat(${props.elementColumn}, 6rem)`};
    grid-template-rows: ${props => `repeat(${props.elementRow}, 7.8rem)`};
    padding: 10px 5px;
`

const GridElement = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

function GamePage() {
    const timePerGame = 300
//state pour le tableau de l'ensemble des cartes
    const [visibilitiesCard, setVisibilitiesCard] = useState([]);
/*
ce state permet d'enregistrer la première carte retourner par joueur lors d'une manche
cela va permettre de savoir si on se trouve dans le cas de la première ou deuxième carte retournée
tableau vide alors enregistrement de la première carte et rien ne se passe
tableau différent de vide alors c'est la deuxième carte de la manche, une comparaison est faite entre les deux cartes retournées
*/
    const [firstCard, setFirstCard] = useState([])
    const [grid, setGrid] = useState([])
//permet d'éviter le spam et d'attendre la vérification de la paire avant de pouvoir rejouer
    const [canPlay, setCanPlay] = useState(true)
    const [timeLeft, setTimeLeft] = useState(timePerGame)
//retournement de carte ??????????????
    const [flipped, setFlipped] = useState([])
//state correspondant au nombre de paire trouvé 
    const [pairFound, setPairFound] = useState(0)
//visibilité de la modal (visible ou non)
    const [modalVisible, setModalVisible] = useState(false)
//stockage résultat de la partie
    const [finalResult, setFinalResult] = useState(null)

    const [numberOfGames, setNumberOfGames] = useState(0)
// Utilisation de cette variable pour accéder à un composant card en particulier pour flip vers la position normale
    let cardRefs = []

// Algorithme de fisher yates, permet de mélanger le tableau de cartes
    function shuffle(temp) {
        let i = temp.length;
        while (--i > 0) {
            let randIndex = Math.floor(Math.random() * (i + 1));
            [temp[randIndex], temp[i]] = [temp[i], temp[randIndex]];
        }
        return temp;
    }

    function getDifficulty(difficulty) {
        let elementColumn = 0;
        let elementRow = 0;
        let numberElt = 0;

        if(difficulty === 'difficile') {
            elementColumn = 9;
            elementRow = 4;
        } else if (difficulty === 'moyen') {
            elementColumn = 7;
            elementRow = 4;
        } else if (difficulty === 'facile') {
            elementColumn = 5
            elementRow = 4;
        }

        numberElt = elementColumn * elementRow

        return {
            elementColumn,
            elementRow,
            numberElt
        }
    }


//génère la grille en fonction de la difficulté sélectionnée sur la homepage
    function generateGrid(numberElt, collection) {
/* A SUPP ?
génère un tableau de x éléments (10), keys permet de récupérer l'emplacement de l'élément
let gridArray = [...Array(10).keys()];*/
// Filter permet de recuperer seulement les objets ayant pour category la collection selectionnee
        let cardTableCollection = [...cardTable].filter((card) => card.category === collection)
        let symbolGrid = []
/*
Cette boucle permet de récupérer les cartes de manière aléatoire du tableau (cardTable) contenant toute les cartes
Pour cela on copie le tableau puis effectue une boucle dessus
on utilise numberElt / 2, ca numberElt représente l'ensemble de la grille hors on souhaite générer des paires de cartes donc /2
*/
        for (let i = 0; i < numberElt / 2; i++) {
            symbolGrid.push({
                cardValue: i,
/*
on utilise la méthode splice car cela permet de supprimer un élément d'un tableau et de retourner l'élément supprimé
la suppression de la carte permet de ne pas générer deux fois une même paire de carte pour une grille de jeu
"Math.floor" pour arrondir à l'inférieur et "Math.random" pour avoir un random entre 0 et 1
[0] car splice nous retourne un tableau et on souhaite récupérer le 1er élément du tableau on ajoute ".card" qui 
correspond à la clé de la valeur qui nous intéresse (la carte)
*/    
            card: cardTableCollection.splice(Math.floor(Math.random() * cardTableCollection.length), 1)[0].card
            });
        }

//on génère le tableau puis on double le tableau avec les mêmes éléments de facon à avoir des paires
        let gridArray = shuffle([...symbolGrid, ...symbolGrid]);

        return gridArray;
    }

/*fonction play pour le fonctionnement d'une partie :
(1ère carte retournée) : "firstCard.length === 0"
on enregistre la valeur de la carte dans le state firstCard
on enregistre l'index de la carte dans le state VisibilitiesCard pour pouvoir retourner la carte
(2ème carte retourné) : "firstCard.length != 0"
on compare la valeur des deux cartes pour savoir si c'est une paire
*/
    function play(value, index) {
//permet de ne pas prendre en compte si plusieurs clic sur la même carte (carte déjà retournée)
//canPlay permet d'éviter le spam, le joueur peut rejouer seulement après la vérification d'une paire
        if (!canPlay || flipped.includes(index)) {
            return;
        }
        setCanPlay(false)
//dans tous les cas on veut retourner une carte
        setFlipped([...flipped, index])
//cas ou la main du joueur commence, la première carte n'est pas retournée
        if (firstCard.length === 0 ) {
            setFirstCard([value, index]);
            setCanPlay(true)
        } else {
            if (firstCard[0] === value) {
                setCanPlay(true)
                setPairFound(pairFound + 1)
//fin du jeu, victoire
                if (pairFound + 1 === numberElt / 2) {
                    setCanPlay(false)
                    setFinalResult('win')
                    setModalVisible(true)
                }
            } else {
//setTimeOut permet d'ajouter du delai et donc de laisser le temps que la deuxième carte s'affiche même si 
//la paire n'est pas bonne
                setTimeout(() => {
//on clone le tableau parce que le state est immutable (on ne peut pas le modifier directement)
                    let cloneFlip = [...flipped]
//pop supprime le dernier élément d'un tableau et le retourne
//je comprends pas pourquoi on fait pas 2 pop mais ça marche comme ca 
//on se situe dans le cas ou la paire de carte retournée n'est pas correcte
                    cloneFlip.pop()
                    setCanPlay(true)
//réassigne le nouveau tableau au state
                    setFlipped(cloneFlip)
                }, 1500)
            }
            setFirstCard([])
        }
    }

    function getTimeMinuteAndSecond(time) {
        let minutes = Math.floor(time / 60);
        let seconds = time % 60;
        seconds = seconds < 10 ? `0${seconds}` : seconds

        return `0${minutes} : ${seconds}`;
    }

    function replay(diffculty) {
        setFirstCard([]);
        setGrid([]);
        setCanPlay(true);
        setTimeLeft(timePerGame);
        setFlipped([]);
        setPairFound(0);
        setModalVisible(false);
        setFinalResult(null);
    }

/*
useEffect permet que le code s'exécute que lors du chargement de la page car on à ajouter "[]" en deuxième paramètre
si on souhaite que le code soit éxecuter à des moments spécifique on ajoute dans le tableau vide l'élément déclencheur
ex: un state, useEffect se déclenchera à chaque changement de state
*/
    let { difficulty, collection } = useParams();
    let { elementColumn, elementRow, numberElt} = getDifficulty(difficulty);
    useEffect(() => {
        setGrid(generateGrid(numberElt, collection));
    }, [numberOfGames]);

    useEffect(() => {
        function timer() {
            setTimeLeft(timeLeft - 1)
        }
        if (timeLeft === 0) {
            setFinalResult('lose')
            setModalVisible(true)
            return
        }
        if ( finalResult === 'win') {
            return
        }
        setTimeout(timer, 1000);
    }, [timeLeft]);
    
    return (
        <PageContainer>
            <Page>
                <Band>
                    <DecorationBand />
                    <GameTitle>Memory</GameTitle>

                    <ModuleBand>
                        <TitleModule>Temps écoulé :</TitleModule>
                        <ModuleBandContent>
                            <Stopwatch />
                            <TimerContainer>
                                <TextInformation>{getTimeMinuteAndSecond(timeLeft)}</TextInformation>
                            </TimerContainer>
                        </ModuleBandContent>
                    </ModuleBand>

                    <ModuleBand>
                        <TitleModule>Paire trouvée :</TitleModule>
                        <ModuleBandContent>
                            <CardPair />
                            <TimerContainer>
                                <TextInformation className="largeSize">{pairFound}</TextInformation>
                            </TimerContainer>
                        </ModuleBandContent>
                    </ModuleBand>
                </Band>
                
                <Modal 
                    result={finalResult}
                    time={timeLeft}
                    transformTime={getTimeMinuteAndSecond}
                    pairsFound={pairFound}
                    isVisible={modalVisible}
                    closeModal={setModalVisible}
                    numberOfGames={numberOfGames}
                    setNumberOfGames={setNumberOfGames}
                    collection={collection}
                    funcReplay={replay}
                />

                <GameContainer>
                    <SnowflakeBarAnimate classPage={'game'}/>

                    <Game className="grille" 
                        elementColumn={elementColumn} 
                        elementRow={elementRow}
                    >
                    {
                        grid.map((e, i) =>
                            <GridElement key={i}>
                                <Card value={e.cardValue}
                                      index={i} 
                                      isVisible={flipped.includes(i)} 
                                      play={play}
                                >
                                    {e.card}
                                </Card>
                            </GridElement>
                        )
                    }
                    </Game>
                </GameContainer>
            </Page>
        </PageContainer>
    )
}

export default GamePage