import React, { useState } from 'react';
import { View, Text, Alert } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useAuth } from '../../hooks/auth';
import { Avatar } from '../Avatar';
import { styles } from './styles';

export function Profile() {
    const [logoutCount, setLogoutCount] = useState(0);
    const { user, SingOut } = useAuth()

    function handleLogout() {
        setLogoutCount(logoutCount + 1)
        if (logoutCount > 8 ) {
            SingOut()
            setLogoutCount(0)
        }

        console.log(logoutCount);
        
    }

    return (
        <View style={styles.container}>
            <RectButton onPress={handleLogout}>
                <Avatar urlImage={user.avatar} />
            </RectButton>

            <View>
                <View style={styles.user}>
                    <Text style={styles.greeting}>
                        Olá,
                    </Text>

                    <Text style={styles.username}>
                        {user.firstName}
                    </Text>

                </View>

                <Text style={styles.message}>
                    Hoje é dia de vitória
                </Text>

            </View>
        </View>
    );
}
