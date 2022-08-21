

class CustomApiError extends Error{
    constructor(msg, statuscode, hh){
        super(msg)
        this.statuscode = statuscode
        this.hh = hh
    }
}
  
const customError = (msg, statuscode, hh)=>{
   return new CustomApiError(msg, statuscode, hh)
}


module.exports = {CustomApiError, customError}
// console.log(car)

// class Car {
//     constructor(brand, model, year){
//         this.bra = brand;
//         this.mod = model;
//         this.dat = year;
//     }
//     age() {
//         let date = new Date();
        
//         return date.getFullYear() - this.dat;
//     }
// }
// let myCar = new Car("ford", "mustang", 2019);
// let caro = myCar.age()

// console.log(myCar)
// console.log(caro)

// class motto extends Car{
//     constructor(brand,mode, flex){
//     super(brand, mode);
//     // super(model)
//     this.location = flex
// }}

// let myMoto = new motto("jaqua","bmw" ,"west")
// console.log(myMoto)

// function getty(details){
// var details,i ,j;
// var system = [];
// for(i = 0; i<details.length; i++){
//     var detail = details[i]
//     console.log(detail[0])
//     if(detail[0] < 50 && detail[1]<20){
//         system.push("Old")
//     }
//     else{
//         system.push("young")
//     }
    
// }

// console.log(system)
// }

// getty([[2,0], [3,2], [1,5], [50,70]])
