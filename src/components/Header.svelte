<style>
  .header {
    background-color: var(--color-black-10);
    color: var(--color-white-10);

    border-bottom: 2px solid var(--color-primary);
  }

  .header__container {
    display: flex;
    align-items: center;
    padding: 0 30px;
    min-height: 64px;
    box-sizing: border-box;
  }

  .header__title {
    font-size: 16px;
    font-weight: bold;
    margin: 0;
  }
</style>

<header class="header">
  <div class="header__container">
    <h1 class="header__title">
      <slot>Hello World</slot>
    </h1>
  </div>
</header>
