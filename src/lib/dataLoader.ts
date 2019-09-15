/* ------------------------------------------
 * 지역 데이터들을 실제로 로딩하는 모듈이다.
 * 현재는 ../data/ 안의 ts 파일에서 가져오지만,
 * 추후에 다른 http 링크에서 가져오는것도 구현 예정
 * ------------------------------------------*/

import catholicuniv from '../data/catholicuniv'

/**
 * 지역들의 정보를 가져오는 함수
 */
export function getList() {
    return [
        {
            id: catholicuniv.id,
            titleName: catholicuniv.titleName,
        }
    ]
}

/**
 * 주어진 지역의 데이터를 가져오는 함수
 * @param 가져올 지역의 id
 */
export function getData(data_id: string) {
    if (data_id == "catholicuniv") {
        return catholicuniv.data;
    }
    throw "Invalid Region Data Id.";
    
}