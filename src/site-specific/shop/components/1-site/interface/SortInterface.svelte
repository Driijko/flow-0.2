<!-- SCRIPTS /////////////////////////////////// -->
<script>
  // IMPORTS --------------------------------
  import { breakpoint }from "../../../../../dynamic/breakpoint";
  import { modals } from "../../../../../dynamic/modals";
  import { productsSort } from "../../../dynamic/productsDisplay";
  import InterfaceTransition from "../../../../../components/1-site/interface/InterfaceTransition.svelte";

  // EVENT HANDLERS ------------------------------------
  function handleClick(sortBy) {
    productsSort(sortBy);
    if ($breakpoint !== "large-desktop") {
      modals.close("interfaceModal");
    };
  };

</script>

<!-- MARKUP //////////////////////////////// -->
<InterfaceTransition>
  <div class="sort-interface fill">
    <h3>Sort Products</h3>
    <menu>
      <button type="button" 
        on:click={()=> handleClick("az")}
      >
        A - Z
      </button>
      <button type="button" 
        on:click={()=> handleClick("za")}
      >
        Z - A
      </button>
      <button type="button" 
        on:click={()=> handleClick("low")}
      >
        Price: low to high
      </button>
      <button type="button" 
        on:click={()=> handleClick("high")}
      >
        Price: high to low
      </button>
    </menu>
  </div>
</InterfaceTransition>


<!-- STYLES /////////////////////////////////////// -->
<style>
div {
  display: flex;
  flex-direction: column;
}
h3 {
  font-weight: 400;
  height: 12%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: hsl(var(--hue2), 100%, 5%);
  color: hsl(var(--hue1), 100%, 70%);
}
menu {
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
button {
  background-color: hsl(var(--hue2), 100%, 5%);
  color: hsl(var(--hue1), 100%, 70%);
  border-style: solid;
  border-color: hsl(var(--hue1), 100%, 70%);
}
/* PORTRAIT //////////////////////////////////////// */
@media screen and (orientation: portrait) {
  h3 {
    font-size: calc(var(--cw)/10);
  }
  menu {
    gap: 50px;
  }
  button {
    padding: calc(var(--cw)/50) calc(var(--cw)/10);
    padding-top: calc(var(--cw)/30);
    border-radius: calc(var(--cw)/100);
    border-width: calc(var(--cw)/100);
    font-size: calc(var(--cw)/12);
  }
}
@media screen and (orientation: landscape) {
  h3 {
    font-size: calc(var(--cw)/30);
  }
  menu {
    gap: 50px;
  }
  button {
    padding: calc(var(--cw)/100) calc(var(--cw)/50);
    padding-top: calc(var(--cw)/60);
    border-radius: calc(var(--cw)/100);
    border-width: calc(var(--cw)/200);
    font-size: calc(var(--cw)/40);
  }
}
</style>