export type NavItem = {
  href: string;
  label: string;
};

export type ServiceNavItem = NavItem & {
  summary: string;
};
