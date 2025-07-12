// ==============================
// Employee Directory App Logic
// ==============================

let employees = JSON.parse(localStorage.getItem("employees")) || [];

const employeeList = document.getElementById("employeeList");
const modal = document.getElementById("employeeModal");
const form = document.getElementById("employeeForm");
const formTitle = document.getElementById("formTitle");
const addBtn = document.getElementById("addBtn");
const cancelBtn = document.getElementById("cancelBtn");

const searchBar = document.getElementById("searchBar");
const sortSelect = document.getElementById("sortSelect");
const showCount = document.getElementById("showCount");

const filterSidebar = document.getElementById("filterSidebar");
const filterBtn = document.getElementById("filterBtn");
const applyFilter = document.getElementById("applyFilter");
const resetFilter = document.getElementById("resetFilter");

const filterFirstName = document.getElementById("filterFirstName");
const filterDepartment = document.getElementById("filterDepartment");
const filterRole = document.getElementById("filterRole");

let editingId = null;

// ========== Render Function ==========
function renderEmployees(data = employees) {
    employeeList.innerHTML = "";
    const count = parseInt(showCount.value) || 10;

    data.slice(0, count).forEach(emp => {
        const card = document.createElement("div");
        card.className = "employee-card";
        card.innerHTML = `
            <strong>${emp.firstName} ${emp.lastName}</strong><br>
            <strong>Email:</strong> ${emp.email}<br>
            <strong>Department:</strong> ${emp.department}<br>
            <strong>Role:</strong> ${emp.role}<br>
            <button onclick="editEmployee(${emp.id})">Edit</button>
            <button onclick="deleteEmployee(${emp.id})">Delete</button>
        `;
        employeeList.appendChild(card);
    });
}

// ========== Modal Controls ==========
function openModal(edit = false) {
    modal.classList.remove("hidden");
    formTitle.textContent = edit ? "Edit Employee" : "Add Employee";
    clearErrors();
}

function closeModal() {
    modal.classList.add("hidden");
    form.reset();
    editingId = null;
    clearErrors();
}

// ========== Form Error Handling ==========
function showError(inputId, message) {
    const input = document.getElementById(inputId);
    const errorMsg = input.nextElementSibling;
    errorMsg.textContent = message;
    errorMsg.style.display = "block";
    input.classList.add("input-error");
}

function clearErrors() {
    const errors = document.querySelectorAll(".error-msg");
    errors.forEach(e => e.textContent = "");

    const errorInputs = document.querySelectorAll(".input-error");
    errorInputs.forEach(i => i.classList.remove("input-error"));
}

// ========== CRUD Operations ==========
function editEmployee(id) {
    const emp = employees.find(e => e.id === id);
    if (!emp) return;

    editingId = id;
    form.firstName.value = emp.firstName;
    form.lastName.value = emp.lastName;
    form.email.value = emp.email;
    form.department.value = emp.department;
    form.role.value = emp.role;
    openModal(true);
}

function deleteEmployee(id) {
    if (!confirm("Are you sure you want to delete this employee?")) return;
    employees = employees.filter(emp => emp.id !== id);
    localStorage.setItem("employees", JSON.stringify(employees));
    renderEmployees();
}

// ========== Form Submission ==========
form.addEventListener("submit", (e) => {
    e.preventDefault();
    clearErrors();

    const newEmp = {
        id: editingId || Date.now(),
        firstName: form.firstName.value.trim(),
        lastName: form.lastName.value.trim(),
        email: form.email.value.trim(),
        department: form.department.value,
        role: form.role.value.trim()
    };

    let isValid = true;

    if (!newEmp.firstName) {
        showError("firstName", "First name is required.");
        isValid = false;
    }
    if (!newEmp.lastName) {
        showError("lastName", "Last name is required.");
        isValid = false;
    }
    if (!newEmp.email) {
        showError("email", "Email is required.");
        isValid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(newEmp.email)) {
        showError("email", "Invalid email format.");
        isValid = false;
    }
    if (!newEmp.department) {
        showError("department", "Department is required.");
        isValid = false;
    }
    if (!newEmp.role) {
        showError("role", "Role is required.");
        isValid = false;
    }

    if (!isValid) return;

    if (editingId) {
        employees = employees.map(emp => emp.id === editingId ? newEmp : emp);
    } else {
        employees.push(newEmp);
    }

    localStorage.setItem("employees", JSON.stringify(employees));
    closeModal();
    renderEmployees();
});

// ========== Search, Sort, Filter ==========
searchBar.addEventListener("input", () => {
    const query = searchBar.value.toLowerCase();
    const filtered = employees.filter(emp =>
        emp.firstName.toLowerCase().includes(query) ||
        emp.lastName.toLowerCase().includes(query) ||
        emp.email.toLowerCase().includes(query)
    );
    renderEmployees(filtered);
});

sortSelect.addEventListener("change", () => {
    const key = sortSelect.value;
    if (!key) return;
    employees.sort((a, b) => a[key].localeCompare(b[key]));
    renderEmployees();
});

applyFilter.addEventListener("click", () => {
    const fname = filterFirstName.value.toLowerCase();
    const dept = filterDepartment.value.toLowerCase();
    const role = filterRole.value.toLowerCase();

    const filtered = employees.filter(emp =>
        emp.firstName.toLowerCase().includes(fname) &&
        emp.department.toLowerCase().includes(dept) &&
        emp.role.toLowerCase().includes(role)
    );

    renderEmployees(filtered);
});

resetFilter.addEventListener("click", () => {
    filterFirstName.value = "";
    filterDepartment.value = "";
    filterRole.value = "";
    renderEmployees();
});

// ========== Event Bindings ==========
addBtn.onclick = () => openModal();
cancelBtn.onclick = () => closeModal();
filterBtn.onclick = () => filterSidebar.classList.toggle("hidden");
showCount.addEventListener("change", () => renderEmployees());

// ========== Initialize ==========
renderEmployees();
