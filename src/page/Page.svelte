<script>
  import Header from '../components/Header.svelte';
  import Tabs from '../components/Tabs.svelte';
  import List from './List.svelte';
  import Iniciative from './Iniciative.svelte';

  import DataClass from '../db/dnd5e.classes.json';
  import DataRace from '../db/dnd5e.races.json';
  import DataSpells from '../db/dnd5e.spells.json';
  import DataTradeGoods from '../db/dnd5e.tradegoods.json';

  let active = "/iniciativa";
  const items = [
    { slug: "/iniciativa", label: "Iniciativa" },
    { slug: "/classes", label: "Classes" },
    { slug: "/racas", label: "Raças" },
    { slug: "/magias", label: "Magias" },
    { slug: "/tradegoods", label: "Comércio" },
  ];
</script>

<div class="page">
  <Header>{items.find((item) => item.slug === active).label}</Header>
  <Tabs items={items} bind:value={active}/>

  <div class="content">
    <div class="item" class:active={active === "/iniciativa"}><Iniciative /></div>
    <div class="item" class:active={active === "/classes"}><List data={DataClass} label="Classes" /></div>
    <div class="item" class:active={active === "/racas"}><List data={DataRace} label="Raças" /></div>
    <div class="item" class:active={active === "/magias"}><List data={DataSpells} label="Magias" /></div>
    <div class="item" class:active={active === "/tradegoods"}><List data={DataTradeGoods} label="Comércio" /></div>
  </div>
</div>

<style>
  .page {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }

  .content {
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow: auto;
  }

  .item {
    display: none;
  }

  .item.active {
    display: block;
  }
</style>