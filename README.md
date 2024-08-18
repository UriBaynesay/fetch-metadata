--

# Fetch Metadata

## Overview

`fetch-metadata` is a web application designed to fetch and display metadata from a list of URLs. It allows users to input URLs, retrieve metadata such as titles, descriptions, and images, and view this information in a user-friendly format.

## Features

- Input multiple URLs and retrieve their metadata.
- View metadata such as title, description, and image in a list format.
- Add more URL fields dynamically.
- Clear the displayed metadata.

## Live Demo

'https://fetch-metadata-b6tn.onrender.com/'

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Server](#server)
- [Client](#client)


## Installation

To get started with `fetch-metadata`, follow these steps:

1. **Clone the Repository**

   ```bash
   git clone https://github.com/UriBaynesay/fetch-metadata.git
   cd fetch-metadata
   ```

2. **Install Dependencies**

   Ensure you have Node.js and npm installed. Then, run:

   ```bash
   cd backend
   npm install
   ```

3. **Run the Application**

   To start the development server, use:

   ```bash
   cd backend
   set NODE_ENV=production
   npm start
   ```

   The application will be available at `http://localhost:3030`.

## Usage

1. **Open the Application**

   Navigate to `http://localhost:3030` in your web browser.

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
    "http://example.com",
    "http://anotherexample.com"
  ]
  ```

  **Response:**

  ```json
  [
    {
      "title": "Page Title",
      "description": "Page description",
      "imageUrl": "http://example.com/image.jpg"
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
