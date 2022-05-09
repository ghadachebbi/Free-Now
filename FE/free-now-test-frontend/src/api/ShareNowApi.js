import { ShareNowUrl } from "../constants/links";

export default class ShareNowApi {
    static getShareNowVehicules() {
        return fetch(`${ShareNowUrl}/vehicles`, {
            method: 'GET',
        })
        .then(response => response.json());
    }
}