import store from "../store";

const isAuth = "Authorized User";
const isnAuth = "Unauthorized User";

export function validateAuthorization() {
  if (store.state.auth) console.log("parcel@: Authorized User " + isAuth);
  else console.log("pacel@: Unauthorized User " + isnAuth);
}
