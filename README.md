A semantic design system to provide generic rules to some common design system found in multiple industries.

## Examples

*Visual Design*: Atomic Design, Google's Material Design, IBM's Carbon Design System
*Software*: monolith codebases vs modular codebases. General import/export philosophies.
*Legal Systems*: Bill of Rights/Declaration/Constitution as primitives, Highway construction bill something way more complex.
*Music Composition*: Primitive Instruments. Complex patterns on top.

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

Some of these may add more rules, like which levels the patterns can import from. One that comes to mind is "Can 5 only import from 4, or can it import 2, 4, & 5?".

## Comments

I would love to get peoples feedback on this. Please add an issue to this github if you know.
