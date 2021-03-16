


function getApi()
{
    var requestURL = 'hhtps://data.nba.net/prod/v1/20210313/scoreboard.json'

    fetch(requestURL)
        .then(function (response)
        {
            if(response.ok)
            {
                response.json()
                        .then(function (data)
                        {
                            sortGames(data);
                        });
            }
        });
}

function sortGames(data)
{
    let numGames = data.numGames;

    for(var i = 0; i < numGames; i++)
    {
        
    }
}