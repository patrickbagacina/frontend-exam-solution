export interface MainView {
  name: string;
  menu: MenuItem[];
  content: string;
}

export interface Menu {
  items: MenuItem[];
}

export interface MenuItem {
  name: string;
  displayName: string;
}
