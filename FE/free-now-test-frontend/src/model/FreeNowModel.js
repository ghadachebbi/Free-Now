/** @typedef {import('./FreeNowPoiModel') FreeNowPoiModel */

export default class FreeNowModel {
    /** @type {FreeNowPoiModel} */
    poiList

    constructor({
        poiList
    }) {
        this.poiList = poiList
    }

}