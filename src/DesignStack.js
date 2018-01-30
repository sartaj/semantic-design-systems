/* @flow */

import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Trianglify from 'react-trianglify'

import './DesignStack.web.css'

const stackBackgroundColors = [
  'hsl(250,60%,40%)',
  'hsl(190,60%,40%)',
  'hsl(140,60%,40%)',
  'hsl(90,60%,40%)',
  'hsl(40,60%,40%)',
  'hsl(10,60%,40%)'
]
const colorWhite = 'white'

const calcCellSpacing = (min, max, count) => (max - min) / count

const stackSize = () => window.innerHeight * 0.9 * 0.4

const structure = StyleSheet.create({
  Container: {
    position: 'relative',
    width: stackSize(),
    height: stackSize()
  },
  ContainerFlex: {
    flex: 1,
    alignItems: 'flex-end'
  },
  SectionAbsolute: {
    position: 'absolute',
    width: stackSize(),
    height: stackSize()
  },
  SectionRelative: {
    position: 'relative',
    width: '100%',
    height: '100%',
    display: 'block'
  },
  SectionFlex: {
    display: 'flex',
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'flex-start'
  }
})

export const font = StyleSheet.create({
  stackTitle: {
    color: colorWhite,
    fontWeight: 'bold',
    fontSize: '1.5vmax',
    lineHeight: '1.1',
    margin: 0,
    textAlign: 'center'
  }
})

const styles = {
  ...structure,
  ...font
}

console.log(styles)
export { styles }

const Container = ({ children }) => (
  <View style={[structure.Container]}>
    <View style={structure.ContainerFlex}>{children}</View>
  </View>
)

const SectionAnimationContext = ({ children, i, disable }) => (
  <View
    style={[
      disable
        ? {}
        : {
            transform: [
              { perspective: stackSize() * 8 },
              { translateX: -i * 40 },
              { rotateY: '-45deg' }
            ]
          }
    ]}
    className="AnimationContext"
  >
    {children}
  </View>
)

const SectionStructureContext = ({ children, style }) => (
  <View style={[structure.SectionAbsolute, ...style]}>
    <View style={[structure.SectionRelative]}>
      <View style={[structure.SectionFlex]}>{children}</View>
    </View>
  </View>
)

export const DesignStackGraph = ({ min, max, stacks }) => {
  const spacing = calcCellSpacing(min, max, stacks.length)
  return (
    <Container>
      {stacks.map((level, i) => (
        <SectionAnimationContext i={i} key={i}>
          <SectionStructureContext style={{ zIndex: 1 }}>
            <View style={{ flex: 1, justifyContent: 'center' }}>
              <Trianglify
                width={stackSize()}
                height={stackSize()}
                cellSize={(20 + spacing) * ((i + 1) * (i + 1))}
                variance={1}
                seed={`${i * i}`}
                colorFunction={() => stackBackgroundColors[i]}
                className="DesignStackItemBackground"
              />
            </View>
          </SectionStructureContext>
          <SectionStructureContext
            style={{
              zIndex: 2
            }}
          >
            <View
              style={{
                flex: 1,
                justifyContent: 'flex-start',
                transform: [{ rotateZ: '90deg' }]
              }}
            >
              <Text style={font.stackTitle}>{level.name}</Text>
            </View>
          </SectionStructureContext>
        </SectionAnimationContext>
      ))}
    </Container>
  )
}

type StackMock = {
  min: 1,
  max: number,
  Stacks: Array<{ name: string }>
}

const generateDesignData = (stackData): StackMock => ({
  min: 1,
  max: stackData.split('\n').length - 1,
  Stacks: stackData
    .split('\n')
    .filter(name => name)
    .map(name => ({ name }))
})

const DesignStack = ({ stackData }) => {
  const designData = generateDesignData(stackData)
  return (
    <DesignStackGraph
      min={designData.min}
      max={designData.max}
      stacks={designData.Stacks}
    />
  )
}

export default DesignStack
