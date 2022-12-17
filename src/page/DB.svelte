<script>
  import List from "../components/List.svelte";
  import Modal from "../components/Modal.svelte";
  import IconSearch from "../assets/search.svg";

  export let data;
  export let label;

  let keyword = '';
  $: entries = Object.keys(data.entries)
    .map(key => ({
      ...data.entries[key],
      isModalOpen: false,
    }))
    .filter(entry => {
      return entry.name.toLowerCase().includes(keyword.toLowerCase());
    });

</script>

<List className={"db"}>
  <li class="init__item">
    <form class="init__form" on:submit|preventDefault={() => {}}>
      <input type="search" class="input" placeholder={label} bind:value={keyword}>
      <button class="button button--icon" disabled><img src={IconSearch} alt="add user"></button>
    </form>
  </li>

  {#each entries as item}
    <li class="init__item">
      <!-- svelte-ignore a11y-invalid-attribute -->
      <a href="#" class="init__content" on:click|preventDefault={() => item.isActive = true}>
        <span class="init__text">
          {item.name}
        </span>
      </a>
    </li>
  {/each}
  {#each entries as item}
    <Modal entry={item}/>
  {/each}
</List>

<style>
    .init__item {
    min-height: 58px;
    background-color: var(--color-white-10);
    border-bottom: 1px solid var(--color-white-20);
  }

  .init__form {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 60px;
    gap: 8px;
    padding: 0 30px;
  }

  .init__content {
    display: flex;
    align-items: center;
    height: 60px;
    gap: 8px;
    padding: 0 30px;
    font-size: 16px;
    font-weight: bold;
    margin-right: auto;
    text-decoration: none;
    color: var(--color-black-10);
  }

  .init__content:hover {
    background-color: var(--color-white-20);
  }

  .input {
    display: block;
    width: 100%;
    height: 40px;
    padding: 0 15px;
    font-weight: bold;
    border: 2px solid var(--color-black-10);
    border-radius: 8px;
    box-sizing: border-box;
  }

  .input--dice {
    max-width: 85px;
  }

  .input:focus {
    outline: 1px solid var(--color-primary);
  }

  .button {
    width: 40px;
    min-width: 40px;
    height: 40px;
    font-size: 20px;
    font-weight: bold;
    border-radius: 8px;
    border: 2px solid var(--color-black-10);
    background-color: var(--color-primary);
    cursor: pointer;
  }

  .button:after {
    display: block;
    content: '';
  }

  .button--icon {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .button--icon > img{
    width: 18px;
  }
</style>