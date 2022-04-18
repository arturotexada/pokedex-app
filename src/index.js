import React from 'react';
import ReactDOM from 'react-dom';
// import { createRoot } from 'react-dom/client';
import App from './App';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';

// Aquí importamos el reducer creado anteriormente
import rootReducer from './redux' 

// const container =  document.getElementById('root');
//const root = createRoot(container)

const store = createStore(
		rootReducer,
		composeWithDevTools()
)

ReactDOM.render(
//root.render(  
  <React.StrictMode>
    <Provider store={store}> {/* Aquí sólamente encerramos a <App/> */}
      <App />                {/* En el provider */}
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
