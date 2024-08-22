let bank = 100


const teams = [`1`, `2`]

const players = [
  { teamnumber: 1, emoji: `🐅`, skill: 100, name: `Tiger` },
  { teamnumber: 1, emoji: `🦁`, skill: 90, name: `Lion` },
  { teamnumber: 1, emoji: `🐱`, skill: 10, name: `House Cat` },
  { teamnumber: 1, emoji: `🦒`, skill: 50, name: `Girraffe` },
  { teamnumber: 1, emoji: `🦊`, skill: 20, name: `Fox` },
  { teamnumber: 1, emoji: `🦝`, skill: 20, name: `Raccoon` },
  { teamnumber: 2, emoji: `🐮`, skill: 50, name: `Cow` },
  { teamnumber: 2, emoji: `🐗`, skill: 60, name: `Boar` },
  { teamnumber: 2, emoji: `🐻`, skill: 70, name: `Bear` },
  { teamnumber: 2, emoji: `🐨`, skill: 20, name: `Koala` },
  { teamnumber: 2, emoji: `🐸`, skill: 10, name: `Frog` },
  { teamnumber: 2, emoji: `👽`, skill: 100, name: `Alien` },
]

const teamOneElm = document.getElementById(`team-one`)
const teamTwoElm = document.getElementById(`team-two`)

let bankAmount = document.getElementById('bank')

const betAmounts = [5, 25, 100, bank]

// Draw players

function drawPlayerOnes() {
  let team1 = ``
  players.forEach((player) => {
    if (player.teamnumber == 1) {
      team1 += player.emoji
    }
    // console.log(`🦁`, player.teamnumber)

  })
  console.log(`1st Team`, team1);
  teamOneElm.innerText = team1
}

function drawPlayerTwos() {
  let team2 = ``
  players.forEach((player) => {
    if (player.teamnumber == 2) {
      team2 += player.emoji
    }
  })
  console.log(`2nd Team`, team2);
  teamTwoElm.innerText = team2
}

drawPlayerOnes()
drawPlayerTwos()

// Random generator

function randomTeams() {
  players.forEach((player) => {
    let randomIndex = Math.floor(Math.random() * teams.length)
    player.teamnumber = teams[randomIndex]
  })
  drawPlayerOnes()
  drawPlayerTwos()
}

// Calculate skill
let teamTwoCount = 0
let teamOneCount = 0

function calculateSkill() {
  let teamOne = filterPlayersByTeamNumber(1)
  teamOneCount = 0
  let teamTwo = filterPlayersByTeamNumber(2)
  teamTwoCount = 0
  teamOne.forEach((players) => {
    teamOneCount += players.skill
  })
  teamTwo.forEach((players) => {
    teamTwoCount += players.skill
  })

  console.log(`? count`, teamOneCount);
  console.log('? count', teamTwoCount);

  if (teamOneCount > teamTwoCount) {
    console.log(`Team One Won!`);
    return
  }

  if (teamTwoCount > teamOneCount) {
    console.log('Team Two Won!');
    return
  }

}

function filterPlayersByTeamNumber(surveyingTeam) {
  let filteredPlayers = players.filter((player) => player.teamnumber == surveyingTeam)
  console.log(`🥳`, filteredPlayers);
  return filteredPlayers
}

function placeBetOne(selectedItemName) {
  console.log(`betting on team 1`, selectedItemName)
  calculateSkill()
  console.log(`test`, teamOneCount)
  if (teamOneCount > teamTwoCount) {
    console.log(`You Won!`);
    bank += selectedItemName * 2
    console.log(`working`, bank)

  }

  if (teamTwoCount > teamOneCount) {
    console.log('You Lost!');
    bank -= selectedItemName
    console.log(`working`, bank)

  }
  bankAmount.innerText = bank

}

function placeBetTwo(selectedItemName) {
  console.log(`betting on team 2`, selectedItemName)
  calculateSkill()
  console.log(`test`, teamTwoCount)
  if (teamOneCount > teamTwoCount) {
    console.log(`You Lost`);
    bank -= selectedItemName
    console.log(`working`, bank)


  }

  if (teamTwoCount > teamOneCount) {
    console.log('You Won!');
    bank += selectedItemName * 2
    console.log(`working`, bank)

  }
  bankAmount.innerText = bank

}

