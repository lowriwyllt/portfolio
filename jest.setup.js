import "@testing-library/jest-dom";
import { toHaveNoViolations } from "jest-axe";
import { defaultFallbackInView } from "react-intersection-observer";

expect.extend(toHaveNoViolations);

global.IntersectionObserver = jest.fn();
defaultFallbackInView(false);
