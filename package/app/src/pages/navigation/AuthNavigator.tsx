import React, { ReactElement } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { AuthStackParamList } from '@shared/types/types';
import AuthScreen from '@screens/Auth/AuthScreen/AuthScreen';
import WelcomeScreen from '@screens/Auth/WelcomeScreen/WelcomeScreen';

const AuthStack = createStackNavigator<AuthStackParamList>();

export default function AuthNavigator(): ReactElement {
    return (
        <AuthStack.Navigator
            initialRouteName={'Welcome'}
            screenOptions={{
                headerStyle: {
                    shadowColor: 'transparent',
                    shadowRadius: 0,
                    shadowOffset: {
                        height: 0,
                        width: 0,
                    },
                    elevation: 0,
                },
            }}
        >
            <AuthStack.Screen
                name="Welcome"
                component={WelcomeScreen}
                options={{
                    headerShown: false,
                }}
            />
            <AuthStack.Screen
                name="Auth"
                component={AuthScreen}
                options={{
                    headerShown: true,
                    headerTitle: '',
                }}
            />
        </AuthStack.Navigator>
    );
}
