// IIFE: Immediate Invoked Function Expression
// (async function () {
//   const data = await fetch("./data.json");
//   const res = await data.json();

//   let employees = res;
//   let selectedEmployeeId = employees[0].id;
//   let selectedEmployee = employees[0];

//   const employeeList = document.querySelector(".employees__names--list");
//   const employeeInfo = document.querySelector(".employees__names--info");

//   // Add Employee logic
//   const createEmployee = document.querySelector(".createEmployee");
//   const addEmployeeModal = document.querySelector(".addEmployee");
//   const addEmployeeForm = document.querySelector(".addEmployee_create");

//   createEmployee.addEventListener("click", () => {
//     addEmployeeModal.style.display = "flex";
//   });

//   addEmployeeModal.addEventListener("click", (e) => {
//     if (e.target.className === "addEmployee") {
//       addEmployeeModal.style.display = "none";
//     }
//   });

//   const dobInput = document.querySelector(".addEmployee_create--dob");
//   dobInput.max = `${new Date().getFullYear() - 18} - ${new Date()
//     .toISOString()
//     .slice(5, 10)}`;

//   addEmployeeForm.addEventListener("submit", (e) => {
//     e.preventDefault();

//     const formData = new FormData(addEmployeeForm);
//     const values = [...formData.entries()];

//     // console.log(values);
//     let empData = {};
//     values.forEach((val) => {
//       empData[val[0]] = val[1];
//     });

//     console.log(empData);
//     empData.id = employees[employees.length - 1]?.id
//       ? employees[employees.length - 1].id + 1
//       : 1;
//     empData.age =
//       new Date().getFullYear() - parseInt(empData.dob.slice(0, 4), 10);
//     empData.imageUrl =
//       empData.imageUrl || "https://cdn-icons-png.flaticon.com/512/0/93.png";

//     employees.push(empData);
//     renderEmployees();
//     addEmployeeForm.reset();
//     addEmployeeModal.style.display = "none";
//   });

//   // Select employee logic
//   employeeList.addEventListener("click", (e) => {
//     // If clicked on span select the element
//     if (e.target.tagName === "SPAN" && selectedEmployeeId !== e.target.id) {
//       selectedEmployeeId = e.target.id;
//       renderEmployees();
//       // render Single employee
//       renderSingleEmployee();
//     }

//     // delete employee
//     if (e.target.tagName === "I") {
//       employees = employees.filter(
//         (emp) => String(emp.id) !== e.target.parentNode.id
//       );

//       if (String(selectedEmployeeId) === e.target.parentNode.id) {
//         selectedEmployeeId = employees[0]?.id || -1;
//         selectedEmployee = employees[0] || {};
//         renderSingleEmployee();
//       }

//       renderEmployees();
//     }
//   });

//   // Render employees
//   const renderEmployees = () => {
//     employeeList.innerHTML = "";
//     employees.forEach((emp) => {
//       const employee = document.createElement("span");
//       employee.classList.add("employees__names--item");

//       if (parseInt(selectedEmployeeId, 10) === emp.id) {
//         employee.classList.add("selected");
//         selectedEmployee = emp;
//       }

//       employee.setAttribute("id", emp.id);
//       employee.innerHTML = `${emp.firstName} ${emp.lastName} <i class="employeeDelete">❌</i>`;

//       employeeList.append(employee);
//     });
//   };

//   // Render Single Employee
//   const renderSingleEmployee = () => {
//     if (selectedEmployeeId === -1) {
//       employeeInfo.innerHTML = "";
//       return;
//     }

//     employeeInfo.innerHTML = `
//     <img src="${selectedEmployee.imageUrl}" />
//     <span class="employees__single--heading">
//     ${selectedEmployee.firstName} ${selectedEmployee.lastName} (${selectedEmployee.age})
//     </span>
//     <span>${selectedEmployee.address}</span>
//     <span>${selectedEmployee.email}</span>
//     <span>Mobile - ${selectedEmployee.contactNumber}</span>
//     <span>DOB - ${selectedEmployee.dob}</span>
//     `;
//   };

//   if (selectedEmployee) renderSingleEmployee();
//   renderEmployees();
// })();

function x() {
  for (var i = 1; i <= 5; i++) {
    function y(j) {
      setTimeout(() => {
        console.log(j);
      }, j * 1000);
    }
    y(i);
  }
}
x();
