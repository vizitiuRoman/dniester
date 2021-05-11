import React from 'react';
import { AppRegistry } from 'react-native';

import { name as appName } from './app.json';
import App from './src/App';

import { AuthProvider } from '@contexts/AuthContext';
import './src/shared/i18n/i18n';

function app() {
  return (
      <AuthProvider>
        <App />
      </AuthProvider>
  );
}

AppRegistry.registerComponent(appName, () => app);
