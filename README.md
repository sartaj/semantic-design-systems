# Semantic Design System [Proposal]

A semantic design system to provide generic rules to some common design system found in multiple industries.

## Inspired By

* *Visual Design*: Atomic Design, Google's Material Design, IBM's Carbon Design System
* *Software*: Monolith codebases vs modular codebases. General import/export philosophies.
* *Ontologies*: Used to limit complexity and organize information
* *Semantic Networks*: Graph consisting of vertices, which represent concepts, and edges, which represent semantic relations between concepts.
* *Frame language*: Artificial intelligence data structure used to divide knowledge into substructures by representing "stereotyped situations."

## Premises

* All these are just trees of patterns you mix together.
* The patterns tend to be leveled by identifying complexity.

## Formula

```markdown
Level 1: basic variables/primitives/atoms
Level 2: Combination of above atoms based of variable complexity.
... Level n: Combination of above atoms based of variable complexity, with amount of levels accounting for the delta in complexity.
```

## Specification

* These patterns can be leveled by numbers according to complexity.
* The amount of levels speaks to the relationship and delta between different complex patterns.
* The delta of complexity between different should be similar. (i.e. level-1 to level-2 complexity difference should be similar to level-4 to level-5)

## Optional

* Which levels the patterns can import from. One that comes to mind is "Can 5 only import from 4, or can it import 2, 4, & 5?".

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

## Comments

I would love to get peoples feedback on this. Please add an issue to this github if you know.
