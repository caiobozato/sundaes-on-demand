import SummaryForm from "../SummaryForm";
import {
  render,
  screen,
  fireEvent,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("button and checkbox test suite", () => {
  test("checkbox is unchecked by default", () => {
    render(<SummaryForm />);
    const checkbox = screen.getByRole("checkbox", {
      name: /terms and conditions/i,
    });
    expect(checkbox).not.toBeChecked();
  });

  test("button is disabled by default", () => {
    render(<SummaryForm />);
    const button = screen.getByRole("button", { name: /confirm order/i });

    expect(button).toBeDisabled();
  });

  test("when checkbox is clicked, button is enabled", () => {
    render(<SummaryForm />);

    const checkbox = screen.getByRole("checkbox", {
      name: /terms and conditions/i,
    });
    const button = screen.getByRole("button", { name: /confirm order/i });

    fireEvent.click(checkbox);
    expect(button).toBeEnabled();
  });

  test("when checkbox is clicked twice, button is disabled", () => {
    render(<SummaryForm />);

    const checkbox = screen.getByRole("checkbox", {
      name: /terms and conditions/i,
    });
    const button = screen.getByRole("button", { name: /confirm order/i });

    fireEvent.click(checkbox);
    expect(button).toBeEnabled();

    fireEvent.click(checkbox);
    expect(button).toBeDisabled();
  });
});

describe("popover tests", () => {
  test("popover starts out hidden", () => {
    render(<SummaryForm />);
    const popover = screen.queryByText(/no ice cream will be delivered/i);
    expect(popover).not.toBeInTheDocument();
  });

  test("popover appears when checkbox is hovered", () => {
    render(<SummaryForm />);

    const checkbox = screen.getByText(/terms and conditions/i);
    userEvent.hover(checkbox);

    const popover = screen.getByText(/no ice cream will be delivered/i);
    expect(popover).toBeInTheDocument();
  });

  test("popover disappears when checkbox is unhovered", async () => {
    render(<SummaryForm />);

    const checkbox = screen.getByText(/terms and conditions/i);
    userEvent.hover(checkbox);

    const popover = screen.getByText(/no ice cream will be delivered/i);
    expect(popover).toBeInTheDocument();

    userEvent.unhover(checkbox);

    await waitForElementToBeRemoved(() =>
      screen.queryByText(/no ice cream will be delivered/i)
    );
  });
});
