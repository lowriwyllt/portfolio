import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import { NotFoundContent } from "../global-not-found";

describe("404 Not Found Page", () => {
  it("renders the 404 error code", () => {
    render(<NotFoundContent />);
    expect(
      screen.getByRole("heading", { name: /404/i, level: 1 })
    ).toBeInTheDocument();
  });

  it("renders the bilingual page title", () => {
    render(<NotFoundContent />);
    expect(
      screen.getByRole("heading", {
        name: /page not found - tudalen heb ei chanfod/i,
      })
    ).toBeInTheDocument();
  });

  it("renders English error message", () => {
    render(<NotFoundContent />);
    expect(
      screen.getByText(/sorry, the page you.re looking for doesn.t exist/i)
    ).toBeInTheDocument();
  });

  it("renders Welsh error message", () => {
    render(<NotFoundContent />);
    expect(
      screen.getByText(/mae.n ddrwg gen i, nid yw.r dudalen/i)
    ).toBeInTheDocument();
  });

  it("renders both return home links", () => {
    render(<NotFoundContent />);
    const links = screen.getAllByRole("link", { name: /home page/i });
    expect(links).toHaveLength(2);
    expect(links[0]).toHaveAttribute("href", "/");
    expect(links[1]).toHaveAttribute("href", "/");
  });

  it("renders English return home link", () => {
    render(<NotFoundContent />);
    expect(
      screen.getByRole("link", { name: /return to english home page/i })
    ).toHaveAttribute("href", "/");
  });

  it("renders Welsh return home link", () => {
    render(<NotFoundContent />);
    expect(
      screen.getByRole("link", { name: /return to welsh home page/i })
    ).toHaveAttribute("href", "/");
  });

  it("should not have accessibility violations", async () => {
    const { container } = render(<NotFoundContent />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
