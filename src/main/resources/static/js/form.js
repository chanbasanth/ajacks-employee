// Form Fields
const form = document.getElementById("employeeForm");
const cancelBtn = document.getElementById("cancelBtn");
const modal = document.getElementById("employeeModal");

let employees = JSON.parse(localStorage.getItem("employees")) || [];
let editingId = document.getElementById("employeeId")?.value || null;

// Utility to show validation error
function showError(inputId, message) {
    const input = document.getElementById(inputId);
    const error = document.getElementById(`${inputId}Error`);
    input.classList.add("input-error");
    if (error) {
        error.textContent = message;
        error.style.display = "block";
    }
}

// Utility to clear validation errors
function clearErrors() {
    document.querySelectorAll(".error-msg").forEach(el => {
        el.textContent = "";
        el.style.display = "none";
    });
    document.querySelectorAll(".input-error").forEach(el => {
        el.classList.remove("input-error");
    });
}

// Close modal and clear form
function closeModal() {
    modal.classList.add("hidden");
    form.reset();
    editingId = null;
    clearErrors();
}

// Form Submit Handler
form.addEventListener("submit", (e) => {
    e.preventDefault();
    clearErrors();

    const firstName = form.firstName.value.trim();
    const lastName = form.lastName.value.trim();
    const email = form.email.value.trim();
    const department = form.department.value;
    const role = form.role.value.trim();

    let isValid = true;

    if (!firstName) {
        showError("firstName", "First name is required.");
        isValid = false;
    }
    if (!lastName) {
        showError("lastName", "Last name is required.");
        isValid = false;
    }
    if (!email) {
        showError("email", "Email is required.");
        isValid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
        showError("email", "Invalid email format.");
        isValid = false;
    }
    if (!department) {
        showError("department", "Please select a department.");
        isValid = false;
    }
    if (!role) {
        showError("role", "Role is required.");
        isValid = false;
    }

    if (!isValid) return;

    const newEmp = {
        id: editingId ? Number(editingId) : Date.now(),
        firstName,
        lastName,
        email,
        department,
        role
    };

    if (editingId) {
        employees = employees.map(emp => emp.id === newEmp.id ? newEmp : emp);
    } else {
        employees.push(newEmp);
    }

    localStorage.setItem("employees", JSON.stringify(employees));
    closeModal();

    // Optional: Reload or redirect to dashboard
    window.location.href = "/"; // assumes index.ftlh is root
});

// Cancel Button
cancelBtn.addEventListener("click", () => {
    closeModal();
});
