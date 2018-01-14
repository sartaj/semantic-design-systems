A semantic design system to provide generic rules to some common design system found in multiple industries.

## Examples

* *Visual Design*: Atomic Design, Google's Material Design, IBM's Carbon Design System
* *Software*: monolith codebases vs modular codebases. General import/export philosophies.
* *Legal Systems*: Bill of Rights/Declaration/Constitution as primitives, Highway construction bill something way more complex.
* *Music Composition*: Primitive Instruments. Complex patterns on top.

### Inspired By

* Ontologies
* Semantic Networks
* Frame language

## Basic Rules

* All these are just trees of patterns you mix together.
* The patterns tend to be leveled by identifying complexity.

## Formula

```markdown
Level 1: basic variables/primitives/atoms
Level 2: Combination of above atoms based of variable complexity.
... Level n: Combination of above atoms based of variable complexity, with amount of levels accounting for the delta in complexity.
```

## Examples

### [IBM's Carbon Design System](http://carbondesignsystem.com/)

```
  level-1: Flat structure. All components can be intermixed.
```

### [Google's Material Design](https://material.io)

```
  level-1: Components: Buttons, Sliders, Knobs
  level-2: Patterns: Navigation Drawer, Notifications, Search
```

### [Atomic Design](http://bradfrost.com/blog/post/atomic-web-design/)
```
  level-1: Atoms
  level-2: Molecules
  level-3: Organisms
  level-4: Templates
  level-5: Pages
```

Some of these may add more rules, like which levels the patterns can import from. One that comes to mind is "Can 5 only import from 4, or can it import 2, 4, & 5?".

## Comments

I would love to get peoples feedback on this. Please add an issue to this github if you know.
