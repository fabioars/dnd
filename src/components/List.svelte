<script>
  export let className = "";
</script>
<ul class="list {className}">
  <slot></slot>
</ul>

<style>
  .list {
    list-style: none;
    padding: 0;
    margin: 0;
  }
</style>