'use strict';

module.exports = function (app) {
    let Report = app.dao.Report;
    const json = new app.views.Json()
    ,     filter = new app.plugins.MongooseFilter();

    this.list = function (req, res, next) {
        json.promise(new Report().list(filter(req.query)), res, next);
    };

    this.find = function (req, res, next) {
        json.promise(new Report().list({
            resourceZone: req.params.id
        }), res, next);
    };

    this.insert = function (req, res, next) {
        json.promise(new Report().insert(req.body), res, next, 201);
    };

};
