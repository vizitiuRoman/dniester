import React, { ReactElement } from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { View, Text } from 'react-native';
import { useTranslation } from 'react-i18next';

import { AuthStackParamList } from '@shared/types/types';

export default function AuthScreen({
    navigation,
}: StackScreenProps<AuthStackParamList, 'Auth'>): ReactElement {
    const { t } = useTranslation();

    return (
        <View>
            <Text>AUTH</Text>
        </View>
    );
}
