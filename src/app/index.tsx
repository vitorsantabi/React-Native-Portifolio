import Ionicons from '@expo/vector-icons/Ionicons';
import { BlurView } from 'expo-blur';
import { router } from 'expo-router';
import React from 'react';
import { ImageBackground, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Avatar from '../assets/images/avatar.jpg';
export default function App() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ImageBackground source={Avatar} style={styles.container}>
                <View style={styles.menuContainer}>
                    <Text style={styles.menuTextP}>Portifolio</Text>
                    <TouchableOpacity style={styles.menuItem} onPress={() => router.push('/projetos')}>
                        <Text style={styles.menuText}>Projetos</Text>
                    </TouchableOpacity>
                </View>
                <BlurView intensity={35} tint="dark" style={styles.blurContainer}>
                    <View style={styles.profileTextContainer}>
                        <Text style={styles.profileText}>Vitor Santana</Text>
                        <TouchableOpacity style={styles.profileTextSub} onPress={() => Linking.openURL('mailto:vitorsantabi@gmail.com')}>
                            <Text style={styles.menuText}>Contato </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.socialContainer}>
                        <TouchableOpacity style={styles.socialItem} onPress={() => Linking.openURL('https://github.com/vitorsantabi')}>
                            <Ionicons name="logo-github" size={24} color="white" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.socialItem} onPress={() => Linking.openURL('https://www.linkedin.com/in/vitorsantab/')}>
                            <Ionicons name="logo-linkedin" size={24} color="white" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.socialItem} onPress={() => Linking.openURL('https://x.com/vitorsantab')}>
                            <Ionicons name="logo-twitter" size={24} color="white" />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.aboutContainer}>
                        <Text style={styles.aboutText}>Sou estudante de Sistemas para Internet e desenvolvedor front-end, sempre buscando criar interfaces claras e funcionais. Atualmente estou aprendendo React Native e aprimorando minhas habilidades para construir experiências modernas e intuitivas</Text>
                    </View>
                </BlurView>
            </ImageBackground>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        height: "100%",
        alignItems: 'center',
        justifyContent: 'center',
    },
    menuContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: "100%",
        position: 'absolute',
        padding: 20,
        top: 0,


    },
    menuItem: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        padding: 15,
        borderRadius: 30,
    },
    menuText: {
        color: '#fff',
        fontSize: 25,

        textAlign: 'center',
    },
    menuTextP: {
        color: '#fff',
        fontSize: 50,
        fontWeight: 'bold',
    },
    blurContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: "96%",
        height: "45%",
        borderRadius: 30,
        padding: 10,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        position: 'absolute',
        bottom: 30,

    },
    profileTextContainer: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        position: 'absolute',
        top: 30,
        padding: 10,
    },
    profileText: {
        fontSize: 70,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'left',
        width: "70%",
        position: 'relative',
        top: 10,
        left: 10,
        lineHeight: 45,
    },
    profileTextSub: {
        fontSize: 15,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        padding: 10,
        borderRadius: 30,
        color: '#fff',
        width: "30%",
        textAlign: 'right',
        position: 'relative',
        bottom: 20,
    },
    socialContainer: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        width: "100%",
        padding: 10,
        gap: 10,
        position: 'relative',
        top: 55,


    },
    socialItem: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        padding: 10,
        borderRadius: 10,
    },
    aboutContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: "100%",
        padding: 10,
        gap: 10,
        position: 'relative',
        top: 50,

    },
    aboutText: {
        fontSize: 18,
        color: '#fff',

    },
});
