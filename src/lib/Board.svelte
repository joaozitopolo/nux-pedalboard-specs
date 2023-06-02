<script>
  import {
    Column,
    ContentSwitcher,
    Grid,
    Row,
    Switch,
  } from "carbon-components-svelte";
  import { boards } from "../data";
  import BoardDetail from "./BoardDetail.svelte";
  let selectedIndex = 0;
</script>

<Grid fullWidth>
  <Row>
    <Column>
      <ContentSwitcher bind:selectedIndex>
        {#each boards as board}
          <Switch text={board.model} />
        {/each}
      </ContentSwitcher>
    </Column>
  </Row>
  <Row>
    <Column>
        <BoardDetail board={boards[selectedIndex]}/>
    </Column>
</Row>
</Grid>
