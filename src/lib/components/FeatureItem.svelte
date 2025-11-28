<script lang="ts">
  let { text } = $props();
</script>

<div class="flex items-center gap-4 py-2">
  <div class="relative h-[17px] w-[17px] shrink-0 text-[#00FFA8]">
    <span class="icon-[carbon--checkmark-filled] h-full w-full"></span>
  </div>
  <span class="text-[13.9px] font-normal text-[#F5F5F5] leading-[20.8px]">{text}</span>
</div>
