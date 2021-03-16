let gameContainer = document.getElementById('todayGames');

let betterData = [];




function getApi()
{
    var requestURL = 'https://data.nba.net/prod/v1/20210315/scoreboard.json'

    fetch(requestURL)
        .then(function (response)
        {
            if(response.ok)
            {
                response.json()
                        .then(function (data)
                        {
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
                                });
                            });

                            displayGames();
                            
                        });
            }
        });
}

function displayGames()
{

    betterData.forEach(e =>
        {
            //------------------Visiting Team------------------//
            let vTeamNameEl = document.createElement('h1');
            vTeamNameEl.innerHTML = e.visitingTeam;
            vTeamNameEl.setAttribute('class', 'team-name');
            let vTeamLogoEl = document.createElement('img');
            // let logoLink = './images/logos/' + e.visitingTeam + '.png';
            // vTeamLogoEl.setAttribute('src', logoLink);
            let vTeamRecordEl = document.createElement('p');
            vTeamRecordEl.innerHTML = e.visitingTeamRecordWins + ' - ' + e.visitingTeamRecordLoses;
            let vTeamScoreEl = document.createElement('h1');
            vTeamScoreEl.innerHTML = e.visitingTeamScore;
            vTeamScoreEl.setAttribute('class', 'score');

            let vTeamContainer = document.createElement('div');
            vTeamContainer.setAttribute('class','visiting-team');
            vTeamContainer.appendChild(vTeamNameEl);
            vTeamContainer.appendChild(vTeamLogoEl);
            vTeamContainer.appendChild(vTeamRecordEl);
            vTeamContainer.appendChild(vTeamScoreEl);



            //------------------timer------------------//
            let gameTimerEl = document.createElement('h2');
            gameTimerEl.innerHTML = e.gameTime;
            gameTimerEl.setAttribute('class','game-timer');
            
            let gamePeriodEl = document.createElement('h3');
            if(!e.isEndOfPeriod && !e.isHalftime)
            {
                gamePeriodEl.innerHTML = e.period;
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
                gameTimerEl.innerHTML = 'END';
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
            // logoLink = './images/logos/' + e.homeTeam + '.png';
            // hTeamLogoEl.setAttribute('src', logoLink);
            let hTeamRecordEl = document.createElement('p');
            hTeamRecordEl.innerHTML = e.homeTeamRecordWins + ' - ' + e.homeTeamRecordLoses;
            let hTeamScoreEl = document.createElement('h1');
            hTeamScoreEl.innerHTML = e.homeTeamScore;
            hTeamScoreEl.setAttribute('class', 'score');

            let hTeamContainer = document.createElement('div');
            hTeamContainer.setAttribute('class','home-team');
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

            let cellEl = document.createElement('div');
            cellEl.setAttribute('class','cell');
            cellEl.appendChild(cardEl);

            gameContainer.appendChild(cellEl);
        })
    
        
        


}



function sortGames(data)
{
    let numGames = data.numGames;

    for(var i = 0; i < numGames; i++)
    {
        console.log(data.games[i]);
    }
}

getApi();

console.log(betterData);