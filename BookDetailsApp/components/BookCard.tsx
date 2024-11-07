import * as React from 'react';
import {Card, IconButton, MD3Colors, Text} from 'react-native-paper';
import {StyleSheet} from 'react-native';
import {Book} from "@/models/Book.model";

type BookCardProps = {
    cardClick: () => void,
    editCardClick: (book: Book) => void
    book: Book,
    onDelete: (bookId: number) => void,

};

export default function BookCard({ book, cardClick, editCardClick, onDelete}: BookCardProps) {
    const styles = StyleSheet.create({
        card: {
            margin: 10,
            padding: 10,
            width: '90%',
            alignSelf: 'center',
            backgroundColor: '#AFD2A3',
            shadowColor: '#000000',
            shadowOffset: {width: 0, height: -5},
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


    return (
        <Card style={styles.card} onPress={cardClick}>
            <Card.Content>
                <Text variant="titleLarge">{book.title}</Text>
                <Text variant="bodyMedium">Publication: {book.publication_date}</Text>
            </Card.Content>
            <Card.Actions style={styles.actions}>
                <IconButton
                    icon="trash-can"
                    iconColor={MD3Colors.neutral20}
                    size={20}
                    onPress={() => onDelete(book.id)}
                    style={styles.iconButton}
                />
                <IconButton
                    icon="pencil"
                    iconColor={MD3Colors.neutral20}
                    size={20}
                    onPress={() => editCardClick(book)}
                    style={styles.iconButton}
                />
            </Card.Actions>
        </Card>
    );
}
