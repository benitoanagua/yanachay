<script lang="ts">
  import Card from '$lib/components/Card.svelte';
  import Button from '$lib/components/Button.svelte';
  import Badge from '$lib/components/Badge.svelte';
  import FeatureItem from '$lib/components/FeatureItem.svelte';
  import PricingCard from '$lib/components/PricingCard.svelte';
  import FAQItem from '$lib/components/FAQItem.svelte';
  import ClientCard from '$lib/components/ClientCard.svelte';
  import Countdown from '$lib/components/Countdown.svelte';
  import OfferBanner from '$lib/components/OfferBanner.svelte';
  import ContactGrid from '$lib/components/ContactGrid.svelte';
  import ResourcesGrid from '$lib/components/ResourcesGrid.svelte';
  
  import { siteData } from '$lib/data/siteData';
</script>

<div class="min-h-screen w-full bg-[#07020A] font-sans overflow-x-hidden relative">
  <!-- Background Effects -->
  <div class="absolute inset-0 bg-gradient-to-br from-[#FF00FF]/0 via-[#FF00FF]/10 to-[#00FFFF]/5 pointer-events-none"></div>
  
  <div class="relative z-10 w-full max-w-7xl mx-auto px-4 py-10 md:px-6 lg:px-8 lg:py-20">
    
    <!-- Grid Container -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
      
      <!-- Main Content: Left Side -->
      <div class="lg:col-span-2 flex flex-col gap-8">
        
        <!-- Main Offer Card -->
        <Card>
          <!-- Header Badge -->
          <div class="mb-4 flex items-center gap-2">
            <div class="h-2 w-2 rounded-full bg-[#00FF9D]"></div>
            <span class="text-xs font-semibold tracking-wider text-white uppercase">{siteData.offer.badge}</span>
          </div>

          <!-- Main Title -->
          <h1 class="mb-6 text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-white">
            {siteData.offer.title}
          </h1>

          <!-- Description -->
          <p class="mb-8 md:mb-10 text-base md:text-lg leading-relaxed text-[#B8AFC0] max-w-xl">
            {siteData.offer.description}
          </p>

          <!-- Pricing Section -->
          <div class="mb-8 md:mb-10 flex items-end gap-3">
            <span class="text-5xl md:text-6xl font-extrabold text-[#FF007A]">{siteData.offer.price} {siteData.offer.currency}</span>
            <span class="mb-2 text-xl md:text-2xl font-semibold text-white">{siteData.offer.period}</span>
          </div>

          <!-- Badges -->
          <div class="mb-8 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
            {#each siteData.offer.highlights as highlight, index (highlight)}
              {#if index === 0}
                <div class="inline-flex items-center justify-center rounded-lg bg-black/40 px-4 py-2 ring-2 ring-inset ring-[#7C00FF] ring-offset-[-2px]">
                  <span class="text-sm md:text-base font-medium text-white">{highlight}</span>
                </div>
              {:else}
                <Badge text={highlight} />
              {/if}
            {/each}
          </div>

          <!-- CTA -->
          <div class="mb-10 md:mb-12 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
            <Button href="https://wa.me/59172945548">Activar mi hosting</Button>
            <span class="text-xs md:text-sm text-[#B8AFC0]">Sin pagos en dólares, todo en bolivianos.</span>
          </div>

          <!-- Features List -->
          <div class="mb-6">
            <h3 class="mb-4 text-xs md:text-sm font-semibold text-[#B8AFC0] uppercase tracking-wider">¿Qué incluye esta oferta?</h3>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-6 md:gap-x-8 gap-y-2 md:gap-y-3">
              {#each siteData.features as feature (feature)}
                <FeatureItem text={feature} />
              {/each}
            </div>
          </div>

          <!-- Footer Info -->
          <div class="mt-8 rounded-lg bg-white/5 p-4 md:p-6 ring-1 ring-inset ring-white/15 ring-offset-[-1px]">
            <div class="flex items-center gap-2 mb-2 md:mb-3">
              <div class="h-1.5 w-1.5 rounded-full bg-[#00FF9D]"></div>
              <span class="text-xs md:text-sm font-semibold text-white uppercase tracking-wide">Disponible exclusivamente en Bolivia</span>
            </div>
            <p class="text-xs md:text-sm text-[#B8AFC0] leading-relaxed">
              Pensado para emprendedores, negocios, freelancers y creadores que quieren presencia web profesional sin depender de pagos en dólares.
            </p>
          </div>
        </Card>

        <!-- Clients Section -->
        <Card>
          <div class="mb-8 text-center">
            <div class="inline-flex items-center gap-3 mb-4">
              <div class="h-2 w-2 rounded-full bg-[#00FF9D] animate-pulse-soft"></div>
              <div class="h-2 w-2 rounded-full bg-[#00FFFF] animate-pulse-soft" style="animation-delay: 0.2s"></div>
              <div class="h-2 w-2 rounded-full bg-[#FF007A] animate-pulse-soft" style="animation-delay: 0.4s"></div>
            </div>
            
            <h2 class="mb-3 text-3xl md:text-4xl font-black text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]">
              CLIENTES QUE <span class="bg-gradient-to-r from-[#FF007A] to-[#00FFFF] bg-clip-text text-transparent">CONFÍAN</span>
            </h2>
            
            <div class="flex justify-center mb-4">
              <div class="h-1 w-20 bg-gradient-to-r from-[#FF007A] to-[#00FFFF] rounded-full"></div>
            </div>
            
            <p class="text-lg text-[#B8AFC0] max-w-2xl mx-auto leading-relaxed">
              Proyectos reales que <span class="text-[#00FF9D] font-semibold">vibran con energía digital</span> en nuestra infraestructura
            </p>
          </div>

          <!-- Grid de clientes -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            {#each siteData.clients as client (client.id)}
              <ClientCard {client} />
            {/each}
          </div>

        </Card>

        <!-- FAQ Section -->
        <Card>
          <h2 class="mb-6 text-2xl md:text-3xl font-bold text-white flex items-center gap-3">
            <span class="text-[#FF007A] text-2xl">❓</span>
            Preguntas Frecuentes
          </h2>
          <div class="flex flex-col divide-y divide-white/10">
            {#each siteData.faqs as faq (faq.id)}
              <FAQItem question={faq.question} answer={faq.answer} />
            {/each}
          </div>
        </Card>

      </div>

      <!-- Sidebar: Right Side -->
      <aside class="lg:col-span-1 flex flex-col gap-8 h-fit lg:sticky lg:top-8">
        
        <!-- Offer Banner with Countdown -->
        <!-- <OfferBanner expires={new Date('2025-12-31T23:59:59')} discount={50} /> -->

        <!-- Countdown Standalone -->
        <div class="rounded-xl bg-gradient-to-br from-[#FF2D95]/10 to-[#00F0FF]/5 p-4 ring-1 ring-inset ring-white/10 backdrop-blur-sm">
          <p class="text-xs md:text-sm font-semibold text-[#B8AFC0] uppercase tracking-wider mb-3">La oferta vence en</p>
          <Countdown target={new Date('2025-12-31T23:59:59')} showLabels={true} />
        </div>

        <!-- Pricing Card -->
        <PricingCard />

        <!-- Contact Grid Component -->
        <ContactGrid />

        <!-- Resources Grid Component -->
        <ResourcesGrid />

      </aside>

    </div>
  </div>
</div>

<style>
  @media (prefers-reduced-motion: reduce) {
    * {
      animation: none !important;
      transition: none !important;
    }
  }
</style>