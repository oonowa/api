'use strict';

const booljs     = require('bool.js')
,     boundaries = {
    type: 'Polygon',
    coordinates: [[
        [ 12.0876, -72.0580 ],
        [ 12.0875, -72.0588 ],
        [ 12.0867, -72.0588 ],
        [ 12.0867, -72.0577 ],
        [ 12.0876, -72.0580 ]
    ]]
};

require('..');

booljs('space.oonowaa.api').run().then(api => {
    const app = api.app;
    let resourceZone = new app.models.ResourceZone();

    console.log('Adding resource');
    resourceZone.insert({
        type: 'Water',
        boundaries: boundaries
    }).then(data => {
        console.log(data, '\nWohoo!');
        process.exit(0);
    }).catch(err => console.error(err));

});
