const isJD = window.jd &&
  window.jd.miniProgram &&
  /jdmp/i.test(navigator.userAgent)
export function initWebviewApi (readyCallback) {
  if (!isJD) {
    return
  }
  if (window.JDJSBridgeReady && window.JDJSBridgeReady.invoke) {
    setTimeout(readyCallback, 0)
  } else {
    document.addEventListener('JDJSBridgeReady', readyCallback)
  }

  return window.jd.miniProgram
}
