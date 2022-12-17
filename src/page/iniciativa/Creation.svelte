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
      <div class="init__content">
        <span class="init__text">
          {char.name} [{char.dice}]
        </span>

        <button class="button button--icon button--secondary" on:click={() => edit(index)}><img src={IconEdit} alt="edit user"></button>
        <button class="button button--icon button--secondary" on:click={() => remove(index)}><img src={IconUserMinus} alt="remove user"></button>
      </div>
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

  .init__content {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 60px;
    gap: 8px;
    padding: 0 30px;
  }

  .init__text {
    font-size: 16px;
    font-weight: bold;
    margin-right: auto;
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

  .button--secondary {
    color: var(--color-black-10);
    background-color: var(--color-white-20);
  }


</style>
