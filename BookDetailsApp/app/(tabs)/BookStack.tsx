import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BooksScreen from '../Books';
import ModalScreen from '../modal';

type BookStackParamList = {
    Books: undefined;
    Modal: undefined;
};

const Stack = createStackNavigator<BookStackParamList>();

export default function BookStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Books"
                component={BooksScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Modal"
                component={ModalScreen}
                options={{ presentation: 'modal', headerShown: true }}
            />
        </Stack.Navigator>
    );
}
