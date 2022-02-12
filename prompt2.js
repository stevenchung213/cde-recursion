// copy/paste the code below into a Chrome Snippet and experiment there!
// Prompt #2 (The actual code that we left on)

debugger;

var bot = {
  name: 'karvis',
  canFly: true,
  canCook: true,
  canSpeak: true,
  yearsInspected: [2008, 2010, 2013],
  fueledBy: 'money',
  bestFriend: 'jcn',
  friends: [
    {
      name: 'jcn',
      canFly: true,
      canCook: true,
      canSpeak: false,
      yearsInspected: [1968, 2001],
      fueledBy: 'cosmic energy',
      bestFriend: 'r2d3',
      friends: [
        {
          name: 'r2d3',
          canFly: true,
          canCook: true,
          canSpeak: false,
          yearsInspected: [1977, 1980, 1983, 1999, 2002, 2005],
          fueledBy: 'beep-boop',
          bestFriend: 'c4p0',
          friends: [
            {
              name: 'c4p0',
              canFly: true,
              canCook: true,
              canSpeak: false,
              yearsInspected: [1977, 1980, 1983, 1999, 2002, 2005],
              fueledBy: 'curiosity',
              bestFriend: 'undecided',
              friends: [
                {
                  name: 'z09',
                  canFly: false,
                  canCook: true,
                  canSpeak: false,
                  yearsInspected: [1998, 2005, 2018],
                  fueledBy: "jealousy",
                  bestFriend: 'r04',
                  friends: null
                },
                {
                  name: 'r2d3',
                  canFly: true,
                  canCook: true,
                  canSpeak: false,
                  yearsInspected: [1977, 1980, 1983, 1999, 2002, 2005],
                  fueledBy: 'beep-boop',
                  bestFriend: 'c4p0',
                  friends: null
                }
              ]
            },
            {
              name: 'x13',
              canFly: true,
              canCook: false,
              canSpeak: true,
              yearsInspected: [2002, 2005, 2010],
              fueledBy: "cookies",
              bestFriend: 'z09',
              friends: []
            },
            {
              name: 'karvis',
              canFly: true,
              canCook: true,
              canSpeak: true,
              yearsInspected: [2008, 2010, 2013],
              fueledBy: 'money',
              bestFriend: 'jcn',
              friends: null
            }
          ]
        },
        {
          name: 'c4p0',
          canFly: true,
          canCook: true,
          canSpeak: false,
          yearsInspected: [1977, 1980, 1983, 1999, 2002, 2005],
          fueledBy: 'curiosity',
          bestFriend: 'undecided',
          friends: null
        },
      ]
    },
    {
      name: 'z09',
      canFly: false,
      canCook: true,
      canSpeak: false,
      yearsInspected: [1998, 2005, 2018],
      fueledBy: "jealousy",
      bestFriend: 'r04',
      friends: [
        {
          name: 'x13',
          canFly: true,
          canCook: false,
          canSpeak: true,
          yearsInspected: [2002, 2005, 2010],
          fueledBy: "cookies",
          bestFriend: 'z09',
          friends: [
            {
              name: 'jcn',
              canFly: true,
              canCook: true,
              canSpeak: false,
              yearsInspected: [1968, 2001],
              fueledBy: 'cosmic energy',
              bestFriend: 'r2d3',
              friends: null
            }
          ]
        },
        {
          name: 'c4p0',
          canFly: true,
          canCook: true,
          canSpeak: false,
          yearsInspected: [1977, 1980, 1983, 1999, 2002, 2005],
          fueledBy: 'curiosity',
          bestFriend: 'undecided',
          friends: null
        },
      ]
    }
  ]
};


var findABot = function (bot, targetVal) {
  var result = [];
  // what is our current input
  // console.log(bot);
  // case 1, do something with our current input
  if (bot.fueledBy === targetVal) {
    // let's make a NEW object that represents the data that we want
    var botCopyObj = {};
    botCopyObj = Object.assign(botCopyObj, bot);
    delete botCopyObj.friends;
    result.push(botCopyObj);
  }
  // case 2, do something else w/ current input


  // nested case
  // check if the friends property of current input is an array
  if (bot.friends !== null) {
    // just loop over that current input [ friends property ]
    bot.friends.forEach(function (currBot) {
      // recursive call on those values
      result = result.concat(findABot(currBot, targetVal));
    })
  }

  return result;
};

findABot(bot, 'cosmic energy'); //


// recursive pattern for NESTED data

// what do you want to do for the current input
// case 1
// case 2
// case ....

// detect nestedness!
// iterate over that nested structure
// recursively call our function on each value inside that array (or childNode)?

// forcefully send all values as a current input somewhere in the callstack
