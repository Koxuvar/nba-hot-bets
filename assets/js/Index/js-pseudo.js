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



        function MakeOBJ(...args)
        {
          this.name = args.name
          let retVAL = {
            this.name = arg1;
            this.place = arg2;
          }



          return retVAL;
        }


        api goes out and gets data => 8 games gameData = [{},{}]
       var betterData = Array.map(element => {
          return {
            name: element.name
            place: element.place
            team1: element.team1
          }
        })
        betterData.forEach(function(element) {
          makeCard(element)
        })
        makeCard(data) {
          go to the 
        }
*/

// --------------------------------------- odds-page.html ---------------------------------------//

/**
 * {
 * "_internal":
 *  {
        "pubDateTime":"2021-03-13 12:00:51.542 EST",
        "igorPath":"cron,1615654849787,1615654849787|router,1615654849787,1615654849906|domUpdater,1615654850012,1615654851265|feedProducer,1615654851389,1615654852157",
        "xslt":"NBA/xsl/league/schedule/marty_today.xsl",
        "xsltForceRecompile":"true",
        "xsltInCache":"false",
        "xsltCompileTimeMillis":"42",
        "xsltTransformTimeMillis":"53",
        "consolidatedDomKey":"prod__transform__marty_today__1364287712563",
        "endToEndTimeMillis":"2370"},
        "teamSitesOnly":
            {
                "seasonStage":2,
                "seasonYear":2020, 
                "rosterYear":2020,
                "statsStage":2, 
                "statsYear":2020,
                "displayYear":"2020-21",
                "lastPlayByPlay":"/json/cms/noseason/game/{{gameDate}}/{{gameId}}/pbp_last.json",
                "allPlayByPlay":"/data/10s/json/cms/noseason/game/{{gameDate}}/{{gameId}}/pbp_all.json",
                "playerMatchup":"/data/10s/json/cms/2020/game/{{gameDate}}/{{gameId}}/playersPerGame.json",
                "series":"/data/5s/json/cms/2020/regseason/team/{{teamUrlCode}}/series.json"
            },
        "seasonScheduleYear":2020,
        "showPlayoffsClinch":true,
        "links":
        {
            "anchorDate":"20210313",
            "currentDate":"20210313",
            "calendar":"/prod/v1/calendar.json",
            "todayScoreboard":"/prod/v1/20210313/scoreboard.json",
            "currentScoreboard":"/prod/v1/20210313/scoreboard.json",
            "teams":"/prod/v2/2020/teams.json",
            "scoreboard":"/prod/v2/{{gameDate}}/scoreboard.json",
            "leagueRosterPlayers":"/prod/v1/2020/players.json",
            "allstarRoster":"/prod/v1/allstar/2018/AS_roster.json",
            "leagueRosterCoaches":"/prod/v1/2020/coaches.json",
            "leagueSchedule":"/prod/v1/2020/schedule.json",
            "leagueConfStandings":"/prod/v1/current/standings_conference.json",
            "leagueDivStandings":"/prod/v1/current/standings_division.json",
            "leagueUngroupedStandings":"/prod/v1/current/standings_all.json",
            "leagueMiniStandings":"/prod/v1/current/standings_all_no_sort_keys.json",
            "leagueTeamStatsLeaders":"/prod/v1/2020/team_stats_rankings.json",
            "leagueLastFiveGameTeamStats":"/prod/v1/2020/team_stats_last_five_games.json",
            "previewArticle":"/prod/v1/{{gameDate}}/{{gameId}}_preview_article.json",
            "recapArticle":"/prod/v1/{{gameDate}}/{{gameId}}_recap_article.json",
            "gameBookPdf":"/prod/v1/{{gameDate}}/{{gameId}}_Book.pdf",
            "boxscore":"/prod/v1/{{gameDate}}/{{gameId}}_boxscore.json",
            "miniBoxscore":"/prod/v1/{{gameDate}}/{{gameId}}_mini_boxscore.json",
            "pbp":"/prod/v1/{{gameDate}}/{{gameId}}_pbp_{{periodNum}}.json",
            "leadTracker":"/prod/v1/{{gameDate}}/{{gameId}}_lead_tracker_{{periodNum}}.json",
            "playerGameLog":"/prod/v1/2020/players/{{personId}}_gamelog.json",
            "playerProfile":"/prod/v1/2020/players/{{personId}}_profile.json",
            "playerUberStats":"/prod/v1/2020/players/{{personId}}_uber_stats.json",
            "teamSchedule":"/prod/v1/2020/teams/{{teamUrlCode}}/schedule.json",
            "teamsConfig":"/prod/2020/teams_config.json",
            "teamRoster":"/prod/v1/2020/teams/{{teamUrlCode}}/roster.json",
            "teamsConfigYear":"/prod/{{seasonScheduleYear}}/teams_config.json",
            "teamScheduleYear":"/prod/v1/{{seasonScheduleYear}}/teams/{{teamUrlCode}}/schedule.json",
            "teamLeaders":"/prod/v1/2020/teams/{{teamUrlCode}}/leaders.json",
            "teamScheduleYear2":"/prod/v1/{{seasonScheduleYear}}/teams/{{teamId}}/schedule.json",
            "teamLeaders2":"/prod/v1/2020/teams/{{teamId}}/leaders.json",
            "teamICS":"/prod/teams/schedules/2020/{{teamUrlCode}}_home_schedule.ics",
            "teamICS2":"/prod/teams/schedules/2020/{{teamUrlCode}}_schedule.ics",
            "playoffsBracket":"/prod/v1/2019/playoffsBracket.json",
            "playoffSeriesLeaders":"/prod/v1/2019/playoffs_{{seriesId}}_leaders.json",
            "universalLinkMapping":"https://www.nba.com/mobile/apps/configs/prod/universalLinkMapping.json",
            "ticketLink":"https://a.data.nba.com/tickets/single/{{seasonScheduleYear}}/{{gameId}}/{{trackingId}}"
        }
 * }
    
    
    
        // --------------------------------- SCOREBOARD
    {
  "_internal": {
    "pubDateTime": "2021-03-13 09:04:25.834 EST",
    "igorPath": "S3,1615644255018,1615644263183|router,1615644263183,1615644263188|domUpdater,1615644263318,1615644265381|feedProducer,1615644265487,1615644267134",
    "routeName": "ap_preview_article",
    "routeValue": "S3::ap_preview_20210313_0022000194.xml",
    "xslt": "NBA/xsl/date/scoreboard/marty_daily_scoreboard.xsl",
    "xsltForceRecompile": "true",
    "xsltInCache": "false",
    "xsltCompileTimeMillis": "306",
    "xsltTransformTimeMillis": "361",
    "consolidatedDomKey": "prod__transform__marty_daily_scoreboard__3372450694500",
    "endToEndTimeMillis": "12116"
  },
  "numGames": 8,
  "games": [
    {
      "seasonStageId": 2,
      "seasonYear": "2020",
      "leagueName": "standard",
      "gameId": "0022000586",
      "arena": {
        "name": "Chesapeake Energy Arena",
        "isDomestic": true,
        "city": "Oklahoma City",
        "stateAbbr": "OK",
        "country": "USA"
      },
      "isGameActivated": false,
      "statusNum": 1,
      "extendedStatusNum": 0,
      "startTimeEastern": "2:00 PM ET",
      "startTimeUTC": "2021-03-13T19:00:00.000Z",
      "startDateEastern": "20210313",
      "homeStartDate": "20210313",
      "homeStartTime": "1300",
      "visitorStartDate": "20210313",
      "visitorStartTime": "1400",
      "gameUrlCode": "20210313/NYKOKC",
      "clock": "",
      "isBuzzerBeater": false,
      "isPreviewArticleAvail": true,
      "isRecapArticleAvail": false,
      "nugget": {
        "text": ""
      },
      "attendance": "",
      "tickets": {
        "mobileApp": "https://a.data.nba.com/tickets/single/2020/0022000586/APP_TIX",
        "desktopWeb": "https://a.data.nba.com/tickets/single/2020/0022000586/TEAM_SCH",
        "mobileWeb": "https://a.data.nba.com/tickets/single/2020/0022000586/WEB_MWEB",
        "leagGameInfo": "https://a.data.nba.com/tickets/single/2020/0022000586/LEAG_GAMEINFO",
        "leagTix": "https://a.data.nba.com/tickets/single/2020/0022000586/LEAG_TIX"
      },
      "hasGameBookPdf": false,
      "isStartTimeTBD": false,
      "isNeutralVenue": false,
      "gameDuration": {
        "hours": "",
        "minutes": ""
      },
      "period": {
        "current": 0,
        "type": 0,
        "maxRegular": 4,
        "isHalftime": false,
        "isEndOfPeriod": false
      },
      "vTeam": {
        "teamId": "1610612752",
        "triCode": "NYK",
        "win": "19",
        "loss": "19",
        "seriesWin": "0",
        "seriesLoss": "1",
        "score": "",
        "linescore": []
      },
      "hTeam": {
        "teamId": "1610612760",
        "triCode": "OKC",
        "win": "16",
        "loss": "21",
        "seriesWin": "1",
        "seriesLoss": "0",
        "score": "",
        "linescore": []
      },
      "watch": {
        "broadcast": {
          "broadcasters": {
            "national": [
              {
                "shortName": "NBA TV",
                "longName": "NBA TV"
              }
            ],
            "canadian": [
              {
                "shortName": "NBAC",
                "longName": "NBA TV Canada"
              }
            ],
            "vTeam": [
              {
                "shortName": "MSG",
                "longName": "MSG"
              }
            ],
            "hTeam": [
              {
                "shortName": "FSOK",
                "longName": "Fox Sports Oklahoma"
              }
            ],
            "spanish_hTeam": [],
            "spanish_vTeam": [],
            "spanish_national": []
          },
          "video": {
            "regionalBlackoutCodes": "torr_okcr_nykr",
            "canPurchase": false,
            "isLeaguePass": true,
            "isNationalBlackout": true,
            "isTNTOT": false,
            "isVR": false,
            "tntotIsOnAir": false,
            "isNextVR": false,
            "isNBAOnTNTVR": false,
            "isMagicLeap": false,
            "isOculusVenues": false,
            "streams": [
              {
                "streamType": "vTeam",
                "isOnAir": false,
                "doesArchiveExist": false,
                "isArchiveAvailToWatch": false,
                "streamId": "",
                "duration": 0
              },
              {
                "streamType": "hTeam",
                "isOnAir": false,
                "doesArchiveExist": false,
                "isArchiveAvailToWatch": false,
                "streamId": "",
                "duration": 0
              },
              {
                "streamType": "espanol_vTeam",
                "isOnAir": false,
                "doesArchiveExist": false,
                "isArchiveAvailToWatch": false,
                "streamId": "",
                "duration": 0
              },
              {
                "streamType": "espanol_hTeam",
                "isOnAir": false,
                "doesArchiveExist": false,
                "isArchiveAvailToWatch": false,
                "streamId": "",
                "duration": 0
              },
              {
                "streamType": "espanol_natl",
                "isOnAir": false,
                "doesArchiveExist": false,
                "isArchiveAvailToWatch": false,
                "streamId": "",
                "duration": 0
              },
              {
                "streamType": "mobile",
                "isOnAir": false,
                "doesArchiveExist": false,
                "isArchiveAvailToWatch": false,
                "streamId": "",
                "duration": 0
              },
              {
                "streamType": "condensed",
                "isOnAir": false,
                "doesArchiveExist": false,
                "isArchiveAvailToWatch": false,
                "streamId": "",
                "duration": 0
              },
              {
                "streamType": "alt",
                "isOnAir": false,
                "doesArchiveExist": false,
                "isArchiveAvailToWatch": false,
                "streamId": "",
                "duration": 0
              }
            ],
            "deepLink": [
              {
                "broadcaster": "MSG",
                "regionalMarketCodes": "nykr",
                "iosApp": "http://www.msggo.com/",
                "androidApp": "http://www.msggo.com/",
                "desktopWeb": "http://www.msggo.com/",
                "mobileWeb": "http://www.msggo.com/"
              }
            ]
          },
          "audio": {
            "national": {
              "streams": [
                {
                  "language": "English",
                  "isOnAir": false,
                  "streamId": ""
                },
                {
                  "language": "Spanish",
                  "isOnAir": false,
                  "streamId": ""
                }
              ],
              "broadcasters": []
            },
            "vTeam": {
              "streams": [
                {
                  "language": "English",
                  "isOnAir": false,
                  "streamId": ""
                },
                {
                  "language": "Spanish",
                  "isOnAir": false,
                  "streamId": ""
                }
              ],
              "broadcasters": [
                {
                  "shortName": "ESPN NY 98.7",
                  "longName": "ESPN NY 98.7"
                }
              ]
            },
            "hTeam": {
              "streams": [
                {
                  "language": "English",
                  "isOnAir": false,
                  "streamId": ""
                },
                {
                  "language": "Spanish",
                  "isOnAir": false,
                  "streamId": ""
                }
              ],
              "broadcasters": [
                {
                  "shortName": "WWLS/WKY",
                  "longName": "WWLS/WKY"
                }
              ]
            }
          }
        }
      }
    },
    {
      "seasonStageId": 2,
      "seasonYear": "2020",
      "leagueName": "standard",
      "gameId": "0022000587",
      "arena": {
        "name": "Barclays Center",
        "isDomestic": true,
        "city": "Brooklyn",
        "stateAbbr": "NY",
        "country": "USA"
      },
      "isGameActivated": false,
      "statusNum": 1,
      "extendedStatusNum": 0,
      "startTimeEastern": "7:00 PM ET",
      "startTimeUTC": "2021-03-14T00:00:00.000Z",
      "startDateEastern": "20210313",
      "homeStartDate": "20210313",
      "homeStartTime": "1900",
      "visitorStartDate": "20210313",
      "visitorStartTime": "1900",
      "gameUrlCode": "20210313/DETBKN",
      "clock": "",
      "isBuzzerBeater": false,
      "isPreviewArticleAvail": true,
      "isRecapArticleAvail": false,
      "nugget": {
        "text": ""
      },
      "attendance": "",
      "tickets": {
        "mobileApp": "https://a.data.nba.com/tickets/single/2020/0022000587/APP_TIX",
        "desktopWeb": "https://a.data.nba.com/tickets/single/2020/0022000587/TEAM_SCH",
        "mobileWeb": "https://a.data.nba.com/tickets/single/2020/0022000587/WEB_MWEB",
        "leagGameInfo": "https://a.data.nba.com/tickets/single/2020/0022000587/LEAG_GAMEINFO",
        "leagTix": "https://a.data.nba.com/tickets/single/2020/0022000587/LEAG_TIX"
      },
      "hasGameBookPdf": false,
      "isStartTimeTBD": false,
      "isNeutralVenue": false,
      "gameDuration": {
        "hours": "",
        "minutes": ""
      },
      "period": {
        "current": 0,
        "type": 0,
        "maxRegular": 4,
        "isHalftime": false,
        "isEndOfPeriod": false
      },
      "vTeam": {
        "teamId": "1610612765",
        "triCode": "DET",
        "win": "10",
        "loss": "27",
        "seriesWin": "1",
        "seriesLoss": "0",
        "score": "",
        "linescore": []
      },
      "hTeam": {
        "teamId": "1610612751",
        "triCode": "BKN",
        "win": "25",
        "loss": "13",
        "seriesWin": "0",
        "seriesLoss": "1",
        "score": "",
        "linescore": []
      },
      "watch": {
        "broadcast": {
          "broadcasters": {
            "national": [
              {
                "shortName": "NBA TV",
                "longName": "NBA TV"
              }
            ],
            "canadian": [],
            "vTeam": [
              {
                "shortName": "FSD",
                "longName": "Fox Sports Detroit"
              }
            ],
            "hTeam": [
              {
                "shortName": "YES",
                "longName": "YES Network"
              }
            ],
            "spanish_hTeam": [],
            "spanish_vTeam": [],
            "spanish_national": []
          },
          "video": {
            "regionalBlackoutCodes": "bknr_detr",
            "canPurchase": false,
            "isLeaguePass": true,
            "isNationalBlackout": true,
            "isTNTOT": false,
            "isVR": false,
            "tntotIsOnAir": false,
            "isNextVR": false,
            "isNBAOnTNTVR": false,
            "isMagicLeap": false,
            "isOculusVenues": false,
            "streams": [
              {
                "streamType": "vTeam",
                "isOnAir": false,
                "doesArchiveExist": false,
                "isArchiveAvailToWatch": false,
                "streamId": "",
                "duration": 0
              },
              {
                "streamType": "hTeam",
                "isOnAir": false,
                "doesArchiveExist": false,
                "isArchiveAvailToWatch": false,
                "streamId": "",
                "duration": 0
              },
              {
                "streamType": "espanol_vTeam",
                "isOnAir": false,
                "doesArchiveExist": false,
                "isArchiveAvailToWatch": false,
                "streamId": "",
                "duration": 0
              },
              {
                "streamType": "espanol_hTeam",
                "isOnAir": false,
                "doesArchiveExist": false,
                "isArchiveAvailToWatch": false,
                "streamId": "",
                "duration": 0
              },
              {
                "streamType": "espanol_natl",
                "isOnAir": false,
                "doesArchiveExist": false,
                "isArchiveAvailToWatch": false,
                "streamId": "",
                "duration": 0
              },
              {
                "streamType": "mobile",
                "isOnAir": false,
                "doesArchiveExist": false,
                "isArchiveAvailToWatch": false,
                "streamId": "",
                "duration": 0
              },
              {
                "streamType": "condensed",
                "isOnAir": false,
                "doesArchiveExist": false,
                "isArchiveAvailToWatch": false,
                "streamId": "",
                "duration": 0
              },
              {
                "streamType": "alt",
                "isOnAir": false,
                "doesArchiveExist": false,
                "isArchiveAvailToWatch": false,
                "streamId": "",
                "duration": 0
              }
            ],
            "deepLink": []
          },
          "audio": {
            "national": {
              "streams": [
                {
                  "language": "English",
                  "isOnAir": false,
                  "streamId": ""
                },
                {
                  "language": "Spanish",
                  "isOnAir": false,
                  "streamId": ""
                }
              ],
              "broadcasters": []
            },
            "vTeam": {
              "streams": [
                {
                  "language": "English",
                  "isOnAir": false,
                  "streamId": ""
                },
                {
                  "language": "Spanish",
                  "isOnAir": false,
                  "streamId": ""
                }
              ],
              "broadcasters": [
                {
                  "shortName": "97.1 FM The Ticket",
                  "longName": "97.1 FM The Ticket"
                }
              ]
            },
            "hTeam": {
              "streams": [
                {
                  "language": "English",
                  "isOnAir": false,
                  "streamId": ""
                },
                {
                  "language": "Spanish",
                  "isOnAir": false,
                  "streamId": ""
                }
              ],
              "broadcasters": [
                {
                  "shortName": "WFAN",
                  "longName": "WFAN"
                }
              ]
            }
          }
        }
      }
    },
    {
      "seasonStageId": 2,
      "seasonYear": "2020",
      "leagueName": "standard",
      "gameId": "0022000588",
      "arena": {
        "name": "Spectrum Center",
        "isDomestic": true,
        "city": "Charlotte",
        "stateAbbr": "NC",
        "country": "USA"
      },
      "isGameActivated": false,
      "statusNum": 1,
      "extendedStatusNum": 0,
      "startTimeEastern": "7:00 PM ET",
      "startTimeUTC": "2021-03-14T00:00:00.000Z",
      "startDateEastern": "20210313",
      "homeStartDate": "20210313",
      "homeStartTime": "1900",
      "visitorStartDate": "20210313",
      "visitorStartTime": "1900",
      "gameUrlCode": "20210313/TORCHA",
      "clock": "",
      "isBuzzerBeater": false,
      "isPreviewArticleAvail": true,
      "isRecapArticleAvail": false,
      "nugget": {
        "text": ""
      },
      "attendance": "",
      "tickets": {
        "mobileApp": "https://a.data.nba.com/tickets/single/2020/0022000588/APP_TIX",
        "desktopWeb": "https://a.data.nba.com/tickets/single/2020/0022000588/TEAM_SCH",
        "mobileWeb": "https://a.data.nba.com/tickets/single/2020/0022000588/WEB_MWEB",
        "leagGameInfo": "https://a.data.nba.com/tickets/single/2020/0022000588/LEAG_GAMEINFO",
        "leagTix": "https://a.data.nba.com/tickets/single/2020/0022000588/LEAG_TIX"
      },
      "hasGameBookPdf": false,
      "isStartTimeTBD": false,
      "isNeutralVenue": false,
      "gameDuration": {
        "hours": "",
        "minutes": ""
      },
      "period": {
        "current": 0,
        "type": 0,
        "maxRegular": 4,
        "isHalftime": false,
        "isEndOfPeriod": false
      },
      "vTeam": {
        "teamId": "1610612761",
        "triCode": "TOR",
        "win": "17",
        "loss": "20",
        "seriesWin": "2",
        "seriesLoss": "0",
        "score": "",
        "linescore": []
      },
      "hTeam": {
        "teamId": "1610612766",
        "triCode": "CHA",
        "win": "18",
        "loss": "18",
        "seriesWin": "0",
        "seriesLoss": "2",
        "score": "",
        "linescore": []
      },
      "watch": {
        "broadcast": {
          "broadcasters": {
            "national": [],
            "canadian": [
              {
                "shortName": "SN",
                "longName": "Sportsnet"
              }
            ],
            "vTeam": [
              {
                "shortName": "SN",
                "longName": "Sportsnet"
              }
            ],
            "hTeam": [
              {
                "shortName": "FSSE-CHA",
                "longName": "Fox Sports Southeast - Charlotte"
              }
            ],
            "spanish_hTeam": [],
            "spanish_vTeam": [],
            "spanish_national": []
          },
          "video": {
            "regionalBlackoutCodes": "char_torr",
            "canPurchase": true,
            "isLeaguePass": true,
            "isNationalBlackout": false,
            "isTNTOT": false,
            "isVR": false,
            "tntotIsOnAir": false,
            "isNextVR": false,
            "isNBAOnTNTVR": false,
            "isMagicLeap": false,
            "isOculusVenues": false,
            "streams": [
              {
                "streamType": "vTeam",
                "isOnAir": false,
                "doesArchiveExist": false,
                "isArchiveAvailToWatch": false,
                "streamId": "",
                "duration": 0
              },
              {
                "streamType": "hTeam",
                "isOnAir": false,
                "doesArchiveExist": false,
                "isArchiveAvailToWatch": false,
                "streamId": "",
                "duration": 0
              },
              {
                "streamType": "espanol_vTeam",
                "isOnAir": false,
                "doesArchiveExist": false,
                "isArchiveAvailToWatch": false,
                "streamId": "",
                "duration": 0
              },
              {
                "streamType": "espanol_hTeam",
                "isOnAir": false,
                "doesArchiveExist": false,
                "isArchiveAvailToWatch": false,
                "streamId": "",
                "duration": 0
              },
              {
                "streamType": "espanol_natl",
                "isOnAir": false,
                "doesArchiveExist": false,
                "isArchiveAvailToWatch": false,
                "streamId": "",
                "duration": 0
              },
              {
                "streamType": "mobile",
                "isOnAir": false,
                "doesArchiveExist": false,
                "isArchiveAvailToWatch": false,
                "streamId": "",
                "duration": 0
              },
              {
                "streamType": "condensed",
                "isOnAir": false,
                "doesArchiveExist": false,
                "isArchiveAvailToWatch": false,
                "streamId": "",
                "duration": 0
              },
              {
                "streamType": "alt",
                "isOnAir": false,
                "doesArchiveExist": false,
                "isArchiveAvailToWatch": false,
                "streamId": "",
                "duration": 0
              }
            ],
            "deepLink": []
          },
          "audio": {
            "national": {
              "streams": [
                {
                  "language": "English",
                  "isOnAir": false,
                  "streamId": ""
                },
                {
                  "language": "Spanish",
                  "isOnAir": false,
                  "streamId": ""
                }
              ],
              "broadcasters": []
            },
            "vTeam": {
              "streams": [
                {
                  "language": "English",
                  "isOnAir": false,
                  "streamId": ""
                },
                {
                  "language": "Spanish",
                  "isOnAir": false,
                  "streamId": ""
                }
              ],
              "broadcasters": [
                {
                  "shortName": "TSN Radio 1050",
                  "longName": "TSN Radio 1050"
                }
              ]
            },
            "hTeam": {
              "streams": [
                {
                  "language": "English",
                  "isOnAir": false,
                  "streamId": ""
                },
                {
                  "language": "Spanish",
                  "isOnAir": false,
                  "streamId": ""
                }
              ],
              "broadcasters": [
                {
                  "shortName": "WFNZ 610 AM/102.5 FM",
                  "longName": "WFNZ 610 AM/102.5 FM"
                }
              ]
            }
          }
        }
      }
    },
    {
      "seasonStageId": 2,
      "seasonYear": "2020",
      "leagueName": "standard",
      "gameId": "0022000589",
      "arena": {
        "name": "Capital One Arena",
        "isDomestic": true,
        "city": "Washington",
        "stateAbbr": "DC",
        "country": "USA"
      },
      "isGameActivated": false,
      "statusNum": 1,
      "extendedStatusNum": 0,
      "startTimeEastern": "7:00 PM ET",
      "startTimeUTC": "2021-03-14T00:00:00.000Z",
      "startDateEastern": "20210313",
      "homeStartDate": "20210313",
      "homeStartTime": "1900",
      "visitorStartDate": "20210313",
      "visitorStartTime": "1800",
      "gameUrlCode": "20210313/MILWAS",
      "clock": "",
      "isBuzzerBeater": false,
      "isPreviewArticleAvail": true,
      "isRecapArticleAvail": false,
      "nugget": {
        "text": ""
      },
      "attendance": "",
      "tickets": {
        "mobileApp": "https://a.data.nba.com/tickets/single/2020/0022000589/APP_TIX",
        "desktopWeb": "https://a.data.nba.com/tickets/single/2020/0022000589/TEAM_SCH",
        "mobileWeb": "https://a.data.nba.com/tickets/single/2020/0022000589/WEB_MWEB",
        "leagGameInfo": "https://a.data.nba.com/tickets/single/2020/0022000589/LEAG_GAMEINFO",
        "leagTix": "https://a.data.nba.com/tickets/single/2020/0022000589/LEAG_TIX"
      },
      "hasGameBookPdf": false,
      "isStartTimeTBD": false,
      "isNeutralVenue": false,
      "gameDuration": {
        "hours": "",
        "minutes": ""
      },
      "period": {
        "current": 0,
        "type": 0,
        "maxRegular": 4,
        "isHalftime": false,
        "isEndOfPeriod": false
      },
      "vTeam": {
        "teamId": "1610612749",
        "triCode": "MIL",
        "win": "23",
        "loss": "14",
        "seriesWin": "",
        "seriesLoss": "",
        "score": "",
        "linescore": []
      },
      "hTeam": {
        "teamId": "1610612764",
        "triCode": "WAS",
        "win": "14",
        "loss": "22",
        "seriesWin": "",
        "seriesLoss": "",
        "score": "",
        "linescore": []
      },
      "watch": {
        "broadcast": {
          "broadcasters": {
            "national": [],
            "canadian": [],
            "vTeam": [
              {
                "shortName": "FSWIS",
                "longName": "Fox Sports Wisconsin"
              }
            ],
            "hTeam": [
              {
                "shortName": "NBCSWA+",
                "longName": "NBC SPORTS WASHINGTON PLUS"
              }
            ],
            "spanish_hTeam": [],
            "spanish_vTeam": [],
            "spanish_national": []
          },
          "video": {
            "regionalBlackoutCodes": "wasr_milr",
            "canPurchase": true,
            "isLeaguePass": true,
            "isNationalBlackout": false,
            "isTNTOT": false,
            "isVR": false,
            "tntotIsOnAir": false,
            "isNextVR": false,
            "isNBAOnTNTVR": false,
            "isMagicLeap": false,
            "isOculusVenues": false,
            "streams": [
              {
                "streamType": "vTeam",
                "isOnAir": false,
                "doesArchiveExist": false,
                "isArchiveAvailToWatch": false,
                "streamId": "",
                "duration": 0
              },
              {
                "streamType": "hTeam",
                "isOnAir": false,
                "doesArchiveExist": false,
                "isArchiveAvailToWatch": false,
                "streamId": "",
                "duration": 0
              },
              {
                "streamType": "espanol_vTeam",
                "isOnAir": false,
                "doesArchiveExist": false,
                "isArchiveAvailToWatch": false,
                "streamId": "",
                "duration": 0
              },
              {
                "streamType": "espanol_hTeam",
                "isOnAir": false,
                "doesArchiveExist": false,
                "isArchiveAvailToWatch": false,
                "streamId": "",
                "duration": 0
              },
              {
                "streamType": "espanol_natl",
                "isOnAir": false,
                "doesArchiveExist": false,
                "isArchiveAvailToWatch": false,
                "streamId": "",
                "duration": 0
              },
              {
                "streamType": "mobile",
                "isOnAir": false,
                "doesArchiveExist": false,
                "isArchiveAvailToWatch": false,
                "streamId": "",
                "duration": 0
              },
              {
                "streamType": "condensed",
                "isOnAir": false,
                "doesArchiveExist": false,
                "isArchiveAvailToWatch": false,
                "streamId": "",
                "duration": 0
              },
              {
                "streamType": "alt",
                "isOnAir": false,
                "doesArchiveExist": false,
                "isArchiveAvailToWatch": false,
                "streamId": "",
                "duration": 0
              }
            ],
            "deepLink": []
          },
          "audio": {
            "national": {
              "streams": [
                {
                  "language": "English",
                  "isOnAir": false,
                  "streamId": ""
                },
                {
                  "language": "Spanish",
                  "isOnAir": false,
                  "streamId": ""
                }
              ],
              "broadcasters": []
            },
            "vTeam": {
              "streams": [
                {
                  "language": "English",
                  "isOnAir": false,
                  "streamId": ""
                },
                {
                  "language": "Spanish",
                  "isOnAir": false,
                  "streamId": ""
                }
              ],
              "broadcasters": [
                {
                  "shortName": "620 AM/103.3 FM WTMJ",
                  "longName": "620 AM/103.3 FM WTMJ"
                }
              ]
            },
            "hTeam": {
              "streams": [
                {
                  "language": "English",
                  "isOnAir": false,
                  "streamId": ""
                },
                {
                  "language": "Spanish",
                  "isOnAir": false,
                  "streamId": ""
                }
              ],
              "broadcasters": [
                {
                  "shortName": "1500 AM",
                  "longName": "1500 AM"
                }
              ]
            }
          }
        }
      }
    },
    {
      "seasonStageId": 2,
      "seasonYear": "2020",
      "leagueName": "standard",
      "gameId": "0022000590",
      "arena": {
        "name": "State Farm Arena",
        "isDomestic": true,
        "city": "Atlanta",
        "stateAbbr": "GA",
        "country": "USA"
      },
      "isGameActivated": false,
      "statusNum": 1,
      "extendedStatusNum": 0,
      "startTimeEastern": "7:30 PM ET",
      "startTimeUTC": "2021-03-14T00:30:00.000Z",
      "startDateEastern": "20210313",
      "homeStartDate": "20210313",
      "homeStartTime": "1930",
      "visitorStartDate": "20210313",
      "visitorStartTime": "1630",
      "gameUrlCode": "20210313/SACATL",
      "clock": "",
      "isBuzzerBeater": false,
      "isPreviewArticleAvail": true,
      "isRecapArticleAvail": false,
      "nugget": {
        "text": ""
      },
      "attendance": "",
      "tickets": {
        "mobileApp": "https://a.data.nba.com/tickets/single/2020/0022000590/APP_TIX",
        "desktopWeb": "https://a.data.nba.com/tickets/single/2020/0022000590/TEAM_SCH",
        "mobileWeb": "https://a.data.nba.com/tickets/single/2020/0022000590/WEB_MWEB",
        "leagGameInfo": "https://a.data.nba.com/tickets/single/2020/0022000590/LEAG_GAMEINFO",
        "leagTix": "https://a.data.nba.com/tickets/single/2020/0022000590/LEAG_TIX"
      },
      "hasGameBookPdf": false,
      "isStartTimeTBD": false,
      "isNeutralVenue": false,
      "gameDuration": {
        "hours": "",
        "minutes": ""
      },
      "period": {
        "current": 0,
        "type": 0,
        "maxRegular": 4,
        "isHalftime": false,
        "isEndOfPeriod": false
      },
      "vTeam": {
        "teamId": "1610612758",
        "triCode": "SAC",
        "win": "15",
        "loss": "22",
        "seriesWin": "",
        "seriesLoss": "",
        "score": "",
        "linescore": []
      },
      "hTeam": {
        "teamId": "1610612737",
        "triCode": "ATL",
        "win": "17",
        "loss": "20",
        "seriesWin": "",
        "seriesLoss": "",
        "score": "",
        "linescore": []
      },
      "watch": {
        "broadcast": {
          "broadcasters": {
            "national": [],
            "canadian": [],
            "vTeam": [
              {
                "shortName": "NBCSCA",
                "longName": "NBC Sports California"
              }
            ],
            "hTeam": [
              {
                "shortName": "FSSE-ATL",
                "longName": "Fox Sports Southeast - Atlanta"
              }
            ],
            "spanish_hTeam": [],
            "spanish_vTeam": [],
            "spanish_national": []
          },
          "video": {
            "regionalBlackoutCodes": "atlr_sacr",
            "canPurchase": true,
            "isLeaguePass": true,
            "isNationalBlackout": false,
            "isTNTOT": false,
            "isVR": false,
            "tntotIsOnAir": false,
            "isNextVR": false,
            "isNBAOnTNTVR": false,
            "isMagicLeap": false,
            "isOculusVenues": false,
            "streams": [
              {
                "streamType": "vTeam",
                "isOnAir": false,
                "doesArchiveExist": false,
                "isArchiveAvailToWatch": false,
                "streamId": "",
                "duration": 0
              },
              {
                "streamType": "hTeam",
                "isOnAir": false,
                "doesArchiveExist": false,
                "isArchiveAvailToWatch": false,
                "streamId": "",
                "duration": 0
              },
              {
                "streamType": "espanol_vTeam",
                "isOnAir": false,
                "doesArchiveExist": false,
                "isArchiveAvailToWatch": false,
                "streamId": "",
                "duration": 0
              },
              {
                "streamType": "espanol_hTeam",
                "isOnAir": false,
                "doesArchiveExist": false,
                "isArchiveAvailToWatch": false,
                "streamId": "",
                "duration": 0
              },
              {
                "streamType": "espanol_natl",
                "isOnAir": false,
                "doesArchiveExist": false,
                "isArchiveAvailToWatch": false,
                "streamId": "",
                "duration": 0
              },
              {
                "streamType": "mobile",
                "isOnAir": false,
                "doesArchiveExist": false,
                "isArchiveAvailToWatch": false,
                "streamId": "",
                "duration": 0
              },
              {
                "streamType": "condensed",
                "isOnAir": false,
                "doesArchiveExist": false,
                "isArchiveAvailToWatch": false,
                "streamId": "",
                "duration": 0
              },
              {
                "streamType": "alt",
                "isOnAir": false,
                "doesArchiveExist": false,
                "isArchiveAvailToWatch": false,
                "streamId": "",
                "duration": 0
              }
            ],
            "deepLink": []
          },
          "audio": {
            "national": {
              "streams": [
                {
                  "language": "English",
                  "isOnAir": false,
                  "streamId": ""
                },
                {
                  "language": "Spanish",
                  "isOnAir": false,
                  "streamId": ""
                }
              ],
              "broadcasters": []
            },
            "vTeam": {
              "streams": [
                {
                  "language": "English",
                  "isOnAir": false,
                  "streamId": ""
                },
                {
                  "language": "Spanish",
                  "isOnAir": false,
                  "streamId": ""
                }
              ],
              "broadcasters": [
                {
                  "shortName": "KHTK Sports 1140 AM",
                  "longName": "KHTK Sports 1140 AM"
                }
              ]
            },
            "hTeam": {
              "streams": [
                {
                  "language": "English",
                  "isOnAir": false,
                  "streamId": ""
                },
                {
                  "language": "Spanish",
                  "isOnAir": false,
                  "streamId": ""
                }
              ],
              "broadcasters": [
                {
                  "shortName": "WZGC 92.9 FM The Game",
                  "longName": "WZGC 92.9 FM The Game"
                }
              ]
            }
          }
        }
      }
    },
    {
      "seasonStageId": 2,
      "seasonYear": "2020",
      "leagueName": "standard",
      "gameId": "0022000591",
      "arena": {
        "name": "Target Center",
        "isDomestic": true,
        "city": "Minneapolis",
        "stateAbbr": "MN",
        "country": "USA"
      },
      "isGameActivated": false,
      "statusNum": 1,
      "extendedStatusNum": 0,
      "startTimeEastern": "8:00 PM ET",
      "startTimeUTC": "2021-03-14T01:00:00.000Z",
      "startDateEastern": "20210313",
      "homeStartDate": "20210313",
      "homeStartTime": "1900",
      "visitorStartDate": "20210313",
      "visitorStartTime": "1700",
      "gameUrlCode": "20210313/PORMIN",
      "clock": "",
      "isBuzzerBeater": false,
      "isPreviewArticleAvail": true,
      "isRecapArticleAvail": false,
      "nugget": {
        "text": ""
      },
      "attendance": "",
      "tickets": {
        "mobileApp": "https://a.data.nba.com/tickets/single/2020/0022000591/APP_TIX",
        "desktopWeb": "https://a.data.nba.com/tickets/single/2020/0022000591/TEAM_SCH",
        "mobileWeb": "https://a.data.nba.com/tickets/single/2020/0022000591/WEB_MWEB",
        "leagGameInfo": "https://a.data.nba.com/tickets/single/2020/0022000591/LEAG_GAMEINFO",
        "leagTix": "https://a.data.nba.com/tickets/single/2020/0022000591/LEAG_TIX"
      },
      "hasGameBookPdf": false,
      "isStartTimeTBD": false,
      "isNeutralVenue": false,
      "gameDuration": {
        "hours": "",
        "minutes": ""
      },
      "period": {
        "current": 0,
        "type": 0,
        "maxRegular": 4,
        "isHalftime": false,
        "isEndOfPeriod": false
      },
      "vTeam": {
        "teamId": "1610612757",
        "triCode": "POR",
        "win": "21",
        "loss": "15",
        "seriesWin": "1",
        "seriesLoss": "0",
        "score": "",
        "linescore": []
      },
      "hTeam": {
        "teamId": "1610612750",
        "triCode": "MIN",
        "win": "8",
        "loss": "29",
        "seriesWin": "0",
        "seriesLoss": "1",
        "score": "",
        "linescore": []
      },
      "watch": {
        "broadcast": {
          "broadcasters": {
            "national": [],
            "canadian": [],
            "vTeam": [
              {
                "shortName": "NBCSNW",
                "longName": "NBC SPORTS NORTHWEST"
              }
            ],
            "hTeam": [
              {
                "shortName": "FSNTH",
                "longName": "Fox Sports North"
              }
            ],
            "spanish_hTeam": [],
            "spanish_vTeam": [],
            "spanish_national": []
          },
          "video": {
            "regionalBlackoutCodes": "minr_porr",
            "canPurchase": true,
            "isLeaguePass": true,
            "isNationalBlackout": false,
            "isTNTOT": false,
            "isVR": false,
            "tntotIsOnAir": false,
            "isNextVR": false,
            "isNBAOnTNTVR": false,
            "isMagicLeap": false,
            "isOculusVenues": false,
            "streams": [
              {
                "streamType": "vTeam",
                "isOnAir": false,
                "doesArchiveExist": false,
                "isArchiveAvailToWatch": false,
                "streamId": "",
                "duration": 0
              },
              {
                "streamType": "hTeam",
                "isOnAir": false,
                "doesArchiveExist": false,
                "isArchiveAvailToWatch": false,
                "streamId": "",
                "duration": 0
              },
              {
                "streamType": "espanol_vTeam",
                "isOnAir": false,
                "doesArchiveExist": false,
                "isArchiveAvailToWatch": false,
                "streamId": "",
                "duration": 0
              },
              {
                "streamType": "espanol_hTeam",
                "isOnAir": false,
                "doesArchiveExist": false,
                "isArchiveAvailToWatch": false,
                "streamId": "",
                "duration": 0
              },
              {
                "streamType": "espanol_natl",
                "isOnAir": false,
                "doesArchiveExist": false,
                "isArchiveAvailToWatch": false,
                "streamId": "",
                "duration": 0
              },
              {
                "streamType": "mobile",
                "isOnAir": false,
                "doesArchiveExist": false,
                "isArchiveAvailToWatch": false,
                "streamId": "",
                "duration": 0
              },
              {
                "streamType": "condensed",
                "isOnAir": false,
                "doesArchiveExist": false,
                "isArchiveAvailToWatch": false,
                "streamId": "",
                "duration": 0
              },
              {
                "streamType": "alt",
                "isOnAir": false,
                "doesArchiveExist": false,
                "isArchiveAvailToWatch": false,
                "streamId": "",
                "duration": 0
              }
            ],
            "deepLink": []
          },
          "audio": {
            "national": {
              "streams": [
                {
                  "language": "English",
                  "isOnAir": false,
                  "streamId": ""
                },
                {
                  "language": "Spanish",
                  "isOnAir": false,
                  "streamId": ""
                }
              ],
              "broadcasters": []
            },
            "vTeam": {
              "streams": [
                {
                  "language": "English",
                  "isOnAir": false,
                  "streamId": ""
                },
                {
                  "language": "Spanish",
                  "isOnAir": false,
                  "streamId": ""
                }
              ],
              "broadcasters": [
                {
                  "shortName": "Rip City Radio 620",
                  "longName": "Rip City Radio 620"
                }
              ]
            },
            "hTeam": {
              "streams": [
                {
                  "language": "English",
                  "isOnAir": false,
                  "streamId": ""
                },
                {
                  "language": "Spanish",
                  "isOnAir": false,
                  "streamId": ""
                }
              ],
              "broadcasters": [
                {
                  "shortName": "830 WCCO",
                  "longName": "830 WCCO"
                }
              ]
            }
          }
        }
      }
    },
    {
      "seasonStageId": 2,
      "seasonYear": "2020",
      "leagueName": "standard",
      "gameId": "0022000194",
      "arena": {
        "name": "Phoenix Suns Arena",
        "isDomestic": true,
        "city": "Phoenix",
        "stateAbbr": "AZ",
        "country": "USA"
      },
      "isGameActivated": false,
      "statusNum": 1,
      "extendedStatusNum": 0,
      "startTimeEastern": "10:00 PM ET",
      "startTimeUTC": "2021-03-14T03:00:00.000Z",
      "startDateEastern": "20210313",
      "homeStartDate": "20210313",
      "homeStartTime": "2000",
      "visitorStartDate": "20210313",
      "visitorStartTime": "2200",
      "gameUrlCode": "20210313/INDPHX",
      "clock": "",
      "isBuzzerBeater": false,
      "isPreviewArticleAvail": true,
      "isRecapArticleAvail": false,
      "nugget": {
        "text": ""
      },
      "attendance": "",
      "tickets": {
        "mobileApp": "https://a.data.nba.com/tickets/single/2020/0022000194/APP_TIX",
        "desktopWeb": "https://a.data.nba.com/tickets/single/2020/0022000194/TEAM_SCH",
        "mobileWeb": "https://a.data.nba.com/tickets/single/2020/0022000194/WEB_MWEB",
        "leagGameInfo": "https://a.data.nba.com/tickets/single/2020/0022000194/LEAG_GAMEINFO",
        "leagTix": "https://a.data.nba.com/tickets/single/2020/0022000194/LEAG_TIX"
      },
      "hasGameBookPdf": false,
      "isStartTimeTBD": false,
      "isNeutralVenue": false,
      "gameDuration": {
        "hours": "",
        "minutes": ""
      },
      "period": {
        "current": 0,
        "type": 0,
        "maxRegular": 4,
        "isHalftime": false,
        "isEndOfPeriod": false
      },
      "vTeam": {
        "teamId": "1610612754",
        "triCode": "IND",
        "win": "16",
        "loss": "20",
        "seriesWin": "0",
        "seriesLoss": "1",
        "score": "",
        "linescore": []
      },
      "hTeam": {
        "teamId": "1610612756",
        "triCode": "PHX",
        "win": "25",
        "loss": "11",
        "seriesWin": "1",
        "seriesLoss": "0",
        "score": "",
        "linescore": []
      },
      "watch": {
        "broadcast": {
          "broadcasters": {
            "national": [],
            "canadian": [
              {
                "shortName": "NBAC",
                "longName": "NBA TV Canada"
              }
            ],
            "vTeam": [
              {
                "shortName": "FSIND",
                "longName": "Fox Sports Indiana"
              }
            ],
            "hTeam": [
              {
                "shortName": "FSA",
                "longName": "Fox Sports Arizona"
              }
            ],
            "spanish_hTeam": [],
            "spanish_vTeam": [],
            "spanish_national": []
          },
          "video": {
            "regionalBlackoutCodes": "torr_phxr_indr",
            "canPurchase": true,
            "isLeaguePass": true,
            "isNationalBlackout": false,
            "isTNTOT": false,
            "isVR": false,
            "tntotIsOnAir": false,
            "isNextVR": false,
            "isNBAOnTNTVR": false,
            "isMagicLeap": false,
            "isOculusVenues": false,
            "streams": [
              {
                "streamType": "vTeam",
                "isOnAir": false,
                "doesArchiveExist": false,
                "isArchiveAvailToWatch": false,
                "streamId": "",
                "duration": 0
              },
              {
                "streamType": "hTeam",
                "isOnAir": false,
                "doesArchiveExist": false,
                "isArchiveAvailToWatch": false,
                "streamId": "",
                "duration": 0
              },
              {
                "streamType": "espanol_vTeam",
                "isOnAir": false,
                "doesArchiveExist": false,
                "isArchiveAvailToWatch": false,
                "streamId": "",
                "duration": 0
              },
              {
                "streamType": "espanol_hTeam",
                "isOnAir": false,
                "doesArchiveExist": false,
                "isArchiveAvailToWatch": false,
                "streamId": "",
                "duration": 0
              },
              {
                "streamType": "espanol_natl",
                "isOnAir": false,
                "doesArchiveExist": false,
                "isArchiveAvailToWatch": false,
                "streamId": "",
                "duration": 0
              },
              {
                "streamType": "mobile",
                "isOnAir": false,
                "doesArchiveExist": false,
                "isArchiveAvailToWatch": false,
                "streamId": "",
                "duration": 0
              },
              {
                "streamType": "condensed",
                "isOnAir": false,
                "doesArchiveExist": false,
                "isArchiveAvailToWatch": false,
                "streamId": "",
                "duration": 0
              },
              {
                "streamType": "alt",
                "isOnAir": false,
                "doesArchiveExist": false,
                "isArchiveAvailToWatch": false,
                "streamId": "",
                "duration": 0
              }
            ],
            "deepLink": []
          },
          "audio": {
            "national": {
              "streams": [
                {
                  "language": "English",
                  "isOnAir": false,
                  "streamId": ""
                },
                {
                  "language": "Spanish",
                  "isOnAir": false,
                  "streamId": ""
                }
              ],
              "broadcasters": []
            },
            "vTeam": {
              "streams": [
                {
                  "language": "English",
                  "isOnAir": false,
                  "streamId": ""
                },
                {
                  "language": "Spanish",
                  "isOnAir": false,
                  "streamId": ""
                }
              ],
              "broadcasters": [
                {
                  "shortName": "93.5/107.5 The Fan",
                  "longName": "93.5/107.5 The Fan"
                }
              ]
            },
            "hTeam": {
              "streams": [
                {
                  "language": "English",
                  "isOnAir": false,
                  "streamId": ""
                },
                {
                  "language": "Spanish",
                  "isOnAir": false,
                  "streamId": ""
                }
              ],
              "broadcasters": [
                {
                  "shortName": "KMVP 98.7 / S: KSUN",
                  "longName": "KMVP 98.7 / S: KSUN"
                }
              ]
            }
          }
        }
      }
    },
    {
      "seasonStageId": 2,
      "seasonYear": "2020",
      "leagueName": "standard",
      "gameId": "0022000592",
      "arena": {
        "name": "Ball Arena",
        "isDomestic": true,
        "city": "Denver",
        "stateAbbr": "CO",
        "country": "USA"
      },
      "isGameActivated": false,
      "statusNum": 1,
      "extendedStatusNum": 0,
      "startTimeEastern": "10:00 PM ET",
      "startTimeUTC": "2021-03-14T03:00:00.000Z",
      "startDateEastern": "20210313",
      "homeStartDate": "20210313",
      "homeStartTime": "2000",
      "visitorStartDate": "20210313",
      "visitorStartTime": "2100",
      "gameUrlCode": "20210313/DALDEN",
      "clock": "",
      "isBuzzerBeater": false,
      "isPreviewArticleAvail": true,
      "isRecapArticleAvail": false,
      "nugget": {
        "text": ""
      },
      "attendance": "",
      "tickets": {
        "mobileApp": "https://a.data.nba.com/tickets/single/2020/0022000592/APP_TIX",
        "desktopWeb": "https://a.data.nba.com/tickets/single/2020/0022000592/TEAM_SCH",
        "mobileWeb": "https://a.data.nba.com/tickets/single/2020/0022000592/WEB_MWEB",
        "leagGameInfo": "https://a.data.nba.com/tickets/single/2020/0022000592/LEAG_GAMEINFO",
        "leagTix": "https://a.data.nba.com/tickets/single/2020/0022000592/LEAG_TIX"
      },
      "hasGameBookPdf": false,
      "isStartTimeTBD": false,
      "isNeutralVenue": false,
      "gameDuration": {
        "hours": "",
        "minutes": ""
      },
      "period": {
        "current": 0,
        "type": 0,
        "maxRegular": 4,
        "isHalftime": false,
        "isEndOfPeriod": false
      },
      "vTeam": {
        "teamId": "1610612742",
        "triCode": "DAL",
        "win": "19",
        "loss": "17",
        "seriesWin": "1",
        "seriesLoss": "1",
        "score": "",
        "linescore": []
      },
      "hTeam": {
        "teamId": "1610612743",
        "triCode": "DEN",
        "win": "22",
        "loss": "15",
        "seriesWin": "1",
        "seriesLoss": "1",
        "score": "",
        "linescore": []
      },
      "watch": {
        "broadcast": {
          "broadcasters": {
            "national": [
              {
                "shortName": "NBA TV",
                "longName": "NBA TV"
              }
            ],
            "canadian": [
              {
                "shortName": "SN",
                "longName": "Sportsnet"
              }
            ],
            "vTeam": [
              {
                "shortName": "FSSW-DAL",
                "longName": "Fox Sports Southwest - Dallas"
              }
            ],
            "hTeam": [
              {
                "shortName": "ALT",
                "longName": "Altitude"
              }
            ],
            "spanish_hTeam": [],
            "spanish_vTeam": [],
            "spanish_national": []
          },
          "video": {
            "regionalBlackoutCodes": "torr_denr_dalr",
            "canPurchase": false,
            "isLeaguePass": true,
            "isNationalBlackout": true,
            "isTNTOT": false,
            "isVR": false,
            "tntotIsOnAir": false,
            "isNextVR": false,
            "isNBAOnTNTVR": false,
            "isMagicLeap": false,
            "isOculusVenues": false,
            "streams": [
              {
                "streamType": "vTeam",
                "isOnAir": false,
                "doesArchiveExist": false,
                "isArchiveAvailToWatch": false,
                "streamId": "",
                "duration": 0
              },
              {
                "streamType": "hTeam",
                "isOnAir": false,
                "doesArchiveExist": false,
                "isArchiveAvailToWatch": false,
                "streamId": "",
                "duration": 0
              },
              {
                "streamType": "espanol_vTeam",
                "isOnAir": false,
                "doesArchiveExist": false,
                "isArchiveAvailToWatch": false,
                "streamId": "",
                "duration": 0
              },
              {
                "streamType": "espanol_hTeam",
                "isOnAir": false,
                "doesArchiveExist": false,
                "isArchiveAvailToWatch": false,
                "streamId": "",
                "duration": 0
              },
              {
                "streamType": "espanol_natl",
                "isOnAir": false,
                "doesArchiveExist": false,
                "isArchiveAvailToWatch": false,
                "streamId": "",
                "duration": 0
              },
              {
                "streamType": "mobile",
                "isOnAir": false,
                "doesArchiveExist": false,
                "isArchiveAvailToWatch": false,
                "streamId": "",
                "duration": 0
              },
              {
                "streamType": "condensed",
                "isOnAir": false,
                "doesArchiveExist": false,
                "isArchiveAvailToWatch": false,
                "streamId": "",
                "duration": 0
              },
              {
                "streamType": "alt",
                "isOnAir": false,
                "doesArchiveExist": false,
                "isArchiveAvailToWatch": false,
                "streamId": "",
                "duration": 0
              }
            ],
            "deepLink": []
          },
          "audio": {
            "national": {
              "streams": [
                {
                  "language": "English",
                  "isOnAir": false,
                  "streamId": ""
                },
                {
                  "language": "Spanish",
                  "isOnAir": false,
                  "streamId": ""
                }
              ],
              "broadcasters": []
            },
            "vTeam": {
              "streams": [
                {
                  "language": "English",
                  "isOnAir": false,
                  "streamId": ""
                },
                {
                  "language": "Spanish",
                  "isOnAir": false,
                  "streamId": ""
                }
              ],
              "broadcasters": [
                {
                  "shortName": "ESPN 103.3 FM / 1270 AM (ESP)",
                  "longName": "ESPN 103.3 FM / 1270 AM (ESP)"
                }
              ]
            },
            "hTeam": {
              "streams": [
                {
                  "language": "English",
                  "isOnAir": false,
                  "streamId": ""
                },
                {
                  "language": "Spanish",
                  "isOnAir": false,
                  "streamId": ""
                }
              ],
              "broadcasters": [
                {
                  "shortName": "KKSE 92.5FM",
                  "longName": "KKSE 92.5FM"
                }
              ]
            }
          }
        }
      }
    }
  ]
}
 */