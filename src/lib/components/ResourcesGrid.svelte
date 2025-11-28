<script lang="ts">
  import Card from './Card.svelte';
  import { siteData, type Resource, type ColorKey } from '$lib/data/siteData';
</script>

<Card>
  <div class="mb-6 flex items-center gap-3">
    <div class="h-8 w-8 rounded-full bg-gradient-to-br from-[#7C00FF] to-[#FF007A] flex items-center justify-center shadow-[0_0_15px_rgba(124,0,255,0.6)]">
      <span class="icon-[carbon--link] text-white text-sm"></span>
    </div>
    <h2 class="text-xl font-bold text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">RECURSOS ESENCIALES</h2>
  </div>

  <div class="space-y-4">
    {#each siteData.resources as resource (resource.name)}
      {@const colorConfig = siteData.colors[resource.color as ColorKey]}
      <a 
        href={resource.url} 
        class="group flex items-center gap-4 rounded-[14px] bg-gradient-to-r {colorConfig.light} p-4 ring-1 ring-inset {colorConfig.ring} transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(46,204,113,0.3)] backdrop-blur-sm"
      >
        <div class="flex h-12 w-12 items-center justify-center rounded-[10px] bg-gradient-to-br {colorConfig.gradient} shadow-[0_0_15px_currentColor]">
          <span class="icon-[{resource.icon}] text-xl text-white"></span>
        </div>
        <div class="flex-1">
          <h3 class="font-bold text-white group-hover:{colorConfig.text} transition-colors duration-300">{resource.name}</h3>
          <p class="text-sm text-[#B8AFC0]">{resource.description}</p>
        </div>
        <span class="icon-[carbon--arrow-right] {colorConfig.text} text-lg transition-transform duration-300 group-hover:translate-x-1"></span>
      </a>
    {/each}
  </div>

  <!-- Footer del bloque -->
  <div class="mt-6 rounded-[10px] bg-gradient-to-r from-[#FF00FF]/10 to-[#00FFFF]/5 p-3 ring-1 ring-inset ring-[#FF00FF]/20">
    <p class="text-center text-xs font-semibold text-[#00FFFF]">
      RECURSOS VERIFICADOS Y UTILIZADOS PROFESIONALMENTE
    </p>
  </div>
</Card>