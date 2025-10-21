const employees = [
    { id: 1, name: 'Laura', position: 'HR Specialist', salary: 4823, avatar: 'https://t4.ftcdn.net/jpg/11/66/06/77/360_F_1166067709_2SooAuPWXp20XkGev7oOT7nuK1VThCsN.jpg' },
    { id: 2, name: 'Bob', position: 'DevOps Engineer', salary: 6198, avatar: 'https://img.favpng.com/22/11/14/3d-boy-avatar-cartoon-boy-with-glasses-in-3d-style-biFKVkT6_t.jpg' },
    { id: 3, name: 'Oliver', position: 'Project Manager', salary: 4511, avatar: 'https://img.favpng.com/22/11/14/3d-boy-avatar-cartoon-boy-with-glasses-in-3d-style-biFKVkT6_t.jpg' },
    { id: 4, name: 'Grace', position: 'Frontend Developer', salary: 5802, avatar: 'https://t4.ftcdn.net/jpg/11/66/06/77/360_F_1166067709_2SooAuPWXp20XkGev7oOT7nuK1VThCsN.jpg' },
    { id: 5, name: 'Frank', position: 'Backend Developer', salary: 3677, avatar: 'https://img.favpng.com/22/11/14/3d-boy-avatar-cartoon-boy-with-glasses-in-3d-style-biFKVkT6_t.jpg' },
    { id: 6, name: 'Julia', position: 'Frontend Developer', salary: 4090, avatar: 'https://t4.ftcdn.net/jpg/11/66/06/77/360_F_1166067709_2SooAuPWXp20XkGev7oOT7nuK1VThCsN.jpg' },
    { id: 7, name: 'Michael', position: 'Project Manager', salary: 6475, avatar: 'https://img.favpng.com/22/11/14/3d-boy-avatar-cartoon-boy-with-glasses-in-3d-style-biFKVkT6_t.jpg' },
    { id: 8, name: 'Hannah', position: 'HR Specialist', salary: 5591, avatar: 'https://t4.ftcdn.net/jpg/11/66/06/77/360_F_1166067709_2SooAuPWXp20XkGev7oOT7nuK1VThCsN.jpg' },
    { id: 9, name: 'Evelyn', position: 'DevOps Engineer', salary: 5362, avatar: 'https://t4.ftcdn.net/jpg/11/66/06/77/360_F_1166067709_2SooAuPWXp20XkGev7oOT7nuK1VThCsN.jpg' },
    { id: 10, name: 'David', position: 'Backend Developer', salary: 3711, avatar: 'https://img.favpng.com/22/11/14/3d-boy-avatar-cartoon-boy-with-glasses-in-3d-style-biFKVkT6_t.jpg' }
];



const employeeTableBody = document.querySelector('#employee-table-body');
const employeeForm = document.querySelector('#employee-form');
const search = document.querySelector('#search');
const filterPosition = document.querySelector('#filter');
const sortSelect = document.querySelector('#sort');

// Render employee table
function renderEmployeeTable(employees) {
    employeeTableBody.innerHTML = '';
    employees.forEach((employee) => {
        const row = document.createElement('tr');
        row.innerHTML = `
               <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${employee.id}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${employee.name}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${employee.position}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$${employee.salary}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <img width="50" height="50" src="${employee.avatar}" alt="Avatar of ${employee.name}" class="rounded-full" />
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <button class="delete-btn bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Delete</button>
                </td>
        `


        const deleteButton = row.querySelector('.delete-btn');

        deleteButton.addEventListener("click", () => {
            deleteEmployeeById(employee.id);
        })

        employeeTableBody.appendChild(row);
    })
}


// function renderEmployeeTable(employees) {
//     employees.forEach((employee) => {
//         const row = document.createElement('tr');
//         const tdId = document.createElement('td');
//         const tdName = document.createElement('td');
//         const tdPosition = document.createElement('td');
//         const tdSalary = document.createElement('td');
//         const tdAvatar = document.createElement('td');
//         const imgAvatar = document.createElement('img');

//         tdId.textContent = employee.id;
//         tdName.textContent = employee.name;
//         tdPosition.textContent = employee.position;
//         tdSalary.textContent = `$${employee.salary}`;
//         imgAvatar.src = employee.avatar;
//         imgAvatar.alt = `Avatar of ${employee.name}`;
//         imgAvatar.classList.add('rounded-full');
//         imgAvatar.width = 50;
//         imgAvatar.height = 50;

