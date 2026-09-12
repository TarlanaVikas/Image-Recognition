
![AI Vision Web App](https://capsule-render.vercel.app/api?type=waving\&color=0:191914,50\:D97706,100:65A30D\&height=180\&section=header\&text=AI%20Vision%20Web%20App\&fontSize=44\&fontColor=FFFDF7\&animation=fadeIn\&fontAlignY=38)

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-14-191914?style=for-the-badge&logo=next.js&logoColor=white"/>
  <img src="https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=191914"/>
  <img src="https://img.shields.io/badge/TensorFlow.js-AI-D97706?style=for-the-badge&logo=tensorflow&logoColor=white"/>
  <img src="https://img.shields.io/badge/TailwindCSS-UI-65A30D?style=for-the-badge&logo=tailwindcss&logoColor=white"/>
  <img src="https://img.shields.io/badge/JavaScript-ES6%2B-F7DF1E?style=for-the-badge&logo=javascript&logoColor=191914"/>
</p>

<p align="center">
  <strong>Detect objects • Classify images • Run AI locally • Protect your data</strong>
</p>

<p align="center">
  <a href="https://image-recognition-vercel.vercel.app/">
    <img src="https://img.shields.io/badge/Live%20Demo-Vercel-success?style=for-the-badge&logo=vercel"/>
  </a>
</p>

---

## ✨ About

**AI Vision Web App** is a modern browser-based computer vision application that brings **real-time object detection and image classification** directly to the user's browser.

Powered by **TensorFlow.js**, the application runs pretrained machine learning models completely on the client side, eliminating the need for a dedicated AI backend server.

The application provides two core computer vision experiences:

* Real-time object detection through a webcam
* Image classification through image uploads

> 🔒 AI inference happens locally in the browser, helping keep camera and image data on the user's device.

---

## 🚀 Features

### 📷 Real-Time Object Detection

* Access the device webcam
* Detect multiple objects in real time
* Display bounding boxes around detected objects
* Show prediction labels and confidence scores
* Powered by the **COCO-SSD** object detection model
* Works directly inside the browser

Objects supported by the COCO dataset include:

* Person
* Laptop
* Cell phone
* Bottle
* Chair
* Keyboard
* Mouse
* Monitor
* Backpack
* Cup
* Book
* And many more

---

### 🖼️ Image Classification

* Upload an image directly from your device
* Analyze the image using a pretrained AI model
* Generate classification predictions
* Display prediction confidence
* Powered by **MobileNet**
* No image upload to an external AI server

Example:

```text
Golden Retriever — 92.34%
Dog — 4.21%
Labrador — 1.90%
```

---

### 🧠 Browser-Based AI

The application uses **TensorFlow.js** to execute machine learning models directly in the browser.

```text
Camera / Image
      ↓
TensorFlow.js
      ↓
Pretrained AI Model
      ↓
Prediction
      ↓
React Interface
```

No dedicated Python inference server or cloud AI API is required.

---

### 🔒 Privacy-First Processing

* Camera processing happens locally
* Uploaded images are processed locally
* No AI backend server is required
* No external database is required
* User images do not need to leave the device

This makes the application suitable for demonstrating **client-side machine learning and privacy-focused AI applications**.

---

## 🛠️ Tech Stack

| Technology          | Purpose                                   |
| ------------------- | ----------------------------------------- |
| **Next.js 14**      | React framework and application structure |
| **React 18**        | UI rendering and component architecture   |
| **TensorFlow.js**   | Browser-based machine learning            |
| **COCO-SSD**        | Real-time object detection                |
| **MobileNet**       | Image classification                      |
| **TailwindCSS**     | Styling and responsive UI                 |
| **JavaScript ES6+** | Application logic                         |
| **Vercel**          | Deployment                                |

---

## 🏗️ Architecture

```text
                   ┌─────────────────────┐
                   │    User Input       │
                   │                     │
                   │ Webcam / Image      │
                   └──────────┬──────────┘
                              │
                              ▼
                   ┌─────────────────────┐
                   │   TensorFlow.js     │
                   │   Browser Engine    │
                   └──────────┬──────────┘
                              │
                  ┌───────────┴───────────┐
                  │                       │
                  ▼                       ▼
          ┌───────────────┐       ┌───────────────┐
          │   COCO-SSD    │       │   MobileNet   │
          │ Object Detect │       │ Classification│
          └───────┬───────┘       └───────┬───────┘
                  │                       │
                  └───────────┬───────────┘
                              ▼
                   ┌─────────────────────┐
                   │ Prediction Results  │
                   └──────────┬──────────┘
                              ▼
                   ┌─────────────────────┐
                   │ React + Tailwind UI │
                   └─────────────────────┘
```

---

## 📂 Project Structure

```text
image-recognition/
│
├── src/
│   ├── app/
│   │   ├── page.js          # Real-time object detection
│   │   ├── recog/
│   │   │   └── page.js      # Image classification
│   │   └── layout.js        # Application layout
│   │
│   ├── components/
│   │   └── Navbar.js        # Navigation component
│   │
│   └── styles/
│       └── globals.css      # Global styles
│
├── public/
│
├── package.json
├── package-lock.json
└── README.md
```

---

## ⚙️ Getting Started

### Clone the repository

```bash
git clone https://github.com/TarlanaVikas/Image-Recognition.git
cd Image-Recognition
```

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

Open the application at:

```text
http://localhost:3000
```

---

## 🎮 Usage

### Camera Detection

Navigate to:

```text
/
```

Then:

1. Allow camera access
2. Point the camera toward objects
3. TensorFlow.js loads the COCO-SSD model
4. Detected objects appear with predictions

### Image Recognition

Navigate to:

```text
/recog
```

Then:

1. Select an image
2. Wait for the MobileNet model to load
3. The image is processed locally
4. Classification predictions are displayed

---

## 📸 Screenshots

Add your application screenshots inside:

```text
screenshots/
├── object-detection.png
└── image-recognition.png
```

Then display them in the README:

```markdown
![Object Detection](screenshots/object-detection.png)

![Image Recognition](screenshots/image-recognition.png)
```

---

## 🌐 Live Demo

Try the deployed application:

<p align="center">
  <a href="https://image-recognition-vercel.vercel.app/">
    <img src="https://img.shields.io/badge/🚀%20Open%20AI%20Vision-Live%20Demo-D97706?style=for-the-badge"/>
  </a>
</p>

---

## 🔐 Privacy

AI inference is performed **inside the user's browser** using TensorFlow.js.

```text
Your Camera
     │
     ▼
Browser
     │
     ▼
TensorFlow.js
     │
     ▼
AI Model
     │
     ▼
Prediction
```

There is no requirement for a separate backend AI inference server.

> Camera and image processing are performed locally by the application.

---

## 🔮 Future Enhancements

* 🏷️ Improved confidence labels
* 📊 Real-time FPS monitoring
* 🔢 Object counting
* 📦 Detection history
* 📂 Drag-and-drop image uploads
* 📱 Improved mobile experience
* 🎯 Custom object detection models
* 📈 AI prediction analytics
* 🌓 Advanced theme support
* ⚡ Performance optimization for low-end devices

---

## 👨‍💻 Author

**Vikas Tarlana**

<p align="center">
  <a href="https://github.com/TarlanaVikas">
    <img src="https://img.shields.io/badge/GitHub-TarlanaVikas-191914?style=for-the-badge&logo=github"/>
  </a>
</p>

---

## 📜 License

This project is licensed under the **MIT License**.

---

## 🙌 Acknowledgements

* **TensorFlow.js** for browser-based machine learning
* **COCO-SSD** for object detection
* **MobileNet** for image classification
* **Next.js** for the application framework
* **React** for the user interface
* **TailwindCSS** for styling
* **Open-source machine learning community**

---

<p align="center">
  ⭐ If you like <strong>AI Vision Web App</strong>, consider starring the repository!
</p>
