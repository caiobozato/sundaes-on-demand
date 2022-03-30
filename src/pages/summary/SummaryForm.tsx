import { useState } from "react";
import { Form, Button } from "react-bootstrap";

export default function SummaryForm() {
  const [checked, setChecked] = useState(false);

  const checkboxLabel = (
    <span>
      I agree tp <span style={{ color: "blue" }}> Terms and conditions</span>
    </span>
  );

  return (
    <Form>
      <Form.Group controlId="terms-and-conditions">
        <Form.Check
          type="checkbox"
          checked={checked}
          onChange={() => setChecked(!checked)}
          label={checkboxLabel}
        ></Form.Check>
      </Form.Group>
      <Button variant="primary" type="submit" disabled={!checked}>
        Confirm order
      </Button>
    </Form>
  );
}
