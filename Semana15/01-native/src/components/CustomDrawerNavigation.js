import SafeAreaView from 'react-native-safe-area-view';
import { DrawerNavigatorItems } from 'react-navigation-drawer';
import { StyleSheet, ScrollView, Text, View, ImageBackground } from 'react-native';

import React from 'react';

export default CustomDrawerContentComponent = props => {

    return (
        <ScrollView>
            <SafeAreaView
                style={styles.container}
                forceInset={{ top: 'always', horizontal: 'never' }}
            >
                <View style={styles.headerContainer}>
                    <ImageBackground source={require('./../../assets/bg.jpg')}
                        style={{ flex: 1, width: 280, justifyContent: 'center' }} >
                        <Text style={styles.headerText}>
                            Header Portion
                            </Text>
                        <Text style={styles.headerText}>
                            You can display here logo or profile image
                            </Text>
                    </ImageBackground>
                </View>
                <DrawerNavigatorItems {...props} />

            </SafeAreaView>
        </ScrollView>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#4C4C4C'
    },
    headerContainer: {
        height: 150,
    },
    headerText: {
        color: '#fff8f8',
    },
});
