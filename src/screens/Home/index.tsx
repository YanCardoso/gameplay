import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import React, { useState, useCallback } from 'react';
import { View, FlatList } from 'react-native';
import { Appointments, AppointmentProps } from '../../components/Appointments';
import { Background } from '../../components/Background';
import { ButtonAdd } from '../../components/ButtonAdd';
import { CategorySelect } from '../../components/CategorySelect';
import { ListDivider } from '../../components/ListDivider';
import { ListHeader } from '../../components/ListHeader';
import { Profile } from '../../components/Profile';
import { Loading } from '../../components/Loading';
import { COLLECTION_APPOINTMENT } from '../../config/database';
import { styles } from './styles';

export function Home() {
    const [category, setCategory] = useState('');
    const navigation = useNavigation();
    const [loading, setLoading] = useState(true);

    const [appointments, setAppointments] = useState<AppointmentProps[]>([]);


    function handleCategorySelect(categoryId: string) {
        categoryId === category ? setCategory('') : setCategory(categoryId);
    }

    function handleAppointmentDetails(guildSelected: AppointmentProps) {
        navigation.navigate('AppointmentDetails', { guildSelected });
    }

    function handleAppointmentCreate() {
        navigation.navigate('AppointmentCreate');
    }

    async function loadAppointment() {
        const response = await AsyncStorage.getItem(COLLECTION_APPOINTMENT);
        const storage: AppointmentProps[] = response ? JSON.parse(response) : [];

        if (category) {
            setAppointments(storage.filter(item => item.category === category))
        } else {
            setAppointments(storage)
        }

        setLoading(false);
    }

    useFocusEffect(useCallback(() => {
        loadAppointment();
    }, [category]))

    return (
        <Background>
            <View style={styles.header}>
                <Profile />
                <ButtonAdd onPress={handleAppointmentCreate} />
            </View>

            <CategorySelect
                categorySelect={category}
                setCategory={handleCategorySelect}
            />

            {
                loading ? <Loading /> :
                    <>
                        <ListHeader
                            title={'Partidas agendadas'}
                            subtitle={`Total ${appointments.length}`}
                        />
                        <FlatList
                            data={appointments}
                            keyExtractor={item => item.id}
                            renderItem={({ item }) => (
                                <Appointments
                                    data={item}
                                    onPress={() => handleAppointmentDetails(item)}
                                />
                            )}
                            ItemSeparatorComponent={() => <ListDivider />}
                            style={styles.matches}
                            contentContainerStyle={{ paddingBottom: 69 }}
                            showsVerticalScrollIndicator={false}
                        />
                    </>
            }
        </Background>
    );
};

