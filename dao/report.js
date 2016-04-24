'use strict';

module.exports = function (app) {
    const Report = app.models.Report;

    this.list = (req) => {
        req = req || {};
        return new Report().list(req.query, req.fields, req.projection);
    };

    this.find = (id) => {
        return new Report().findId(id);
    };

    this.insert = (data) => {
        return new Report().insert(data);
    };

    this.update = (id, data) => {
        return new Report().update(id, data);
    };

    this.delete = (id) => {
        return new Report().delete(id);
    };
};
