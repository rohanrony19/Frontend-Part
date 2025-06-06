function functionClick(a,b){
    let pValue = document.getElementsByTagName('p')[0].innerHTML;
    
    console.log(pValue)
}

let emp1 = {id:12,employeeName:'abc',salary:30000}

let emp2 = new Object();
emp2.id=1;
emp2.name='Rony';
emp2.age= 23;
emp2.salary=50000;
emp2.id=2;


function newFunction(){
    console.log(emp2)
}

function emp3(id,name,age,salary){
    this.id= id;
    this.name=name;
    this.age=age;
    this.salary=salary;
}
