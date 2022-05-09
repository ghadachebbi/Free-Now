/** @typedef {import('./ShareNowPlacemarkModel') ShareNowPlacemarkModel */

export default class ShareNowModel {
    /** @type {ShareNowPlacemarkModel} */
    placemarks

    constructor({
        placemarks
    }) {
        this.placemarks = placemarks
    }
}