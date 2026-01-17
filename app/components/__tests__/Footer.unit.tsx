import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import Footer from "../Layout/Footer";
import { ENGLISH_NAV_ITEMS } from "../../constants/navItems";

describe("Footer Component", () => {
  it("renders the name heading", () => {
    render(<Footer />);
    expect(
      screen.getByRole("heading", { name: /lowri roberts/i }),
    ).toBeInTheDocument();
  });

  it("renders the role description", () => {
    render(<Footer />);
    expect(screen.getByText(/web developer/i)).toBeInTheDocument();
  });

  it("renders default English navigation items", () => {
    render(<Footer />);
    expect(screen.getByRole("menuitem", { name: /home/i })).toBeInTheDocument();
    expect(
      screen.getByRole("menuitem", { name: /coding projects/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("menuitem", { name: /experience/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("menuitem", { name: /travel/i }),
    ).toBeInTheDocument();
  });

  it("renders custom Welsh navigation items when provided", () => {
    render(<Footer lang="cy" />);
    expect(screen.getByRole("menuitem", { name: /adra/i })).toBeInTheDocument();
    expect(
      screen.getByRole("menuitem", { name: /prosiectau codio/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("menuitem", { name: /profiad/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("menuitem", { name: /trafeilio/i }),
    ).toBeInTheDocument();
  });

  it("renders correct number of navigation links", () => {
    render(<Footer />);
    const menuitems = screen.getAllByRole("menuitem");
    expect(menuitems).toHaveLength(ENGLISH_NAV_ITEMS.length);
  });

  it("renders navigation links with correct hrefs", () => {
    render(<Footer />);
    expect(screen.getByRole("menuitem", { name: /home/i })).toHaveAttribute(
      "href",
      "/en/home",
    );
    expect(
      screen.getByRole("menuitem", { name: /coding projects/i }),
    ).toHaveAttribute("href", "/en/codingprojects");
    expect(
      screen.getByRole("menuitem", { name: /experience/i }),
    ).toHaveAttribute("href", "/en/experience");
    expect(screen.getByRole("menuitem", { name: /travel/i })).toHaveAttribute(
      "href",
      "/en/travel",
    );
  });

  it("renders navigation element", () => {
    render(<Footer />);
    expect(screen.getByRole("navigation")).toBeInTheDocument();
  });

  it("should not have accessibility violations", async () => {
    const { container } = render(<Footer />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it("should not have accessibility violations with Welsh nav items", async () => {
    const { container } = render(<Footer lang="cy" />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
