const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

let state = {}

function startGame() {
  state = {}
  showTextNode(1)
}

function showTextNode(textNodeIndex) {
  const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
  textElement.innerText = textNode.text
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild)
  }

  textNode.options.forEach(option => {
    if (showOption(option)) {
      const button = document.createElement('button')
      button.innerText = option.text
      button.classList.add('btn')
      button.addEventListener('click', () => selectOption(option))
      optionButtonsElement.appendChild(button)
    }
  })
}

function showOption(option) {
  return option.requiredState == null || option.requiredState(state)
}

function selectOption(option) {
  const nextTextNodeId = option.nextText
  if (nextTextNodeId <= 0) 
  {
    window.open("https://puzzel.org/en/jigsaw/play?p=-M8W0IZsoPD2a2INzYO-", "_blank");
  }
  state = Object.assign(state, option.setState)
  showTextNode(nextTextNodeId)
}

const textNodes = [
  {
    id: 1,
    text: "",
    options: [
      {
        text: 'BackStory',
        nextText: 2
      },
      {
        text: 'Your Mission',
        nextText: 3
      },
      {
        text: 'Objectives',
        nextText: 4
      },
      {
        text: 'FAQ',
        nextText: 5
      },
      {
        text: 'Start Game',
        nextText: 6
      },
    ]
  },
  {
    id: 2,
    text: "It is now 2025 and the world is in shambles. The COVID-19 virus has mutated into what we feared the most... That's right, I'm talking ZOMBIE APOCOLYPSE. Brain eating, never sleeping, always hungry, zombies. \n\nLuckily, the 8 of us were on a winter vacation in Colarado at a remote cabin when the virus breakout occured. We managed to hold out for a few months with the supplies we had, but we are now running low on food and water. The only weapons we have to defend ourselves with are Rob's machete, Sadow's compound bow with 1 arrow, and MacVittie's lucious blonde hair.\n\n In order to survive - We must push forward to the nearest town and collect supplies, but zombies aren't the only thing to fear. The United States Government collapsed after brushing the CoronaVirus off as a mild flu. As a result, teams of ravegers (see what I did there?) are slowly taking over the country, pillaging their way city by city. \n\nIt is a dangerous world out there, but at least we have each other.",
    options: [
      {
        text: 'BackStory',
        nextText: 2
      },
      {
        text: 'Your Mission',
        nextText: 3
      },
      {
        text: 'Objectives',
        nextText: 4
      },
      {
        text: 'FAQ',
        nextText: 5
      },
      {
        text: 'Start Game',
        nextText: 6
      },
    ]
  },
  {
    id: 3,
    text: "Survive. \n\nOnce we collect our much needed supplies, we will have a choice to make.\n In fact, our group will face many dillemas along this dangerous journey. \n\nSome decisions will be wise, others may end badly.\n Either way, I wouldn't want to be in this situation with any other team of friends.",
    options: [
      {
        text: 'BackStory',
        nextText: 2
      },
      {
        text: 'Your Mission',
        nextText: 3
      },
      {
        text: 'Objectives',
        nextText: 4
      },
      {
        text: 'FAQ',
        nextText: 5
      },
      {
        text: 'Start Game',
        nextText: 6
      },
    ]
  },
  {
    id: 4,
    text: "Supplies Required: \n\nFood and Drink - Anything that will provide sustenance \nNOTE: Matt and Amanda will require vegan food\n\n Weapons - Any item that can be used to defend yourself \n (lucious hair does not count, unfortunately)\n\n Medical Supplies - Jen cut her leg badely in a bicycle accident during our trip and needs antibiotics",
    options: [
      {
        text: 'BackStory',
        nextText: 2
      },
      {
        text: 'Your Mission',
        nextText: 3
      },
      {
        text: 'Objectives',
        nextText: 4
      },
      {
        text: 'FAQ',
        nextText: 5
      },
      {
        text: 'Start Game',
        nextText: 6
      },
    ]
  },
  {
    id: 5,
    text: "Where Do We Start? \nThis is a guided game. You decide your fate and produce answers and the game will guide you throughout your journey\n\n Where is everyone else we know?\n Assume everyone you know and love are safe and sound in Canada. \n Everyone moved out of the country after the US declared COVID-19 as the common cold.\n Canada locked their border and prevented the spread of the virus (for now).\n\n What about money? \n Money is irrelavent and worthless\n\n Can we start over if we make a grave decision after the game begins?\n You may not choose to restart the game. Decide your path wisely.",
    options: [
      {
        text: 'BackStory',
        nextText: 2
      },
      {
        text: 'Your Mission',
        nextText: 3
      },
      {
        text: 'Objectives',
        nextText: 4
      },
      {
        text: 'FAQ',
        nextText: 5
      },
      {
        text: 'Start Game',
        nextText: 6
      },
    ]
  },
  {
    id: 6,
    text: 'You are all at the Cabin.\n\nThe days keep getting longer and all of us are beginning to lose it. We lost power and our water has been contaminated from the floodwater getting into our private well. \n\nRob just ate our last pepperoni. Things are not looking good. \n\nWe are currently debating on traveling to the nearest town to collect supplies. It will be a long road ahead, but we will not last more than another week without food and water.\n\n Everyone has decided that if we go, we all go. \n\n What should we do?',
    options: [
      {
        text: 'Go to Town',
        nextText: 8
      },
      {
        text: 'Stay at the Cabin',
        nextText: 7
      }
    ]
  },
  {
    id: 7,
    text: "A few days pass and we can't take it any longer. Rob is looking at everyone like their chicken nuggets. \n\nThe vote was unanimous - Bri was the weakest in the group. She didn't taste that great and there wasn't much meat, but we lasted a few more days. \n\nIn the end, we perished.",
    options: [
      {
        text: 'Restart Game',
        nextText: 6
      }
    ]
  },
  {
    id: 8,
    text: "Our journey didn't last too long until trouble came upon us. Maybe 5 fricken minutes in - You can still see the cabin in sight... A vicious, disgusting, fat zombie came up behind the group. \n\n Matt was in the back of the group and noticed the zombie first, but just watched it go right for Stu (Thanks Matt). \n\n The glutten zombie went straight for his neck and took a huge chunk out of him. \n\n As soon as the group realized what was happening, it was too late. After it got Stu, Rob chopped that fat fuck into a million peices with his machette and no one else got hurt. \n\nLooks like you'll have to do this without Stu.",
    options: [
      {
        text: 'Continue the journey',
        nextText: 9
      }
    ]
  },
  {
    id: 9,
    text: "A few hours later, you discover another cabin in the woods. It looks deserted and there may be supplies inside. \n\n Rob notices the side window was broken into.",
    options: [
      {
        text: 'Look for supplies',
        setState: { Suppliescollected: true, NoGun: false },
        nextText: 11
      },
      {
        text: 'Move on',
        setState: { NoGun: true, Gun: false, Suppliescollected: false },
        nextText: 10
      }
    ]
  },  
  {
    id: 10,
    text: "Jen's skin is becoming cold and pale - Sadow mentions there is a hospital in town that may have antibiotics for her",
    options: [
      {
        text: 'Continue the journey',
        nextText: 13
      }
    ]
  },
  {
    id: 11,
    text: "The boys scouted the cabin out and declared it was clear to search. Whoever, or whatever had moved on from the cabin. \n\n Unfortunately, the fridge is locked. Solve this riddle to unlock the door:\n\n  Before this vacation became very scary, there is one item we usually carry. Not all of us had one, it was such a bother. What could it be? I implore you to ponder.",
    options: [
      {
        text: 'Unlocked door',
        nextText: 12
      },
      {
        text: 'Failed to unlock door. Move on',
        nextText: 10
      },
    ]
  },
  {
    id: 12,
    text: "You discover antibiotics in the fridge! Jen takes them and feels better already.\n\n You also find enough food for everyone, but none of it is vegan... Looks like Matt and Amanda will stay hungry for now.\n\n Katie also sees a strange picture - Could be a clue?",
    options: [
      {
        text: 'Continue the journey',
        nextText: 13
      }
    ]
  },
  {
    id: 13,
    text: "As you continue your travels, Amanda spots a bear in the distance! What do you do?",
    options: [
      {
        text: 'Kill with bow for food',
        requiredState: (currentState) => currentState.Suppliescollected,
        setState: { NoBow: true, Bow: false, Suppliescollected: false },
        nextText: 14
      },
      {
        text: 'Kill with bow for food',
        requiredState: (currentState) => currentState.NoBow,
        setState: { NoBow: true, Bow: false, Suppliescollected: false },
        nextText: 14
      },
      {
        text: 'Kill with Compound Bow for food',
        requiredState: (currentState) => currentState.NoGun,
        setState: { NoBow: false, Bow: false, NoGun: false, Gun: false, NoBoworGun: true, GunandBow: false },
        nextText: 14
      },
      {
        text: 'Evade the bear and move on',
        setState: { Bow: true, NoBow: false, NoBoworGun: false },
        nextText: 15
      }
    ]
  },
  {
    id: 14,
    text: "Sadow lines up his first shot and hits the bear in the shoulder. That pissed it off.\n\n It is now charging at the group. \n\n Everyone begins to run, but Bri froze in terror (typical). The bear takes a nice chunk out of Bri's arm. \n\n Rob comes back to save Bri and stabs the bear in the neck with his machete, effectively killing the beast.\n\n Good news: You all have food now (except Matt and Amanda). \n Bad news: Bri is alive, but bleeding pretty bad. \n\n We patch her up the best we can, but we need to get to the hospital in town asap.",
    options: [
      {
        text: 'Continue the journey',
        nextText: 16
      },

    ]
  },
  {
    id: 15,
    text: "You sneak past the bear unnoticed.",
    options: [
      {
        text: 'Continue the journey',
        nextText: 16
      },
    ]
  },
  {
    id: 16,
    text: "The day goes by and it is getting dark. \n\n As you are walking by a tree in the forest, Katie discovers a note tagged to a tree... \n\nAs you all are looking at the note, Sadow hears a branch snap in the woods not too far off! You are all trying to read the note, but in a panic you rip it...\n\n Was that noise in the distance Ravegers or the undead? Who cares! Hurry! put the note back together!",
    options: [
      {
        text: 'Open to view ripped note',
        nextText: -1
      },
      {
        text: 'You succesfully put the note back together',
        nextText: 19
      },
      {
        text: 'You fail to put the note back together',
        requiredState: (currentState) => currentState.Bow,
        setState: { NoGun: true, Gun: false},
        nextText: 23
      },
      {
        text: 'You fail to put the note back together',
        requiredState: (currentState) => currentState.NoBow,
        setState: { NoBow: false, Bow: false, Gun: false, NoGun: false, NoBoworGun: true},
        nextText: 23
      },
      {
        text: 'You fail to put the note back together',
        requiredState: (currentState) => currentState.NoBoworGun,
        setState: { NoBow: false, Bow: false, Gun: false, NoGun: false, NoBoworGun: true},
        nextText: 23
      },
    ]
  },
  {
    id: 17,
    text: "You find antibiotics for Jen and Blood for Bri! They both feel better right away.",
    options: [
      {
        text: 'Continue the journey',
        nextText: 29
      },
    ]
  },
  {
    id: 19,
    text: "You piece the note back together before whatever was following you got closer. You notice that on the back of the note, there is more writing. You head off to hide to take a closer look at the back of the note. What does it mean?\n\n 1010100 1101111 100000 1100001 1101110 1111001 1101111 1101110 1100101 100000 1110100 1101000 1100001 1110100 100000 1100110 1101001 1101110 1100100 1110011 100000 1110100 1101000 1101001 1110011 100000 1101110 1101111 1110100 1100101 111010 100000 1010 1001001 100000 1100001 1101101 100000 1100011 1110101 1110010 1110010 1100101 1101110 1110100 1101100 1111001 100000 1100010 1100101 1101001 1101110 1100111 100000 1101000 1110101 1101110 1110100 1100101 1100100 100000 1100010 1111001 100000 1100001 100000 1100010 1110010 1110101 1110100 1100001 1101100 100000 1100111 1110010 1101111 1110101 1110000 100000 1101111 1100110 100000 1110010 1100001 1110110 1100101 1100111 1100101 1110010 1110011 101110 100000 1001001 100000 1100100 1101111 1101110 100111 1110100 100000 1110100 1101000 1101001 1101110 1101011 100000 1001001 100111 1101100 1101100 100000 1101101 1100001 1101011 1100101 100000 1101001 1110100 100000 1110100 1101111 100000 1110100 1101000 1100101 100000 1101101 1110101 1110011 1100101 1110101 1101101 100000 1101001 1101110 100000 1110100 1101001 1101101 1100101 101110 100000 1010100 1101000 1100101 1110010 1100101 100000 1101001 1110011 100000 1110011 1101111 1101101 1100101 1110100 1101000 1101001 1101110 1100111 100000 1110100 1101000 1100001 1110100 100000 1001001 100000 1101100 1100101 1100110 1110100 100000 1110100 1101000 1100101 1110010 1100101 101100 100000 1101001 1101110 1110011 1101001 1100100 1100101 100000 1100001 1101110 100000 1101001 1101110 1100110 1101111 1110010 1101101 1100001 1110100 1101001 1101111 1101110 100000 1100010 1101111 1111000 101100 100000 1101110 1100101 1111000 1110100 100000 1110100 1101111 100000 1110100 1101000 1100101 100000 1100110 1101111 1111000 100000 1100101 1111000 1101000 1101001 1100010 1101001 1110100 100000 1101100 1100001 1100010 1100101 1101100 1100101 1100100 100000 1000101 110011 101110 100000 1001001 1110100 100000 1101101 1100001 1111001 100000 1100010 1100101 100000 1101111 1100110 100000 1110101 1110011 1100101 100000 1110100 1101111 100000 1100001 1101110 1111001 1101111 1101110 1100101 100000 1110100 1101000 1100001 1110100 100000 1100110 1101001 1101110 1100100 1110011 100000 1101001 1110100 101110 1010 1010 1111001 1100101 1101100 1101100 1101111 1110111 100000 101101 100000 1100111 1101000 1101111 1110011 1110100 100000 101101 100000 1000100 1101001 1110011 1100011 1101111 1110110 1100101 1110010 100000 101101 100000 1001000 1101111 1110010 1101110 1101001 1101101 1100001 1101110 1010 1010 101101 100000 1001101 1100001 1110010 1101011 100000 1001101 101110",
    options: [
      {
        text: 'Translated Note',
        nextText: 20
      },
      {
        text: 'You fail to put the note back together',
        requiredState: (currentState) => currentState.Bow,
        setState: { NoGun: true, Gun: false},
        nextText: 23
      },
      {
        text: 'You fail to put the note back together',
        requiredState: (currentState) => currentState.NoBow,
        setState: { NoBow: false, Bow: false, Gun: false, NoGun: false, NoBoworGun: true},
        nextText: 23
      },
      {
        text: 'You fail to put the note back together',
        requiredState: (currentState) => currentState.NoBoworGun,
        setState: { NoBow: false, Bow: false, Gun: false, NoGun: false, NoBoworGun: true},
        nextText: 23
      },
    ]
  },
  {
    id: 20,
    text: "You entered the hidden portal to the Horniman Museum and found the box labeled E3. Everyone feels a little woozy.\n\n Sadow searches the box and finds a map to a warehouse that is just outside of town. There is a red X marked within the warehouse. \n\n There was also a picture in the box... ",
    options: [
      {
        text: 'Head to the warehouse',
        requiredState: (currentState) => currentState.NoBow,
        nextText: 21
      },
      {
        text: 'Head to the warehouse',
        requiredState: (currentState) => currentState.NoBoworGun,
        nextText: 21
      },
      {
        text: 'Head to the warehouse',
        requiredState: (currentState) => currentState.Bow,
        nextText: 22
      },
      {
        text: "Bri isn't looking too good. She has lost a lot of blood. Maybe you should move on to the hospital.",
        requiredState: (currentState) => currentState.NoBow,
        setState: { NoBow: false, Bow: false, Gun: false, NoGun: false, NoBoworGun: true},
        nextText: 25
      },
      {
        text: "Bri isn't looking too good. She has lost a lot of blood. Maybe you should move on to the hospital.",
        requiredState: (currentState) => currentState.NoBoworGun,
        setState: { NoBow: false, Bow: false, Gun: false, NoGun: false, NoBoworGun: true},
        nextText: 25
      },
    ]
  },
  {
    id: 21,
    text: "Bri collapses. She starts to cry and just wants hugs. You all hug her and say your goodbyes. \n\nSorry Bri, you are dead.",
    options: [
      {
        text: 'Continue searching warehouse',
        setState: { BriDead: true},
        nextText: 22
      },
    ]
  },
  {
    id: 22,
    text: "While searching the warehouse, Katie spots a safe where the X is located on the map! \n\n The safe is locked, but there is a keypad to unlock it. \n\n Suddenly, zombies begin to emerge from places in the warehouse. Hurry! What is the code to open the safe?n\n\n (You have 30 seconds before you are attacked by zombies)\n\n _ _ _ _ ",
    options: [
      {
        text: 'Solved the code',
        requiredState: (currentState) => currentState.Bow,
        setState: { Gun: false, NoGun: false, Bow: false, NoBow: false, NoBoworGun: false, GunandBow: true},
        nextText: 24
      },
      {
        text: 'Solved the code',
        requiredState: (currentState) => currentState.NoBow,
        setState: { Gun: true, NoGun: false, Bow: false, NoBow: true, NoBoworGun: false, GunandBow: false},
        nextText: 24
      },
      {
        text: 'Solved the code',
        requiredState: (currentState) => currentState.NoBoworGun,
        setState: { Gun: true, NoGun: false, Bow: false, NoBow: true, NoBoworGun: false, GunandBow: false},
        nextText: 24
      },
      {
        text: "Couldn't figure out the code. Run from zombies and go to town",
        requiredState: (currentState) => currentState.Bow,
        setState: { Gun: false, NoGun: true, Bow: true, NoBow: false, NoBoworGun: false, GunandBow: false},
        nextText: 23
      },
      {
        text: "Couldn't figure out the code. Run from zombies and go to town",
        requiredState: (currentState) => currentState.NoBow,
        setState: { Gun: false, NoGun: false, Bow: false, NoBow: false, NoBoworGun: true, GunandBow: false},
        nextText: 23
      },
      {
        text: "Couldn't figure out the code. Run from zombies and go to town",
        requiredState: (currentState) => currentState.NoBoworGun,
        setState: { Gun: false, NoGun: false, Bow: false, NoBow: false, NoBoworGun: true, GunandBow: false},
        nextText: 23
      },
    ]
  },
  {
    id: 23,
    text: "Well you couldn't figure it out... Maybe we missed something. Oh well, we have to push on. \n\n You finally reach the town. Where should you go?",
    options: [
      {
        text: 'Go to the hospital',
        requiredState: (currentState) => currentState.Bow,
        nextText: 25
      },
      {
        text: 'Go to the hospital',
        requiredState: (currentState) => currentState.NoBoworGun,
        nextText: 25
      },
      {
        text: "Go to the grocery store",
        nextText: 26
      },
    ]
  },
  {
    id: 24,
    text: "Inside the safe is an Assault Rifle and ammo. Matt picks it up and you head out. \n\n You finally reach the town...",
    options: [
      {
        text: "Go to the grocery store",
        nextText: 26
      },
    ]
  },
  {
    id: 25,
    text: "Days pass and you finally make it to the hospital.\n\n Matt and Amanda suddenly collapse. They were starving for too long. They hold eachother as they slowly disintegrate away in the darkness. \nMatt and Amanda pass away in each others arms.\n\n As you both mourn your losses, Katie finds a room with plenty of supplies, but the door is locked.\n\n Unlock the door to find supplies!\n\n Riddle: What is a series of numbers that Matt can never get out of his head?",
    options: [
      {
        text: 'Solved Riddle',
        requiredState: (currentState) => currentState.Bow,
        nextText: 32
      },
      {
        text: 'Solved Riddle',
        requiredState: (currentState) => currentState.NoBow,
        nextText: 17
      },
      {
        text: 'Solved Riddle',
        requiredState: (currentState) => currentState.NoBoworGun,
        nextText: 17
      },
      {
        text: 'Solved Riddle',
        requiredState: (currentState) => currentState.BriDead,
        nextText: 32
      },
      {
        text: "Can't Recall, we must move on",
        nextText: 33
      },
    ]
  },
  {
    id: 26,
    text: "As you reach the Grocery Store, Jen's injury has gotten worse and has turned into Gang-Green. \n\nZombies smell the wound in the streets and chase you down. Jen couldn't keep up and falls while you make your way to the entrance of the store.\n\n The horde of undead devour her within seconds, giving you time to get inside the store.\n\n The entrance to the Grocery Store is locked!\n\n Quick! Unlock the door!\n\n Rmhgz Zxxlfmg: 'tilxvibhgliv' ulooldvw yb gsv rmuznlfh 4 mfnyvih gszg nzgg xzm mvevi tvg lfg lu srh svzw",
    options: [
      {
        text: 'Unlocked Door',
        nextText: 28
      },
      {
        text: "Fail and Die",
        nextText: 6
      },
    ]
  },
  {
    id: 27,
    text: "You reach the grocery store, but the outside entrance is locked. \n\nUnlock the door -\n\n Rmhgz Zxxlfmg: 'tilxvibhgliv' ulooldvw yb gsv rmuznlfh 4 mfnyvih gszg nzgg xzm mvevi tvg lfg lu srh svzw",
    options: [
      {
        text: 'Unlocked door',
        nextText: 28
      },
      {
        text: "Fail to Unlock",
        nextText: 6
      },
    ]
  },
  {
    id: 28,
    text: "You enter the grocery store and find all the food you need including vegan food for Matt and Amanda. Katie also spots a picture hanging on the wall...",
    options: [
      {
        text: 'Continue the journey',
        nextText: 29
      },
    ]
  },
  {
    id: 29,
    text: "As you are leaving, Ravegers spot you in the street! Katie sees a house nearby that you can take cover in.\n\n While hiding from the ravegers, Katie also spots some things in the kitchen cabinet, but doesn't know what they are... \n\n Solve the riddle to obtain these items:\n\nI spy with my little eye - something that may make us smile, laugh, or cry. Something that opens up our mind, but not normal to find. It changes your perspective of the world with one bite, and it may even change your sight. What am I?\n\nThere is another item that is very artificial. It could be a small substitute for a missle. You throw it in the air with all your strength, hoping to hit your mark farther than arm's length. ",
    options: [
      {
        text: 'Solved Riddles',
        nextText: 34
      },
    ]
  },
  {
    id: 32,
    text: "You find antibiotics for Jen! She takes them and feels better right away.",
    options: [
      {
        text: 'Continue the journey',
        nextText: 29
      },
    ]
  },
  {
    id: 33,
    text: "As you are leaving, Ravegers spot you in the street! Katie sees a house nearby that you can take cover in. \n\n Jen's injury has gotten worse and has turned into Gang-Green. \n\nShe couldn't keep up and falls while you make your way to the house.\n\n The Ravegers catch her and it's a blood bath...\n\nAs you enter the house, Katie finds some things in the kitchen cabinet, but doesn't know what they are... \n\n Solve the riddle to obtain these items:\n\nI spy with my little eye - something that may make us smile, laugh, or cry. Something that opens up our mind, but not normal to find. It changes your perspective of the world with one bite, and it may even change your sight. What am I?\n\nThere is another item that is very artificial. It could be a small substitute for a missle. You throw it in the air with all your strength, hoping to hit your mark farther than arm's length. ",
    options: [
      {
        text: 'Solved Riddles',
        nextText: 34
      },
    ]
  },
  {
    id: 34,
    text: "You collect the magic mushrooms and grenade.",
    options: [
      {
        text: 'Continue the journey',
        nextText: 35
      },
    ]
  },
  {
    id: 35,
    text: "Just as you are about to leave the house and evade the Ravegers, Rob says he has to take a shit.",
    options: [
      {
        text: 'Make him hold it',
        requiredState: (currentState) => currentState.Bow,
        nextText: 36
      },
      {
        text: 'Make him hold it',
        requiredState: (currentState) => currentState.GunandBow,
        nextText: 36
      },
      {
        text: 'Make him hold it',
        requiredState: (currentState) => currentState.NoBow,
        nextText: 36
      },    
      {
        text: 'Make him hold it',
        requiredState: (currentState) => currentState.NoBoworGun,
        nextText: 36
      },    
      {
        text: 'Let him take a shit in the house',
        requiredState: (currentState) => currentState.Bow,
        nextText: 46
      },
      {
        text: 'Let him take a shit in the house',
        requiredState: (currentState) => currentState.GunandBow,
        nextText: 46
      },
      {
        text: 'Let him take a shit in the house',
        requiredState: (currentState) => currentState.NoBow,
        nextText: 46
      },
      {
        text: 'Let him take a shit in the house',
        requiredState: (currentState) => currentState.NoBoworGun,
        nextText: 46
      },
    ]
  },
  {
    id: 36,
    text: "As you all are arguing with Rob about NOT taking a shit, a zombie that was hiding in the bedroom hears you and runs viciously for Katie!",
    options: [
      {
        text: 'Use gun to kill the zombie',
        requiredState: (currentState) => currentState.Gun,
        nextText: 37
      },
      {
        text: 'Use gun to kill the zombie',
        requiredState: (currentState) => currentState.GunandBow,
        nextText: 37
      },
      {
        text: 'Use machete to kill the zombie',
        nextText: 39
      },
      {
        text: 'Use bow to kill the zombie',
        requiredState: (currentState) => currentState.Bow,
        nextText: 43
      },
      {
        text: 'Use bow to kill the zombie',
        requiredState: (currentState) => currentState.GunandBow,
        nextText: 43
      },
    ]
  },
  {
    id: 37,
    text: "You shoot the zombie and save katie, but the commotion gives your position away to the Ravegers. They sneak up on the group and shoot up the house. \n\nWhile everyone is getting blasted away, Sadow was able to lob the grenade at the Ravegers and manages to kill them all. \n\n Unfortunately, it wasn't early enough. Everyone has died, except Sadow.",
    options: [
      {
        text: 'Continue...',
        nextText: 38
      },
    ]
  },
  {
    id: 38,
    text: "Sadow sits down around a puddle of blood, he remembers he has those mushrooms katie found earlier...",
    options: [
      {
        text: 'Eat Mushrooms',
        nextText: 42
      },
    ]
  },
  {
    id: 39,
    text: "Rob runs at the zombie to try and save katie, but he was too late. The zombie chewed her face off seconds before he got to her. He chops up the zombie in fury with his machete and screeams with anger, alerting your position to the Ravegers. \n\n They sneak up on the group and shoot up the house. \n\nWhile everyone is getting blasted away, Sadow was able to lob the grenade at the Ravegers and manages to kill them all. \n\n Unfortunately, it wasn't early enough. Everyone has died, except Sadow.",
    options: [
      {
        text: 'Continue...',
        nextText: 38
      },
    ]
  },
  {
    id: 40,
    text: "As you make your escape in the woods, Rob couldn't hold it any longer. He takes a shit in the woods on a rock. \n\n A hord of zombies get his scent and before you can say 'Whos got your belly!' they are upon you. As the group is getting mauled to death, Sadow lobs the grenade you picked up at the pile of zombies and dead bodies. \n\n He manages to survive, but he is now alone.",
    options: [
      {
        text: 'Continue...',
        nextText: 38
      },
    ]
  },
  {
    id: 41,
    text: "The group attempts to hold their ground against the Ravegers. They begin to shoot up the house. \n\nWhile everyone is getting blasted away, Sadow was able to lob the grenade at the Ravegers and manages to kill them all. \n\n Unfortunately, it wasn't early enough. Everyone has died, except Sadow.",
    options: [
      {
        text: 'Continue...',
        nextText: 38
      },
    ]
  },
  {
    id: 42,
    text: "As you eat the mushrooms, you think about the decisions you made during this journey. Slowly your reality begins to warp. The mushrooms send you back in time!",
    options: [
      {
        text: 'Move through time',
        requiredState: (currentState) => currentState.NoBow,
        setState: { NoBow: true, Bow: false, NoBoworGun: false, GunandBow: false},
        nextText: 13
      },
      {
        text: 'Move through time',
        requiredState: (currentState) => currentState.NoGun,
        setState: { NoGun: false, Gun: false, Bow: false, NoBow: false, NoBoworGun: false, GunandBow: false, BriDead: false, Suppliescollected: false},
        nextText: 9
      },
      {
        text: 'Move through time',
        requiredState: (currentState) => currentState.GunandBow,
        nextText: 35
      },
      {
        text: 'Move through time',
        requiredState: (currentState) => currentState.NoBoworGun,
        setState: { NoGun: false, Gun: false, Bow: false, NoBow: false, NoBoworGun: false, GunandBow: false, BriDead: false, Suppliescollected: false},
        nextText: 6
      },
    ]
  },
  {
    id: 43,
    text: "Sadow lines up his shot and shoots the zombie in the head with the bow, saving Katie. The Ravengers are still looking for you. What do you do?",
    options: [
      {
        text: 'Stand your ground in anger and attack the Ravegers',
        requiredState: (currentState) => currentState.Gun,
        nextText: 44
      },
      {
        text: 'Stand your ground in anger and attack the Ravegers',
        requiredState: (currentState) => currentState.GunandBow,
        nextText: 44
      },
      {
        text: 'Stand your ground in anger and attack the Ravegers',
        requiredState: (currentState) => currentState.NoGun,
        nextText: 41
      },
      {
        text: 'Make a run for safety',
        requiredState: (currentState) => currentState.NoGun,
        nextText: 40
      },
      {
        text: 'Make a run for safety',
        requiredState: (currentState) => currentState.Gun,
        nextText: 45
      },
      {
        text: 'Make a run for safety',
        requiredState: (currentState) => currentState.GunandBow,
        nextText: 45
      },
    ]
  },
  {
    id: 44,
    text: "The battle begins...\n\n You blow all of the Ravegers away with the assault rifle, using all of the ammo. No one gets hurt.\n\n As you move on and are deciding to head back to the cabin or not, Rob couldn't hold it any longer. He takes a shit in the woods on a rock. \n\n A hord of zombies het his scent and before you can say 'Whos got your belly!' they are upon you. As the group is getting mauled to death, Sadow lobs the grenade at the pile of zombies and dead bodies. \n\n He manages to survive, but he is now alone. ",
    options: [
      {
        text: 'Continue...',
        nextText: 38
      },
    ]
  },
  {
    id: 45,
    text: "As you make your escape in the woods, Rob couldn't hold it any longer. He takes a shit in the woods on a rock. \n\n A hord of zombies het his scent and before you can say 'Whos got your belly!' they are upon you. You shoot all of the zombies, but this gives your position away for the Ravegers to hunt you down.\n\n As the group is being obliterated by the Ravegers, Sadow manages to lob the grenade into the group, killing everyone but himself... ",
    options: [
      {
        text: 'Continue...',
        nextText: 38
      },
    ]
  },
  {
    id: 46,
    text: "While Rob is grutning while taking a poop, a zombie that was hiding in the bedroom hears him. It comes out of the bedrom, sees Katie, and runs viciously for her!",
    options: [
      {
        text: 'Use gun to kill the zombie',
        requiredState: (currentState) => currentState.Gun,
        nextText: 47
      },
      {
        text: 'Use gun to kill the zombie',
        requiredState: (currentState) => currentState.GunandBow,
        nextText: 47
      },
      {
        text: 'Use machete to kill the zombie',
        nextText: 48
      },
      {
        text: 'Use bow to kill the zombie',
        requiredState: (currentState) => currentState.Bow,
        nextText: 49
      },
      {
        text: 'Use bow to kill the zombie',
        requiredState: (currentState) => currentState.GunandBow,
        nextText: 49
      },
    ]
  },
  {
    id: 47,
    text: "You shoot the zombie and save katie, but the commotion gives your position away to the Ravegers. They sneak up on the group and shoot up the house. \n\nWhile everyone is getting blasted away, Sadow was able to lob the grenade at the Ravegers and manages to kill them all. \n\n Unfortunately, it wasn't early enough. Everyone has died, except Sadow.",
    options: [
      {
        text: 'Continue...',
        nextText: 38
      },
    ]
  },
  {
    id: 48,
    text: "Rob hears Katie screaming, runs out of the bathroom with no pants on and tries to save her, but he was too late. The zombie chewed her face off seconds before he got to her. He chops up the zombie in fury with his machete and screeams with anger, alerting your position to the Ravegers. \n\n They sneak up on the group and shoot up the house. \n\nWhile everyone is getting blasted away, Sadow was able to lob the grenade at the Ravegers and manages to kill them all. \n\n Unfortunately, it wasn't early enough. Everyone has died, except Sadow.",
    options: [
      {
        text: 'Continue...',
        nextText: 38
      },
    ]
  },
  {
    id: 49,
    text: "Sadow lines up his shot and shoots the zombie in the head with the bow, saving Katie. The Ravengers are still looking for you. What do you do?",
    options: [
      {
        text: 'Stand your ground in anger and attack the Ravegers',
        requiredState: (currentState) => currentState.Gun,
        nextText: 52
      },
      {
        text: 'Stand your ground in anger and attack the Ravegers',
        requiredState: (currentState) => currentState.GunandBow,
        nextText: 52
      },
      {
        text: 'Stand your ground in anger and attack the Ravegers',
        requiredState: (currentState) => currentState.NoGun,
        nextText: 41
      },
      {
        text: 'Make a run for safety',
        requiredState: (currentState) => currentState.NoGun,
        nextText: 50
      },
      {
        text: 'Make a run for safety',
        requiredState: (currentState) => currentState.Gun,
        nextText: 51
      },
      {
        text: 'Make a run for safety',
        requiredState: (currentState) => currentState.GunandBow,
        nextText: 51
      },
    ]
  },
  {
    id: 50,
    text: "You quietly leave the house and make a run for the forest. \n\n Days go by and you reach your cabin. Everyone is so exhausted that no one notices the back door is open...\n\n You didn't realize the Ravegers have been stalking you back to your cabin this whole time. They snuck ahead of you and raided the place before you could make it back. \n\n Just as you enter the cabin, The Ravegers open fire. As the group is being obliterated by the Ravegers, Sadow manages to lob the grenade into the cabin, killing everyone but himself... ",
    options: [
      {
        text: 'Continue...',
        nextText: 38
      },
    ]
  },
  {
    id: 51,
    text: "You quietly leave the house and make a run for the forest. \n\nDays go by and you reach your cabin.\n\n Matt was carrying the assault rifle, reminicing on better times when the boys would play Warzone. These memories kick in an instinct to check the cabin entrances for possible entry. He notices that the back door to the cabin is open! \n\n You didn't realize the Ravegers have been stalking you back to your cabin this whole time. They snuck ahead of you and raided the place before you could make it back. \n\n Now your group has the advantage. Matt posts up on a boulder outside the cabin for cover with the assault rifle. Rob covers the back door with his machete. Sadow hangs back with the grenade. \n\n A raveger comes out for a smoke through the front door. Matt opens fire and the battle begins. \n\n You destroy every Raveger on scene and take control of the cabin.",
    options: [
      {
        text: 'Continue...',
        nextText: 53
      },
    ]
  },
  {
    id: 52,
    text: "The battle begins...\n\n You blow all of the Ravegers away with the assault rifle and No one gets hurt.\n\n Days go by and you finally make it back to your cabin. Everyone agrees that this trip was a lot more than what anyone asked for, but necessary in order to survive. \n\nYou sit down and enjoy each others company. What a journey! ",
    options: [
      {
        text: 'To Be Continued...',
        nextText: 1
      },
    ]
  },
  {
    id: 53,
    text: "As you patch up the Cabin, everyone agrees that this trip was a lot more than what anyone asked for, but necessary in order to survive. \n\nYou sit down and enjoy each others company. What a journey! ",
    options: [
      {
        text: 'To Be Continued...',
        nextText: 1
      },
    ]
  },
]

startGame()