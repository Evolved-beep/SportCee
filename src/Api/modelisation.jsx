export class userMainData {
    constructor(data){
        this.id = data.id;
        this.firstname = data.userInfos.firstName;
        this.lastname = data.userInfos.lastName;
        this.age = data.userInfos.age;
        this.todayscore = data.todayScore || data.score;
        this.calories = data.keyData.calorieCount;
        this.protein = data.keyData.proteinCount;
        this.carbohydrate = data.keyData.carbohydrateCount;
        this.lipid = data.keyData.lipidCount;
    }
}

export class userActivity {
    constructor(data){
        this.id = data.userId;
        this.sessions = data.sessions;
        /* this.day = data.sessions.day; */
        /* this.kilogram = data.sessions.kilogram;
        this.calories = data.sessions.calories; */
    }
} 

export class userAverageSession{
    constructor(data){
        this.id = data.userId;
        this.sessions = data.sessions;
        this.day = data.sessions.day; 
        this.sessionslength = data.sessions.sessionsLength;
    }
} 

export class userPerformance {
    constructor(data){
        this.id = data.userId;
        this.kind = data.kind;
        this.data = data.data;
    }
}
