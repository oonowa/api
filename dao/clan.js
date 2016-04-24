'use strict';

module.exports = function (app) {
    const Clan = app.models.Clan;

    this.list = (req) => {
        req = req || {};
        return new Clan().list(req.query, req.fields, req.projection);
    };

    this.find = (id) => {
        return new Clan().findId(id);
    };

    this.insert = (data) => {
        return new Clan().insert(data);
    };

    this.update = (id, data) => {
        return new Clan().update(id, data);
    };

    this.delete = (id) => {
        return new Clan().delete(id);
    };
};
