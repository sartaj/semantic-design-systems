import React, { Component } from 'react'
import { View, StyleSheet, Text, TextInput } from 'react-native'

import md from '../README.md'
import marked from 'marked'

import DesignStack from './DesignStack'
import './markdown.web.css'

const colorBlack = 'rgba(80,80,80, 1)'
const colorWhite = 'rgba(255,255,255,0.7)'
const defaultStack = `Atoms
Molecules
Organisms
Templates
Pages`
const styles = StyleSheet.create({
  container: {},
  cover: {
    height: '90vh',
    flex: 1,
    backgroundColor: colorBlack,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: '5vw'
  },
  flex1: {
    flex: 1
  },
  coverTitle: {
    flex: 1,
    color: 'white',
    fontFamily: 'monospace',
    fontSize: '5vh'
  },
  coverDescription: {
    flex: 1,
    color: colorWhite,
    fontFamily: 'monospace',
    fontSize: '3vh'
  },
  coverInstructions: {
    flex: 1,
    color: colorWhite,
    fontFamily: 'monospace',
    fontSize: '3vh',
    marginTop: '4vh',
    fontWeight: '700',
    textTransform: 'uppercase'
  }
})

export class Root extends Component {
  constructor(props) {
    super(props)
    this.state = {
      readme: '',
      textInput: defaultStack
    }
  }

  componentWillMount() {
    fetch(md)
      .then(res => res.text())
      .then(body => {
        this.setState({
          readme: marked(body)
        })
      })
  }
  updateText(value) {
    this.setState({
      textInput: value
    })
  }

  render() {
    const { readme, textInput } = this.state
    return (
      <View style={styles.container}>
        <View style={styles.cover}>
          <View style={styles.flex1}>
            <Text style={styles.coverTitle}>Make Your Own Design System</Text>
            <Text style={styles.coverDescription}>
              Semantic rules for easier design pattern classifications.
            </Text>
            <Text style={styles.coverInstructions}>
              Try it Out (edit the list below)
            </Text>
            <TextInput
              editable
              multiline
              style={{
                color: 'white',
                height: `${textInput.split('\n').length * 2}rem`,
                width: '30vw',
                fontSize: '1.2rem'
              }}
              value={textInput}
              onChangeText={textInput => this.setState({ textInput })}
            />
          </View>
          <View style={styles.flex1} className="u-hideOnMobile">
            <DesignStack stackData={textInput} />
          </View>
        </View>
        <div
          className="markdownStyles"
          dangerouslySetInnerHTML={{ __html: readme }}
        />
      </View>
    )
  }
}
