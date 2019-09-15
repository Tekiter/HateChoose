/* ------------------------------
 * 데이터를 처리하는 핵심 API 모음
 * ------------------------------*/

import * as dataLoader from './dataLoader';


/**
 * 기준이 되는 지역에 대응하는 클래스
 */
export class Region {
    Id: string;
    TitleName: string;
    

    constructor() {
        this.Id = "";
        this.TitleName = "";
    }

    /**
     * 식당들의 데이터들을 가져온다.
     */
    getData(): RegionData {
        let result: RegionData = dataLoader.getData(this.Id);

        return result;
    }
}

export class RegionData {
    constructor() {

    }
}

/**
 * 지역들의 목록을 가져온다.
 */
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
