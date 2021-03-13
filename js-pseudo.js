// pseudo code goes here

// --------------------------------------- index.html ---------------------------------------//

/*  
   
    -get games - function getGames()
    -create object per game
    -game object example - 
        game = {
            team1: {
                name:"teamName",
                score:81,
                logo:"./assets/images/logo"
            },
            team2: {
                name:"teamName",
                score:81,
                logo:"./assets/images/logo"
            },
            gameDate:"March 15. 2021",
            gameOdds:{
                siteName:"sportsbets",
                sitePretty:"Sports Bets",
                odds:122-55
            },
            getOdds:function()
                {
                    go to api and get odds for things
                },
            updateScore: function()
                {
                    go to api and get score for this game
                },
            
            ...

        }
    -display games
    -on click of game:
        get odds for that game
        serve those to new page - location

*/

// --------------------------------------- odds-page.html ---------------------------------------//

