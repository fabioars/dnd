<script>
  import List from '../../components/List.svelte';
  import IconUserPlus from '../../assets/user-plus.svg';
  import IconUserMinus from '../../assets/user-minus.svg';
  import IconEdit from '../../assets/edit.svg';

  let inputChar = "";
  let inputDice = "";

  let chars = [];

  function onSubmit() {
    if (inputDice === "") inputDice = "1d20"
    chars = [{ name: inputChar, dice: inputDice }, ...chars];
    inputChar = "";
    inputDice = "";
  }

  function remove(index) {
    chars = chars
      .map((d, i) => ({...d, i }))
      .filter(({ i }) => i !== index);
  }

  function edit(index) {
    const char = chars[index];
    inputChar = char.name;
    inputDice = char.dice;

    remove(edit);
  }
</script>

<List className={"init"}>
  <li class="init__item">
    <form class="init__form" on:submit|preventDefault={onSubmit}>
      <input type="text" class="input" placeholder="Personagem" bind:value={inputChar}>
      <input type="text" class="input input--dice" placeholder="1d20" bind:value={inputDice}>
      <button class="button button--icon"><img src={IconUserPlus} alt="add user"></button>
    </form>
  </li>

  {#each chars as char, index}
    <li class="init__item">
      <form class="init__form" on:submit|preventDefault={() => {}}>
        <input type="text" class="input input--clear" placeholder="Personagem" bind:value={char.name}>
        <input type="text" class="input input--clear input--dice" placeholder="1d20" bind:value={char.dice}>
        <button class="button button--icon button--secondary" type="button" on:click={() => remove(index)}><img src={IconUserMinus} alt="remove user"></button>
      </form>
    </li>
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

  .input--clear {
    border-color: transparent;
  }

  .input--clear:focus {
    border-color: var(--color-black-10);
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

  .button--secondary {
    color: var(--color-black-10);
    background-color: var(--color-white-20);
  }


</style>
