const urlMock = {     
        userInfo(id){
            return `./data/${id}.json` 
        },
        Activity(id){
            return `./data/${id}activity.json` 
        },
        userPerf(id){
            return `./data/${id}perfomance.json` 
        },
        userData(id){
            return `./data/${id}average.json` 
        }
    }

export default urlMock
