# ☁️ Cloud Resume Challenge (Serverless AWS Project)

![AWS](https://img.shields.io/badge/AWS-Cloud-orange?logo=amazon-aws)
![Lambda](https://img.shields.io/badge/Lambda-Serverless-yellow?logo=aws-lambda)
![DynamoDB](https://img.shields.io/badge/DynamoDB-NoSQL-blue)
![Frontend](https://img.shields.io/badge/Frontend-HTML%2FCSS%2FJS-green)

A fully serverless resume web application built using AWS services with a real-time visitor counter powered by a backend API.

This project demonstrates **serverless architecture, REST APIs, and cloud integration**.

---

# 🚀 Architecture

```text id="u7xkq1"
User Browser
     ↓
S3 Static Website Hosting
     ↓
JavaScript Fetch API
     ↓
API Gateway
     ↓
AWS Lambda
     ↓
DynamoDB
```
![Architecture](cloud-resume-challenge-architecture.png)

---

# 🌐 Features

* ⚡ Fully serverless backend (no servers to manage)
* 📊 Live visitor counter (updates on every visit)
* 🔗 REST API integration with frontend
* 🧠 Backend logic using AWS Lambda
* 🗄️ Scalable NoSQL database (DynamoDB)
* ☁️ Static website hosting using S3

---

# 🧰 AWS Services Used

* Amazon Web Services — Cloud infrastructure
* Amazon S3 — Static website hosting
* Amazon API Gateway — REST API management
* AWS Lambda — Backend logic execution
* Amazon DynamoDB — Visitor counter database
* AWS Identity and Access Management — Permissions & security

---

# 📁 Project Structure

```text id="9x0p2m"
cloud-resume-challenge/
│
├── index.html
├── style.css
├── script.js
└── /screenshots
    ├── home-page.png
    ├── counter-working.png
    ├── dynamodb-table.png
    ├── lambda-function.png
    └── api-gateway.png
```

---

# ⚙️ How It Works

## 1. Frontend (S3 Hosting)

The resume website is hosted using AWS S3 static website hosting.

---

## 2. API Call (Frontend → Backend)

```javascript id="gk2n4x"
fetch("YOUR_API_URL")
  .then(res => res.json())
  .then(data => {
    document.getElementById("visitor-count").innerText = data.count;
  });
```

---

## 3. Backend Flow

* API Gateway receives request
* Triggers AWS Lambda function
* Lambda reads & updates DynamoDB counter
* Returns updated visitor count

---

# 📊 Example API Response

```json id="8c0x7k"
{
  "count": 245
}
```

## 🎥 Project Demo

A short walkthrough of the working website and visitor counter system.

![Demo](live-demo-website.mp4)

---

# 📸 Screenshots

## 🖥️ Website UI (Final Portfolio Website)

![Home Page](screenshots/final-output.png)

## 📊 S3 Bucket Files

![S3 Bucket](screenshots/output-1.png)

## 🗄️ S3 Static Website Hosting Enabled

![S3 Web Hosting](screenshots/output-2.png)

## ⚙️ API Gateway Route

![API Gateway](screenshots/output-3.png)

## 🌐 Lambda Function Code

![Lambda Function](screenshots/ouput-4.png)

## 🌐 Lambda Test Success Output

![Lambda Test](screenshots/output-5.png)

## 🌐 DynamoDB Table (Counter Item)

![DynamoDB Table](screenshots/output-6.png)

## 🌐 API Endpoint Working (Browser Response)

![API Endpoint](screenshots/output-7.png)

---

# 🧠 Key Learnings

* Serverless architecture using AWS Lambda
* REST API development using API Gateway
* NoSQL database design using DynamoDB
* Static website hosting using S3
* End-to-end cloud application flow
* IAM roles and permissions

---

# 💡 Resume Summary

Built a serverless resume web application using AWS S3, API Gateway, Lambda, and DynamoDB. Implemented a real-time visitor tracking system using REST APIs and NoSQL database integration, demonstrating cloud architecture and backend development skills.

---

# 🚀 Future Improvements

* Add custom domain using Route 53
* Add CI/CD pipeline using GitHub Actions
* Improve UI/UX design
* Add analytics dashboard
* Add HTTPS with domain hosting

---

# 👩‍💻 Author

**Astha Shetty**
GitHub: [Astha-S12](https://github.com/Astha-S12)

---
