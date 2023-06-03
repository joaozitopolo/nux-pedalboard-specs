<script lang="ts">
  import { Column, Row, Tag } from "carbon-components-svelte";
  export let controls: string[];
</script>

{#if controls?.length}
  <Row>
    <Column>
      {#each controls as item}
        <Tag>{item}</Tag>
      {/each}
    </Column>
  </Row>
{/if}
