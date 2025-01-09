import * as React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {FAB} from 'react-native-paper';

interface BookButtonProps {
    buttonClick?: () => void
}

const BookButton = ({buttonClick}: BookButtonProps) => (
    <View style={styles.fab}>
        <FAB
            icon="plus"
            style={styles.fabInner}
            onPress={buttonClick}
        />
    </View>
);

const styles = StyleSheet.create({
    fab: {
        position: 'absolute',
        margin: 16,
        left: 0,
        bottom: 0,
        zIndex: 60,
    },
    fabInner: {
        backgroundColor: "#89C974",
        borderRadius: 100,
        width: 56,
        height: 56,
        alignItems: "center",
        justifyContent: "center",
    },
});


export default BookButton;