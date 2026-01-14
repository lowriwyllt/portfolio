import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import Page from "../page";

describe("Landing Page", () => {
  it("renders the main heading", () => {
    render(<Page />);
    expect(
      screen.getByRole("heading", {
        name: /welcome to my portfolio - croeso i fy mhortfolio/i,
      })
    ).toBeInTheDocument();
  });

  it("renders language selection links", () => {
    render(<Page />);
    expect(screen.getByRole("link", { name: /english home/i })).toHaveAttribute(
      "href",
      "/en/home"
    );
    expect(screen.getByRole("link", { name: /welsh home/i })).toHaveAttribute(
      "href",
      "/cy/adra"
    );
  });

  it("renders profile image with correct alt text", () => {
    render(<Page />);
    const image = screen.getByAltText(/lowri roberts work area/i);
    expect(image).toBeInTheDocument();
  });

  it("should not have accessibility violations", async () => {
    const { container } = render(<Page />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
