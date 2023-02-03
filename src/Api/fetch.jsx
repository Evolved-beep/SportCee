import {userMainData, userActivity, userAverageSession, userPerformance} from './modelisation'
const url = "http://localhost:3000/user"
console.log(url)

export async function getUserData(userId){
    const response = await fetch(`${url}/${userId}`)
    const data = response.json()
    const userData = new userMainData(data)
    console.log(userData)
    return userData
}  
  /*  export const GetUserActivity = (userId) => {
        const response = fetch(`http://localhost:3000/user/${userId}/activity`)
        const data = response
        console.log(data)
        const userAct = new userActivity(data)
        console.log(userAct)
        return userAct 
    } */

   /*  export async function userAverage(userId){
    const response = await fetch(`http://localhost:3000/user/${userId}/average-session`)
    const data = response.json()
    const userAveSession = new userAverageSession(data)
    return userAveSession
}

   export async function userPerform(userId){
    const response = await fetch(`http://localhost:3000/user/${userId}/performance`)
    const data = response.json()
    const userPerf = new userPerformance(data)
    return userPerf
} */