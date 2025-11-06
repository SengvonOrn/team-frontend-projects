export interface Component {
  title: string;
  href: string;
  description: string;
}

export const components: Component[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

import Shoe from "../../public/slider/Shoe.jpg";
import Three from "../../public/slider/Three.jpg";
import Two from "../../public/slider/Two.jpg";

export const slides2 = [
  {
    title: "Black",
    subtitle: "FRIDAY",
    discount: "50% off",
    images: Shoe,
  },
  {
    title: "Cyber",
    subtitle: "MONDAY",
    discount: "70% off",
    images: Three,
  },
  {
    title: "Holiday",
    subtitle: "SALE",
    discount: "40% off",
    images: Two,
  },
];
