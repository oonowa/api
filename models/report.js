'use strict';

module.exports = function (app, Schema) {

    let reportSchema = new Schema({
        resourceZone: {
            type: Schema.Types.ObjectId,
            ref: 'ResourceZone',
            required: true
        },
        name: {
            type: String,
            required: true
        },
        detail: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            required: true,
            default: Date.now
        }
    });

    return reportSchema;
};
