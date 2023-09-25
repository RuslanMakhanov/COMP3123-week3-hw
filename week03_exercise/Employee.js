//TODO - Create Employee Module here and export to use in index.js
exports.employees = [
    {id: 1, firstName: "Pritesh", lastName: "Patel", email: "pritesh@gmail.com", Salary:5000},
    {id: 2, firstName: "Krish", lastName: "Lee", email: "krish@gmail.com", Salary:4000},
    {id: 3, firstName: "Racks", lastName: "Jacson", email: "racks@gmail.com", Salary:5500},
    {id: 4, firstName: "Denial", lastName: "Roast", email: "denial@gmail.com", Salary:9000}
]

module.exports = class Employee {
    constructor(eid,fnm,lnm,email,salary){
        this.eid = eid
        this.fnm = fnm
        this.lnm = lnm
        this.email = email
        this.salary = salary
    }
    print(){
        console.log(this.eid)
        console.log(this.fnm)
        console.log(this.lnm)
        console.log(this.email)
        console.log(this.salary)
    }
  
}


