import store from "../store";

export const guardian_1 = (to, from, next) => {
  let user = store.state.customerProfile;
  let clients = store.state.guardianOwlClients.entries;

  for (let index = 0; index < clients.length; index++) {
    if (user.cliente_id === clients[index].cliente_id) {
      next();
    }
  }
};

export const guardian_2 = (to, from, next) => {
  // if (user) {
  //   next();
  // }
  next();
};
