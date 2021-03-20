let cardContainer = document.getElementById('gameOdds');


let arrOddsSites = [];
let hTeam = '';
let vTeam = '';
var retVal;

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
                            .then((function (data)
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

                                
                            }));
                            
                }
                
            });
            
    }
    
}

function getParams()
{
    let searchParams = document.location.search.split('&');

    vTeam = searchParams[0].split('=').pop();
    hTeam = searchParams[1];

    getOdds(hTeam);
}


function getOdds(homeTeam)
{
    let oddsURL = 'https://api.the-odds-api.com/v3/odds/?apiKey=' + apiKey + '&sport=basketball_nba&region=us&mkt=spreads';
    
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
                                
                                if(retVal == games.home_team || hTeam == games.home_team)
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
    
    for(site of gameEntry.sites)
    {
        let siteNameEl = document.createElement('h1');
        siteNameEl.setAttribute('class', 'site-name');
        siteNameEl.innerHTML = site.site_nice;

        let vteamNameEl = document.createElement('h1');
        vteamNameEl.innerHTML = vTeam;
        vteamNameEl.setAttribute('class', 'team-name');

        let oddsEl = document.createElement('h2');
        oddsEl.setAttribute('class', 'odds-display-vteam odds-display');
        oddsEl.innerHTML ='spread' + site.odds.spreads.odds[0] + ' points ' + site.odds.spreads.points[0];

        let vteamContainer = document.createElement('div');
        vteamContainer.setAttribute('class','vteam-container team-display');
        vteamContainer.appendChild(vteamNameEl);
        vteamContainer.appendChild(oddsEl);

        let hteamNameEl = document.createElement('h1');
        hteamNameEl.innerHTML = hTeam;
        hteamNameEl.setAttribute('class', 'team-name');

        let odds2El = document.createElement('h2');
        odds2El.setAttribute('class', 'odds-display-hteam odds-display');
        odds2El.innerHTML = 'spread' + site.odds.spreads.odds[1] + ' points ' + site.odds.spreads.points[1];

        let hteamContainer = document.createElement('div');
        hteamContainer.setAttribute('class','vteam-container team-display');
        hteamContainer.appendChild(hteamNameEl);
        hteamContainer.appendChild(odds2El);

        let siteContainerEl = document.createElement('div');
        siteContainerEl.setAttribute('class','site-container');
        siteContainerEl.appendChild(siteNameEl);
        siteContainerEl.appendChild(vteamContainer);
        siteContainerEl.appendChild(hteamContainer);
    
        let cardSectionEl = document.createElement('div');
        cardSectionEl.setAttribute('class','card-section');
        cardSectionEl.appendChild(siteContainerEl);

        let cardEl = document.createElement('div');
        cardEl.setAttribute('class','card');
        cardEl.appendChild(cardSectionEl);

        let siteLink = site.site_nice.indexOf('.') != -1 ? 'http://www.' + site.site_nice : 'http://www.' + site.site_key + '.com';

        let cellEl = document.createElement('a');
        cellEl.setAttribute('class',' card-link cell');
        cellEl.setAttribute('href', siteLink);
        cellEl.setAttribute('target', '_blank');
        cellEl.appendChild(cardEl)  
        cardContainer.appendChild(cellEl);
    }
}

getParams();