function gameObject(){
      let obj = {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["black", "white"],
            players: {
              "Alan Anderson": {
                number: 0,
                shoe: 16,
                points: 22,
                rebounds: 12,
                assists: 12,
                steals: 3,
                blocks: 1,
                slamDunks: 1,
              },
              "Reggie Evans": {
                number: 30,
                shoe: 14,
                points: 12,
                rebounds: 12,
                assists: 12,
                steals: 12,
                blocks: 12,
                slamDunks: 7,
              },
              "Brook Lopez": {
                number: 11,
                shoe: 21,
                points: 17,
                rebounds: 19,
                assists: 10,
                steals: 3,
                blocks: 1,
                slamDunks: 15,
              },
              "Mason Plumlee": {
                number: 1,
                shoe: 19,
                points: 26,
                rebounds: 12,
                assists: 6,
                steals: 3,
                blocks: 8,
                slamDunks: 5,
              },
              "Jason Terry": {
                number: 31,
                shoe: 15,
                points: 19,
                rebounds: 2,
                assists: 2,
                steals: 4,
                blocks: 11,
                slamDunks: 1,
              },
            },
          },

          away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
              "Jeff Adrien": {
                number: 4,
                shoe: 18,
                points: 10,
                rebounds: 1,
                assists: 1,
                steals: 2,
                blocks: 7,
                slamDunks: 2,
              },
              "Bismak Biyombo": {
                number: 0,
                shoe: 16,
                points: 12,
                rebounds: 4,
                assists: 7,
                steals: 7,
                blocks: 15,
                slamDunks: 10,
              },
              "DeSagna Diop": {
                number: 2,
                shoe: 21,
                points: 24,
                rebounds: 12,
                assists: 12,
                steals: 4,
                blocks: 5,
                slamDunks: 5,
              },
              "Ben Gordon": {
                number: 8,
                shoe: 15,
                points: 33,
                rebounds: 3,
                assists: 2,
                steals: 1,
                blocks: 1,
                slamDunks: 0,
              },
              "Brendan Haywood": {
                number: 33,
                shoe: 15,
                points: 6,
                rebounds: 12,
                assists: 12,
                steals: 22,
                blocks: 5,
                slamDunks: 12,
              },
            },
          },
        };
        // console.log(obj)
        return obj
      }

     // console.log(gameObject())


      function numPointsScored(name){
        // a reference to our object 
        let object = gameObject()
        // conditionals to check if player falls in the home or away team 
        if(object.home.players[name]){
            return object.home.players[name].points
        } else if(object.away.players[name]){
            return object.away.players[name].points
        } else {
            return 'No player with that name found'
        }

      }

      console.log("Points"  , numPointsScored("Brendan Haywood"))

      function shoeSize(name){
        // a reference to our object 
        let object = gameObject()
        // conditionals to check if player falls in the home or away team 
        if(object.home.players[name]){
            return object.home.players[name].shoe
        } else if(object.away.players[name]){
            return object.away.players[name].shoe
        } else {
            return 'No player with that name found'
        }

      }

      console.log("Shoe Size" ,shoeSize("Brendan Haywood"))


    function teamColors(teamname){
      let object = gameObject()
      if(object.home.teamName === teamname){
         return object.home.colors
      } else if(object.away.teamName === teamname){
         return object.away.colors
      } else {
         return 'team not found in object'
      }
    }

    // === : strick equality operator 
    // == : loose equality operator 
    console.log("Teams Jersey color ",teamColors("Charlotte Hornets"))

    function teamNames(){
      let object = gameObject()
      let teams = [object.home.teamName,object.away.teamName]
      return teams
    }

    console.log("team names " , teamNames())

    // 1. variable to reference the object 
    // 2. conditional to check if the team name passed belongs to the home or away key
    // 3. access the players object 
    // 4. iterate over all object elements : iterating over each player : 
    // capture the jersey number for each player
    // 5. package each players jersey number into an array 
    // 6. return my array. 

    function playerNumbers(teamname){
       let object = gameObject()
       let jerseyNumbers = []
       let playersobject;
       if(object.home.teamName === teamname){
          playersobject = object.home.players
          for(let player in playersobject){
            console.log(player)
            jerseyNumbers.push(object.home.players[player].number)
          }

       } else if(object.away.teamName === teamname) {
          playersobject = object.away.players
          for(let player in playersobject){
            console.log(player)
            jerseyNumbers.push(object.away.players[player].number)
          }
       } else {
         return 'team not found'
       }

       return jerseyNumbers
    }

    console.log(playerNumbers("Brooklyn Nets"))

    function bigshoeRebounds(){
      let object = gameObject()
      // variable that will be used to update the largest shoesize as we iterate over player objects in the object 
      // variable to store info for the player with the largest shoe size 
      // variable to store the player name 
      // find the player association according to home or away key info 
      // iterate over the players object 
      // am checking on the shoesize on iteration and comparing it to the current largest shoe size 

      // this keeps track of the largest size as we iterate over the players
      let shoeSize = 0
      // a variable to store the info about the player with the largest size 
      let playerWithLargestShoeSize = {}
      // a variable to store the player name 
      let playername = '';

      for(let player in object.home.players){
        if(object.home.players[player].shoe > shoeSize ){
          shoeSize = object.home.players[player].shoe
          playerWithLargestShoeSize = object.home.players[player]
          playername = player
        }
      }

      for(let player in object.away.players){
        if(object.away.players[player].shoe > shoeSize ){
          shoeSize = object.away.players[player].shoe
          playerWithLargestShoeSize = object.away.players[player]
          playername = player
        }
      }

      return {
          [playername] : playerWithLargestShoeSize
      };
    }

    console.log(bigshoeRebounds())

    function bigCollectionshoeRebounds(){
      let object = gameObject()
      // variable that will be used to update the largest shoesize as we iterate over player objects in the object 
      // variable to store info for the player with the largest shoe size 
      // variable to store the player name 
      // find the player association according to home or away key info 
      // iterate over the players object 
      // am checking on the shoesize on iteration and comparing it to the current largest shoe size 

      // this keeps track of the largest size as we iterate over the players
      let shoeSize = 0
      // a variable to store the info about the player with the largest size 
      let playerWithLargestShoeSize = []
      // a variable to store the player name 
      let playername = '';

      for(let player in object.home.players){
        if(object.home.players[player].shoe > shoeSize ){
          shoeSize = object.home.players[player].shoe
          playerWithLargestShoeSize = [{[player]: object.home.players[player]}]
          playername = player
        } else if(object.home.players[player].shoe === shoeSize){
          playerWithLargestShoeSize.push({[player]: object.home.players[player]})
        }
      }

      for(let player in object.away.players){
        if(object.away.players[player].shoe > shoeSize ){
          shoeSize = object.away.players[player].shoe
          playerWithLargestShoeSize = [{[player]: object.away.players[player]}]
          playername = player
        } else if(object.away.players[player].shoe === shoeSize){
          playerWithLargestShoeSize.push({[player]: object.away.players[player]})
        }
      }

      return playerWithLargestShoeSize
    }

    console.log(bigCollectionshoeRebounds())
