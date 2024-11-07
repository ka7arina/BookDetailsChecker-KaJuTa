import React, { useEffect, useState } from 'react';
import { StyleSheet, View, ScrollView, ImageBackground } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import FilterBar from '../components/FilterBar';
import BookCard from '../components/BookCard';
import '../assets/images/background-image.png'
import BookButton from '../components/AddBookButton';
import BookService from '../services/BookService';
import { Book } from '@/models/Book.model';


// @ts-ignore
export default function BookScreen({ navigation }) {

    const [books, setBooks] = useState<Book[]>([]);

    useEffect(() => {
        fetchBooks();
    }, []);

    const fetchBooks = async () => {
        try {
            const data = await BookService.getBooks();
            setBooks(data);
        } catch (error) {
            console.error("Error fetching books:", error);
        }
    };



    const handleDeleteBook = async (bookId: number) => {
        try {
            await BookService.deleteBook(bookId);
            setBooks(books.filter((book) => book.id !== bookId));
        } catch (error) {
            console.error("Error deleting book:", error);
        }
    };

    const seeDetails = (bookId: number) => {
        navigation.navigate('ViewBook', { bookId });
    };

    const editCard = (bookId: number) => {
        navigation.navigate('EditBook', { bookId });
    };

    const createBook = () => {
        navigation.navigate('CreateBook');
    };

    return (
        <PaperProvider>
            <ImageBackground
                source={require('../assets/images/background-image.png')}
                style={pageStyles.background}
            >
                <View style={pageStyles.container}>
                    <FilterBar />
                    <BookButton buttonClick={createBook} />
                    <ScrollView contentContainerStyle={pageStyles.scrollViewContent}>
                        {books.map((book) => (
                            <BookCard
                                key={book.id}
                                book={book}
                                editCardClick={() => editCard(book.id)}
                                onDelete={handleDeleteBook}
                                cardClick={() => seeDetails(book.id)}
                            />
                        ))}
                    </ScrollView>
                </View>
            </ImageBackground>
        </PaperProvider>
    );
}

const pageStyles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: 'cover',
    },
    container: {
        flex: 1,
    },
    scrollViewContent: {
        paddingTop: 60,
        paddingBottom: 20,
    },
});
