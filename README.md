# vue-proper-collapse
Vue implementation of the content expand/collapse functionality in the form of factory function that produces vue compatible mixin.

# Install
```$ npm install vue-proper-collapse```

# Usage
Import the mixin in your single file component.

```js
import withCollapsible from 'vue-proper-collapse';
```

## API
```javascript

Methods:

this.collapse(height = initialMaxHeight) // Collapse to initial setup height or provided height
this.expand() // expand to ref element height (parent)
this.makeExpandable // Recalculate changed heights manually on content change and show/hide expand button
this._toggleCollapse // toggle collapsing/expanding

Computed:

this.isExpandable_() // used to show show more button if used like "show more" component

```

#### Component example
```javascript
<template>
  <div>
    <div class="intro-content">
      <div ref="collapsibleContainer" :style="_containerStyle">
        <p>{{ description || 'No description' }}</p>
      </div>
    </div>
    <button
      v-if="isExpandable_"
      @click="_toggleCollapse"
      class="toggle-button button is-white center"
    >{{ isExpanded ? 'Show less' : 'Show more' }}</button>
  </div>
</template>

<script>
import withCollapsible from "./withCollapsible";

export default {
  mixins: [withCollapsible(100, "collapsibleContainer")],
  data: () => ({
    description:
      'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.'
  }),
};
</script>

<style lang="scss">
.intro-content {
  max-width: 30%;
  margin: 0 auto;

  p {
    padding: 1rem;
    margin: 0;
  }
}
</style>

```
