export default class ShareNowPlacemarkModel {
    /** @type {number} */
    id
    /** @type {string} */
    address
    /** @type {number[]} */
    coordinates
    /** @type {string} */
    engineType
    /** @type {string} */
    exterior
    /** @type {number} */
    fuel
    /** @type {string} */
    interior
    /** @type {string} */
    name
    /** @type {string} */
    vin

    constructor({
        id,
        address,
        coordinates,
        engineType,
        exterior,
        fuel,
        interior,
        name,
        vin,
    }) {
        this.id = id
        this.address = address
        this.coordinates = coordinates
        this.engineType = engineType
        this.exterior = exterior
        this.fuel = fuel
        this.interior = interior
        this.name = name
        this.vin = vin
    }
}