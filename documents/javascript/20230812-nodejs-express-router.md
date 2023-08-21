# Passport.js 관련 오류 해결 및 설정법

## 오류 상황

```js
passport.use(
  new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback",
    passReqToCallback: true,
    function(req, accessToken, refreshToken, profile, done) {
      console.log(profile);
      console.log(accessToken);

      return done(null, profile);
    },
  })
);
```

```shell
/Users/park.hyunsang/dev/github/passport-with-google/node_modules/passport-oauth2/lib/strategy.js:84
  if (!verify) { throw new TypeError('OAuth2Strategy requires a verify callback'); }
                 ^

TypeError: OAuth2Strategy requires a verify callback
    at Strategy.OAuth2Strategy (/Users/park.hyunsang/dev/github/passport-with-google/node_modules/passport-oauth2/lib/strategy.js:84:24)
    at new Strategy (/Users/park.hyunsang/dev/github/passport-with-google/node_modules/passport-google-oauth2/lib/oauth2.js:48:18)
    at Object.<anonymous> (/Users/park.hyunsang/dev/github/passport-with-google/app.js:34:14)
    at Module._compile (node:internal/modules/cjs/loader:1233:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1287:10)
    at Module.load (node:internal/modules/cjs/loader:1091:32)
    at Module._load (node:internal/modules/cjs/loader:938:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:83:12)
    at node:internal/main/run_main_module:23:47
```

## 해결 방법

```js
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
      passReqToCallback: true,
    },
    function (req, accessToken, refreshToken, profile, done) {
      console.log(profile);
      console.log(accessToken);

      return done(null, profile);
    }
  )
);
```
