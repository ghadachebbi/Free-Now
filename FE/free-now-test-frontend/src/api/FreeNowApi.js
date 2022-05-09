import { FreeNowUrl } from "../constants/links";

export default class FreeNowApi {
    static getFreeNowVehicules() {
        return fetch(`${FreeNowUrl}/vehicles`, {
            method: 'GET',
        })
        .then(response => response.json());
    }
}