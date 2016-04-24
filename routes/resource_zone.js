'use strict';

module.exports = function (app) {
    const resourceZone = new app.controllers.ResourceZone();

    return [
        {
            method: 'get',
            url: '/resources',
            action: resourceZone.list,
            cors: true
        },
        {
            method: 'get',
            url: '/resources/:id',
            action: resourceZone.find,
            cors: true
        },
        {
            method: 'post',
            url: '/resources',
            action: resourceZone.insert,
            cors: true
        },
        {
            method: 'put',
            url: '/resources/:id',
            action: resourceZone.update,
            cors: true
        },
        {
            method: 'delete',
            url: '/resources/:id',
            action: resourceZone.delete,
            cors: true
        }
    ];

};
