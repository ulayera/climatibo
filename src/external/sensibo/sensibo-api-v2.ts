const getPodsId: Function = require('./get-pods-id');
const getPodsIdAcstates: Function = require('./get-pods-id-acstates');
const getPodsIdAcstatesProperty: Function = require('./get-pods-id-acstates-property');
const getPodsIdMeasurements: Function = require('./get-pods-id-measurements');
const getUsersMePods: Function = require('./get-users-me-pods');
const patchPodsIdAcstatesProperty: Function = require('./patch-pods-id-acstates-property');
const postPodsIdAcstates: Function = require('./post-pods-id-acstates');

module.exports = {
    getPodsId,
    getPodsIdAcstates,
    getPodsIdAcstatesProperty,
    getPodsIdMeasurements,
    getUsersMePods,
    patchPodsIdAcstatesProperty,
    postPodsIdAcstates,
};