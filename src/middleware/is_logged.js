import store from "../store";

export default (to, from, next) => {
  if (!store.state.user) {
    const err = new Error("parcel@: Not authorized");
    err.statusCode = 403;
    next(err);
  } else {
    next();
  }
};
