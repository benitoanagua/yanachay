<script lang="ts">
  let { expires, discount = 50 } = $props();
</script>

<div class="rounded-xl bg-gradient-to-br from-[#FF2D95]/20 to-[#00F0FF]/15 p-4 ring-2 ring-inset ring-[#FF00FF]/30 backdrop-blur-sm border border-[#00FFFF]/20">
  <div class="flex items-center gap-3 mb-3">
    <div class="h-8 w-8 rounded-full bg-gradient-to-br from-[#FF007A] to-[#7C00FF] flex items-center justify-center shadow-[0_0_15px_rgba(255,0,122,0.6)]">
      <span class="text-white text-sm font-bold">%</span>
    </div>
    <div>
      <h3 class="text-sm font-bold text-white drop-shadow-[0_0_8px_rgba(255,0,255,0.7)]">OFERTA ESPECIAL</h3>
      <p class="text-xs text-[#00FFFF] font-semibold">{discount}% DE DESCUENTO</p>
    </div>
  </div>
  <p class="text-xs text-[#B8AFC0]">
    Válido hasta: <span class="text-[#00FFA8] font-semibold">{expires.toLocaleDateString('es-BO')}</span>
  </p>
</div>