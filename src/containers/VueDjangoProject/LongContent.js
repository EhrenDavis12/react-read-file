import React from "react";
// import { ComponentBox } from "../../components/SharedStyles";

export const Data = {
  Challenge: (
    <div>
      <h1>User Activity Monitor (Frontend)</h1>
      <h5>Resources</h5>
      <ul>
        <li>Vue Javascript Framework</li>
        <li>Git</li>
        <li>Github</li>
      </ul>
      <h5>Description</h5>
      <p>
        For this exercise create an application using the Vue Javascript
        Framework. This application should be free of errors and satisfy all the
        requirements outlined below. All source code related to this project
        should be stored in a public git repo on Github. 3rd party dependencies
        do not need to be included in the repo, however someone should be able
        to easily install the required dependencies and run the application with
        the files included in this repo.
      </p>
      <h5>Requirements</h5>
      <p>
        One page of the application should display a table of the values found
        in users.json. By default this table should display all rows with a
        white background. On the same page there should be a button. When this
        button is clicked all user rows with a login count of 0 should have a
        red background. When the button is clicked again all records should have
        a white background.
      </p>
      <p>
        A separate page of the application should display a table of the values
        found in users.json. By default this table should display all rows with
        a white background. On the same page there should be a button. When this
        button is clicked all user rows with a login count greater than or equal
        to 1 should have a green background. When the button is clicked again
        all records should have a white background.
      </p>

      <h1>User Activity Monitor (Backend)</h1>
      <h5>Resources</h5>
      <ul>
        <li>Django Rest Framework</li>
        <li>Git</li>
        <li>Github</li>
      </ul>
      <h5>Description</h5>
      <p>
        For this exercise create an application using the Django Rest Framework.
        This application should be free of errors and satisfy all the
        requirements outlined below. All source code related to this project
        should be stored in a public git repo on Github. 3rd party dependencies
        do not need to be included in the repo, however, someone should be able
        to easily install the required dependencies and run the application with
        the files included in this repo.
      </p>
      <h5>Requirements</h5>
      <p>
        Create a Django Rest Framework application that has an endpoint that can
        produce the content of the users.json file. Your application should be
        able to return all users, users that have not logged in, and users that
        have logged in.
      </p>
    </div>
  )
};
