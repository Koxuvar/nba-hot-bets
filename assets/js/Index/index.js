let gameContainer = document.getElementById('todayGames');

let betterData = [];

/**
 * Get the current date using moment.js
 * formats to the req from the nba api which is YYYYMMDD
 */
let todaysDate = moment().format('YYYYMMDD');


/**
 * clearNodes
 * utility function to clear all children of a given html element
 * @param {parent} the parent HTML element that will have all its children removed from
 */
function clearNodes(parent)
{
    while(parent.firstChild)
    {
        parent.removeChild(parent.firstChild);
    }
    return;
}

/**
 * getGamesApi()
 * requests the current scoreboard from data.nba.net for the date provided.
 * stores information into {betterData} as an array of objects where each object is one game from the day.
 * returns the array betterData
 * 
 * @param {date} - string - the date given as a string to the api to get the games score and other data for that day.
 * 
 * example return object - 
 * {
 *  homeTeam:OKC,
 *  homeTeamScore:81,
 *  homeTeamRecordWins:21,
 *  homeTeamRecordLoses:10,
 *  visitingTeam:NYK,
 *  visitingTeamScore:97,
 *  visitingTeamRecordWins:10,
 *  visitingTeamRecordLoses:12,
 *  period:3,
 *  isHalftime:false,
 *  isEndOfPeriod:true,
 *  gameId:201351246512, --defined by the NBA
 *  startTime:7:00 PM ET,
 *  gameTime:11:15
 * }
 * 
 */
function getGamesApi(date)
{
    var requestURL = 'https://data.nba.net/prod/v1/' + date + '/scoreboard.json'

    fetch(requestURL)
        .then(function (response)
        {
            if(response.ok)
            {
                response.json()
                        .then(function (data)
                        {
                            betterData = [];
                            data.games.forEach( e => 
                            { 
                                
                                betterData.push(
                                {
                                    homeTeam:e.hTeam.triCode,
                                    homeTeamScore:e.hTeam.score,
                                    homeTeamRecordWins:e.hTeam.win,
                                    homeTeamRecordLoses:e.hTeam.loss,
                                    visitingTeam:e.vTeam.triCode,
                                    visitingTeamScore:e.vTeam.score,
                                    visitingTeamRecordWins:e.vTeam.win,
                                    visitingTeamRecordLoses:e.vTeam.loss,
                                    period:e.period.current,
                                    isHalftime:e.period.isHalftime,
                                    isEndOfPeriod:e.period.isEndOfPeriod,
                                    gameId:e.gameId,
                                    startTime:e.startTimeEastern,
                                    gameTime:e.clock
                                });
                            });

                            displayGames(betterData);
                            return betterData;
                            
                        });
            }
        });
}

/**
 * displayGames()
 * takes array of objects with data about games and creates elements on the DOM.
 * 
 * @param {arrGameData} - Array - An array of objects iterated over that will then be displayed
 * 
 * !ISSUE images functionality temporarily commented out until images folder is implemented with logos
 */
