let MongoClient = require("mongodb").MongoClient,
    assert = require("assert");

let state = {
    db: null,
};

exports.connect = (url, done) => {
     console.log(url, "nicie");
    if (state.db) return done();
    MongoClient.connect(url, (err, db) => {
        if (err) {
            return done(err);
        }
        state.db = db;
        done();
    });
}

exports.get = () => {
    return state.db
}
