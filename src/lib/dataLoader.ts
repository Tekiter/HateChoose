import catholicuniv from '../data/catholicuniv'


export function getList() {
    return [
        {
            id: catholicuniv.id,
            titleName: catholicuniv.titleName,
        }
    ]
}

export function getData(data_id: string) {
    if (data_id == "catholicuniv") {
        return catholicuniv.data;
    }
    throw "Invalid Region Data Id.";
    
}