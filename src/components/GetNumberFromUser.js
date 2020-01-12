import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { withStore } from "../containers/Store";
import { ComponentBox } from "./SharedStyles";

/*
Use this to get the count of the fields the use is looking for
Will render full card
Places file content into the Store
*/
function GetNumberFromUser({ store, title, fieldName, ...props }) {
  useEffect(() => {
    const value = props.defaultValue ? props.defaultValue : 0;
    store.set(`${fieldName}`, parseInt(value));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.defaultValue]);

  return (
    <ComponentBox>
      <p>{title}</p>
      <input
        type="number"
        pattern="[0-9]*"
        name={fieldName}
        onChange={event => store.set(`${fieldName}`, event.currentTarget.value)}
        {...props}
      />
    </ComponentBox>
  );
}

GetNumberFromUser.propTypes = {
  title: PropTypes.string.isRequired,
  fieldName: PropTypes.string.isRequired
};

export default withStore(GetNumberFromUser);
