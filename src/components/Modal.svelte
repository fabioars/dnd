<script>
  import IconX from "../assets/x.svg";
  export let entry;

  function close() {
    entry.isActive = false;
  }
</script>

<div class="modal" class:active={entry.isActive}>
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div class="overlay" on:click|preventDefault={close}></div>

  <div class="container">
    <button class="close" on:click|preventDefault={close}><img src={IconX} alt="close"></button>

    <h2 class="title">{entry.name}</h2>

    {#each Object.keys(entry) as key}
      {@html entry[key]}
    {/each}
  </div>
</div>

<style>
  .modal {
    display: none;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    box-sizing: border-box;
    padding-bottom: 30px;
  }

  .active {
    display: block;
  }

  .overlay {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .3);
    z-index: 10;
    cursor: pointer;
  }

  .container {
    position: absolute;
    top: 30px;
    left: 30px;
    right: 30px;
    padding: 30px;
    min-height: 200px;
    background-color: var(--color-white-10);
    border: 2px solid var(--color-black-10);
    box-shadow: 0 0 0 2px var(--color-primary);
    border-radius: 8px;
    box-sizing: border-box;
    z-index: 20;
    overflow: auto;
  }

  .close {
    position: absolute;
    top: 0;
    right: 0;
    border-radius: 8px;
    border-top-left-radius: 0;
    border-bottom-right-radius: 0;
    border: 0;
    border-left: 2px solid var(--color-black-10);
    border-bottom: 2px solid var(--color-black-10);
    background-color: var(--color-white-20);
    cursor: pointer;
  }

  .close:hover {
    background-color: var(--color-primary);
  }

  .title {
    display: block;
    margin: 0;
    border-bottom: 2px solid var(--color-black-20);
  }

</style>