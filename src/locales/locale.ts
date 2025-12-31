import zhCN from './langs/zh-cn'
import enUS from './langs/en-us'


const locales: Record<App.I18n.LangType, App.I18n.Schema> = {
  'en-US': {
    translation: enUS
  },
  'zh-CN': {
    translation: zhCN
  }
};

export default locales