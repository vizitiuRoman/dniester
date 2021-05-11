import React, { ReactElement, useState } from 'react';
import { StatusBar } from 'react-native';
import {
    initialWindowMetrics,
    SafeAreaProvider,
} from 'react-native-safe-area-context';

import Navigation from '@navigations/Navigation';

export default function App(): ReactElement {
    const [signed, setSigned] = useState<boolean>(true);
    const [authLoading, setAuthLoading] = useState<boolean>(false);

    return (
        <SafeAreaProvider initialMetrics={initialWindowMetrics}>
            <StatusBar />
            <Navigation signed={signed} loading={authLoading} />
        </SafeAreaProvider>
    );
}
