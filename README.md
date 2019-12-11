## React Read File

This is a project put together as a quick challenge.<br />

## The Challenge

Write an application (a Console Application is fine) to process a delimited text file. The file will have a header row, then one row per record. The records may be comma-separated or tab-separated. An example file’s contents could be:
First Name,Middle Name,Last Name
Jane,Taylor,Doe
Chris,Lee
Jose,,Morro
The application should ask the user 3 questions:

1. Where is the file located?
2. Is the file format CSV (comma-separated values) or TSV (tab-separated values)?
3. How many fields should each record contain?
   The application should then produce two output files. One file will contain the records (if any) with the correct number of fields. The second will contain the records (if any) with the incorrect number of fields. Neither file should contain the header row. If there are no records for a given output file, do not create the file.
   Based on the above sample input, if the user specified a CSV file with 3 fields per record, the following files would be created:
   Correctly formatted records:
   Jane,Taylor,Doe
   Jose,,Morro
   Incorrectly formatted records:
   Chris,Lee

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Setup

### `npm install`

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.
