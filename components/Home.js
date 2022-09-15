import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { Button } from "@react-native-material/core";

const Home = () => {
    return (
        <View style={styles.wrap}>
            <View>
                <Text style={styles.logo}></Text>
            </View>
            <View style={styles.title}>
                <View style={{ alignItems: "center" }}>
                    <Text style={{ fontSize: 20, fontWeight: "600" }}>
                        GROW
                    </Text>
                    <Text style={{ fontSize: 20, fontWeight: "600" }}>
                        YOUR BUSINESS
                    </Text>
                </View>
                <View style={{ marginTop: 50, alignItems: "center" }}>
                    <Text
                        style={{
                            fontSize: 16,
                        }}
                    >
                        we will help to your business using online
                    </Text>
                </View>
            </View>
            <View style={styles.actions}>
                <Button style={styles.button} title="LOGIN" />
                <Button style={styles.button} title="SIGN UP" />
            </View>
            <View style={styles.questions}>
                <Text>HOW WE WORK ?</Text>
            </View>
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({
    wrap: {
        flex: 1,
        alignItems: "center",
        paddingTop: 150,
        paddingLeft: 40,
        paddingRight: 40,
        backgroundColor: "#ccc",
    },
    logo: {
        // fontSize: 50,
        // backgroundColor: "#000",
        width: 150,
        height: 150,
        borderRadius: 99,
        borderColor: "#000",
        borderWidth: 10,
    },
    title: {
        marginTop: 70,
        // alignItems: "center",
    },
    actions: {
        marginTop: 70,
        flexDirection: "row",
        justifyContent: "space-between",
        width: "80%",
    },
    questions: {
        marginTop: 50,
    },
    button: {
        minWidth: 100,
        paddingTop: 8,
        paddingBottom: 8,
        backgroundColor: "#b0b31d",
    },
});
