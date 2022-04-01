import Vue from "vue";

const CUSTOM = "custom";
const DEFAULT = "default";
const INFO = "info";
const ERROR = "error";
const SUCCESS = "success";
const WARNING = "warning";

export default function srvToasted(
  data = "",
  type = "DEFAULT",
  icon = "mdi mdi-message-alert"
) {
  if (type == "custom") {
    Vue.prototype.$toast(data, {
      position: "top-right",
      timeout: 3000,
      closeOnClick: true,
      pauseOnFucusLoss: true,
      pauseOnHover: true,
      draggable: true,
      draggablePercent: 0.6,
      showCloseButtonOnHover: true,
      hideProgessBar: false,
      closeButton: "button",
      icon: {
        iconClass: icon,
        iconChildren: "",
        iconTag: "span",
      },
      rtl: false,
      toastClassNaem: [`parcel-toast--${CUSTOM}`],
    });
  }
  if (type == "default") {
    Vue.prototype.$toast(data, {
      position: "top-right",
      timeout: 3000,
      closeOnClick: true,
      pauseOnFucusLoss: true,
      pauseOnHover: true,
      draggable: true,
      draggablePercent: 0.6,
      showCloseButtonOnHover: true,
      hideProgessBar: false,
      closeButton: "button",
      icon: {
        iconClass: icon,
        iconChildren: "",
        iconTag: "span",
      },
      rtl: false,
      toastClassNaem: [`parcel-toast--${DEFAULT}`],
    });
  }
  if (type == "info") {
    Vue.prototype.$toast(data, {
      position: "top-right",
      timeout: 3000,
      closeOnClick: true,
      pauseOnFucusLoss: true,
      pauseOnHover: true,
      draggable: true,
      draggablePercent: 0.6,
      showCloseButtonOnHover: true,
      hideProgessBar: false,
      closeButton: "button",
      icon: {
        iconClass: icon,
        iconChildren: "",
        iconTag: "span",
      },
      rtl: false,
      toastClassNaem: [`parcel-toast--${INFO}`],
    });
  }
  if (type == "success") {
    Vue.prototype.$toast(data, {
      position: "top-right",
      timeout: 3000,
      closeOnClick: true,
      pauseOnFucusLoss: true,
      pauseOnHover: true,
      draggable: true,
      draggablePercent: 0.6,
      showCloseButtonOnHover: true,
      hideProgessBar: false,
      closeButton: "button",
      icon: {
        iconClass: icon,
        iconChildren: "",
        iconTag: "span",
      },
      rtl: false,
      toastClassNaem: [`parcel-toast--${SUCCESS}`],
    });
  }
  if (type == "warning") {
    Vue.prototype.$toast(data, {
      position: "top-right",
      timeout: 3000,
      closeOnClick: true,
      pauseOnFucusLoss: true,
      pauseOnHover: true,
      draggable: true,
      draggablePercent: 0.6,
      showCloseButtonOnHover: true,
      hideProgessBar: false,
      closeButton: "button",
      icon: {
        iconClass: icon,
        iconChildren: "",
        iconTag: "span",
      },
      rtl: false,
      toastClassNaem: [`parcel-toast--${WARNING}`],
    });
  }
  if (type == "error") {
    Vue.prototype.$toast(data, {
      position: "top-right",
      timeout: 3000,
      closeOnClick: true,
      pauseOnFucusLoss: true,
      pauseOnHover: true,
      draggable: true,
      draggablePercent: 0.6,
      showCloseButtonOnHover: true,
      hideProgessBar: false,
      closeButton: "button",
      icon: {
        iconClass: icon,
        iconChildren: "",
        iconTag: "span",
      },
      rtl: false,
      toastClassNaem: [`parcel-toast--${ERROR}`],
    });
  }
}
