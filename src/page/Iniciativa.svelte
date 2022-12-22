<script>
  import Creation from './iniciativa/Creation.svelte';
  import CreateController from './iniciativa/CreateController.svelte';
  import * as db from '../lib/db';
  import { runStringDice } from '../lib/dice';

  const MODE_CREATE = 'create';
  const MODE_RUN = 'run';

  let mode = db.load('mode', MODE_CREATE);
  export let chars = db.load('chars', []);

  $: db.save('chars', chars);
  $: db.save('mode', mode);

  function run() {
    mode = MODE_RUN;
    gerenateTurn();
  }

  function gerenateTurn() {
    chars = [...chars].map(char => {
      return {
        ...char,
        iniciative: runStringDice(char.dice)
      }
    })
    .sort((a, b) => b.iniciative.sum - a.iniciative.sum);
  }
</script>

<Creation bind:chars={chars} />
<div class="control">
  {#if mode === MODE_CREATE}
    <CreateController on:play={run}/>
  {:else}
    <CreateController on:play={() => mode = MODE_CREATE}/>
  {/if}
</div>

<style>
  .control {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
  }
</style>