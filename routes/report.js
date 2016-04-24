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
        }
    ];

};
