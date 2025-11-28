<script lang="ts">
  let { children, class: className = '' } = $props();
</script>

<div class="relative rounded-[20px] bg-linear-to-br from-[#000000cc] to-[#000000e6] p-[2px] shadow-[0_0_40px_rgba(255,255,255,0.06)] {className}">
  <div class="absolute inset-0 rounded-[20px] bg-linear-to-br from-[#FF007A] to-[#7C00FF] content-['']"></div>
  <div class="relative h-full w-full rounded-[18px] bg-[#0E0820] p-6 md:p-10">
    {@render children()}
  </div>
</div>
