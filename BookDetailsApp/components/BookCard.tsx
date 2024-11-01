import * as React from 'react';
import { Card, IconButton, MD3Colors, Text } from 'react-native-paper';
import { StyleSheet } from 'react-native';

const BookCard = () => (
    <Card style={styles.card}>
        <Card.Content>
            <Text variant="titleLarge">Book title</Text>
            <Text variant="bodyMedium">Publication Date</Text>
        </Card.Content>
        <Card.Actions style={styles.actions}>
            <IconButton
                icon="trash-can"
                iconColor={MD3Colors.neutral20}
                size={20}
                onPress={() => console.log('pressed edit')}
                style={styles.iconButton}
            />
            <IconButton
                icon="pencil"
                iconColor={MD3Colors.neutral20}
                size={20}
                onPress={() => console.log('pressed delete')}
                style={styles.iconButton}
            />
        </Card.Actions>
    </Card>
);

const styles = StyleSheet.create({
    card: {
        margin: 10,
        padding: 10,
        width: '90%',
        alignSelf: 'center',
        backgroundColor: '#AFD2A3',
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: -5 },
        shadowOpacity: 3,
        shadowRadius: 4,
        elevation: 4,
    },
    iconButton: {
        backgroundColor: 'transparent',
    },
    actions: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: 0,
    },

});

export default BookCard;
