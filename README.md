# Employee Directory Web Interface
A responsive and interactive employee management system built with **HTML**, **CSS**, **JavaScript**, and **Freemarker templates**.
All data is stored in **localStorage**, so no backend is required. You can optionally integrate Spring Boot + H2 DB.
---
## Features
- 🔍 Search by name or email
- 🧪 Filter by First Name, Department, Role
- 🔃 Sort by First Name or Department
- 📊 Choose how many entries to show (10/25/50)
- 📝 Add, Edit, Delete employee records
- 💬 Inline form validation with error display
- 📱 Responsive design (mobile-friendly)
- 📁 Modular JS files for better maintainability
- 🧾 Freemarker (.ftlh) templating support
---
## 🛠️ Technologies Used
- HTML5 + CSS3
- JavaScript (Vanilla)
- Freemarker Templates
- localStorage (for storing employee data)
- Spring Boot + Maven (In the fetuare...)
 /// Unser Interface Images/// 
 1. usre Interface Image : <img width="1278" height="594" alt="Screenshot 2025-07-12 122446" src="https://github.com/user-attachments/assets/c61f83d5-5eff-47de-9373-37fe1ceb92c2" />
  2. Add employee Form : <img width="1280" height="647" alt="Screenshot 2025-07-12 122503" src="https://github.com/user-attachments/assets/5856f795-4521-4ab8-9c5f-0032010a42f3" />
  3. Filter Form : <img width="1292" height="526" alt="Screenshot 2025-07-12 122520" src="https://github.com/user-attachments/assets/a906aba2-45cb-45ad-9183-276f06bda314" />
 4. Mobile view in responsive:
     <img width="505" height="693" alt="Screenshot 2025-07-12 122552" src="https://github.com/user-attachments/assets/635f373b-ab4f-41e9-bf2a-6f81e6936842" />

  



## 🧑‍💻 Setup Instructions
### 1. Clone the Repository
```bash
git clone https://github.com/chanbasanth/ajacks-employee.git
cd ajacks-employee
2. (Optional) Run with Spring Boot + Freemarker
Make sure you have JDK 8+ and Maven installed
Add dependencies: spring-boot-starter-web, spring-boot-starter-freemarker
Run using:  mvn clean spring-boot:run
App will run at: http://localhost:8080
/** Examples Dashboard **/
[Employee Interface] => (https://ibb.co/svrt4W26) 
Add Employeer Form => (https://ibb.co/9HG5wKd4)
Filter Form => (https://ibb.co/gMy2Bpvj)
Mobile Responsive size => (https://ibb.co/CsX9nP0k)

Conclusion:  
I was using the local storage for data store and return , even if we close the application the data will be save it won't erase.
in the feture I plan to use H2 database or mysql for storage. 
