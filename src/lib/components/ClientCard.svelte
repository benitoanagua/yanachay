<script lang="ts">
  let { name, description, url, color = "green" } = $props();
  
  const colors: Record<string, string> = {
    green: "text-[#00FF9D] border-[#00FF9D]",
    blue: "text-[#0B99FF] border-[#0B99FF]",
    purple: "text-[#7C00FF] border-[#7C00FF]"
  };
</script>

<a href={url} target="_blank" rel="noopener noreferrer" class="group block h-full">
  <div class="h-full rounded-[16px] bg-[rgba(255,255,255,0.03)] p-6 transition-all duration-300 hover:bg-[rgba(255,255,255,0.06)] hover:-translate-y-1 border border-[rgba(255,255,255,0.1)] hover:border-[rgba(255,255,255,0.2)]">
    <div class="mb-3 flex items-center gap-3">
      <div class="h-3 w-3 rounded-full {colors[color].split(' ')[1].replace('border', 'bg')} shadow-[0_0_10px_currentColor] {colors[color].split(' ')[0]}"></div>
      <h3 class="text-[18px] font-bold text-white group-hover:text-[#FF007A] transition-colors">{name}</h3>
    </div>
    <p class="mb-4 text-[14px] leading-relaxed text-[#B8AFC0]">{description}</p>
    <div class="flex items-center gap-2 text-[13px] font-medium {colors[color].split(' ')[0]} opacity-80 group-hover:opacity-100">
      <span class="icon-[carbon--link]"></span>
      <span class="truncate">{url}</span>
    </div>
  </div>
</a>
