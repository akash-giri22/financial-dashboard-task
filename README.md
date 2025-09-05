Financial Dashboard - Next.js Project
This is a financial dashboard application built using Next.js, Tailwind CSS, and Capacitor. It is designed to run on both web and Android platforms.

Project Objective
The objective of this project was to create a dashboard UI that includes:

A responsive UI using Next.js (App Router) and Tailwind CSS.

Various types of charts (bubble, bar, and line) with Chart.js.

Data fetching from a mock API.

An option to download the dashboard as a PDF.

A native Android application version using Capacitor.

Features
Dashboard UI: A modern and clean interface that looks good on desktop, tablet, and mobile devices.

Data Visualization: Interactive charts for Client, SIP Business, and Monthly MIS data.

Dynamic Filters: Time-range buttons (e.g., 3 Days, 7 Days) to filter data dynamically.

PDF Export: A button to download the entire dashboard content as a PDF file.

Dark Mode: A toggle button to switch between light and dark themes.

Loading State: Loading animations for charts while data is being fetched.

Cross-Platform: The application runs as a web app and a native Android app from the same codebase.

Technology Stack
Framework: Next.js 14 (App Router)

Styling: Tailwind CSS

Charts: Chart.js with react-chartjs-2

PDF Generation: jspdf, html2canvas

Mobile Platform: Capacitor

How to Set Up and Run the Application
This project requires Node.js and npm/yarn. Make sure they are installed on your system.

1. To Run the Web Application
Install dependencies:

npm install

Start the development server:

npm run dev

You can now view the application in your browser at http://localhost:3000.

Create a production build:

npm run build

This command creates the static build files in the out folder.

2. To Run the Android Application
To build the Android app using Capacitor, you must have Android Studio installed.

Set up Capacitor:

npm install @capacitor/core @capacitor/cli
npx cap init

(Enter the app name and ID when prompted)

Add the Android platform:

npx cap add android

Sync code with the Android project:

npm run build
npx cap sync

Open the project in Android Studio:

npx cap open android

In Android Studio, click the Run button  to launch the application on an emulator or a physical device.

Project Files
src/app/page.tsx: Handles the main UI and logic for the dashboard.

src/app/components/: Contains various UI components like Charts, Navbar, etc.

src/app/data/mock-api.ts: Provides the mock API for data fetching.

next.config.ts: Configures the static export for Capacitor.

capacitor.config.ts: Capacitor configuration settings.
