<script lang="ts">
  import { onMount } from 'svelte';
  import { user } from './auth.ts';
import { redirect } from '@sveltejs/kit';

  let userData = null;
  user.subscribe(data => {
    userData = data;
    if (userData) {
    throw redirect(307, 'https://starhaven.dev/mods');
    } else {
    throw redirect(308, 'https://starhaven.dev');
    }
  });
</script>
