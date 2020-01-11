import React from "react";
import { ComponentBox } from "../../components/SharedStyles";

export const Data = {
  ReadFilePage: {
    Challenge: (
      <div>
        <p>
          Write an application to process a delimited text file. The file will
          have a header row, then one row per record. The records may be
          comma-separated or tab-separated. An example file’s contents could be:
        </p>
        <ComponentBox>
          First Name,Middle Name,Last Name
          <br />
          Jane,Taylor,Doe
          <br />
          Chris,Lee
          <br />
          Jose,,Morro
        </ComponentBox>
        <br />
        <p>The application should ask the user 3 questions:</p>
        <ComponentBox>
          <ol>
            <li>Where is the file located?</li>
            <li>
              Is the file format CSV (comma-separated values) or TSV
              (tab-separated values)?
            </li>
            <li>How many fields should each record contain?</li>
          </ol>
        </ComponentBox>
        <br />
        <p>
          The application should then produce two output files. One file will
          contain the records (if any) with the correct number of fields. The
          second will contain the records (if any) with the incorrect number of
          fields. Neither file should contain the header row. If there are no
          records for a given output file, do not create the file. Based on the
          above sample input, if the user specified a CSV file with 3 fields per
          record, the following files would be created:
        </p>
        <ComponentBox>
          Correctly formatted records:
          <br />
          Jane,Taylor,Doe
          <br />
          Jose,,Morro
          <br />
          ------------------------------
          <br />
          Incorrectly formatted records:
          <br />
          Chris,Lee
        </ComponentBox>
      </div>
    )
  }
};
