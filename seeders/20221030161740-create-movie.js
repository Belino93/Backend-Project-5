'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Movies', [
      {
        "title": "Terrifier 2",
        "poster": "/yw8NQyvbeNXoZO6v4SEXrgQ27Ll.jpg",
        "release_date": "2022-10-06",
        "overview": "After being resurrected by a sinister entity, Art the Clown returns to Miles County where he must hunt down and destroy a teenage girl and her younger brother on Halloween night.  As the body count rises, the siblings fight to stay alive while uncovering the true nature of Art's evil intent.",
        "genre" : 'Horror',
        "article_id": 1,
        "rating": 10
      },
      {
        "title": "Black Adam",
        "poster": "/3zXceNTtyj5FLjwQXuPvLYK5YYL.jpg",
        "release_date": "2022-10-19",
        "overview": "Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods—and imprisoned just as quickly—Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world.",
        "genre" : 'Action',
        "article_id": 2,
        "rating": 8
      },
      {
        "title": "Jeepers Creepers: Reborn",
        "poster": "/aGBuiirBIQ7o64FmJxO53eYDuro.jpg",
        "release_date": "2022-09-15",
        "overview": "Forced to travel with her boyfriend to a horror festival, Laine begins to experience disturbing visions associated with the urban legend of The Creeper. As the festival arrives and the blood-soaked entertainment builds to a frenzy, she becomes the center of it while something unearthly has been summoned.",
        "genre" : 'Horror',
        "article_id": 3,
        "rating": 6
      },
      {
        "title": "Fullmetal Alchemist: The Final Alchemy",
        "poster": "/AeyiuQUUs78bPkz18FY3AzNFF8b.jpg",
        "release_date": "2022-06-24",
        "overview": "The Elric brothers’ long and winding journey comes to a close in this epic finale, where they must face off against an unworldly, nationwide threat.",
        "genre" : 'Animated',
        "article_id": 4,
        "rating": 9
      },
      {
        "title": "Project Gemini",
        "poster": "/rFljUdOozFEv6HDHIFpFvcYW0ec.jpg",
        "release_date": "2022-01-06",
        "overview": "After depleting Earth's resources for centuries, humankind's survival requires an exodus to outer space. An international expedition is quickly formed to find a suitable new planet, but when plans go awry, the crew is suddenly stranded without power on a strange planet, where something unimaginable lies in wait.",
        "genre" : 'Adventure',
        "article_id": 5,
        "rating": 6
      },
      {
        "title": "Halloween Ends",
        "poster": "/kFMntvUmKhvw1uAHXecqqNSFXt.jpg",
        "release_date": "2022-10-12",
        "overview": "Four years after the events of Halloween in 2018, Laurie has decided to liberate herself from fear and rage and embrace life. But when a young man is accused of killing a boy he was babysitting, it ignites a cascade of violence and terror that will force Laurie to finally confront the evil she can’t control, once and for all.",
        "genre" : 'Horror',
        "article_id": 6,
        "rating": 5
      },
      {
        "title": "Fall",
        "poster": "/spCAxD99U1A6jsiePFoqdEcY0dG.jpg",
        "release_date": "2022-08-11",
        "overview": "For best friends Becky and Hunter, life is all about conquering fears and pushing limits. But after they climb 2,000 feet to the top of a remote, abandoned radio tower, they find themselves stranded with no way down. Now Becky and Hunter’s expert climbing skills will be put to the ultimate test as they desperately fight to survive the elements, a lack of supplies, and vertigo-inducing heights",
        "genre" : 'Action',
        "article_id": 7,
        "rating": 10
      },
      {
        "title": "Orphan: First Kill",
        "poster": "/pHkKbIRoCe7zIFvqan9LFSaQAde.jpg",
        "release_date": "2022-07-27",
        "overview": "After escaping from an Estonian psychiatric facility, Leena Klammer travels to America by impersonating Esther, the missing daughter of a wealthy family. But when her mask starts to slip, she is put against a mother who will protect her family from the murderous “child” at any cost.",
        "genre" : 'Horror',
        "article_id": 8,
        "rating": 5
      },
      {
        "title": "Hocus Pocus 2",
        "poster": "/7ze7YNmUaX81ufctGqt0AgHxRtL.jpg",
        "release_date": "2022-09-27",
        "overview": "It's been 29 years since someone lit the Black Flame Candle and resurrected the 17th-century sisters, and they are looking for revenge. Now it's up to three high-school students to stop the ravenous witches from wreaking a new kind of havoc on Salem before dawn on All Hallow's Eve.",
        "genre" : 'Adventure',
        "article_id": 9,
        "rating": 8
      },
      {
        "title": "The Battle at Lake Changjin: Water Gate Bridge",
        "poster": "/ugiL6wIhl1OfPyv1gqLkTe45jLl.jpg",
        "release_date": "2022-02-01",
        "overview": "In the follow-up to \"The Battle At Lake Changjin\", brothers Wu Qianli and Wu Wanli undertake a new task for the People's Volunteer Army, defending a bridge part of the American troops' escape route from the advancing Chinese.",
        "genre" : 'Adventure',
        "article_id": 10,
        "rating": 6
      },
      {
        "title": "The School for Good and Evil",
        "poster": "/6oZeEu1GDILdwezmZ5e2xWISf1C.jpg",
        "release_date": "2022-10-19",
        "overview": "Best friends Sophie and Agatha navigate an enchanted school for young heroes and villains — and find themselves on opposing sides of the battle between good and evil.",
        "genre" : 'Comedy',
        "article_id": 11,
        "rating": 8
      },
      {
        "title": "Bullet Train",
        "poster": "/tVxDe01Zy3kZqaZRNiXFGDICdZk.jpg",
        "release_date": "2022-07-03",
        "overview": "Unlucky assassin Ladybug is determined to do his job peacefully after one too many gigs gone off the rails. Fate, however, may have other plans, as Ladybug's latest mission puts him on a collision course with lethal adversaries from around the globe—all with connected, yet conflicting, objectives—on the world's fastest train.",
        "genre" : 'Action',
        "article_id": 12,
        "rating": 9
      },
      {
        "title": "Code Name Banshee",
        "poster": "/g29dShv0wHJUvif2KPq039imds5.jpg",
        "release_date": "2022-07-01",
        "overview": "Caleb, a former government assassin in hiding, who resurfaces when his protégé, the equally deadly killer known as Banshee, discovers a bounty has been placed on Caleb's head.",
        "genre" : 'Horror',
        "article_id": 13,
        "rating": 8
      },
      {
        "title": "Piggy",
        "poster": "/8EIQAvJjXdbNDMmBtHtgGqbc09V.jpg",
        "release_date": "2022-10-07",
        "overview": "A bullied overweight teenager sees a glimpse of hope when her tormentors are brutally abducted by a mesmerizing stranger.",
        "genre" : 'Adventure',
        "article_id": 14,
        "rating": 5
      },
      {
        "title": "Athena",
        "poster": "/fenNPxVF5ERy0CSyVruuEg959Hg.jpg",
        "release_date": "2022-09-09",
        "overview": "Hours after the tragic death of their youngest brother in unexplained circumstances, three siblings have their lives thrown into chaos.",
        "genre" : 'Adventure',
        "article_id": 15,
        "rating": 3
      },
      {
        "title": "Secret Headquarters",
        "poster": "/8PsHogUfvjWPGdWAI5uslDhHDx7.jpg",
        "release_date": "2022-08-12",
        "overview": "While hanging out after school, Charlie and his friends discover the headquarters of the world’s most powerful superhero hidden beneath his home. When villains attack, they must team up to defend the headquarters and save the world.",
        "genre" : 'Action',
        "article_id": 16,
        "rating": 4
      },
      {
        "title": "Crawlspace",
        "poster": "/qEu6qI5sVoIe10gD1BQBqxcNIW2.jpg",
        "release_date": "2022-03-31",
        "overview": "After witnessing a brutal murder in a cabin, a man hides in a crawlspace while the killers scour the property for a hidden fortune. As they draw nearer, he must decide if the crawlspace will be his tomb or the battleground in his fight for survival.",
        "genre" : 'Horror',
        "article_id": 17,
        "rating": 6
      },
      {
        "title": "The Infernal Machine",
        "poster": "/bSqpOGzaKBdGkBLmcm1JJIVryYy.jpg",
        "release_date": "2022-09-23",
        "overview": "Reclusive and controversial author Bruce Cogburn is drawn out of hiding by an obsessive fan, forcing the novelist to confront a past that he thought he could escape, and to account for events set in motion by his bestseller decades earlier. Cogburn's search for who is behind the manipulation and mental torment he encounters leads to an emotional roller-coaster ride full of fear and danger, where things are not always as clear as they seem to be, and where past deeds can have dire consequences.",
        "genre" : 'Action',
        "article_id": 18,
        "rating": 7
      },
      {
        "title": "Blackout",
        "poster": "/xDgnmbdWS59NtTPdzujdZGuPUPZ.jpg",
        "release_date": "2022-10-12",
        "overview": "A man wakes in a hospital with no memory, and quickly finds himself on the run in a locked down hospital with the Cartel on his tail.",
        "genre" : 'Thriller',
        "article_id": 19,
        "rating": 5
      },
      {
        "title": "Pinocchio",
        "poster": "/g8sclIV4gj1TZqUpnL82hKOTK3B.jpg",
        "release_date": "2022-09-07",
        "overview": "A wooden puppet embarks on a thrilling adventure to become a real boy.",
        "genre": "Adventure",
        "article_id": 20,
        "rating": 6
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
