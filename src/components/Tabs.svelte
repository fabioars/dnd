<script>
  import { createEventDispatcher } from 'svelte';

  export let value;
  export let items;
</script>

<nav class="nav">
  <ul class="nav__list">
    {#each items as item}
      <li class="nav__item" class:nav__item--active={item.slug == value}>
        <!-- svelte-ignore a11y-invalid-attribute -->
        <a href="#" class="nav__link" on:click|preventDefault="{() => value = item.slug}">{item.label}</a>
      </li>
    {/each}
  </ul>
</nav>

<style>
  .nav {
    background-color: var(--color-black-10);
    box-shadow: 0 2px 5px rgba(0, 0, 0, .3);
  }

  .nav__list {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .nav__item {
    font-size: 12px;
    font-weight: bold;
    width: 100%;
    text-transform: uppercase;
  }

  .nav__link {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 40px;
    color: var(--color-white-10);
    text-decoration: none;
    border-bottom: 5px solid transparent;
    transition: all 300ms ease;
  }

  .nav__link:hover,
  .nav__link:focus {
    background-color: var(--color-black-20);
    border-bottom-color: var(--color-black-20);
  }

  .nav__item--active > .nav__link {
    color: var(--color-primary);
    background-color: var(--color-black-10);
    pointer-events: none;
    border-bottom-color: var(--color-primary);
  }

</style>