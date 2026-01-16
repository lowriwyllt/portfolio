import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import Page from "@/app/(landing-page)/page";

describe("Landing Page", () => {
  it("renders the main heading", () => {
    render(<Page />);
    expect(
      screen.getByRole("heading", {
        name: /welcome - croeso/i,
      })
    ).toBeInTheDocument();
  });

  it("renders language selection links", () => {
    render(<Page />);
    expect(
      screen.getByRole("link", { name: /View portfolio in English/i })
    ).toHaveAttribute("href", "/en/home");
    expect(
      screen.getByRole("link", { name: /Gweld portffolio yn Gymraeg/i })
    ).toHaveAttribute("href", "/cy/adra");
  });

  it("renders profile image with correct alt text", () => {
    render(<Page />);
    const image = screen.getByAltText(/Lowri Roberts working at her desk/i);
    expect(image).toBeInTheDocument();
  });

  it("should not have accessibility violations", async () => {
    const { container } = render(<Page />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
