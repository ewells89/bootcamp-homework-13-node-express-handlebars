const orm = require("../config/orm.js");

const burgers = {
    insertOne: function(cb) {
        orm.insertOne("burgers", function(res) {
            cb(res);
        });
    },    
    selectAll: function(cols, vals, cb) {
        orm.selectAll("burgers", cols, vals,function(res) {
            cb(res);
        });
    },
    updateOne: function(objColVals, condition, cb) {
        orm.updateOne("burgers", objColVals, condition,function(res) {
            cb(res);
        });
    },
    deleteOne: function(condition, cb) {
        orm.deleteOne("burgers", condition, function(res) {
            cb(res);
        });
    }
};

module.exports = burgers;