function displayGames(arrGameData)
{
    clearNodes(gameContainer);

    arrGameData.forEach(e =>
        {
            //------------------Visiting Team------------------//
            let vTeamNameEl = document.createElement('h1');
            vTeamNameEl.innerHTML = e.visitingTeam;
            vTeamNameEl.setAttribute('class', 'team-name');
            let vTeamLogoEl = document.createElement('img');
            let logoLink = './assets/images/logos/' + e.visitingTeam + '.png';
            vTeamLogoEl.setAttribute('src', logoLink);
            let vTeamRecordEl = document.createElement('p');
            vTeamRecordEl.innerHTML = e.visitingTeamRecordWins + ' - ' + e.visitingTeamRecordLoses;
            let vTeamScoreEl = document.createElement('h1');
            vTeamScoreEl.innerHTML = e.visitingTeamScore;
            vTeamScoreEl.setAttribute('class', 'score');

            let vTeamContainer = document.createElement('div');
            vTeamContainer.setAttribute('class','team-display visiting-team');
            vTeamContainer.appendChild(vTeamNameEl);
            vTeamContainer.appendChild(vTeamLogoEl);
            vTeamContainer.appendChild(vTeamRecordEl);
            vTeamContainer.appendChild(vTeamScoreEl);

            //------------------timer------------------//
            let gameTimerEl = document.createElement('h2');
            gameTimerEl.innerHTML = e.gameTime;
            gameTimerEl.setAttribute('class','game-timer');
            
            let gamePeriodEl = document.createElement('h3');
            if(!e.isEndOfPeriod && !e.isHalftime && e.gameTime != "")
            {
                gamePeriodEl.innerHTML = 'Period\n' + e.period;
            }
            else if (!e.isHalftime && e.isEndOfPeriod)
            {
                gamePeriodEl.innerHTML = 'End of ' + e.period;
            }
            else if(e.isEndOfPeriod && e.isHalftime)
            {
                gamePeriodEl.innerHTML = 'HALF';
            }
            else
            {
                gamePeriodEl.innerHTML = '';
                gameTimerEl.innerHTML = 'Final';
            }

            let timeEl = document.createElement('div');
            timeEl.setAttribute('class','timer-section');
            timeEl.appendChild(gameTimerEl);
            timeEl.appendChild(gamePeriodEl);
            
            //------------------Home Team------------------//
            let hTeamNameEl = document.createElement('h1');
            hTeamNameEl.innerHTML = e.homeTeam;
            hTeamNameEl.setAttribute('class', 'team-name');
            let hTeamLogoEl = document.createElement('img');
            logoLink = './assets/images/logos/' + e.homeTeam + '.png';
            hTeamLogoEl.setAttribute('src', logoLink);
            let hTeamRecordEl = document.createElement('p');
            hTeamRecordEl.innerHTML = e.homeTeamRecordWins + ' - ' + e.homeTeamRecordLoses;
            let hTeamScoreEl = document.createElement('h1');
            hTeamScoreEl.innerHTML = e.homeTeamScore;
            hTeamScoreEl.setAttribute('class', 'score');

            //------------------Card and Styling Elements------------------//
            let hTeamContainer = document.createElement('div');
            hTeamContainer.setAttribute('class','team-display home-team');
            hTeamContainer.appendChild(hTeamNameEl);
            hTeamContainer.appendChild(hTeamLogoEl);
            hTeamContainer.appendChild(hTeamRecordEl);
            hTeamContainer.appendChild(hTeamScoreEl); 

            let teamsContainerEl = document.createElement('div');
            teamsContainerEl.setAttribute('class','teams-container');
            teamsContainerEl.appendChild(vTeamContainer);
            teamsContainerEl.appendChild(timeEl);
            teamsContainerEl.appendChild(hTeamContainer);

            let cardSectionEl = document.createElement('div');
            cardSectionEl.setAttribute('class','card-section');
            cardSectionEl.appendChild(teamsContainerEl);

            let cardEl = document.createElement('div');
            cardEl.setAttribute('class','card');
            cardEl.appendChild(cardSectionEl);

            let cellEl = document.createElement('a');
            cellEl.setAttribute('class',' card-link cell');
            cellEl.dataset.gameid = e.gameId;
            cellEl.setAttribute('onclick', 'getGame(this.dataset.gameid);');
            cellEl.appendChild(cardEl);

            gameContainer.appendChild(cellEl);
        })
}
getGamesApi(todaysDate);


setInterval(function()
{
    getApi(todaysDate);
}, 10000);

function getGame(t)
{
    for(games of betterData)
    {
        if (games.gameId == t)
        {
            let passVisitingTeam = games.visitingTeam;
            let passHomeTeam = games.homeTeam;

            let queryString = './solo-index.html?q=' + passVisitingTeam + '&' + passHomeTeam;

            document.location.assign(queryString);
        }
    }
}

