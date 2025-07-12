// ==============================
// filter.js - Handles Filtering
// ==============================

function applyFilters() {
    const fname = filterFirstName.value.toLowerCase();
    const dept = filterDepartment.value.toLowerCase();
    const role = filterRole.value.toLowerCase();

    const filtered = employees.filter(emp =>
        emp.firstName.toLowerCase().includes(fname) &&
        emp.department.toLowerCase().includes(dept) &&
        emp.role.toLowerCase().includes(role)
    );

    renderEmployees(filtered);
}

function resetFilters() {
    filterFirstName.value = "";
    filterDepartment.value = "";
    filterRole.value = "";
    renderEmployees(employees);
}

function toggleFilterSidebar() {
    filterSidebar.classList.toggle("hidden");
}

// ========== Event Listeners ==========
applyFilter.addEventListener("click", applyFilters);
resetFilter.addEventListener("click", resetFilters);
filterBtn.addEventListener("click", toggleFilterSidebar);
