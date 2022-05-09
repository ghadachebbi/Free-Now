import { FreeNowUrl } from "../../constants/links";
import FreeNowApi from "../../api/FreeNowApi";
import FreeNowModel from "../../model/FreeNowModel";
import FreeNowPoiModel from "../../model/FreeNowPoiModel";

const fetchMock = jest.fn();
global.fetch = fetchMock;

const FAKE_FREE_NOW_VEHIClES = new FreeNowModel({
    poiList: new FreeNowPoiModel({
        id:2056777518,
        coordinate: {"latitude":53.5532316,"longitude":10.0087783},
        state:"ACTIVE",
        type:"TAXI",
    })
})

afterEach(() => {
    jest.clearAllMocks();
});

describe('Given Free now api', () => {

    describe('When fetch vehicles', () => {
        beforeEach(() =>{
            const json = jest.fn().mockResolvedValue(FAKE_FREE_NOW_VEHIClES);
            fetchMock.mockResolvedValue({ json });
        });

        it('Then it returns data', async() => {
            const result = await FreeNowApi.getFreeNowVehicules();

            expect(fetch).toHaveBeenCalledWith(`${FreeNowUrl}/vehicles`, {"method": "GET"});

            expect(result).toBe(FAKE_FREE_NOW_VEHIClES)
        });

    });
});
