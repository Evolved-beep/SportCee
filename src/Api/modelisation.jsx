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
        this.id = userAct.data.id;
        this.sessions = userAct.data.sessions;
        this.day = userAct.data.sessions.day;
        this.kilogram = userAct.data.sessions.kilogram;
        this.calories = userAct.data.sessions.calories; 
    }
} 

export class userAverageSession{
    constructor(userSess){
        this.id = userSess.data.id;
        this.sessions = userSess.data.sessions;
        this.day = userSess.data.sessions.day; 
        this.sessionslength = userSess.data.sessions.sessionsLength;
    }
} 

export class userPerformance {
    constructor(data){
        this.id = data.data.id;
        this.kind = data.data.kind;
        this.data = data.data.data;
    }
}
