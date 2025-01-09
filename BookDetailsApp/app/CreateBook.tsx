import React, { useState } from 'react';
import { StyleSheet, View, ImageBackground, Alert } from 'react-native';
import { PaperProvider, TextInput, Button } from 'react-native-paper';
import BookService from '../services/BookService';
import { useNavigation } from '@react-navigation/native';
import stylesConfig from '../constants/Styles';
import Colors from '../constants/Colors';

export default function CreateBookScreen() {
    const [title, setTitle] = useState('');
    const [isbn, setIsbn] = useState('');
    const [language, setLanguage] = useState('');
    const [pages, setPages] = useState('');
    const [publicationDate, setPublicationDate] = useState('');
    const [publisher, setPublisher] = useState('');
    const navigation = useNavigation();

    const handleSave = async () => {
        if (!title || !isbn || !language || !pages || !publicationDate || !publisher) {
            Alert.alert("Error", "All fields are required.");
            return;
        }

        try {
            await BookService.createBook({
                title,
                isbn13: isbn,
                language_id: parseInt(language),
                num_pages: parseInt(pages),
                publication_date: publicationDate,
                publisher_id: parseInt(publisher),
            });
            Alert.alert("Success", "Book created successfully.");
            navigation.goBack();
        } catch (error) {
            console.error("Error creating book:", error);
            Alert.alert("Error", "Failed to create book.");
        }
    };

    return (
        <PaperProvider>
            <ImageBackground
                source={require('../assets/images/background-image.png')}
                style={styles.background}
            >
                <View style={styles.container}>
                    <TextInput
                        label="Title"
                        value={title}
                        mode="outlined"
                        style={styles.input}
                        onChangeText={setTitle}
                    />
                    <TextInput
                        label="ISBN"
                        value={isbn}
                        mode="outlined"
                        style={styles.input}
                        onChangeText={setIsbn}
                    />
                    <TextInput
                        label="Language"
                        value={language}
                        mode="outlined"
                        style={styles.input}
                        keyboardType="numeric"
                        onChangeText={setLanguage}
                    />
                    <TextInput
                        label="Pages"
                        value={pages}
                        mode="outlined"
                        style={styles.input}
                        keyboardType="numeric"
                        onChangeText={setPages}
                    />
                    <TextInput
                        label="Publication date"
                        value={publicationDate}
                        mode="outlined"
                        style={styles.input}
                        onChangeText={setPublicationDate}
                    />
                    <TextInput
                        label="Publisher"
                        value={publisher}
                        mode="outlined"
                        style={styles.input}
                        keyboardType="numeric"
                        onChangeText={setPublisher}
                    />
                    <View style={styles.buttonContainer}>
                        <Button
                            mode="contained"
                            onPress={handleSave}
                            style={[stylesConfig.button, { backgroundColor: Colors.light.greenMedium }]}
                            labelStyle={stylesConfig.buttonText}
                        >
                            Save
                        </Button>
                        <Button
                            mode="contained"
                            onPress={() => navigation.goBack()}
                            style={[stylesConfig.button, { backgroundColor: Colors.light.greenDark }]}
                            labelStyle={stylesConfig.buttonText}
                        >
                            Cancel
                        </Button>
                    </View>
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
    input: {
        width: '100%',
        marginBottom: 15,
        ...stylesConfig.textField,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginTop: 15,
    },
});
