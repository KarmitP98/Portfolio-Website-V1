export interface NavbarLinks {
  name: string;
  routerLink: string[] | string;
  routerLinkOptions: any;
  routerLinkActive: 'active';
  externalLink?: string;
}

export const NAVBAR_LINKS: NavbarLinks[] = [
  { name: 'Home', routerLink: '', routerLinkOptions: {exact: true}, routerLinkActive: 'active' },
  { name: 'My Work', routerLink: '/work', routerLinkOptions: {exact: true}, routerLinkActive: 'active' },
  { name: 'Contact Me', routerLink: '/contact', routerLinkOptions: {exact: true}, routerLinkActive: 'active' },
];
