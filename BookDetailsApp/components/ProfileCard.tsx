import * as React from 'react';
import { Card, Text, TextInput, Button } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';
import Colors from "@/constants/Colors";
import { useColorScheme } from "@/components/useColorScheme";

type ProfileCardProps = {
    age?: number;
    email: string;
    firstname?: string;
    lastname?: string;
};

export default function ProfileCard({ age, email, firstname, lastname }: ProfileCardProps) {
    const colorScheme = useColorScheme();

    const styles = StyleSheet.create({
        card: {
            margin: 10,
            padding: 10,
            width: 300,
            height: 500,
            alignSelf: 'center',
            justifyContent: 'flex-start',
            backgroundColor: Colors[colorScheme ?? 'light'].offWhite,
            shadowColor: '#000000',
            shadowOffset: { width: 0, height: 5 },
            shadowOpacity: 0.3,
            shadowRadius: 4,
            elevation: 4,
            borderRadius: 15,
        },
        title: {
            backgroundColor: Colors[colorScheme ?? 'light'].greenDark,
            paddingVertical: 10,
            textAlign: 'center',
            color: '#000',
            fontSize: 20,
            borderRadius: 6,
            marginBottom: 20,
            overflow: 'hidden',
        },
        inputBox: {
            height: 50,
            backgroundColor: '#FFF',
            borderColor: '#000',
            borderWidth: 1,
            borderRadius: 2,
            paddingHorizontal: 10,
            marginVertical: 10,
            fontSize: 16,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.1,
            shadowRadius: 2,
            elevation: 2,
        },
        buttonText: {
            color: '#FFF',
            fontSize: 16,
            fontWeight: 'bold',
        },
    });

    return (
        <Card style={styles.card}>
            <Card.Content>
                <Text style={styles.title}>Your Profile</Text>

                <TextInput
                    mode="outlined"
                    style={styles.inputBox}
                    placeholder="Email"
                    value={email}
                    editable={false}
                />
                <TextInput
                    mode="outlined"
                    style={styles.inputBox}
                    placeholder="Firstname"
                    value={firstname}
                    editable={false}
                />
                <TextInput
                    mode="outlined"
                    style={styles.inputBox}
                    placeholder="Lastname"
                    value={lastname}
                    editable={false}
                />
                <TextInput
                    mode="outlined"
                    style={styles.inputBox}
                    placeholder="Age"
                    value={age ? age.toString() : ''}
                    editable={false}
                />

            </Card.Content>
        </Card>
    );
}
