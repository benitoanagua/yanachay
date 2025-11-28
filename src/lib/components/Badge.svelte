<script lang="ts">
  let { text, class: className = '' } = $props();
</script>

<div class="inline-flex items-center justify-center rounded-[10px] bg-[rgba(0,0,0,0.6)] px-4 py-2 outline outline-2 outline-[rgba(255,255,255,0.2)] outline-offset-[-2px] {className}">
  <span class="text-[11.7px] font-semibold text-white leading-[17.6px]">{text}</span>
</div>
