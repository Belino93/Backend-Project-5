'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Shows', [
      {
        "title": "House of the Dragon",
        "poster": "/z2yahl2uefxDCl0nogcRBstwruJ.jpg",
        "overview": "The Targaryen dynasty is at the absolute apex of its power, with more than 15 dragons under their yoke. Most empires crumble from such heights. In the case of the Targaryens, their slow fall begins when King Viserys breaks with a century of tradition by naming his daughter Rhaenyra heir to the Iron Throne. But when Viserys later fathers a son, the court is shocked when Rhaenyra retains her status as his heir, and seeds of division sow friction across the realm.",
        "first_air_date": "2022-08-21",
        "genre" : "Action",
        "article_id": 21,
        "rating": 10
      },
      {
        "title": "The Lord of the Rings: The Rings of Power",
        "poster": "/mYLOqiStMxDK3fYZFirgrMt8z5d.jpg",
        "overview": "Beginning in a time of relative peace, we follow an ensemble cast of characters as they confront the re-emergence of evil to Middle-earth. From the darkest depths of the Misty Mountains, to the majestic forests of Lindon, to the breathtaking island kingdom of Númenor, to the furthest reaches of the map, these kingdoms and characters will carve out legacies that live on long after they are gone.",
        "first_air_date": "2022-09-01",
        "genre" : "Action",
        "article_id": 22,
        "rating": 9
      },
      {
        "title": "Dahmer - Monster: The Jeffrey Dahmer Story",
        "poster": "/f2PVrphK0u81ES256lw3oAZuF3x.jpg",
        "overview": "Across more than a decade, 17 teen boys and young men were murdered by convicted killer Jeffrey Dahmer. How did he evade arrest for so long?",
        "first_air_date": "2021-10-12",
        "genre" : "Crime",
        "article_id": 23,
        "rating":8
      },
      {
        "title": "Chucky",
        "poster": "/kY0BogCM8SkNJ0MNiHB3VTM86Tz.jpg",
        "overview": "After a vintage Chucky doll turns up at a suburban yard sale, an idyllic American town is thrown into chaos as a series of horrifying murders begin to expose the town's hypocrisies and secrets. Meanwhile, the arrival of enemies — and allies — from Chucky's past threatens to expose the truth behind the killings, as well as the demon doll's untold origins.",
        "first_air_date": "2010-10-31",
        "genre" : "Horror",
        "article_id": 24,
        "rating":7
      },
      {
        "title": "The Walking Dead",
        "poster": "/xf9wuDcqlUPWABZNeDKPbZUjWx0.jpg",
        "overview": "Sheriff's deputy Rick Grimes awakens from a coma to find a post-apocalyptic world dominated by flesh-eating zombies. He sets out to find his family and encounters many other survivors along the way.",
        "first_air_date": "2022-10-12",
        "genre" : "Action",
        "article_id": 25,
        "rating":9,
        "next_chapter":'2022-11-07'
      },
      {
        "title": "Chainsaw Man",
        "poster": "/npdB6eFzizki0WaZ1OvKcJrWe97.jpg",
        "overview": "Denji has a simple dream—to live a happy and peaceful life, spending time with a girl he likes. This is a far cry from reality, however, as Denji is forced by the yakuza into killing devils in order to pay off his crushing debts. Using his pet devil Pochita as a weapon, he is ready to do anything for a bit of cash.",
        "first_air_date": "2022-09-26",
        "genre" : "Action",
        "article_id": 26,
        "rating":7
      },
      {
        "title": "Now what",
        "poster": "/89kiLK0S7Rbfjorvhm0vxTAgAH3.jpg",
        "first_air_date": "2022-09-26",
        "overview": "",
        "genre" : "Thriller",
        "article_id": 27,
        "rating":6
      },
      {
        "title": "La Reina del Sur",
        "poster": "/uBTlJDdPpRxYTfUnKw4wbuIGSEK.jpg",
        "first_air_date": "2011-02-28",
        "overview": "After years of blood, sweat and tears, a woman of humble origin ends up becoming a drug trafficking legend, with all that that means...",
        "genre" : "Action",
        "article_id": 28,
        "rating":8,
        "next_chapter":'2022-11-09'
      },
      {
        "title": "Farma",
        "poster": "/kbHpBaS67JWmstgAqH39pxEPDyG.jpg",
        "first_air_date": "2011-07-24",
        "overview": "Serbian version of the reality series The Farm.",
        "genre" : "Reality",
        "article_id": 29,
        "rating":4
      },
      {
        "title": "She-Hulk: Attorney at Law",
        "poster": "/hJfI6AGrmr4uSHRccfJuSsapvOb.jpg",
        "first_air_date": "2022-08-18",
        "overview": "Jennifer Walters navigates the complicated life of a single, 30-something attorney who also happens to be a green 6-foot-7-inch superpowered hulk.",
        "genre" : "Adventure",
        "article_id": 30,
        "rating":5
      },
      {
        "title": "Game of Thrones",
        "poster": "/u3bZgnGQ9T01sWNhyveQz0wH0Hl.jpg",
        "first_air_date": "2011-04-17",
        "overview": "Seven noble families fight for control of the mythical land of Westeros. Friction between the houses leads to full-scale war. All while a very ancient evil awakens in the farthest north. Amidst the war, a neglected military order of misfits, the Night's Watch, is all that stands between the realms of men and icy horrors beyond.",
        "genre" : "Adventure",
        "article_id": 31,
        "rating":9,
        "special_event": true
      },
      {
        "title": "The Simpsons",
        poster: "/zI3E2a3WYma5w8emI35mgq5Iurx.jpg",
        "first_air_date": "1989-12-17",
        "overview": "Set in Springfield, the average American town, the show focuses on the antics and everyday adventures of the Simpson family; Homer, Marge, Bart, Lisa and Maggie, as well as a virtual cast of thousands. Since the beginning, the series has been a pop culture icon, attracting hundreds of celebrities to guest star. The show has also made name for itself in its fearless satirical take on politics, media and American life in general.",
        "genre" : "Animated",
        "article_id": 32,
        "rating":8
      },
      {
        "title": "Rick and Morty",
        "poster": "/cvhNj9eoRBe5SxjCbQTkh05UP5K.jpg",
        "first_air_date": "2013-12-02",
        "overview": "Rick is a mentally-unbalanced but scientifically gifted old man who has recently reconnected with his family. He spends most of his time involving his young grandson Morty in dangerous, outlandish adventures throughout space and alternate universes. Compounded with Morty's already unstable family life, these events cause Morty much distress at home and school.",
        "genre" : "Animated",
        "article_id": 33,
        "rating":10,
        "next_chapter":'2022-11-07'
      },
      {
        "title": "Miraculous: Tales of Ladybug & Cat Noir",
        "poster": "/psDcRgUX38cIeGeADwLRPyO7SYC.jpg",
        "first_air_date": "2015-10-19",
        "overview": "Normal high school kids by day, protectors of Paris by night! Miraculous follows the heroic adventures of Marinette and Adrien as they transform into Ladybug and Cat Noir and set out to capture akumas, creatures responsible for turning the people of Paris into villains. But neither hero knows the other’s true identity – or that they’re classmates!",
        "genre" : "Animated",
        "article_id": 34,
        "rating":6,
        "special_event": true
      },
      {
        "title": "Lucifer",
        "poster": "/ekZobS8isE6mA53RAiGDG93hBxL.jpg",
        "first_air_date": "2016-01-25",
        "overview": "Bored and unhappy as the Lord of Hell, Lucifer Morningstar abandoned his throne and retired to Los Angeles, where he has teamed up with LAPD detective Chloe Decker to take down criminals. But the longer he's away from the underworld, the greater the threat that the worst of humanity could escape.",
        "genre" : "Action",
        "article_id": 35,
        "rating":7
      },
      {
        "title": "Mar do Sertão",
        "poster": "/ixgnqO8xhFMb1zr8RRFsyeZ9CdD.jpg",
        "first_air_date": "2022-08-22",
        "overview": "",
        "genre" : "Drama",
        "article_id": 36,
        "rating":6
      },
      {
        "title": "Travessia",
        "poster": "/jFZJEoPzt2RKSsZG8QEWptX5Xyw.jpg",
        "first_air_date": "2022-10-10",
        "overview": "",
        "genre" : "Drama",
        "article_id": 37,
        "rating":3
      },
      {
        "title": "Grey's Anatomy",
        "poster": "/daSFbrt8QCXV2hSwB0hqYjbj681.jpg",
        "first_air_date": "2005-03-27",
        "overview": "Follows the personal and professional lives of a group of doctors at Seattle’s Grey Sloan Memorial Hospital.",
        "genre" : "Drama",
        "article_id": 38,
        "rating":8
      },
      {
        "title": "American Horror Story",
        "poster": "/tiuzjuzalHj377XER1sfq7XQEIT.jpg",
        "first_air_date": "2011-10-05",
        "overview": "An anthology horror drama series centering on different characters and locations, including a house with a murderous past, an asylum, a witch coven, a freak show, a hotel, a farmhouse in Roanoke, a cult, the apocalypse and a summer camp.",
        "genre" : "Horror",
        "article_id": 39,
        "rating":9,
        "special_event": true
      }


    ], {});

  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
