'use strict';

module.exports = function (app) {
    const territory = new app.controllers.Territory();

    return [
        {
            method: 'get',
            url: '/territories',
            action: territory.list,
            cors: true
        },
        {
            method: 'get',
            url: '/territories/:id',
            action: territory.find,
            cors: true
        },
        {
            method: 'post',
            url: '/territories',
            action: territory.insert,
            cors: true
        },
        {
            method: 'put',
            url: '/territories/:id',
            action: territory.update,
            cors: true
        },
        {
            method: 'delete',
            url: '/territories/:id',
            action: territory.delete,
            cors: true
        }
    ];

};
