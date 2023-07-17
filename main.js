// int 0 1 2 
// float double 2.5 3.25
// boolean true false
// array []
// String "Ahmed"
// object

// var data = [
//     ["Ahmed", 20, "Helwan"], //0
//     ["Mohamed", 12, "Maadi"], //1
//     ["Omar", 15, "El Moqatam"] //2
// ];

// for(var i = 0; i < data.length; i++) {
//     for(var x = 0; x < data[i].length; x++) {
//         document.write(data[i][x] + "<br>")
//     }
// }


var tbody = document.getElementById('tbody');


var students_data = [
    {name: "Ahmed", age: 15, phone: "010176555", address: "Helwan"},
    {name: "Mohamed", age: 20, phone: "02551352", address: "Maadi"},
    {name: "Ahmed", age: 15, phone: "010176555", address: "Helwan"},
    {name: "Mohamed", age: 20, phone: "02551352", address: "Maadi"},
    {name: "Ahmed", age: 15, phone: "010176555", address: "Helwan"},
    {name: "Mohamed", age: 20, phone: "02551352", address: "Maadi"},
    {name: "Ahmed", age: 15, phone: "010176555", address: "Helwan"},
    {name: "Mohamed", age: 20, phone: "02551352", address: "Maadi"},
    {name: "Ahmed", age: 15, phone: "010176555", address: "Helwan"},
    {name: "Mohamed", age: 20, phone: "02551352", address: "Maadi"},
    {name: "Ahmed", age: 15, phone: "010176555", address: "Helwan"},
    {name: "Mohamed", age: 20, phone: "02551352", address: "Maadi"},
    {name: "Ahmed", age: 15, phone: "010176555", address: "Helwan"},
    {name: "Mohamed", age: 20, phone: "02551352", address: "Maadi"},
    {name: "Ahmed", age: 15, phone: "010176555", address: "Helwan"},
    {name: "Mohamed", age: 20, phone: "02551352", address: "Maadi"},
    {name: "Ahmed", age: 15, phone: "010176555", address: "Helwan"},
    {name: "Mohamed", age: 20, phone: "02551352", address: "Maadi"},
    {name: "Ahmed", age: 15, phone: "010176555", address: "Helwan"},
    {name: "Mohamed", age: 20, phone: "02551352", address: "Maadi"},
    {name: "Ahmed", age: 15, phone: "010176555", address: "Helwan"},
    {name: "Mohamed", age: 20, phone: "02551352", address: "Maadi"},
    {name: "Ahmed", age: 15, phone: "010176555", address: "Helwan"},
    {name: "Mohamed", age: 20, phone: "02551352", address: "Maadi"},
    {name: "Ahmed", age: 15, phone: "010176555", address: "Helwan"},
    {name: "Mohamed", age: 20, phone: "02551352", address: "Maadi"},
    {name: "Ahmed", age: 15, phone: "010176555", address: "Helwan"},
    {name: "Mohamed", age: 20, phone: "02551352", address: "Maadi"},
    {name: "Ahmed", age: 15, phone: "010176555", address: "Helwan"},
    {name: "Mohamed", age: 20, phone: "02551352", address: "Maadi"},
    {name: "Ahmed", age: 15, phone: "010176555", address: "Helwan"},
    {name: "Mohamed", age: 20, phone: "02551352", address: "Maadi"},
]


for (var i = 0; i<students_data.length; i++) {
    tbody.innerHTML += `
    <tr>
        <td>${students_data[i].name}</td>
        <td>${students_data[i].age}</td>
        <td>${students_data[i].phone}</td>
        <td>${students_data[i].address}</td>
    </tr>
    `
}

























