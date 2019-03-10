export default (initialMaxHeight, containerRef, elRef) => ({
  data() {
    return {
      childRefHeight: 0,
      isExpanded: false
    };
  },
  computed: {
    _containerStyle() {
      return `
        overflow-y: hidden;
        transition: all 0.3s cubic-bezier(1, 0, 0, 1);
      `;
    },
    isExpandable_() {
      return this.childRefHeight > initialMaxHeight;
    }
  },
  methods: {
    collapse(height = initialMaxHeight) {
      this.setMaxHeight(height);
    },
    expand() {
      this.setMaxHeight(this.childRefHeight);
    },
    setMaxHeight(height) {
      this.$refs[containerRef].style.maxHeight = `${height}px`;
    },
    _toggleCollapse() {
      this.isExpanded ? this.collapse() : this.expand();
      this.isExpanded = !this.isExpanded;
    }
  },
  mounted() {
    this.childRefHeight = this.$refs[elRef].clientHeight;
    this.setMaxHeight(initialMaxHeight);
  }
});
