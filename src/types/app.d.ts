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


  namespace I18n {
    type LangType = 'zh-CN' | 'en-US'
    type RouteKey = import("@soybean-react/vite-plugin-react-router").RouteKey;

    type I18nRouteKey = Exclude<RouteKey, 'not-found', 'douyin', 'douyin_home'>

    type LangOption = {
      key: LangType,
      label: string
    }

    type Schema = {
      translation: {
        route: Record<I18nRouteKey, string> & {
          notFound: string
          root: string
        }
      }
    }
  } 
}
