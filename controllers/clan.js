'use strict';

module.exports = function (app) {
    let Clan = app.dao.Clan;
    const json = new app.views.Json()
    ,     filter = new app.plugins.MongooseFilter();

    this.list = function (req, res, next) {
        json.promise(new Clan().list(filter(req.query)), res, next);
    };

    this.find = function (req, res, next) {
        json.promise(new Clan().find(req.params.id), res, next);
    };

    this.insert = function (req, res, next) {
        json.promise(new Clan().insert(req.body), res, next, 201);
    };

    this.update = function (req, res, next) {
        json.promise(new Clan().update(req.params.id, req.body), res, next);
    };

    this.delete = function (req, res, next) {
        json.promise(new Clan().delete(req.params.id), res, next, 204);
    };

};
