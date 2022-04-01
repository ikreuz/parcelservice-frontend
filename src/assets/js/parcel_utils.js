class ParcelUtils {
  /**
   *
   * @returns Device type
   */
  getDeviceType() {
    const ua = navigator.userAgent;
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
      return "Tablet";
    }
    if (
      /Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
        ua
      )
    ) {
      return "Mobile";
    }
    return "Desktop";
  }
  /**
   *
   * @returns Web Browser type
   */
  getWebBrowserType() {
    // Crome
    if (navigator.userAgent.indexOf("Chrome" != -1)) return "Google Chrome";
    else if (navigator.userAgent.indexOf("Firefox") != -1)
      return "Moxilla Firefox";
    else if (navigator.userAgent.indexOf("MSIE") != -1)
      return "Internet Explorer";
    else if (navigator.userAgent.indexOf("Edge") != -1) return "Microsoft Edge";
    else if (navigator.userAgent.indexOf("Safari") != -1) return "Safari";
    else if (navigator.userAgent.indexOf("Opera") != -1) return "Opera";
    else if (navigator.userAgent.indexOf("YaBrower") != -1)
      return "Yandex Browser";
    else return "Others";
  }
  /**
   *
   * @returns OS name
   */
  getOsType() {
    let OSName = "Unknown OS";
    if (navigator.appVersion.indexOf("Win") != -1) OSName = "Windows";
    if (navigator.appVersion.indexOf("Mac") != -1) OSName = "MacOS";
    if (navigator.appVersion.indexOf("X11") != -1) OSName = "UNIX";
    if (navigator.appVersion.indexOf("Linux") != -1) OSName = "Linux";
    return OSName;
  }
}
export default ParcelUtils;
