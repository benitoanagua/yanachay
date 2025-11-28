<script lang="ts">
  import { siteData, type Client, type ColorKey } from '$lib/data/siteData';
  
  let { client } = $props<{ client: Client }>();
  
  // Enfoque simple sin $derived
  function getColorConfig(client: Client) {
    return siteData.colors[client.color as ColorKey];
  }
</script>

<div class="group relative">
  <div class="absolute inset-0 bg-gradient-to-br {getColorConfig(client).gradient} rounded-[18px] blur-md opacity-30 group-hover:opacity-60 transition-all duration-500"></div>
  <div class="relative h-full rounded-[16px] bg-gradient-to-br from-[#1A0B2E] to-[#2D1B4E] p-6 ring-2 ring-inset {getColorConfig(client).ring} transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-[0_0_40px_rgba(124,0,255,0.4)] backdrop-blur-sm">
    
    <!-- Header del cliente -->
    <div class="mb-4 flex items-center gap-3">
      <div class="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br {getColorConfig(client).gradient} shadow-[0_0_15px_currentColor]">
        <span class="icon-[{client.icon}] text-white text-lg"></span>
      </div>
      <div>
        <h3 class="font-black text-white text-lg group-hover:{getColorConfig(client).text} transition-colors duration-300">{client.name}</h3>
        <div class="flex items-center gap-1">
          <span class="h-1.5 w-1.5 rounded-full {getColorConfig(client).text} animate-pulse" style="animation-delay: {client.id * 0.1}s"></span>
          <span class="text-xs font-semibold {getColorConfig(client).text}">{client.location}</span>
        </div>
      </div>
    </div>

    <!-- Descripción -->
    <p class="mb-4 text-sm leading-relaxed text-[#B8AFC0]">
      {client.description}
    </p>

    <!-- Quote o Award -->
    {#if client.quote}
      <div class="mb-4 rounded-[10px] bg-gradient-to-r {getColorConfig(client).light} p-3 ring-1 ring-inset {getColorConfig(client).ring}">
        <p class="text-xs italic text-[#00FFFF] font-medium">
          "{client.quote}"
        </p>
      </div>
    {:else if client.award}
      <div class="mb-4 flex items-center gap-2 rounded-[10px] bg-gradient-to-r {getColorConfig(client).light} p-2 ring-1 ring-inset {getColorConfig(client).ring}">
        <span class="icon-[carbon--trophy] text-[#00FFFF] text-sm"></span>
        <span class="text-xs font-bold text-[#00FFFF]">{client.award}</span>
      </div>
    {/if}

    <!-- Estadísticas -->
    {#if client.stats}
      <div class="mb-4 grid grid-cols-2 gap-2">
        {#each client.stats as stat}
          <div class="rounded-[8px] bg-black/30 p-2 text-center ring-1 ring-inset {getColorConfig(client).ring}">
            <div class="text-xs font-bold {getColorConfig(client).text}">{stat.value}</div>
            <div class="text-[10px] text-[#B8AFC0]">{stat.label}</div>
          </div>
        {/each}
      </div>
    {/if}

    <!-- Footer con link -->
    <div class="flex items-center justify-between">
      <span class="text-xs font-semibold {getColorConfig(client).text}">{client.category}</span>
      <a href={client.url} target="_blank" class="flex items-center gap-1 text-xs font-bold text-white hover:text-[#00FFFF] transition-colors duration-300">
        <span>VISITAR</span>
        <span class="icon-[carbon--arrow-up-right] text-[#00FFFF]"></span>
      </a>
    </div>
  </div>
</div>