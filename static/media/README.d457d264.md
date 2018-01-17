# Semantic Design System

*(rev. 18 January, 2018)*

A semantic design system to provide generic rules for easier design pattern classifications. It can be used with design systems like Atomic Design, Material Design, etc.

## Premises

* Design systems are just stacks of design patterns you can use to unify solutions of varying complexities.
* These patterns tend to be stacked by identifying complexity.

## Primary Concepts

* **Stack**: Each level in a design system can be considered a Stack.
* **Complexity**: Defining how specific vs reusable a design pattern is, i.e. a Button is simpler than a News Feed.
* **Complexity Δ (delta)**: The amount of difference in complexity. i.e. a Button has a large Δ in complexity than a News Feed, but a Button has a small Δ in complexity vs a Simple Search.

## Formula

# `(stack-𝟣 ...stack-𝑛) / complexity-Δ`

## Specification

* **Define the number of Stacks, from `𝟣-𝑛`.** A design system can have any number of Stacks, from 𝟣 to 𝑛.
* **Ensure a consistent Complexity Δ.** As more Stacks are added, the Complexity Δ between different Stacks should be similar. (i.e. `stack-1` to `stack-2` Complexity Δ should be similar to `stack-4` to `stack-5`)
* **Primarily define Complexity through specificity.** Try to find a pattern in how specific a design is. In larger stack systems (4+ Stacks), `stack-𝑛` may be a single use pattern, like Pages in Atomic Design. In smaller systems (2 Stacks), `stack-2` may only be a bit more specific, like Pattern Components in Google's Material Design.
* **Add additional definitions to Complexity for clarity.** While specificity may dictate complexity, additional definitions can help simplify the classification process. For example, an Atomic Design inspired system that incorporates branding and skins may have a `stack-1` that only allows colors/fonts/etc, but not structured basic components like Button.
* **Define if Stacks can import all or only direct parent Stacks.** Define which levels the patterns can import from. Can `stack-5` only import from `stack-4`? Or can it import a combination of One that comes to mind is "Can 5 only import from 4, or can it import 2, 4, & 5?".

## Examples

### 1 Stack

Single Stack design systems tend to keep things flats. The flat structure keeps the design system simple to define due to not having to assess complexity, but could confuse users on relationships between patterns.

#### [IBM's Carbon Design System](http://carbondesignsystem.com/)

```
  stack-1: Flat structure. All components can be intermixed.
```

### 2 Stacks

2 Stacks tend to separate simple design patterns, like Buttons and Sliders, with complex patterns like Navigation Drawers. The two structure system makes most components easy to categorize, but items like a Search Bar can be harder to assess, due to complexity being between something very simple and very complex.

#### [Google's Material Design](https://material.io)

```
  stack-1: Components: Buttons, Sliders, Knobs
  stack-2: Patterns: Navigation Drawer, Notifications, Search
```

### 5 Stacks

5 Stacks provide significant granularity on defining complexity between different design patterns. Benefits include clear definitions of complexity to separate simple design patterns, like Buttons and Sliders, with complex patterns like Navigation Drawers. The two structure system makes most components easy to categorize, but items like a Search Bar can be harder to assess, due to complexity being between something very simple and very complex.

#### [Atomic Design](http://bradfrost.com/blog/post/atomic-web-design/)
```
  stack-1: Atoms
  stack-2: Molecules
  stack-3: Organisms
  stack-4: Templates
  stack-5: Pages
```

## Inspired By

* *Visual Design Systems*: Atomic Design, Google's Material Design, IBM's Carbon Design System
* *Software Architecture Patterns*: Monolith codebases vs modular codebases. General import/export philosophies.
* *Ontologies*: Used to limit complexity and organize information
* *Semantic Networks*: Graph consisting of vertices, which represent concepts, and edges, which represent semantic relations between concepts.
* *Frame language*: Artificial intelligence data structure used to divide knowledge into substructures by representing "stereotyped situations."

## Comments

Please add an issue to the [GitHub page](https://github.com/sartaj/semantic-design-systems/issues) for comments/feedback/discussions. I would love to get peoples feedback on this.