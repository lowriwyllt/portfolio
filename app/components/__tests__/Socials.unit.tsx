import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import Socials from "../Layout/Socials";

describe("Socials Component", () => {
  it("renders GitHub link with correct attributes", () => {
    render(<Socials lang="en" />);
    const githubLink = screen.getByRole("link", {
      name: /github for lowri roberts/i,
    });
    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute("href", "https://github.com/lowriwyllt");
    expect(githubLink).toHaveAttribute("target", "_blank");
    expect(githubLink).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("renders LinkedIn link with correct attributes", () => {
    render(<Socials lang="en" />);
    const linkedinLink = screen.getByRole("link", {
      name: /linkedin for lowri roberts/i,
    });
    expect(linkedinLink).toBeInTheDocument();
    expect(linkedinLink).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/lowri-gwenllian-roberts/",
    );
    expect(linkedinLink).toHaveAttribute("target", "_blank");
    expect(linkedinLink).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("renders Email link with correct attributes", () => {
    render(<Socials lang="en" />);
    const emailLink = screen.getByRole("link", {
      name: /email lowri roberts/i,
    });
    expect(emailLink).toBeInTheDocument();
    expect(emailLink).toHaveAttribute(
      "href",
      "mailto:lowri.g.roberts@hotmail.com",
    );
  });

  it("renders GitHub logo image", () => {
    render(<Socials lang="en" />);
    const githubImage = screen.getByAltText(/github logo/i);
    expect(githubImage).toBeInTheDocument();
  });

  it("renders LinkedIn logo image", () => {
    render(<Socials lang="en" />);
    const linkedinImage = screen.getByAltText(/linkedin logo/i);
    expect(linkedinImage).toBeInTheDocument();
  });

  it("renders all three social links", () => {
    render(<Socials lang="en" />);
    const links = screen.getAllByRole("link");
    expect(links).toHaveLength(3);
  });

  it("should not have accessibility violations", async () => {
    const { container } = render(<Socials lang="en" />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
