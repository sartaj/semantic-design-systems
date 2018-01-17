/**
 * React Native for Web Starter App
 * Follow me https://twitter.com/grabthecode
 */

import { AppRegistry } from 'react-native';
import { Root } from './Root';

const div = document.createElement('div');
div.id = 'root'
document.body.appendChild(div)

AppRegistry.registerComponent('Root', () => Root);
AppRegistry.runApplication('Root', {
  rootTag: document.getElementById('root')
});
