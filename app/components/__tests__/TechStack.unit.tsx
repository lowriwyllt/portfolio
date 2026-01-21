import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import TechStack from "../Home/TechStack";
import TECH_STACK from "../../constants/myTechStack";

describe("TechStack Component", () => {
  it("renders the English heading by default", () => {
    render(<TechStack />);
    expect(
      screen.getByRole("heading", { name: /tech stack/i }),
    ).toBeInTheDocument();
  });

  it("renders the Welsh heading when language is set to welsh", () => {
    render(<TechStack lang="cy" />);
    expect(
      screen.getByRole("heading", { name: /stac techengol/i }),
    ).toBeInTheDocument();
  });

  it("renders all tech stack items", () => {
    render(<TechStack />);
    TECH_STACK.forEach((tech) => {
      expect(screen.getByText(tech.label)).toBeInTheDocument();
    });
  });

  it("renders correct number of tech items", () => {
    render(<TechStack />);
    const techItems = screen.getAllByRole("img");
    expect(techItems).toHaveLength(TECH_STACK.length);
  });

  it("renders SVG icons with correct aria-labels", () => {
    render(<TechStack />);
    TECH_STACK.forEach((tech) => {
      const icon = screen.getByLabelText(`${tech.label} Icon`);
      expect(icon).toBeInTheDocument();
      expect(icon.tagName).toBe("svg");
    });
  });

  it("renders SVG with correct viewBox", () => {
    render(<TechStack />);
    const icons = screen.getAllByLabelText(/icon/i);
    icons.forEach((icon) => {
      expect(icon).toHaveAttribute("viewBox", "0 0 128 128");
    });
  });

  it("should not have accessibility violations", async () => {
    const { container } = render(<TechStack />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it("should not have accessibility violations with Welsh language", async () => {
    const { container } = render(<TechStack lang="cy" />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
