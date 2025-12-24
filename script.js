console.log("Extrenal linking of JS file")

class user{
    constructor(id,name,age,email,isActive){
        if(typeof id !== 'number' || id <=0) throw Error("ID must be a +ve no.")
        if(typeof name !== 'string' || !name.trim()) throw Error("Name must not contain empty space.")
        if(typeof age !== 'number' || id <=0) throw Error("Age must be correct.")
        if(typeof email !== 'string' || !email.includes('@')) throw Error("Enter correct email.")
        if(typeof isActive !== 'boolean') throw Error("isActive must be a boolean value.")
        this.id=id;
        this.name=name;
        this.age=age;
        this.email=email;;
        this.isActive=isActive;
    }

    user_intro(){
        console.log(`
ID of user : ${this.id}
Name of user : ${this.name}
Age of user : ${this.age}
Email of user : ${this.email}
Activity status : ${this.isActive}`);
        }
}
const users = new Array();

users[0]= new user(1,"Shraddha",22,"shraddha09@gmail.com",true);
users[1]= new user(2,"Saniya",23,"sani666@gmail.com",true);
users[2]= new user(3,"Shreya",23,"shrey234@gmail.com",false);
users[3]= new user(4,"Lakshmi",24,"laxmi767@gmail.com",true);
users[4]= new user(5,"Navya",23,"navya555@gmail.com",false);

for( i=0;i<users.length;i++){
    users[i].user_intro();
}

//deconstructing 
let deconstruct=function(){
    const user6= new user(21,"Neetha",25,"neetha@gmail.com",false);
    const {id,name,age,email: work_mail, isActive}=user6;

console.log(`
With deconstruction

${user6.id} - ID
${user6.name} - Name
${user6.work_mail} - Work mail
${user6.isActive} - Activity status`);
}
deconstruct();

class activity{
    constructor(activityName,timeStamp,status){
        this.activityName=activityName;
        this.timeStamp=timeStamp;
        this.status=status;
    }
}

const act1=new activity("Scroll time","02.30.00","completed");
const act2=new activity("Story","00.30.00","paused");
const act3=new activity("Chats","01.00.00","ongoing");
// const act4=new activity("Post","00.45.00","completed");

const activities=[act1,act2,act3];

for(i=0;i<activities.length;i++){
    console.log(`${activities[i].activityName} - Activity name
${activities[i].timeStamp} - Time stamp
${activities[i].status} - Activity status`);
}

activities.push({
    activityName:"Post",
    timeStamp:"00.45.00",
    status:"completed"
});
console.log(activities);
activities.pop();
console.log(activities);

//filtering through is active status
const active_users = users.filter(user => user.isActive === true);
// console.log(active_users[2]);

//active users name and mail is mapped on to another array
const activeUserInfo=users.filter(user => user.isActive).map(user => ({
    name: user.name,
    email: user.email
}));
for(i=0;i<activeUserInfo.length;i++){
    console.log(activeUserInfo[i]);
}
