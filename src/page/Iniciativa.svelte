<script>
  import Creation from './iniciativa/Creation.svelte';

  const MODE_CREATE = 'create';
  const MODE_RUN = 'run';

  export let chars = [];
  export let turn = [];

  let mode = MODE_CREATE;
</script>
  {#if mode === MODE_CREATE}
    <Creation chars={chars} />
  {/if}
  {#if mode === MODE_RUN}

  {/if}
<div class="control">
  {#if mode === MODE_CREATE}
    <div class="create">

    </div>
  {/if}
  {#if mode === MODE_RUN}
    <div class="run">

    </div>
  {/if}
</div>