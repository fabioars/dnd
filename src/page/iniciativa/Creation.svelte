<script>
  import List from '../../components/List.svelte';
  import IconUserPlus from '../../assets/user-plus.svg';
  import IconUserMinus from '../../assets/user-minus.svg';

  const DEFAULT_HP = 50;
  const DEFAULT_DICE = "1d20";
  export let chars;

  let inputChar = "";
  let inputDice = "";
  let hp;
  let maxHp;


  function onSubmit() {
    if (inputDice === "") inputDice = DEFAULT_DICE

    chars = [{
      name: inputChar,
      dice: inputDice,
      maxHp: maxHp ? maxHp : DEFAULT_HP,
      hp: hp ? hp : DEFAULT_HP,
      iniciative: 0,
    }, ...chars];

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
      <input type="number" min="0" class="input input--dice" placeholder="HP" bind:value={hp}>
      <input type="number" min="0" class="input input--dice" placeholder="Max HP" bind:value={maxHp}>
      <button class="button button--icon"><img src={IconUserPlus} alt="add user"></button>
    </form>
  </li>

  {#each chars as char, index}
    <li class="init__item">
      <form class="init__form" on:submit|preventDefault={() => {}}>
        <span class="iniciative">{char.iniciative.sum}</span>
        <input type="text" class="input input--clear" placeholder="Personagem" bind:value={char.name}>
        <input type="text" class="input input--clear input--dice" placeholder="1d20" bind:value={char.dice}>
        <button class="button button--icon button--secondary" type="button" on:click={() => remove(index)}><img src={IconUserMinus} alt="remove user"></button>
      </form>
      <div class="hp">
        <input type="range" name="HP" min="0" max={char.maxHp} bind:value={char.hp}  id="hp">
        <input type="number" class="input input--clear" placeholder="HP" bind:value={char.hp}>
        <input type="number" class="input input--clear" placeholder="Max HP" bind:value={char.maxHp}>
      </div>
    </li>
  {/each}
</List>

<style>
  .init__item {
    min-height: 58px;
    background-color: var(--color-white-10);
    border-bottom: 1px solid var(--color-white-20);
    padding: 0 30px;
  }

  .init__form {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 60px;
    gap: 8px;
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

  .hp {
    display: grid;
    grid-template-columns: 1fr 85px 85px;
  }

  .iniciative {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 30px;
    width: 30px;
    min-width: 30px;
    height: 30px;
    color: var(--color-white-10);
    background-color: var(--color-black-10);
    font-size: 12px;
    font-weight: bold;
  }

  .input--dice {
    max-width: 95px;
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
</style>
