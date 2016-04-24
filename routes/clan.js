'use strict';

module.exports = function (app) {
    const clan = new app.controllers.Clan();

    return [
        {
            method: 'get',
            url: '/clans',
            action: clan.list,
            cors: true
        },
        {
            method: 'get',
            url: '/clans/:id',
            action: clan.find,
            cors: true
        },
        {
            method: 'post',
            url: '/clans',
            action: clan.insert,
            cors: true
        },
        {
            method: 'put',
            url: '/clans/:id',
            action: clan.update,
            cors: true
        },
        {
            method: 'delete',
            url: '/clans/:id',
            action: clan.delete,
            cors: true
        }
    ];

};
