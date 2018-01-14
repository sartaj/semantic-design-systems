I've been trying to see if there is a more semantic way to describe design systems used throughout multiple industries, like visual design languages and computer architecture. 

## Examples

*Visual Design*: Atomic Design, Google's Material Design, IBM's Carbon Design System
*Software*: monolith codebases vs modular codebases. General import/export philosophies.
*Legal Systems*: Bill of Rights/Declaration/Constitution as primitives, Highway construction bill something way more complex.
*Music Composition*: Primitive Instruments. Complex patterns on top.

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

## Questions

Is there anything in cognitive science. complexity theory, or related field that can speak to this phenomenon? LIke a Semantic Design System  or Semantic Design Tree? Specifically I was hoping something that was more generic or mathematical, not analogy based.

Please add an issue to this github if you know.
