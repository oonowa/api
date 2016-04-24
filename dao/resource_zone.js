'use strict';

module.exports = function (app) {
    const ResourceZone = app.models.ResourceZone;

    this.list = (req) => {
        req = req || {};
        return new ResourceZone().list(req.query, req.fields, req.projection);
    };

    this.find = (id) => {
        return new ResourceZone().findId(id);
    };

    this.insert = (data) => {
        return new ResourceZone().insert(data);
    };

    this.update = (id, data) => {
        return new ResourceZone().update(id, data);
    };

    this.delete = (id) => {
        return new ResourceZone().delete(id);
    };
};
