# Fetch Metadata

## Overview

`fetch-metadata` is a web application designed to fetch and display metadata from a list of URLs. It allows users to input URLs, retrieve metadata such as titles, descriptions, and images, and view this information in a user-friendly format.

## Features

- Input multiple URLs and retrieve their metadata.
- View metadata such as title, description, and image in a list format.
- Add more URL fields dynamically.
- Clear the displayed metadata.

## Live Demo

https://fetch-metadata-b6tn.onrender.com/

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Server](#server)
- [Client](#client)


## Installation

## Docker Installation Instructions

To run the `fetch-metadata` backend using Docker, follow these steps:

### Prerequisites

1. **Docker**: Make sure Docker is installed on your machine. You can download it from [Docker's official website](https://www.docker.com/get-started).

### Build and Run with Docker

1. **Clone the Repository**

   If you haven't cloned the repository yet, use the following command:
   ```bash
   git clone https://github.com/UriBaynesay/fetch-metadata.git
   cd fetch-metadata
   ```

2. **Build the Docker Image**

   Build the Docker image from the `Dockerfile`:
   ```bash
   docker build -t fetch-metadata ./backend
   ```

   - `-t fetch-metadata` tags the image with the name `fetch-metadata`.

3. **Run the Docker Container**

   Start a container from the Docker image.
   ```bash
   docker run -p 3000:3030 fetch-metadata
   ```

   The application will be available at `http://localhost:3000`.

## Usage

1. **Open the Application**

   Navigate to `http://localhost:3000` in your web browser.

2. **Input URLs**

   Enter URLs into the provided input fields. You can add more fields by clicking the "Add Another URL" button.

3. **Submit URLs**

   Click the "Submit" button to fetch metadata for the entered URLs.

4. **View Metadata**

   The metadata will be displayed in a list format. Each item will show the title, description, and an image (if available).

5. **Clear Metadata**

   Click the "Go again" button to clear the displayed metadata and start over.


## Server

The server-side code handles metadata retrieval and is implemented using Node.js and Express. It provides the following API endpoint:

- **POST /api/metadata**

  **Request Body:**

  ```json
  [
    "https://www.ynet.co.il/home/0,7340,L-8,00.html",
    "https://www.mako.co.il/"
  ]
  ```

  **Response:**

  ```json
  [
     {
        "title": "ynet - חדשות, כלכלה, ספורט ובריאות - דיווחים שוטפים מהארץ ומהעולם",
        "description": "אתר החדשות המוביל בישראל מבית ידיעות אחרונות. סיקור מלא של חדשות מישראל והעולם, ספורט, כלכלה, תרבות, אוכל, מדע וטבע, כל מה שקורה וכל מה שמעניין ב ynet",
        "imageUrl": "https://ynet-pic1.yit.co.il/picserver5/wcm_upload/2024/07/09/B1LH3j5DR/new_logo_gif_ynet.gif"
    },
    {
        "title": "mako חדשות. בידור. טלוויזיה",
        "description": "אתר החדשות והבידור המוביל בישראל עם מגוון רחב של כתבות בתחומי הפלילים, תרבות, טלוויזיה, אוכל, מוזיקה, אופנה, חופש, מגזין סוף השבוע, תוכניות קשת 12 ועוד",
        "imageUrl": "https://img.mako.co.il/2024/06/06/N12.svg"
    }
  ]
  ```

  **Error Handling:**

  - Returns HTTP status code 400 if metadata cannot be fetched.

## Client

The client-side application is built with React. It provides the following components:

- **`UrlForm`**

  A form for inputting URLs, with buttons to add more fields and submit the URLs.

- **`MetaDataList`**

  Displays a list of metadata previews.

- **`MetaDataPreview`**

  Shows a preview of metadata for a single URL.
