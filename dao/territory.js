'use strict';

module.exports = function (app) {
    const Territory = app.models.Territory;

    this.list = (req) => {
        req = req || {};
        return new Territory().list(req.query, req.fields, req.projection);
    };

    this.find = (id) => {
        return new Territory().findId(id);
    };

    this.insert = (data) => {
        return new Territory().insert(data);
    };

    this.update = (id, data) => {
        return new Territory().update(id, data);
    };

    this.delete = (id) => {
        return new Territory().delete(id);
    };
};
