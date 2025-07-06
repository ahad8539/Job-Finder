# 📄 Job Finder

A simple React app to manage job postings — allowing you to **add**, **edit**, and **delete** job listings. All jobs are stored in the browser's `localStorage` so your data persists between sessions.

---

## 🚀 Features

✅ Add new job postings  
✅ Edit existing job postings directly from the **Add Jobs** page  
✅ Delete job postings  
✅ Listings are saved locally  
✅ Simple state management with React Context API  
✅ Client-side routing with React Router  
✅ Responsive, clean user interface

---

## 📂 Project Structure

src/
├── components/
│ ├── AddJobs.js
│ ├── Jobs.js
│ ├── Home.js
│ ├── Header.js
│ ├── Footer.js
│ ├── About.js
│ └── Listings.js
├── context/
│ └── Provider.js
├── App.js
└── App.css

yaml
Copy
Edit

---

## 📦 How to run locally

1. **Clone the repository**

```bash
git clone <your-repo-url>
cd <project-folder>
Install dependencies

bash
Copy
Edit
npm install
Start the development server

bash
Copy
Edit
npm start
Open your browser and go to http://localhost:3000 to see the app.

✨ How to use the app
Navigate to the Add Jobs page using the navigation bar.

Use the form at the top of the Add Jobs page:

Add New Job: Enter a job title and description, then click Add Job.

Edit Existing Job: Click Edit on a listed job, which loads it into the form. Modify the job details, then click Update Job to save.

Delete Job: Click Delete on a job card to remove it from the list.

All jobs are saved automatically to your browser’s localStorage, so you won’t lose them when refreshing the page.

🛠️ Tech Stack:

React

React Router DOM

React Context API

localStorage (for data persistence)

CSS

📜 License
This project is licensed under the MIT License — free to use, modify, and distribute.

🙌 Author
Abdul Ahad
📧 Email: abdul.ahad8539@gmail.com
linkedin: www.linkedin.com/in/abdul-ahad-96b24221b

Feel free to reach out if you have questions or suggestions!