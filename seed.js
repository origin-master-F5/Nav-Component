const fs = require('fs');
const db = require('./server/db');

fs.readFile("games.txt", (err, data) => {
    if(err) {
        console.log(err);
    } else {
        const gamesArrayRaw = data.toString().split('\n');
        let gamesArray = [];

        for(let x = 0; x < gamesArrayRaw.length; x+=3) {
            let console = "Xbox One";
            const num = (x/3)%3;
            const rating = (Math.random() * (4 - 3 + 1) ) + 3;
            const randomImg = Math.floor(Math.random() * 10);

            if(num === 0) {
                console = "Xbox One";
            } else if(num === 1) {
                console = "PlayStation 4";
            } else if(num === 2) {
                console = "Nintendo Switch";
            }
            
            gamesArray.push({
                console,
                rating: rating.toFixed(1),
                name: gamesArrayRaw[x],
                image: `https://origin-master.s3-us-west-1.amazonaws.com/game_images/${randomImg}.jpg`,
            });
        }
        db.deleteMany({})
        .then(db.insertMany(gamesArray).then(data => console.log("Data successfully seeded")).catch(err => console.log(err)))
        .then(() => console.log('ready to close mongo!'))
        
    }
});

