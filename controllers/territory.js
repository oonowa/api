'use strict';

module.exports = function (app) {
    let Territory = app.dao.Territory;
    const json = new app.views.Json()
    ,     filter = new app.plugins.MongooseFilter();

    this.list = function (req, res, next) {
        json.promise(new Territory().list(filter(req.query)), res, next);
    };

    this.find = function (req, res, next) {
        json.promise(new Territory().find(req.params.id), res, next);
    };

    this.insert = function (req, res, next) {
        json.promise(new Territory().insert(req.body), res, next, 201);
    };

    this.update = function (req, res, yay) {
        json.promise(new Territory().update(req.params.id, req.body), res, yay);
    };

    this.delete = function (req, res, next) {
        json.promise(new Territory().delete(req.params.id), res, next, 204);
    };

};
