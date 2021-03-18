let cardContainer = document.getElementById('gameOdds');


let arrOddsSites = [];
// let hTeam = '';
// let vTeam = '';
var retVal = '';

function getTeamsApi(teamTricode)
{
    
    if(teamTricode == 'LAC')
    {
        return 'Los Angeles Clippers';
    }
    else if(teamTricode == 'LAL')
    {
        return 'Los Angeles Lakers';
    }
    else
    {
        var requestURL = 'https://data.nba.net/prod/2020/teams_config.json'

        

        fetch(requestURL)
            .then(function (response)
            {
                if(response.ok)
                {
                    response.json()
                            .then(function (data)
                            {
                                for(e of data.teams.config)
                                {      
                                    let tri = e.tricode;                              
                                    if(teamTricode == tri)
                                    {  
                                        console.log('----------')
                                        console.log(e.ttsName);
                                        retVal =  e.ttsName;
                                        return retVal;
                                    }
                                }

                                
                            });
                            
                }
                
            });
            
    }
    
}


function getParams()
{
    let searchParams = document.location.search.split('&');

    let vTeam = searchParams[0].split('=').pop();
    let hTeam = searchParams[1];

    getOdds(hTeam);
}


function getOdds(homeTeam)
{
    let oddsURL = 'https://api.the-odds-api.com/v3/odds/?apiKey=' + apiKey + '&sport=Basketball&region=us';
    
    let hTeam = getTeamsApi(homeTeam);
    
    

    fetch(oddsURL)
        .then(function (response)
        {
            if(response.ok)
            {
                response.json()
                        .then(function (data)
                        {
                            arrOddsSites = [];   
                            data.data.forEach(e =>
                            {      
                                if(e.sport_key == 'basketball_nba')
                                {
                                    arrOddsSites.push(e);
                                }
                            });
                            for(games of arrOddsSites)
                            {
                                if(retVal == games.home_team)
                                {
                                    displayCards(games);
                                }
                            }
                        });
            }
        });
    
}

function displayCards(gameEntry)
{
    console.log(gameEntry);
    for(site of gameEntry.sites)
    {
        let siteNameEl = document.createElement('h1');
        siteNameEl.setAttribute('class', 'site-name');
        siteNameEl.innerHTML = site.site_nice;

        let oddsEl = document.createElement('h2');
        oddsEl.setAttribute('class', 'odds-display');
        oddsEl.innerHTML = site.odds.h2h[0] + ' - ' + site.odds.h2h[1];

        let siteContainerEl = document.createElement('div');
        siteContainerEl.setAttribute('class','site-container');
        siteContainerEl.appendChild(siteNameEl);
        siteContainerEl.appendChild(oddsEl);
    
        let cardSectionEl = document.createElement('div');
        cardSectionEl.setAttribute('class','card-section');
        cardSectionEl.appendChild(siteContainerEl);

        let cardEl = document.createElement('div');
        cardEl.setAttribute('class','card');
        cardEl.appendChild(cardSectionEl);

        let cellEl = document.createElement('a');
        cellEl.setAttribute('class',' card-link cell');
        cellEl.setAttribute('href', 'getGame(this.dataset.gameid);');
        cellEl.appendChild(cardEl)  
        cardContainer.appendChild(cellEl);
    }
}

getParams();