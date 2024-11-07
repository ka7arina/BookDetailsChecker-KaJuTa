import React, { useEffect, useState } from 'react';
import { StyleSheet, View, ImageBackground, Text } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import AsyncStorage from "@react-native-async-storage/async-storage";
import ProfileCard from "@/components/ProfileCard";

interface User {
    age?: number;
    email: string;
    firstname?: string;
    id: number;
    lastname?: string;
}

export default function ProfileScreen() {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const loadUserData = async () => {
            try {
                const jsonValue = await AsyncStorage.getItem("userData");
                if (jsonValue != null) {
                    const userData: User = JSON.parse(jsonValue);
                    setUser(userData);
                    console.log("User data loaded:", userData);
                }
            } catch (error) {
                console.error("Failed to load user data:", error);
            }
        };

        loadUserData();
    }, []);

    return (
        <PaperProvider>
            <ImageBackground
                source={require('../../assets/images/background-image.png')}
                style={styles.background}
            >
                <View style={styles.container}>
                    {user ? (
                        <View style={styles.centeredContent}>
                            <ProfileCard
                                age={user.age}
                                email={user.email}
                                firstname={user.firstname}
                                lastname={user.lastname}
                            />
                        </View>
                    ) : (
                        <Text style={styles.noDataText}>No user data available</Text>
                    )}
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
    },
    centeredContent: {
        width: '100%', // Make the content container width 100% if needed
        alignItems: 'center', // Center horizontally
        justifyContent: 'center', // Center vertically
    },
    noDataText: {
        textAlign: 'center',
        fontSize: 16,
    },
});
