
let betterData = [];

function getApi()
{
    var requestURL = 'https://data.nba.net/prod/v1/20210313/scoreboard.json'

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
                                    isHalfTime:e.period.isHalftime,
                                    isEndOfPeriod:e.period.isEndOfPeriod,

                                });
                            });
                            
                        });
            }
        });
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