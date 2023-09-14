# QR Scanner using Electron.js

This Electron.js application allows you to scan QR codes using your computer's webcam. It provides a simple interface for capturing QR codes and validating them against a predefined string.

## Table of Contents

1. [Introduction](#introduction)
2. [Features](#features)
3. [Prerequisites](#prerequisites)
4. [Installation](#installation)
5. [Usage](#usage)
6. [Project Structure](#project-structure)

## Introduction

The QR Scanner using Electron.js is a cross-platform application that utilizes Electron, Express.js, and HTML5-QRCode library to create a QR code scanning experience on your desktop.

## Features

- Scan QR codes using your computer's webcam.
- Validate scanned QR codes against a predefined string.
- Simple and user-friendly interface.
- Cross-platform support (Windows, macOS, Linux).

## Prerequisites

Before running the application, ensure you have the following dependencies installed:

- Node.js and npm (Node Package Manager): [Download Here](https://nodejs.org/)
- Electron Forge: Install it globally using `npm install -g @electron-forge/cli`

## Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/your-username/qr-scanner-electron.git
   ```

2. Navigate to the project directory:

   ```bash
   cd qr-scanner-electron
   ```

3. Install project dependencies:

   ```bash
   npm install
   ```

## Usage

1. Start the Electron application:

   ```bash
   npm start
   ```

2. The application will open, and you'll see the webcam video feed ready for QR code scanning.

3. Point your webcam at a QR code, and the application will automatically scan it.

4. If the scanned QR code matches the predefined string (e.g., "hello@world"), it will display a success message. Otherwise, it will show an error message.

## Project Structure

The project structure is organized as follows:

- `main.js`: Electron main script that creates the Electron window.
- `camera.html`: HTML file containing the webcam video feed and QR code scanning logic.
- `menu.js`: Module for creating the application menu.
- `api.js`: Express.js API for validating QR code content.
- `preload.js`: Preload script for customizing web pages.
- `package.json`: Project configuration and dependencies.
- `forge.config.js`: Configuration for Electron Forge.
- `test.js`: Example test script for API testing.

