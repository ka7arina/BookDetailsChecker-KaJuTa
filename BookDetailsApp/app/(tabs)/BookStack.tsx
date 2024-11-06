import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BooksScreen from '../Books';
import EditBookScreen from '../EditBook';
import ViewBookScreen from '../ViewBook';
import CreateBookScreen from '../CreateBook';

export type BookStackParamList = {
    Books: undefined;
    EditBook: undefined;
    CreateBook: undefined;
    ViewBook: undefined;
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
                name="EditBook"
                component={EditBookScreen}
                options={{headerShown: true }}
            />
            <Stack.Screen
                name="CreateBook"
                component={CreateBookScreen}
                options={{headerShown: true }}
            />
            <Stack.Screen
                name="ViewBook"
                component={ViewBookScreen}
                options={{headerShown: true }}
            />
        </Stack.Navigator>
    );
}
