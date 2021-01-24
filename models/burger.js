const orm = require("../config/orm.js");

const burgers = {
    insert: function(cb) {
        orm.insertOne("burgers", function(res) {
            cb(res);
        });
    },    
    select: function(cols, vals, cb) {
        orm.selectAll("burgers", cols, vals,function(res) {
            cb(res);
        });
    },
    update: function(objColVals, condition, cb) {
        orm.updateOne("burgers", objColVals, condition,function(res) {
            cb(res);
        });
    },
    delete: function(condition, cb) {
        orm.deleteOne("burgers", condition, function(res) {
            cb(res);
        });
    }
};

module.exports = burgers;