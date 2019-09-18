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
    Name: string;
    

    constructor() {
        this.Id = "";
        this.TitleName = "";
        this.Name = "";

        this.data = null;
    }
    
    private data: RegionData | null;
    /**
     * 식당들의 데이터들을 가져오는 프로퍼티 (Lazy load)
     */
    get getData(): RegionData {

        if (this.data) {
            return this.data;
        }

        let data = dataLoader.getData(this.Id);
        let result: RegionData = new RegionData(data.places);
        
        this.data = result;

        return result;
    }
}

export interface Place {
    name: string,
    category: string[],
    price: string,
    foods: string[],
    loc: number[]
}

export class RegionData {
    Places: Place[]
    constructor(places: Place[]) {
        this.Places = places
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
        reg.Name = i.name;

        result.push(reg);
    });

    return result;
}