//         tdAvatar.appendChild(imgAvatar);
//         row.append(tdId, tdName, tdPosition, tdSalary, tdAvatar);
//         employeeTableBody.appendChild(row);
//     })
// }

// Delete employee by ID
function deleteEmployeeById(id) {
    Swal.fire({
        title: "Are you sure to delete?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
    }).then((result) => {
        // console.log(id);
        if (result.isConfirmed) {
            const index = employees.findIndex(emp => emp.id === id);
            employees.splice(index, 1);

            renderEmployeeTable(employees);
            Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
            });
        }
    });


}

renderEmployeeTable(employees);

// Handle form submission
employeeForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = document.querySelector('#name');
    const position = document.querySelector('#position');
    const salary = document.querySelector('#salary');
    const avatar = document.querySelector('#avatar');

    if (!validateForm()) {
        Swal.fire({
            title: "Error!",
            text: "Please fill in all fields.",
            icon: "error",
            position: "top-end",
            timer: 1500,
            showConfirmButton: false
        });
        return;
    }

    const newEmployee = {
        id: Date.now(),
        name: name.value,
        position: position.value,
        salary: salary.valueAsNumber || 0,
        avatar: avatar.value
    }

    employees.push(newEmployee);
    renderEmployeeTable(employees);
    resetForm();
    Swal.fire({
        title: "Success!",
        text: "Employee added successfully.",
        icon: "success",
        position: "top-end",
        timer: 1500,
        showConfirmButton: false
    });

})

// Reset form
function resetForm() {
    employeeForm.reset();
}

// Form validation
function validateForm() {
    const name = document.querySelector('#name').value.trim();
    const position = document.querySelector('#position').value.trim();
    const salary = document.querySelector('#salary').value.trim();
    const avatar = document.querySelector('#avatar').value.trim();
    let isValid = true;

    if (!name) {
        isValid = false;
    }

    if (!position) {
        isValid = false;
    }

    if (!salary) {
        isValid = false;
    }

    if (!avatar) {
        isValid = false;
    }

    return isValid;
}

// Search functionality

// search.addEventListener("input", (event) => {
//     const searchQuery = event.target.value.toLowerCase().trim();
//     const filteredEmployees = employees.filter((employee) => {
//         return employee.name.toLowerCase().includes(searchQuery) || employee.position.toLowerCase().includes(searchQuery);
//     })

//     // console.log(filteredEmployees);
//     renderEmployeeTable(filteredEmployees);

// })

search.addEventListener("keyup", (event) => {
    const searchQuery = event.target.value.toLowerCase().trim();
    const filteredEmployees = employees.filter((employee) => {
        return employee.name.toLowerCase().includes(searchQuery) || employee.position.toLowerCase().includes(searchQuery);
    })

    // console.log(filteredEmployees);
    renderEmployeeTable(filteredEmployees);

})



filterPosition.addEventListener("change", (event) => {
    const position = event.target.value.toLowerCase();

    const filteredEmployees = employees.filter((employee) => {
        switch (position) {
            case "hr specialist":
                return employee.position.toLowerCase() === "hr specialist";
            case "devops engineer":
                return employee.position.toLowerCase() === "devops engineer";
            case "project manager":
                return employee.position.toLowerCase() === "project manager";
            case "frontend developer":
                return employee.position.toLowerCase() === "frontend developer";
            case "backend developer":
                return employee.position.toLowerCase() === "backend developer";
            default:
                return true;
        }
    })

    renderEmployeeTable(filteredEmployees);
})


sortSelect.addEventListener("change", (event) => {
    const sortBy = event.target.value;

    let sortedEmployees;

    switch (sortBy) {
        case "salary-asc":
            sortedEmployees = employees.toSorted((a, b) => a.salary - b.salary);
            break;
        case "salary-desc":
            sortedEmployees = employees.toSorted((a, b) => b.salary - a.salary);
            break;
        case "name-asc":
            sortedEmployees = employees.toSorted((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));
            break;
        case "name-desc":
            sortedEmployees = employees.toSorted((a, b) => b.name.toLowerCase().localeCompare(a.name.toLowerCase()));
            break;
        default:
            sortedEmployees = [...employees];
    }

    renderEmployeeTable(sortedEmployees);
})