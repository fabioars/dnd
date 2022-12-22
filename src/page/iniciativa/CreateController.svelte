<script>
import { createEventDispatcher } from 'svelte';
import IconPlay from '../../assets/play.svg';

const dispatch = createEventDispatcher();
</script>

<div class="container">
  <button class="button button--alt" on:click={evt => dispatch('play', evt)}>
    <img src={IconPlay} alt="" class="icon-play">
  </button>
</div>

<style>
  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 30px;
    box-sizing: border-box;
  }

  .button {
    height: 80px;
    width: 80px;
    border-radius: 80px;
    box-sizing: border-box;
  }

  .icon-play {
    transform: translate(1px, 2px);
  }
</style>
