# Create A Design System

*(rev. 18 January, 2018)*

Design systems are an organizational technique to categorize different patterns based varying complexity.
 They include [Google's Material Design](https://material.io/guidelines/), [Apple Human Interface Guidelines](https://developer.apple.com/design/), [IBM Carbon Design](http://carbondesignsystem.com/), [Atomic Design](http://bradfrost.com/blog/post/atomic-web-design/), & [Airbnb Design](https://airbnb.design/building-a-visual-language/).

However, design systems don't have to be just visual. They can be used to organize any [symbolic system](https://en.wikipedia.org/wiki/Formal_grammar)/, whether its visual design languages, voice design languages (for voice based apps), human communication languages, etc.

A semantic design system provides generic rules for easier design pattern classifications. It can be used with design systems like Atomic Design, Material Design, etc.

This guide is to help create base guidelines for categorizing different components.

For more details on creating and implementing design systems, check [Design Better's Design Systems Handbook](https://www.designbetter.co/design-systems-handbook/designing-design-system)

## Guidelines

### Define the number of Stacks, from `𝟣-𝑛`

Each level in a design system can be considered a Stack. For example, Atomic Design names their Atoms, Molecules, & Organisms. This naming is to indicate the increasing specificity of a pattern.

A design system can have any number of Stacks, from 𝟣 to 𝑛, with each higher stack having less reusability and more specificity.

### Categorize the complexity of patterns by `Specificity ↔ Reusability`

Viewing specificity and reusability as a scale to identify complexity.

Try to find a pattern in how specific a design is. In larger stack systems (4+ Stacks), `stack-𝑛` may be a single use pattern, like Pages in Atomic Design. In smaller systems (2 Stacks), `stack-2` may only be a bit more specific, like Pattern Components in Google's Material Design.

### Keep a consistent `Complexity Δ` (delta)

The amount of difference in complexity. i.e. a Button has a large Δ in complexity than a News Feed, but a Button has a small Δ in complexity vs a Simple Search.

As more Stacks are added, the Complexity Δ between different Stacks should be similar. (i.e. `stack-1` to `stack-2` Complexity Δ should be similar to `stack-4` to `stack-5`)

### Define if Stacks can import all or only direct parent Stacks

Define which levels the patterns can import from. Can `stack-5` only import from `stack-4`? Or can it import a combination of One that comes to mind is "Can 5 only import from 4, or can it import 2, 4, & 5?".

### Add additional definitions to Complexity for clarity if needed

While specificity may dictate complexity, additional definitions can help simplify the classification process. For example, an Atomic Design inspired system that incorporates branding and skins may have a `stack-1` that only allows colors/fonts/etc, but not structured basic components like Button.

### Formula

**`(stack-𝟣 ...stack-𝑛) / complexity-Δ`**

## Examples

### [IBM's Carbon Design System](http://carbondesignsystem.com/) | 1 Stack

Single Stack design systems tend to keep things flats. The flat structure keeps the design system simple to define due to not having to assess complexity, but could confuse users on relationships between patterns.

```
  stack-1: Flat structure. All components can be intermixed.
```

---

### [Google's Material Design](https://material.io) | 2 Stacks

2 Stacks tend to separate simple design patterns, like Buttons and Sliders, with complex patterns like Navigation Drawers. The two structure system makes most components easy to categorize, but items like a Search Bar can be harder to assess, due to complexity being between something very simple and very complex.

```
  stack-1: Components: Buttons, Sliders, Knobs
  stack-2: Patterns: Navigation Drawer, Notifications, Search
```

---

### [Atomic Design](http://bradfrost.com/blog/post/atomic-web-design/) | 5 Stacks

5 Stacks provide significant granularity on defining complexity between different design patterns. Benefits include clear definitions of complexity to separate simple design patterns, like Buttons and Sliders, with complex patterns like Navigation Drawers. The two structure system makes most components easy to categorize, but items like a Search Bar can be harder to assess, due to complexity being between something very simple and very complex.
 
```
  stack-1: Atoms
  stack-2: Molecules
  stack-3: Organisms
  stack-4: Templates
  stack-5: Pages
```

## Inspired By

* *Visual Design Systems*: Atomic Design, Google's Material Design, ITCSS, IBM's Carbon Design System
* *Software Architecture Patterns*: Monolith codebases vs modular codebases. General import/export philosophies.
* *Ontologies*: Used to limit complexity and organize information
* *Semantic Networks*: Graph consisting of vertices, which represent concepts, and edges, which represent semantic relations between concepts.
* *Frame language*: Artificial intelligence data structure used to divide knowledge into substructures by representing "stereotyped situations."

## Feedback

Please add an issue to the [GitHub page](https://github.com/sartaj/semantic-design-systems/issues) for comments/feedback/discussions. I would love to get peoples feedback on this.