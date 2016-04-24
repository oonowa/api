'use strict';

module.exports = function (app) {
    var Q               = q
    ,   NotFoundError   = app.plugins.NotFoundError;

    return function (Schema, options) {

        Schema.statics.getCount = function (query) {
            return Q.nbind(this.count, this)(query);
        };

        Schema.statics.list = function (query, fields, projection) {
            return Q.nbind(this.find, this)(query, fields, projection);
        };

        Schema.statics.findId = function (id) {
            return Q.nbind(this.findOne, this)({
                _id: id
            }).then((_object) => {
                if(!_object) throw new NotFoundError();
                return _object;
            });
        };

        Schema.statics.insert = function (object) {
            if(object._id !== undefined && !options.custom_id) {
                throw new app.Error(
                    400, 'INVALID_FIELD',
                    [
                        `The field _id in the object being added is invalid.`,
                        `For this reason, the object you're trying to register`,
                        `can't be added right now. Please omit this field and`,
                        `try again.`
                    ].join(' ')
                );
            }

            return Q.nbind(this.create, this)(object);
        };

        Schema.statics.update = function (id, object) {
            return Q.nbind(this.findOne, this)({
                _id: id
            }).then((_object) => {
                if(!_object) throw new NotFoundError();

                var keys = _.difference(
                    Object.keys(object), [ '__v', '_id' ]
                );
                for(var key of keys){
                    _object[key] = object[key];
                }

                return Q.nbind(_object.save, _object)().then(() => {
                    return Q.nbind(this.findOne, this)({ _id: id });
                });
            });
        };

        Schema.statics.delete = function (id) {
            return Q.nbind(this.findOne, this)({
                _id: id
            }).then((_object) => {
                if(!_object) throw new NotFoundError();
                return Q.nbind(_object.remove, _object)();
            });
        };

    };
};
