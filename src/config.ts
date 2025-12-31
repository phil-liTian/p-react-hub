class GlobalConfig {
  private _routerMode = "history";

  private _defaultLang: App.I18n.LangType = "zh-CN";

  constructor() {
    this._defaultLang = this._defaultLang;
  }

  get routerMode() {
    return this._routerMode;
  }

  get defaultLang() {
    return this._defaultLang;
  }

  set defaultLang(lang: App.I18n.LangType) {
    this._defaultLang = lang;
  }
}

export const globalConfig = new GlobalConfig();
