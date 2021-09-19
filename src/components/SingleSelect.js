import React from "react";
import { Form } from "react-bootstrap";

export default function SingleSelect({items, message="", setSelected, ...props}) {
    return (
        <div>
            {message}
            <Form.Control
                as="select"
                onChange={event => setSelected(event?.target?.value)}
                {...props}
            >
                {items.map(item =>
                    <option key={item.key}>{item.value}</option>
                )}
            </Form.Control>
        </div>
    );
}