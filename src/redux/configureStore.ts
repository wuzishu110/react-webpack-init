import { applyMiddleware, legacy_createStore as createStore } from 'redux';

export default function (rootReducer, rootSaga) {
    let middleware: any[] = [];
    const sagaMiddleware = createSagaMiddleware();
    middleware.push(sagaMiddleware);
    if (process.env.NODE_ENV === 'development') {
        middleware.push(createLogger());
    }
    const store = createStore(rootReducer, applyMiddleware(...middleware));
    sagaMiddleware.run(rootSaga);
    setTimeout(() => store.dispatch({ type: 'LAUNCH' }));
    return store;
}