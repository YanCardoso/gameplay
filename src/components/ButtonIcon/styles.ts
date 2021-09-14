import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
       width: '100%',
       height: 56,
       backgroundColor: theme.colors.primary,
       borderRadius: 8,
       flexDirection: 'row',
       alignItems: 'center',

    },

    title: {
        flex: 1,
        color: theme.colors.heading,
        fontFamily: theme.fonts.text500,
        textAlign: 'center',
        fontSize: 15,
    },

    iconWrapper: {
        width: 56,
        height: 56,
        alignItems: 'center',
        justifyContent: 'center',
        borderRightWidth: 1,
        borderRightColor: theme.colors.line,
    },

    icon: {
        width: 24,
        height: 18,
    }
});