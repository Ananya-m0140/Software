
# Social Connect for IITians

A full-featured social media platform designed to enhance academic collaboration and opportunity sharing among IIT students, professors, and alumni. This project was developed as part of an academic course under the mentorship of **Prof. Debasish Samanta**.

## 🚀 Features

* 🗣️ **Social Feed** – Share achievements, post doubts, and engage with peers.
* 🎓 **Internship & Hackathon Portals** – Professors and alumni can post opportunities; students can apply and track applications.
* 💬 **Real-Time Chat** – One-to-one messaging with instant updates using **Socket.io**.
* 👤 **Profile Management** – Users can showcase academic status, projects, internships, and hackathon participation.
* 🔐 **Authentication** – Secure sign-in using email-based login and **JWT tokens**.
* 🔍 **Smart Search** – Efficient content and user discovery via keyword-based filters.
* 📁 **Media Uploads** – Supports image and document uploads with **Multer** and **Cloudinary** integration.
* 🧪 **Testing** – Robust backend testing using **Jest**.
* ⚙️ **CI/CD Pipeline** – Continuous integration and deployment via **GitHub Actions**.

## 🛠️ Tech Stack

* **Frontend:** React.js, DaisyUI, TailwindCSS
* **Backend:** Node.js, Express.js
* **Database:** MongoDB
* **Authentication:** JWT (JSON Web Tokens)
* **Real-Time Communication:** Socket.io
* **File Uploads:** Multer, Cloudinary
* **Testing:** Jest
* **Deployment:** GitHub Actions (CI/CD), Docker (optional)

## 📁 Folder Structure (simplified)

```
.
├── frontend/                 # React frontend
│   ├── components/
│   ├── pages/
│   ├── styles/
│   └── ...
├── backend/                 # Express backend
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── ...
├── tests/                 # Jest test cases
├── .github/workflows/     # GitHub Actions for CI/CD
├── package.json
└── README.md
```

## 📦 Installation

```bash
# Clone the repo
git clone https://github.com/your-username/social-connect.git
cd social-connect

# Install backend dependencies
cd server
npm install

# Install frontend dependencies
cd ../client
npm install
```

## ⚙️ Usage

```bash
# Run backend
cd server
npm start

# Run frontend
cd ../client
npm start
```

## ✅ Running Tests

```bash
cd server
npm test
```

## 🚢 Deployment

This project is CI/CD enabled via **GitHub Actions**. Any push to the main branch triggers the pipeline to build, test, and deploy the application.

## 🧠 Learnings & Takeaways

* Designed and implemented a full-stack application with real-time features and media handling.
* Applied best practices in authentication, testing, and deployment automation.
* Gained hands-on experience with advanced search techniques and MongoDB schema design.

## 📚 Course Info

**Course:** Software Engineering
**Instructor:** Prof. Debasish Samanta
**Institute:** IIT Kharagpur
**Term:** Spring 2025

---

Would you like a sample deployment URL section or Dockerfile added as well?
