import { ShareNowUrl } from "../../constants/links";
import ShareNowApi from "../../api/ShareNowApi";
import ShareNowModel from "../../model/ShareNowModel";
import ShareNowPlacemarkModel from "../../model/ShareNowPlacemarkModel";

const fetchMock = jest.fn();
global.fetch = fetchMock;

const FAKE_SHARE_NOW_VEHIClES = new ShareNowModel({
    placeMarks: new ShareNowPlacemarkModel({
        id:1833240479,
        address:"Lesserstraße 170, 22049 Hamburg",
        coordinates:[10.07526,53.59301,0],
        engineType:"CE",
        exterior:"UNACCEPTABLE",
        fuel:42,
        interior:"UNACCEPTABLE",
        name:"HH-GO8522",
        vin:"WME4513341K565439",
    })
})

afterEach(() => {
    jest.clearAllMocks();
});

describe('Given Share now api', () => {

    describe('When fetch vehicles', () => {
        beforeEach(() =>{
            const json = jest.fn().mockResolvedValue(FAKE_SHARE_NOW_VEHIClES);
            fetchMock.mockResolvedValue({ json });
        });

        it('Then it returns data', async() => {
            const result = await ShareNowApi.getShareNowVehicules();

            expect(fetch).toHaveBeenCalledWith(`${ShareNowUrl}/vehicles`, {"method": "GET"});

            expect(result).toBe(FAKE_SHARE_NOW_VEHIClES)
        });

    });
});
