import React, { ReactElement } from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { View, Text } from 'react-native';
import { useTranslation } from 'react-i18next';

import { AuthStackParamList } from '@shared/types/types';

export default function WelcomeScreen({
    navigation,
}: StackScreenProps<AuthStackParamList, 'Welcome'>): ReactElement {
    const { t } = useTranslation();

    return (
        <View>
            <Text>QWQE</Text>
            <Text>QWQE</Text>
            <Text>QWQE</Text>
            <Text>QWQE</Text>
        </View>
    );
}
