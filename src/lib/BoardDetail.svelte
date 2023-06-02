<script lang="ts">
  import {
    Column,
    ContentSwitcher,
    Grid,
    Row,
    Switch,
  } from "carbon-components-svelte";
  import type { Board } from "../data/types";
  export let board: Board;
</script>

<Grid>
  <Row>
    <Column>AMP EFFECTS</Column>
    <Column>
      {#each board.amps as amp}
        <div>{amp.label}</div>
        <div>{amp.name}</div>
      {/each}
    </Column>
  </Row>
</Grid>