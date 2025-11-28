<script lang="ts">
  import Button from '$lib/components/Button.svelte';
</script>

<div class="w-full lg:w-[450px] shrink-0 relative">
    <div class="rounded-[20px] bg-[radial-gradient(ellipse_119%_110%_at_50%_0%,rgba(255,255,255,0.16)_0%,rgba(0,0,0,0.95)_100%)] p-[2px] shadow-[0_0_40px_rgba(142,97,255,0.7)] outline outline-2 outline-[#7C00FF] outline-offset-[-2px]">
        <div class="rounded-[18px] bg-black/90 p-8">
            <!-- Badge -->
            <div class="mb-6 inline-flex rounded-[10px] bg-linear-to-br from-[#7C00FF] to-[#FF007A] px-4 py-1">
                <span class="text-[12.8px] font-semibold text-white">Black Friday Bolivia</span>
            </div>

            <h2 class="mb-4 text-[19.2px] font-bold leading-[25px] text-white">
                Hosting anual en bolivianos, sin sorpresas ni cobros en dólares.
            </h2>

            <p class="mb-6 text-[13.9px] text-[#B8AFC0] leading-[20.8px]">
                Perfecto para tu sitio corporativo, landing de campaña, portafolio profesional o tienda pequeña con WordPress.
            </p>

            <div class="h-[1px] w-full bg-linear-to-r from-transparent via-[rgba(255,255,255,0.24)] to-transparent mb-6"></div>

            <div class="mb-2 flex items-end gap-2">
                <span class="text-[27.7px] font-extrabold text-[#FF007A]">350 Bs</span>
                <span class="mb-1 text-[17.1px] font-semibold text-white">/ año</span>
            </div>
            <p class="mb-6 text-[11.7px] text-[#B8AFC0]">Precio final anual. Renovación en la misma moneda.</p>

            <!-- Mini Features Grid -->
            <div class="grid grid-cols-2 gap-4 mb-8">
                <div class="rounded-[10px] bg-black/70 p-3 outline outline-1 outline-[rgba(255,255,255,0.24)] outline-offset-[-1px]">
                    <div class="mb-2 text-[#00FFA8] text-xl">
                        <span class="icon-[carbon--cloud-service-management]"></span>
                    </div>
                    <div class="text-[12.8px] text-[#F5F5F5]">Hosting LAMP</div>
                    <div class="text-[11.7px] text-[#B8AFC0]">Ideal proyectos</div>
                </div>
                <div class="rounded-[10px] bg-black/70 p-3 outline outline-1 outline-[rgba(255,255,255,0.24)] outline-offset-[-1px]">
                        <div class="mb-2 text-[#00FFA8] text-xl">
                        <span class="icon-[carbon--data-class]"></span>
                    </div>
                    <div class="text-[12.8px] text-[#F5F5F5]">5 GB SSD</div>
                    <div class="text-[11.7px] text-[#B8AFC0]">Optimizado</div>
                </div>
                <div class="rounded-[10px] bg-black/70 p-3 outline outline-1 outline-[rgba(255,255,255,0.24)] outline-offset-[-1px]">
                        <div class="mb-2 text-[#00FFA8] text-xl">
                        <span class="icon-[carbon--email]"></span>
                    </div>
                    <div class="text-[12.8px] text-[#F5F5F5]">5 Correos</div>
                    <div class="text-[11.7px] text-[#B8AFC0]">1 año gratis</div>
                </div>
                <div class="rounded-[10px] bg-black/70 p-3 outline outline-1 outline-[rgba(255,255,255,0.24)] outline-offset-[-1px]">
                        <div class="mb-2 text-[#00FFA8] text-xl">
                        <span class="icon-[carbon--security]"></span>
                    </div>
                    <div class="text-[12.8px] text-[#F5F5F5]">Backups</div>
                    <div class="text-[11.7px] text-[#B8AFC0]">Seguridad</div>
                </div>
            </div>

            <Button href="https://wa.me/59172945548" class="w-full !rounded-[14px] !bg-linear-to-br !from-[#7C00FF] !to-[#FF007A] !shadow-[0_0_32px_rgba(142,97,255,0.45)]">
                Quiero esta oferta
            </Button>
            
            <p class="mt-4 text-center text-[11.7px] text-[#B8AFC0]">
                Activa tu plan hoy y agenda la configuración inicial sin costo.
            </p>
        </div>
    </div>
</div>
