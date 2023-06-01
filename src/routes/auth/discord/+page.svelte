<script lang="ts">
  import { onMount } from 'svelte';
  import { user } from './auth.ts';

  let userData = null;
  user.subscribe(data => {
    userData = data;
    if (userData) {
      window.location.href = 'https://starhaven.dev/mods';
    }
  });
</script>
