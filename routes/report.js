'use strict';

module.exports = function (app) {
    const report = new app.controllers.Report();

    return [
        {
            method: 'get',
            url: '/reports',
            action: report.list,
            cors: true
        },
        {
            method: 'get',
            url: '/reports/:id',
            action: report.find,
            cors: true
        },
        {
            method: 'post',
            url: '/reports',
            action: report.insert,
            cors: true
        },
        {
            method: 'put',
            url: '/reports/:id',
            action: report.update,
            cors: true
        },
        {
            method: 'delete',
            url: '/reports/:id',
            action: report.delete,
            cors: true
        }
    ];

};
