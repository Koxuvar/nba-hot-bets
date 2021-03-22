let cardContainer = document.getElementById('gameOdds');


let arrOddsSites = [];
let hTeam = '';
let vTeam = '';
let mGameID = '';
var retVal;

/**
 * Get the current date using moment.js
 * formats to the req from the nba api which is YYYYMMDD
 */
 let todaysDate = moment().format('YYYYMMDD');

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
    mGameID = searchParams[2];

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

function getSite(siteName)
{
    switch(siteName)
    {
        case('BetOnline.ag'):
        {
            return 'https://www.betonline.ag/sportsbook/basketball/nba';
        }
        case('LowVig.ag'):
        {
            return 'https://sportsbook.lowvig.ag';
        }
        case('PointsBet (US)'):
        {
            return 'https://il.pointsbet.com/sports/basketball/NBA/';
        }
        case('FanDuel'):
        {
            return 'https://sportsbook.fanduel.com/sports/navigation/830.1';
        }
        case('Bovada'):
        {
            return 'https://www.bovada.lv/sports/basketball/nba';
        }
        case('GTbets'):
        {
            return 'https://m.gtbets.ag/wagering1.asp?mode=lines&league=NBA&lg=1';
        }
        case('William Hill (US)'):
        {
            return 'https://www.williamhill.com/us/';
        }
        case('Caesars'):
        {
            return 'https://www.caesars.com/las-vegas/things-to-do/sports';
        }
        case('BetMGM'):
        {
            return 'https://promo.nj.betmgm.com/en/promo/geolocator?orh=sports.betmgm.com';
        }
        case('Unibet'):
        {
            return 'https://unibet.com/#filter/basketball/nba';
        }
        case('BetRivers'):
        {
            return 'https://betrivers.com/#home';
        }
        case('SugarHouse'):
        {
            return 'https://www.playsugarhouse.com/';
        }
        case('DraftKings'):
        {
            return 'https://www.draftkings.com/';
        }
        case('MyBookie.ag'):
        {
            return 'https://mybookie.ag/sportsbook/nba/';
        }
        case('Intertops'):
        {
            return 'https://sports.intertops.eu/en/Bets/Basketball/NBA-Lines/';
        }
        case('FOX Bet'):
        {
            return 'https://www.foxbet.com/';
        }
    }
}

function teamDisplay(data)
{
    $('#vteam-name').text(vTeam);
                            let logoLink = 'assets/images/logos/' + vTeam + '.png';
                            $('#vteam-image').attr('src', logoLink)
                            $('#vteam-score').text(data.basicGameData.vTeam.score ? data.basicGameData.vTeam.score : 0);

                            $('#game-timer').text(data.basicGameData.clock);

                            if(!data.basicGameData.period.isEndOfPeriod && !data.basicGameData.period.isHalftime && data.basicGameData.clock != "")
                            {
                                $('#game-period-solo').text('Period\n' + data.basicGameData.period.current);
                            }
                            else if (!data.basicGameData.period.isHalftime && data.basicGameData.period.isEndOfPeriod)
                            {
                                $('#game-period-solo').text('End of ' + data.basicGameData.period.current);
                            }
                            else if(data.basicGameData.period.isEndOfPeriod && data.basicGameData.period.isHalftime)
                            {
                                $('#game-period-solo').text('HALF');
                            }
                            else
                            {  
                                if(data.period >= 4)
                                {
                                    $('#game-period-solo').text('');
                                    $('#game-timer').text('Final');
                                }
                                else
                                {
                                    $('#game-period-solo').text('');
                                    $('#game-timer').text(data.basicGameData.startTimeEastern);
                                }
                            }

                            $('#hteam-name').text(hTeam);
                            logoLink = 'assets/images/logos/' + hTeam + '.png';
                            $('#hteam-image').attr('src', logoLink)
                            $('#hteam-score').text(data.basicGameData.hTeam.score ? data.basicGameData.hTeam.score : 0);

                            $('#boxscore-vteam-name').text(vTeam);
                            if(data.basicGameData.vTeam.linescore.length != 0)
                            {
                                $('#boxscore-vteam-p1').text(data.  basicGameData.vTeam.linescore[0]. score);
                                $('#boxscore-vteam-p2').text(data.  basicGameData.vTeam.linescore[1]. score);
                                $('#boxscore-vteam-p3').text(data.  basicGameData.vTeam.linescore[2]. score);
                                $('#boxscore-vteam-p4').text(data.  basicGameData.vTeam.linescore[3]. score);
                            }

                            $('#boxscore-hteam-name').text(hTeam);
                            if(data.basicGameData.hTeam.linescore.length != 0)
                            {
                                $('#boxscore-hteam-p1').text(data.basicGameData.hTeam.linescore[0].score);
                                $('#boxscore-hteam-p2').text(data.basicGameData.hTeam.linescore[1].score);
                                $('#boxscore-hteam-p3').text(data.basicGameData.hTeam.linescore[2].score);
                                $('#boxscore-hteam-p4').text(data.basicGameData.hTeam.linescore[3].score);
                            }
}

function displayCards(gameEntry)
{

    let gameURL = 'https://data.nba.net/prod/v1/' + todaysDate + '/' + mGameID + '_boxscore.json';

    fetch(gameURL)
        .then(function (response)
            {
                if(response.ok)
                {
                    response.json()
                        .then(function (data)
                        {
                            teamDisplay(data);
                        });
                }
            });

   setInterval(function() 
   { 
       fetch(gameURL)
        .then(function (response)
            {
                if(response.ok)
                {
                    response.json()
                        .then(function (data)
                        {
                            teamDisplay(data);
                        });
                }
            });
   }, 10000);
    
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

        let siteLink = getSite(site.site_nice);

        let cellEl = document.createElement('a');
        cellEl.setAttribute('class',' card-link cell');
        cellEl.setAttribute('href', siteLink);
        cellEl.setAttribute('target', '_blank');
        cellEl.appendChild(cardEl)  
        cardContainer.appendChild(cellEl);
    }
}

getParams();