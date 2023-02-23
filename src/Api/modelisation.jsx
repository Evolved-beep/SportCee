/**
 * @class
 * @classdesc Receving data from the fetch and stock it for reuse when it needed on this app 
 */

export class userMainData {
    constructor(userData){
        this.id = userData.data.id;
        this.firstname = userData.data.userInfos.firstName;
        this.lastname = userData.data.userInfos.lastName;
        this.age = userData.data.userInfos.age;
        this.todayscore = userData.data.todayScore || userData.data.score;
        this.calories = userData.data.keyData.calorieCount;
        this.protein = userData.data.keyData.proteinCount;
        this.carbohydrate = userData.data.keyData.carbohydrateCount;
        this.lipid = userData.data.keyData.lipidCount;
    }
}

export class userActivity {
    constructor(userAct){
        this.id = userAct.data.userId;
        this.sessions = userAct.data.sessions;
    }
} 

export class userAverageSession{
    constructor(userSess){
        this.id = userSess.data.userId;
        this.sessions = userSess.data.sessions;
    }
} 

export class userPerformance {
    constructor(data){
        this.id = data.data.userId;
        this.kind = data.data.kind;
        this.data = data.data.data;
    }
}
