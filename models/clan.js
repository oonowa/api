'use strict';

module.exports = function (app, Schema) {

    let clanSchema = new Schema({
        territory: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: 'Territory'
        },
        waterQuantity: {
            type: Number,
            required: true
        },
        vegetationQuantity: {
            type: Number,
            required: true
        },
        livestockQuantity: {
            type: Number,
            required: true
        },
        disputingClans: [{
            type: Schema.Types.ObjectId,
            ref: 'Clan'
        }]
    });

    clanSchema.plugin(new app.plugins.MongooseCrud());
    return clanSchema;
};
