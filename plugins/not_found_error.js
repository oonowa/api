'use strict';

module.exports = function (app) {

    return new app.Error(
        404, 'OBJECT_NOT_FOUND',
        [
            `The object you're looking for wasn't found through`,
            `the mentioned id. Try again checking the parameter.`
        ].join(' ')
    );
};
