var Product = require('../models/product');

var mongoose = require('mongoose');
mongoose.connect('localhost:27017/shopping');
var products = [
    new Product({
        imagePath: 'images/alpha_zero.png',
        title: 'Alpha Zero Game',
        description: 'Alpha Zero is a unique new take on the classic 2.5D scrolling shoot em up. The game has unique controls, beautiful graphics, and awesome boss-fights Forget about on-screen joysticks, this is a game made for touch input and should redefine some of your assumptions of hard core gaming on a mobile device.',
        price: 22
    }),
    new Product({
        imagePath: 'images/call_of_duty.png',
        title: 'Call Of Duty Game',
        description: 'Call of Duty is a first-person shooter video game franchise. The series began on Microsoft Windows, and later expanded to consoles and handhelds. Several spin-off games have been released.',
        price: 34
    }),
    new Product({
        imagePath: 'images/dark_souls.png',
        title: 'Dark Souls Game',
        description: 'Dark Souls III was critically and commercially successful, with critics calling the game a worthy and fitting conclusion to the series. The game became Bandai Namco\'s fastest selling game in their history, selling over three million copies worldwide two months after release.',
        price: 42
    }),
    new Product({
        imagePath: 'images/gothicgame.png',
        title: 'Gothic Game',
        description: 'Gothic is a single-player action role-playing video game for Windows developed by the German company Piranha Bytes. It was first released in Germany on March 15, 2001, followed by the English North American release eight months later on November 23, 2001, and the Polish release on March 28, 2002.',
        price: 21
    }),
    new Product({
        imagePath: 'images/kiwi_wonder.png',
        title: 'Kiwi Wonder Game',
        description: 'Everyone has a dream, and for this particular Kiwi, it is to fly like all the other birds. With a little help from Mily the Dream Pixie his wish is fulfilled when she shows him the way to Wonderland.',
        price: 24
    }),
    new Product({
        imagePath: 'images/little_3_kingdom.png',
        title: 'Little Three Kingdom Game',
        description: 'Lead your army against the evil Usurper Dong Zhou, and save the Emperor from his evil clutches. Little 3 Kingdoms is a 2D side-scrolling strategy game that places the fate of the Three Kingdoms in your hands.',
        price: 17
    }),
    new Product({
        imagePath: 'images/mine_craft.png',
        title: 'Mine Craft Game',
        description: 'Minicraft is a 2D top-down action game designed and programmed by Markus Persson, the creator of Minecraft, for the Ludum Dare #22, a 48-hour game programming competition. The game was released on December 19, 2011.',
        price: 15
    }),
    new Product({
        imagePath: 'images/toon_ambush.png',
        title: 'Toon Ambush Game',
        description: 'The Toon enemy is back and more aggressive than ever. With legions of soldiers and powerful weapons, they are conquering the world. Get your troops ready to DEFEND OUR HOMELAND. All of our soldiers and elite troops will be joining us in this battle. Let\'s give the enemy a big surprise!',
        price: 12
    }),
    new Product({
        imagePath: 'images/world_war_craft.png',
        title: 'World War Craft Game',
        description: 'Warcraft is a franchise of video games, novels, and other media created by Blizzard Entertainment. The first three of these core games are in the real-time strategy genre, where opposing players command virtual armies in battle against each other or a computer-controlled enemy.',
        price: 16
    })
];

var done = 0;
for(var i = 0; i < products.length; i++) {
    products[i].save(function(err, result){
        done++;
        if (done === products.length) {
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}