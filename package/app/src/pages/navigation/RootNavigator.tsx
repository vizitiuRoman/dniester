import React, { ReactElement } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useTranslation } from 'react-i18next';

import { RootStackParamList } from '@shared/types/types';
import NotificationsScreen from '@screens/Main/NotificationsScreen/NotificationsScreen';
import ServicesScreen from '@screens/Main/ServicesScreen/ServicesScreen';

const Stack = createStackNavigator<RootStackParamList>();

export default function RootNavigator(): ReactElement {
    const { t } = useTranslation();

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: true,
                headerStyle: {
                    shadowColor: 'transparent',
                    shadowRadius: 0,
                    shadowOffset: {
                        height: 0,
                        width: 0,
                    },
                    elevation: 0,
                },
                gestureEnabled: true,
                cardOverlayEnabled: true,
                headerRightContainerStyle: { marginRight: 16 },
            }}
            initialRouteName={'Services'}
        >
            <Stack.Screen
                name="Services"
                component={ServicesScreen}
                options={{
                    headerTitle: t('Services'),
                }}
            />
            <Stack.Screen
                name="Notifications"
                component={NotificationsScreen}
                options={{
                    headerTitle: t('Notifications'),
                }}
            />
        </Stack.Navigator>
    );
}
