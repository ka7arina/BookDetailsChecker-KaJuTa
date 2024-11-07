import * as React from 'react';
import { Card, IconButton, MD3Colors, Text } from 'react-native-paper';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Book } from '../models/Book.model';

interface BookCardProps {
    book: Book;
    onEdit: (book: Book) => void;
    onDelete: (bookId: number) => void;
    cardClick: () => void; 
}

const BookCard: React.FC<BookCardProps> = ({ book, onEdit, onDelete, cardClick }) => (
    <TouchableOpacity onPress={cardClick}> 
        <Card style={styles.card}>
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
                    onPress={() => onEdit(book)}
                    style={styles.iconButton}
                />
            </Card.Actions>
        </Card>
    </TouchableOpacity>
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
        shadowOpacity: 0.3,
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
    },
});

export default BookCard;
