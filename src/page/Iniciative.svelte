<script>
  import Creation from './iniciativa/Creation.svelte';
  import CreateController from './iniciativa/CreateController.svelte';
  import RunningController from './iniciativa/RunningController.svelte';
  import * as db from '../lib/db';
  import { runStringDice } from '../lib/dice';

  const MODE_CREATE = 'create';
  const MODE_RUN = 'run';

  let mode = db.load('mode', MODE_CREATE);
  let chars = db.load('chars', []);
  let iniciative = db.load('iniciative', -1);
  let turnCount = db.load('turnCount', 0);

  $: db.save('chars', chars);
  $: db.save('mode', mode);
  $: db.save('iniciative', iniciative);
  $: db.save('turnCount', turnCount);

  function run() {
    mode = MODE_RUN;
    gerenateTurn();
    iniciative = 0;
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

  function next() {
    if (iniciative + 1 >= chars.length) {
      turnCount += 1;
      return iniciative = 0;
    }

    iniciative += 1;
  }

  function stop() {
    iniciative = -1;
    turnCount = 0;
    mode = MODE_CREATE;
  }
</script>

<Creation bind:chars={chars} current={iniciative}/>
<div class="control">
  {#if mode === MODE_CREATE}
    <CreateController on:play={run} />
  {:else}
    <RunningController bind:turnCount={turnCount} on:stop={stop} on:next={next} />
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