import React, { ReactElement, useEffect, useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

import { COLORS, SIZES } from '@constants/theme';
import ServiceItem from '@screens/Main/ServicesScreen/ServiceItem/ServiceItem';
import useCompanies from '@hooks/useCompanies';
import useServices from '@hooks/useServices';

const optionsData = [
    {
        id: '1',
        label: 'Flight',
        bgColors: ['#46aeff', '#5884ff'],
    },
    {
        id: '2',
        label: 'Train',
        bgColors: ['#fddf90', '#fcda13'],
    },
    {
        id: '3',
        label: 'Bus',
        bgColors: ['#e973ad', '#da5df2'],
    },
    {
        id: '4',
        label: 'Taxi',
        bgColors: ['#fcaba8', '#fe6bba'],
    },
    {
        id: '5',
        label: 'Hotel',
        bgColors: ['#ffc465', '#ff9c5f'],
    },
    {
        id: '6',
        label: 'Eats',
        bgColors: ['#7cf1fb', '#4ebefd'],
    },
    {
        id: '7',
        label: 'Adventure',
        bgColors: ['#7be993', '#46caaf'],
    },
    {
        id: '8',
        label: 'Event',
        bgColors: ['#fca397', '#fc7b6c'],
    },
];

export default function ServicesScreen(): ReactElement {
    const [state, setState] = useState<any>([]);

    const { getServicesByUser } = useServices();
    const { getCompanies } = useCompanies();

    useEffect(() => {
        async function getData(): Promise<void> {
            const w = await getCompanies();
            console.log(w.data);
            const data = await getServicesByUser(w.data[0].id);
            console.log('data');
            console.log(data);
            console.log('data');
        }
        getData();
    }, []);

    return (
        <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
            <View style={styles.categoryContainer}>
                <FlatList
                    scrollEnabled={false}
                    numColumns={4}
                    data={optionsData}
                    renderItem={(itemData) => (
                        <ServiceItem
                            key={itemData.item.id}
                            bgColor={itemData.item.bgColors}
                            label={itemData.item.label}
                        />
                    )}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    imageContainer: {
        flex: 1,
        alignItems: 'center',
        height: '100%',
    },
    image: {
        borderRadius: 15,
        resizeMode: 'cover',
    },
    categoryContainer: {
        flex: 1,
        alignItems: 'center',
    },
    destinationContainer: {
        flex: 1,
        padding: 20,
    },
    title: {
        fontSize: SIZES.h2,
        fontWeight: '700',
        marginBottom: 10,
    },
});
