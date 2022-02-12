// copy/paste the code below into a Chrome Snippet and experiment there!
// Prompt #1 (I don't have the actual code Peter wrote, but here is the data structure that we used)

var bot1 = {
  name: 'karvis',
  canFly: true,
  canCook: true,
  canSpeak: true,
  yearsInspected: [2008, 2010, 2013],
  fueledBy: 'money',
  bestFriend: {
    name: 'jcn',
    canFly: true,
    canCook: true,
    canSpeak: false,
    yearsInspected: [1968, 2001],
    fueledBy: 'cosmic energy',
    bestFriend: {
      name: 'r2d3',
      canFly: true,
      canCook: true,
      canSpeak: false,
      yearsInspected: [1977, 1980, 1983, 1999, 2002, 2005],
      fueledBy: 'beep-boop',
      bestFriend: {
        name: 'c4p0',
        canFly: true,
        canCook: true,
        canSpeak: false,
        yearsInspected: [1977, 1980, 1983, 1999, 2002, 2005],
        fueledBy: 'curiosity',
        bestFriend: 'undecided'
      },
    },
  }
};


var visitAllFriends = function (bot) {

};


console.log(visitAllFriends(bot1));
