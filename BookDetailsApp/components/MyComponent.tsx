import * as React from 'react';
import { Avatar, Button, Card, Text } from 'react-native-paper';

const LeftContent: React.FC = () => (
    <Avatar.Icon size={40} icon="folder" />
);

const MyComponent: React.FC = () => (
    <Card>
        <Card.Content>
            <Text variant="titleLarge">Welcome to the
                Book Crux Library</Text>
        </Card.Content>
    </Card>
);

export default MyComponent;
