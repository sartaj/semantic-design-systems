import React, { Component } from 'react'
import { View, StyleSheet, Text } from  'react-native'

import md from '../README.md'
import marked from 'marked'
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
    flex: 1,
    textAlign: 'left',
    color: 'white',
    fontFamily: 'monospace',
    fontSize: '5vh'
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
          <Text style={styles.coverText}>Semantic Design Systems</Text>
        </View>
        <div className='markdownStyles' dangerouslySetInnerHTML={{__html: readme}}></div>
      </View>
    )
  }
}