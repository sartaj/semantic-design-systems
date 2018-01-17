import React, { Component } from 'react'
import { View, StyleSheet, Text } from  'react-native'

import md from '../README.md'
import marked from 'marked'

import DesignStack from './DesignStack'
import './markdown.web.css'

const styles = StyleSheet.create({
  container: {
  },
  cover: {
    height: '40vh',
    flex: 1,
    backgroundColor: 'black',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: '5vw'
  },
  coverText: {
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
    color: 'rgba(255,255,255,0.7)',
    fontFamily: 'monospace',
    fontSize: '3vh' 
  }
})

export class Root extends Component {
  constructor(props) {
    super(props);
    this.state = {readme: ''};
  }

  componentWillMount() {
    fetch(md).then(res => res.text()).then(body => {
      this.setState({
        readme: marked(body)
      })  
    })
  }

  render() {
    const { readme } = this.state
    return (
      <View style={styles.container}>
        <View style={styles.cover}>
          <View style={styles.coverText}>
            <Text style={styles.coverTitle}>Semantic Design Systems</Text>
            <Text style={styles.coverDescription}>Generic rules for easier design pattern classifications.</Text>
          </View>
        </View>
        <div className='markdownStyles' dangerouslySetInnerHTML={{__html: readme}}></div>
      </View>
    )
  }
}