import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';

const FilterBar = () => (
    <View style={styles.container}>
        <View style={styles.box}>
            <Text style={styles.text}>Filter</Text>
        </View>
        <View style={[styles.box, styles.clickableBox]}>
            <Text style={styles.text} onPress={() => console.log('pressed book title filter')}>
                Book Title
            </Text>
        </View>
        <View style={[styles.box, styles.clickableBox]}>
            <Text style={styles.text} onPress={() => console.log('pressed filter publication date')}>
                Publication Date
            </Text>
        </View>
    </View>
);

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.55)',
        paddingVertical: 10,
        paddingHorizontal: 15,
        zIndex: 10,
    },
    box: {
        borderColor: 'grey',
        borderWidth: 1,
        paddingHorizontal: 12,
        paddingVertical: 5,
        marginRight: 0,
        backgroundColor: 'white',
    },
    clickableBox: {
        flex: 1,
    },
    text: {
        color: '#d3d3d3',
    },
});

export default FilterBar;
