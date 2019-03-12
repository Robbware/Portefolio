module.exports = function(app, db) {
    app.post('/footer', (req, res) => {

        var auth = req.headers['authorization'];

        if (auth.indexOf("rob") == 0) {
            var info = {
                Email: "roberto@robbware.pt",
                Facebook: "https://www.facebook.com/roberto.alves.54",
                LinkedIn: "https://www.linkedin.com/in/roberto-alves-738197b9/",
                Twitter: "https://twitter.com/theartofrob",
                Location: "Internet",
                About: "Hello! I'm a game and software developer with a huge passion for programming. I'm eagerly looking for new challenges to tackle and I'm always interested in learning new technologies. Above are a few examples of my work so far but I'm always looking for new things to create and be a part of! I started learning how to program over 10 years ago at home and haven't stopped ever since! Recently, in 2017, graduated from a Game Design Bachelor degree which helped me obtain a grasp on the different game development concepts and areas of work, allowing me to acquire some experience with different pipelines and people. I'm always trying to be better and to learn as much as I can. "
            }

            res.send(info);
        } else {
            res.sendStatus(400);
        }
    });
};