//var http = require("http");
//TODO - Use Employee Module here
import * as http from "http";
import {employees} from './Employee.js';
console.log("Lab 03 -  NodeJs");

//TODO - Fix any errors you found working with lab exercise

//Define Server Port
const port = process.env.PORT || 8081

//Create Web Server using CORE API
const server = http.createServer((req, res) => {
    if (req.method !== 'GET') {
        res.end(`{"error": "${http.STATUS_CODES[405]}"}`)
    } else {
        if (req.url === '/') {
            //TODO - Display message "<h1>Welcome to Lab Exercise 03</h1>"
            res.write("<h1>Welcome to Lab Exercise 03</h1>")
            
            
        }

        if (req.url === '/employee') {
            //TODO - Display all details for employees in JSON format
            res.write(JSON.stringify(employees))
            
        }

        if (req.url === '/employee/names') {
            //TODO - Display only all employees {first name + lastname} in Ascending order in JSON Array
            //e.g. [ "Ash Lee", "Mac Mohan", "Pritesh Patel"]
            let employeeList = employees.map(function(name) {return name.firstName +" "+ name.lastName});
        
            res.write(JSON.stringify(employeeList.sort()))
            
        }

        if (req.url === '/employee/totalsalary') {
            //TODO - Display Sum of all employees salary in given JSON format 
            //e.g. { "total_salary" : 100 }  
            let salaries = employees.map(function(employee_salary) {return employee_salary.Salary });
            let sum = 0;
            for(let i = 0; i<salaries.length; i++){
                sum = sum + salaries[i];
                
            }
            let finalSum = {"total_salary":sum}
            res.write(JSON.stringify(finalSum));
            
            
    }
    res.end(`{"error": "${http.STATUS_CODES[404]}"}`)
    }
})

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})