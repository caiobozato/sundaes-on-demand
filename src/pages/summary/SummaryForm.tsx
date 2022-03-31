import { useState } from "react";
import { Form, Button, Popover, OverlayTrigger } from "react-bootstrap";

export default function SummaryForm() {
  const [checked, setChecked] = useState(false);

  const popover = (
    <Popover id="popover-basic">
      <Popover.Body>No ice cream will be delivered</Popover.Body>
    </Popover>
  );

  const checkboxLabel = (
    <span>
      I agree to
      <OverlayTrigger trigger="hover" placement="top" overlay={popover}>
        <span style={{ color: "blue" }}> Terms and conditions</span>
      </OverlayTrigger>
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
