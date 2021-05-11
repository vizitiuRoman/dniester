import React, { ReactElement } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { COLORS, SIZES } from '@constants/theme';

type ServiceItemProps = {
    label: string;
    bgColor: string[];
};

export default function ServiceItem({ label }: ServiceItemProps): ReactElement {
    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <View style={styles.iconContainer}>
                </View>
            </View>
            <Text style={styles.label}>{label}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    innerContainer: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,
        elevation: 8,
    },
    label: {
        color: COLORS.gray,
        fontSize: SIZES.body2 - 5,
        fontWeight: '500',
        marginVertical: 9,
        letterSpacing: 0.5,
    },
    iconContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 65,
        width: 65,
        borderRadius: 15,
        marginVertical: 5,
        marginHorizontal: 10,
    },
});
