'use strict';

module.exports = function (app) {
    let ResourceZone = app.dao.ResourceZone;
    const json = new app.views.Json()
    ,     filter = new app.plugins.MongooseFilter();

    this.list = function (req, res, next) {
        json.promise(new ResourceZone().list(filter(req.query)), res, next);
    };

    this.find = function (req, res, next) {
        json.promise(new ResourceZone().find(req.params.id), res, next);
    };

    this.insert = function (req, res, next) {
        json.promise(new ResourceZone().insert(req.body), res, next, 201);
    };

    this.update = function (req, res, next) {
        json.promise(
            new ResourceZone().update(req.params.id, req.body), res, next
        );
    };

    this.delete = function (req, res, next) {
        json.promise(new ResourceZone().delete(req.params.id), res, next, 204);
    };

};
