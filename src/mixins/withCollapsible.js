export default (initialMaxHeight, elRef) => ({
  data() {
    return {
      refHeight: 0,
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
      return this.refHeight > initialMaxHeight;
    }
  },
  methods: {
    collapse(height = initialMaxHeight) {
      this.setMaxHeight(height);
    },
    expand() {
      this.setMaxHeight(this.refHeight);
    },
    setMaxHeight(height) {
      this.$refs[elRef].style.maxHeight = `${height}px`;
    },
    makeExpandable() {
      if (!this.$refs[elRef]) return;
      this.refHeight = this.$refs[elRef].scrollHeight;
      this.setMaxHeight(initialMaxHeight);
    },
    _toggleCollapse() {
      this.isExpanded ? this.collapse() : this.expand();
      this.isExpanded = !this.isExpanded;
    },
    registerMutationObserver() {
      const observer = new MutationObserver(() => {
        this.refHeight = this.$refs[elRef].scrollHeight;
      });
      observer.observe(this.$refs[elRef], {
        attributes: false,
        characterData: true,
        childList: false,
        subtree: true
      });
    }
  },
  mounted() {
    this.registerMutationObserver();
    this.makeExpandable();
  }
});
