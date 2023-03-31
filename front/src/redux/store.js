import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducer";
import thunkMiddleware from "redux-thunk";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer, // aqui suscribimos la funcion rootRender que creamos en nuestro archivo reducer
  composeEnhancer(applyMiddleware(thunkMiddleware))
);

export default store;