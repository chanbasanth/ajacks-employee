<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Employee Directory</title>
    <link rel="stylesheet" href="/static/css/style.css" />
</head>

<body>
    <div class="header">
        <h1 class="title">Employee Directory</h1>
        <div class="top-controls">
            <input type="text" id="searchBar" placeholder="Search by name or email" />
            <button id="filterBtn">Filter</button>
        </div>
    </div>

    <div class="controls">
        <div class="dropdown-group">
            <label for="sortSelect">Sort:</label>
            <select id="sortSelect">
                <option value="">--Select--</option>
                <option value="firstName">First Name</option>
                <option value="department">Department</option>
            </select>

            <label for="showCount">Show:</label>
            <select id="showCount">
                <option value="10">10</option>
                <option value="25">25</option>
                <option value="50">50</option>
            </select>
        </div>
        <button id="addBtn" class="green-btn">Add Employee</button>
    </div>

    <div class="filter-sidebar hidden" id="filterSidebar">
        <h3>Filter Employees</h3>
        <label for="filterFirstName">First Name:</label>
        <input type="text" id="filterFirstName" />

        <label for="filterDepartment">Department:</label>
        <input type="text" id="filterDepartment" />

        <label for="filterRole">Role:</label>
        <input type="text" id="filterRole" />

        <button id="applyFilter">Apply</button>
        <button id="resetFilter">Reset</button>
    </div>

    <div id="employeeList" class="employee-list">
        <#-- Optional server-rendered fallback -->
        <#-- 
        <#list employees as emp>
            <div class="employee-card">
                <strong>${emp.firstName} ${emp.lastName}</strong><br>
                <strong>Email:</strong> ${emp.email}<br>
                <strong>Department:</strong> ${emp.department}<br>
                <strong>Role:</strong> ${emp.role}<br>
                <button onclick="editEmployee(${emp.id})">Edit</button>
                <button onclick="deleteEmployee(${emp.id})">Delete</button>
            </div>
        </#list>
        -->
    </div>

    <footer>
        <p>© 2025 Employee Directory App. All rights reserved.</p>
    </footer>

    <div class="modal hidden" id="employeeModal">
        <div class="modal-content">
            <h2 id="formTitle">Add Employee</h2>
            <form id="employeeForm">
                <input type="hidden" id="employeeId" />

                <label for="firstName">First Name:</label>
                <input type="text" id="firstName" required />
                <small class="error-msg" id="firstNameError"></small>

                <label for="lastName">Last Name:</label>
                <input type="text" id="lastName" required />
                <small class="error-msg" id="lastNameError"></small>

                <label for="email">Email:</label>
                <input type="email" id="email" required />
                <small class="error-msg" id="emailError"></small>

                <label for="department">Department:</label>
                <select id="department" required>
                    <option value="">--Select--</option>
                    <option value="HR">HR</option>
                    <option value="IT">IT</option>
                    <option value="Finance">Finance</option>
                </select>
                <small class="error-msg" id="departmentError"></small>

                <label for="role">Role:</label>
                <input type="text" id="role" required />
                <small class="error-msg" id="roleError"></small>

                <div class="modal-actions">
                    <button type="button" id="cancelBtn">Cancel</button>
                    <button type="submit" id="saveBtn">Save</button>
                </div>
            </form>
        </div>
    </div>

    <!-- JS -->
    <script src="/static/js/data.js"></script>
    <script src="/static/js/form.js"></script>
    <script src="/static/js/filter.js"></script>
    <script src="/static/js/app.js"></script>
</body>
</html>

