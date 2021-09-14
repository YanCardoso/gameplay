import React from 'react';
import {Image} from 'react-native';
import { styles } from './styles';

export function GuildIcon() {
    const uri = 'https://media.pocketgamer.biz/2021/5/110514/discord-new-logo-2021-r225x.jpg'

    return (
        <Image 
            source={{uri}}
            style={styles.image}
            resizeMode="cover"

        />
    );
};
