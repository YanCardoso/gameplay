import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../screens/Home';
import { SignIn } from '../screens/SignIn';
import { AppointmentDetails } from '../screens/AppointmentDetails';
import { AppointmentCreate } from '../screens/AppointmentCreate';


import { Background } from '../components/Background';
import { theme } from '../global/styles/theme';


const { Navigator, Screen } = createStackNavigator();

export function AppRoutes() {
    return (

        <Background>
            <Navigator
                screenOptions={{
                    headerShown: false,
                    cardStyle: {
                        backgroundColor: theme.colors.homebg,

                    }
                }}
            >
                <Screen
                    name="Home"
                    component={Home}
                />
                <Screen
                    name="AppointmentDetails"
                    component={AppointmentDetails}
                />
                <Screen
                    name="AppointmentCreate"
                    component={AppointmentCreate}
                />

            </Navigator>
        </Background>
    )
}