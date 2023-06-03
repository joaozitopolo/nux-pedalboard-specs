<script lang="ts">
  import { Column, Grid, Row } from "carbon-components-svelte";
  import type { Board } from "../data/types";
  import Control from "./ad/atom/Control.svelte";
  import Detail from "./ad/atom/Detail.svelte";
  export let board: Board;
</script>

<Grid>
  <Row>
    <Column>AMP EFFECTS</Column>
    <Column>
      {#each board.amps as amp}
        <Row>
          <Column padding>
            <span class={`is-${amp.other ?? "guitar"}`}>
              {amp.label}
            </span>
          </Column>
          <Column padding>
            <Detail text={amp.name} />
            <Control controls={amp.controls} />
          </Column>
        </Row>
      {/each}
    </Column>
  </Row>
</Grid>
