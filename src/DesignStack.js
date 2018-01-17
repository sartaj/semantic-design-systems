import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

const stackBackgroundColors = [
    '#03a9f4',
    '#ff9800',
    '#9c27b0',
    '#e91e63',
    '#3f51b5',
    '#4caf50'
]

const atomicDesignMock = [
    {
        name: 'Atoms'
    },
    {
        name: 'Molecules'
    },
    {
        name: 'Organisms'
    },
    {
        name: 'Templates'
    },
    {
        name: 'Pages'
    }
]

const styles = StyleSheet.create({
    h1: {
        fontSize: '28px',
        fontWeight: 'bold'
    },
    container: {
        maxWidth: '854px',
        width: '100%',
        alignSelf: 'center',
        flex: 1
    },
    stackContainer: {
        height: '400px'
    },
    stackFlexContainer: {
        flex:1,
        flexDirection: 'column'
    },
    stackItem: {
        flex: 1,
        borderWidth: '1px',
        borderColor: 'rgba(0,0,0,0.3)',
        flexDirection: 'column',
        justifyContent: 'center'
    },
    stackTitle: {
        alignSelf: 'center',
        color: 'white',
        fontWeight: 'bold',
        fontSize: '1.2rem'
    },
    stackDescription: {
        alignSelf: 'center',
        color: 'white',
        fontSize: '1rem'
    }
})

const DesignStackGraph = ({ levels }) => (
    <View style={styles.container}> 
        <Text style={styles.h1}>Design System Designer</Text>
        <Text>Try different configurations out to test devops</Text>
        <View style={styles.stackContainer}>
            <View style={styles.stackFlexContainer}>
                {levels.map((level, i) => (
                    <View style={[styles.stackItem, { backgroundColor: stackBackgroundColors[i] }]} key={i}><Text style={styles.stackTitle}>{level.name}</Text><Text style={styles.stackDescription}>{level.name}</Text></View>
                ))}
            </View>
        </View>
    </View>
)

export default class DesignStack extends Component {
    render() {
        return (
            <DesignStackGraph levels={atomicDesignMock} />
        )
    }
}