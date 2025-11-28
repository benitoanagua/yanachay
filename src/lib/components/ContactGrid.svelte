<script lang="ts">
  import Card from './Card.svelte';
  import { siteData, type Contact, type ColorKey } from '$lib/data/siteData';
</script>

<Card>
  <div class="mb-6 flex items-center gap-3">
    <div class="h-8 w-8 rounded-full bg-gradient-to-br from-[#00FF9D] to-[#00FFFF] flex items-center justify-center shadow-[0_0_15px_rgba(0,255,157,0.6)]">
      <span class="icon-[carbon--chat] text-white text-sm"></span>
    </div>
    <h2 class="text-xl font-bold text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">CONTACTO PROFESIONAL</h2>
  </div>
  
  <div class="grid grid-cols-2 md:grid-cols-3 gap-3">
    {#each siteData.contacts as contact (contact.name)}
      {@const colorConfig = siteData.colors[contact.color as ColorKey]}
      <a 
        href={contact.url} 
        class="group relative rounded-[12px] bg-gradient-to-br {colorConfig.light} p-3 ring-1 ring-inset {colorConfig.ring} transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(10,102,194,0.4)] backdrop-blur-sm"
        aria-label={contact.name}
      >
        <div class="flex flex-col items-center gap-2">
          <span class="icon-[{contact.icon}] text-2xl {colorConfig.text} drop-shadow-[0_0_8px_currentColor]"></span>
          <span class="text-xs font-semibold text-white">{contact.name}</span>
        </div>
      </a>
    {/each}
  </div>
</Card>