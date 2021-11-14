// npm install passport-google-oauth20
//npm install mongoose-findorcreate
// IN .env file - copy paste below 2 lines
/*CLIENT_ID = 627504435058-670qoe6r5kq5laegdt4406un45glr694.apps.googleusercontent.com
CLIENT_SECRET = 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 */

const GoogleStrategy = require('passport-google-oauth20').Strategy;
const findOrCreate = require('mongoose-findorcreate');

//enter Schema Name
schemaname.plugin(findOrCreate);
// paste below serialize deserialize user and above app.use
passport.use(new GoogleStrategy({
    clientID: process.env.CLIENTID,
    clientSecret: process.env.CLIENTSECRET,
    callbackURL: "http://localhost:3000/auth/google/fliery",
    userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo"
  },
  function(accessToken, refreshToken, profile, cb) {
    User.findOrCreate({ googleId: profile.id }, function (err, user) {
      return cb(err, user);
    });
  }
));


app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile'] }));

app.get('/auth/google/fliery', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/browse');
  });