declare namespace App {
  namespace Global {
    interface Menu {
      label: React.ReactNode;
      key: string;
      title?: string;
      children?: Menu[];
      icon?: React.ReactElement;
    }
  }
}
