<!-- SCRIPTS ////////////////////////////////////// -->
<script>
  // IMPORTS ----------------------------------------------------
  import { modals } from "../../../dynamic/modals";
  import XIcon from "../../6-icons/interface/XIcon.svelte";

</script>

<!-- MARKUP /////////////////////////////////////////// -->
<button type="button" class="interface-modal-closer-button center" 
  on:click={()=>modals.close("interfaceModal")}
  title="close menu"
>
  <XIcon />
</button>