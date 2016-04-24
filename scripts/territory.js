'use strict';

const booljs     = require('bool.js')
,     boundaries = {
    type: 'Polygon',
    coordinates: [[
        [ 12.1106, -72.1106 ],
        [ 12.17, -72.090018 ],
        [ 12.1657, -72.1383 ],
        [ 12.1170, -72.1227 ],
        [ 12.1106, -72.1106 ]
    ]]
};

require('..');

booljs('space.oonowaa.api').run().then(api => {
    const app = api.app;
    let territory = new app.models.Territory();

    console.log('Adding territory');
    territory.insert({
        boundaries: boundaries
    }).then(data => {
        console.log(data, '\nWohoo!');
        process.exit(0);
    }).catch(err => console.error(err));

});
