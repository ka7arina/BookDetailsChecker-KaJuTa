import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, ImageBackground, Button } from 'react-native';
import { PaperProvider, TextInput } from 'react-native-paper';
import BookService from '../services/BookService';
import { Book } from '../models/Book.model';
import { useNavigation, useRoute } from '@react-navigation/native';

export default function ViewBookScreen() {
    const [book, setBook] = useState<Book | null>(null);
    const route = useRoute();
    const navigation = useNavigation();
    const { bookId } = route.params as { bookId: number };

    useEffect(() => {
        fetchBookDetails();
    }, []);

    const fetchBookDetails = async () => {
        try {
            const data = await BookService.getBookById(bookId);
            setBook(data);
        } catch (error) {
            console.error("Error fetching book details:", error);
        }
    };

    if (!book) {
        return (
            <View style={styles.loadingContainer}>
                <Text>Loading...</Text>
            </View>
        );
    }

    return (
        <PaperProvider>
            <ImageBackground
                source={require('../assets/images/background-image.png')}
                style={styles.background}
            >
                <View style={styles.container}>
                    <Text style={styles.title}>{book.title}</Text>
                    <TextInput
                        label="ISBN"
                        value={book.isbn13}
                        mode="outlined"
                        style={styles.input}
                        editable={false}
                    />
                    <TextInput
                        label="Language"
                        value={book.language_id.toString()}
                        mode="outlined"
                        style={styles.input}
                        editable={false}
                    />
                    <TextInput
                        label="Pages"
                        value={book.num_pages.toString()}
                        mode="outlined"
                        style={styles.input}
                        editable={false}
                    />
                    <TextInput
                        label="Publication date"
                        value={book.publication_date}
                        mode="outlined"
                        style={styles.input}
                        editable={false}
                    />
                    <TextInput
                        label="Publisher"
                        value={book.publisher_id.toString()}
                        mode="outlined"
                        style={styles.input}
                        editable={false}
                    />
                    <Button title="Back" onPress={() => navigation.goBack()} />
                </View>
            </ImageBackground>
        </PaperProvider>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: 'cover',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#3e8e41',
        marginBottom: 20,
    },
    input: {
        width: '100%',
        marginBottom: 15,
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
