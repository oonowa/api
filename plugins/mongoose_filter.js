

'use strict';

module.exports = function () {

    return function (query) {
        var _query = _.omit(query, [
            'fields', 'limit', 'skip', 'sort',
            'lng', 'lat', 'll', 'location', 'near'
        ]);

        for(var q in _query) {
            if(_query[q] === 'null') _query[q] = null;
            if(!isNaN(_query[q])) _query[q] = Number(_query[q]);
        }

        var projection = {
            limit: parseInt(query.limit, 10),
            skip:  parseInt(query.skip, 10) || undefined,
            sort:  query.sort
        };

        for(var p in projection){
            if(projection[p] === undefined) delete projection[p];
        }

        var near
        ,   keys = Object.keys(query);

        var intersectsNear      = _.intersection(
            keys, [ 'll', 'location', 'near', 'lng', 'lat' ]
        ).length > 0
        ,   intersectsOthers    = _.intersection(
            keys, [ 'll', 'location', 'near' ]
        ).length > 0;

        if(intersectsNear){
            if(intersectsOthers){
                near = _.map((
                    query.ll || query.location || query.near
                ).split(','), data => Number(data) || 0);
            } else {
                return [ query.lng, query.lat ];
            }
        } else {
            near = undefined;
        }

        return {
            search: _query,
            near: near,
            fields: query.fields || {},
            projection: projection
        };

    };
};
