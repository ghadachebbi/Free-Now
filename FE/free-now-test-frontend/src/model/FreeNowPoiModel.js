export default class FreeNowPoiModel {
    /** @type {number} */
    id
    /** @type {{"latitude":number,"longitude":number}} */
    coordinate
    /** @type {string} */
    state
    /** @type {string} */
    type

    constructor({
        id,
        coordinate,
        state,
        type,
    }) {
        this.id = id
        this.coordinate = coordinate
        this.state = state
        this.type = type
    }
}