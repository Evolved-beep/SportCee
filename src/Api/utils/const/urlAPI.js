const urlAPI = {
    userInfo(id){
        return `http://localhost:3000/user/${id}` 
    },
    Activity(id){
        return `http://localhost:3000/user/${id}/activity` 
    },
    userPerf(id){
        return `http://localhost:3000/user/${id}/performance` 
    },
    userData(id){
        return `http://localhost:3000/user/${id}/average-sessions` 
    }
}
export default urlAPI