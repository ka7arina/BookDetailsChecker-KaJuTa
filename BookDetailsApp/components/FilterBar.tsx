import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Snackbar } from 'react-native-paper';

type FilterBarProps = {
    onSortByTitle: () => void;
    onSortByDate: () => void;
};

const FilterBar: React.FC<FilterBarProps> = ({ onSortByTitle, onSortByDate }) => {
    const [titleVisible, setTitleVisible] = React.useState(false);
    const [dateVisible, setDateVisible] = React.useState(false);

    const onToggleTitleSnackBar = () => setTitleVisible(!titleVisible);
    const onDismissTitleSnackBar = () => setTitleVisible(false);

    const onToggleDateSnackBar = () => setDateVisible(!dateVisible);
    const onDismissDateSnackBar = () => setDateVisible(false);

    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <Text style={styles.text}>Filter</Text>
            </View>
            <View style={[styles.box, styles.clickableBox]}>
                <Text
                    style={styles.text}
                    onPress={() => {
                        onSortByTitle();
                        onToggleTitleSnackBar();
                    }}
                >
                    Book Title
                </Text>
            </View>
            <View style={[styles.box, styles.clickableBox]}>
                <Text
                    style={styles.text}
                    onPress={() => {
                        onSortByDate();
                        onToggleDateSnackBar();
                    }}
                >
                    Publication Date
                </Text>
            </View>

            {/* Snackbar for sorting by title */}
            <Snackbar
                visible={titleVisible}
                onDismiss={onDismissTitleSnackBar}
                duration={3000}
                style={styles.snackbar}
            >
                Sorting by Book Title
            </Snackbar>

            {/* Snackbar for sorting by date */}
            <Snackbar
                visible={dateVisible}
                onDismiss={onDismissDateSnackBar}
                duration={3000}
                style={styles.snackbar}
            >
                Sorting by Publication Date
            </Snackbar>
        </View>
    );
};

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
    snackbar: {
        backgroundColor: '#74A265',
        position: 'absolute',
        justifyContent: 'flex-end',

    },
});

export default FilterBar;
