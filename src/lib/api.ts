import * as dataLoader from './dataLoader';


export class Region {
    Id: string;
    TitleName: string;
    

    constructor() {
        this.Id = "";
        this.TitleName = "";
    }

    getData() {
        let result: RegionData = dataLoader.getData(this.Id);

        return result;
    }
}

export class RegionData {
    constructor() {

    }
}

export function getRegions() : Array<Region> {
    let result: Array<Region> = []
    let lst = dataLoader.getList();

    lst.forEach(i => {
        let reg = new Region();

        reg.Id = i.id;
        reg.TitleName = i.titleName;

        result.push(reg);
    });

    return result;
}
