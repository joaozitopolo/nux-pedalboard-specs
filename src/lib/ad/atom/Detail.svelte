<script lang="ts">
  import { Column, Row } from "carbon-components-svelte";
  export let label: string = undefined;
  export let text: string;
  export let conditional = true;
</script>

{#if !conditional || text?.trim()}
  <Row>
    <Column>
      {label ? `${label} ` : ""}
      <span>{text}</span>
    </Column>
  </Row>
{/if}
