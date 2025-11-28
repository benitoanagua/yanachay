<script lang="ts">
  let { expires, discount = 20 } = $props();
</script>

<div class="rounded-xl bg-gradient-to-br from-[#FF2D95]/20 to-[#00F0FF]/10 p-4 ring-1 ring-inset ring-white/15 backdrop-blur-sm">
  <div class="flex items-center gap-3 mb-3">
    <div class="h-8 w-8 rounded-full bg-[#FF007A] flex items-center justify-center">
      <span class="text-white text-sm font-bold">%</span>
    </div>
    <div>
      <h3 class="text-sm font-bold text-white">Oferta Especial</h3>
      <p class="text-xs text-[#B8AFC0]">{discount}% de descuento</p>
    </div>
  </div>
  <p class="text-xs text-[#B8AFC0]">
    Válido hasta: {expires.toLocaleDateString('es-BO')}
  </p>
</div>