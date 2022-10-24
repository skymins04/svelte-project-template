<script lang="ts" context="module">
  import "@src/app.css";
  import type { Load } from "@sveltejs/kit";
  import { loading } from "@lib/locales";

  export const load: Load = async () => {
    await loading.toPromise();

    return {};
  };
</script>

<slot />
