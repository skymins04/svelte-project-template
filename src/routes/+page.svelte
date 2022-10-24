<script lang="ts">
  import { t, locale } from "@lib/locales";
</script>

<h1 class="text-3xl font-bold underline">Welcome to SvelteKit</h1>
<h2>{$t("common.TEST")} - {$t(`lang.${$locale}`)}</h2>
