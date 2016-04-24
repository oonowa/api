'use strict';

module.exports = function (app, Schema) {

    let territorySchema = new Schema({
        settlement: {
            'type': {
                type: String,
                enum: [ 'Point' ],
                default: 'Point'
            },
            coordinates: {
                type: [ Number ],
                default: [ 0, 0 ]
            }
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

    territorySchema.index({
        location: '2dsphere',
        boundaries: '2dsphere'
    });

    territorySchema.plugin(new app.plugins.MongooseCrud());
    return territorySchema;
};
