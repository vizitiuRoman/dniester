import React, { ReactElement } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import LinkingConfiguration from './LinkingConfiguration';
import AuthNavigator from './AuthNavigator';
import RootNavigator from './RootNavigator';

type NavigationProps = {
    signed: boolean;
    loading: boolean;
};

export default function Navigation({
    signed,
    loading,
}: NavigationProps): ReactElement | null {
    if (loading) {
        return null;
    }

    return (
        <NavigationContainer linking={LinkingConfiguration}>
            {signed ? <RootNavigator /> : <AuthNavigator />}
        </NavigationContainer>
    );
}
