class GlobalConfig {
  private _routerMode = "history";

  get routerMode() {
    return this._routerMode;
  }
}

export const globalConfig = new GlobalConfig();
