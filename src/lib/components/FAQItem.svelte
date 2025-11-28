<script lang="ts">
  let { question, answer } = $props();
  let isOpen = $state(false);

  function toggle() {
    isOpen = !isOpen;
  }
</script>

<div class="border-b border-[rgba(255,255,255,0.1)] last:border-0">
  <button 
    class="flex w-full items-center justify-between py-4 text-left transition-colors hover:text-[#FF007A]"
    onclick={toggle}
  >
    <span class="text-[15px] font-medium text-white">{question}</span>
    <div class="relative h-5 w-5 shrink-0 transition-transform duration-300 {isOpen ? 'rotate-180' : ''}">
       <span class="icon-[carbon--chevron-down] h-full w-full"></span>
    </div>
  </button>
  
  <div class="grid transition-all duration-300 ease-in-out {isOpen ? 'grid-rows-[1fr] opacity-100 pb-4' : 'grid-rows-[0fr] opacity-0'}">
    <div class="overflow-hidden">
      <p class="text-[14px] leading-relaxed text-[#B8AFC0]">
        {@html answer}
      </p>
    </div>
  </div>
</div>
