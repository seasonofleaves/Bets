let bank = 100

const teams = [`1`, `2`]

const teamOneElm = document.getElementById(`team-one`)
const teamTwoElm = document.getElementById(`team-two`)

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

function calculateSkill() {
  let teamOne = filterPlayersByTeamNumber(1)
  let teamOneCount = 0
  let teamTwo = filterPlayersByTeamNumber(2)
  let teamTwoCount = 0
  teamOne.forEach((players) => {
    teamOneCount += players.skill
  })
  teamTwo.forEach((players) => {
    teamTwoCount += players.skill
  })

  console.log(`? count`, teamOneCount)
  console.log('? count', teamTwoCount)
}

function filterPlayersByTeamNumber(surveyingTeam) {
  let filteredPlayers = players.filter((player) => player.teamnumber == surveyingTeam)
  console.log(`🥳`, filteredPlayers);
  return filteredPlayers
}

