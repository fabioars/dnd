<script>
  import { createEventDispatcher } from 'svelte';
  import IconPlay from '../../assets/play.svg';
  import IconSquare from '../../assets/square.svg';

  export let turnCount = 0
  const dispatch = createEventDispatcher();
  </script>

  <div class="container">
    <span class="label">Turno <strong>{turnCount+1}</strong></span>
    <button class="button button--small" on:click={evt => dispatch('stop', evt)}>
      <img src={IconSquare} alt="" class="icon">
    </button>
    <button class="button button--alt" on:click={evt => dispatch('next', evt)}>
      <img src={IconPlay} alt="" class="icon">
    </button>
  </div>

  <style>
    .container {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 30px;
      padding: 30px;
      box-sizing: border-box;
    }

    .label {
      margin-right: auto;
    }

    .button {
      height: 80px;
      width: 80px;
      border-radius: 80px;
      box-sizing: border-box;
    }

    .button--small {
      width: 50px;
      height: 50px;
    }

    .icon {
      transform: translate(1px, 2px);
    }
  </style>
