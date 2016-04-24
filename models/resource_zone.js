'use strict';

module.exports = function (app, Schema) {

    let resourceZoneSchema = new Schema({
        'type': {
            type: String,
            enum: [ 'Water', 'Vegetation' ]
        },
        boundaries: {
            'type': {
                type: String,
                enum: [ 'Polygon' ],
                default: 'Polygon',
                required: true
            },
            coordinates: {
                type: Array,
                required: true
            }
        }
    });

    resourceZoneSchema.index({
        location: '2dsphere',
        boundaries: '2dsphere'
    });

    resourceZoneSchema.plugin(new app.plugins.MongooseCrud());
    return resourceZoneSchema;
};
