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

  const features = [
    "Hosting LAMP profesional",
    "Ideal para WordPress (rápido y optimizado)",
    "Instalación gratuita de WordPress",
    "Actualizaciones automáticas",
    "Copias de seguridad semanales (Weekly Backups)",
    "Protección estándar DDoS",
    "5 GB de almacenamiento SSD ultra rápido",
    "5 cuentas de correo por sitio web (1 año gratis)",
    "Vinculación sencilla con tu dominio",
    "Soporte y configuración inicial sin costo",
    "SSL gratuito (sitio seguro)"
  ];

  const faqs = [
    {
      question: "¿Necesito una cuenta en Hostinger para administrar el hosting?",
      answer: "Sí, necesitas una cuenta en Hostinger. Te ayudamos con el proceso si lo necesitas."
    },
    {
      question: "¿Hasta cuándo es válida la promoción?",
      answer: "Hasta el <strong>31 de diciembre</strong>. Aprovecha antes de que termine."
    },
    {
      question: "¿Debo pagar por adelantado?",
      answer: "No. <strong>No pagas nada</strong> hasta que tu sitio esté instalado y funcionando correctamente."
    },
    {
      question: "¿Incluye certificado SSL?",
      answer: "Sí, incluye <strong>SSL gratuito</strong> para mayor seguridad."
    },
    {
      question: "¿Qué tecnología usa el hosting?",
      answer: "Es un entorno <strong>LAMP</strong>: Linux, Apache, MySQL y PHP. Ideal para WordPress y la mayoría de aplicaciones web modernas."
    },
    {
      question: "¿El dominio está incluido?",
      answer: "No. El dominio se compra por separado. Para vincularlo, configura estos DNS en tu proveedor:<br/><br/><code class='bg-black/30 px-2 py-1 rounded text-[#00FFA8]'>ns1.dns-parking.com</code><br/><code class='bg-black/30 px-2 py-1 rounded text-[#00FFA8]'>ns2.dns-parking.com</code>"
    },
    {
      question: "¿Eres revendedor de Hostinger?",
      answer: "Sí, soy revendedor de Hostinger. Ofrezco soporte local en Bolivia, sin pagos en dólares, y una atención personalizada para que tu proyecto sea exitoso."
    }
  ];

  const clients = [
    {
      name: "Ancient Forest Guardians (EU)",
      description: "Organización dedicada a la conservación de bosques primarios vulnerables y de gran valor ecológico. \"Be with us where the wild things are.\"",
      url: "https://ancientforestguardians.eu/",
      color: "purple"
    },
    {
      name: "Acceso Investigativo (Bolivia)",
      description: "Iniciativa periodística especializada en derechos humanos, libertad de expresión y acceso a la información pública. Ganadores del Premio Nacional de Periodismo Digital 2024.",
      url: "https://accesoinvestigativo.com/",
      color: "blue"
    },
    {
      name: "Real Tomayapo (Bolivia)",
      description: "Club de fútbol de la Primera División de Bolivia. Fundado en 1999, representando con orgullo a Tarija en el fútbol profesional.",
      url: "https://realtomayapo.com/",
      color: "green"
    }
  ];
</script>

<div class="min-h-screen w-full bg-[#07020A] font-sans overflow-x-hidden relative">
  <!-- Background Effects -->
  <div class="absolute inset-0 bg-gradient-to-br from-[#FF00FF]/0 via-[#FF00FF]/10 to-[#00FFFF]/5 pointer-events-none"></div>
  
  <div class="relative z-10 w-full max-w-7xl mx-auto px-4 py-10 md:px-6 lg:px-8 lg:py-20">
    
    <!-- Grid Container: 1 col mobile, 2 cols on lg -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
      
      <!-- Main Content: Left Side (spans 2 cols on lg) -->
      <div class="lg:col-span-2 flex flex-col gap-8">
        
        <!-- Main Offer Card -->
        <Card>
          <!-- Header Badge -->
          <div class="mb-4 flex items-center gap-2">
            <div class="h-2 w-2 rounded-full bg-[#00FF9D]"></div>
            <span class="text-xs font-semibold tracking-wider text-white uppercase">Black Friday Hosting 2026 – Bolivia</span>
          </div>

          <!-- Main Title -->
          <h1 class="mb-6 text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-white">
            Black Friday Hosting 2026 – Oferta Especial en Bolivia
          </h1>

          <!-- Description -->
          <p class="mb-8 md:mb-10 text-base md:text-lg leading-relaxed text-[#B8AFC0] max-w-xl">
            En Bolivia muchos planes internacionales de Black Friday no pueden comprarse porque superan el límite de <strong>25 USD por transacción</strong>.
            <br/><br/>
            Por eso te ofrezco una alternativa local, accesible, facturable y lista para tus proyectos web.
          </p>

          <!-- Pricing Section -->
          <div class="mb-8 md:mb-10 flex items-end gap-3">
            <span class="text-5xl md:text-6xl font-extrabold text-[#FF007A]">350 Bs</span>
            <span class="mb-2 text-xl md:text-2xl font-semibold text-white">/ año</span>
          </div>

          <!-- Badges -->
          <div class="mb-8 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
            <div class="inline-flex items-center justify-center rounded-lg bg-black/40 px-4 py-2 ring-2 ring-inset ring-[#7C00FF] ring-offset-[-2px]">
              <span class="text-sm md:text-base font-medium text-white">+ 1 mes adicional GRATIS</span>
            </div>
            <Badge text="Solo clientes nuevos" />
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
              {#each features as feature}
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

        <!-- Reemplaza el bloque actual de Clientes en +page.svelte -->
<Card>
  <!-- Header con energía monumental -->
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

  <!-- Grid de clientes con intensidad cromática -->
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
    
    <!-- Ancient Forest Guardians -->
    <div class="group relative">
      <div class="absolute inset-0 bg-gradient-to-br from-[#7C00FF] to-[#FF007A] rounded-[18px] blur-md opacity-30 group-hover:opacity-60 transition-all duration-500"></div>
      <div class="relative h-full rounded-[16px] bg-gradient-to-br from-[#1A0B2E] to-[#2D1B4E] p-6 ring-2 ring-inset ring-[#7C00FF]/40 transition-all duration-300 group-hover:ring-[#7C00FF]/80 group-hover:scale-[1.02] group-hover:shadow-[0_0_40px_rgba(124,0,255,0.4)] backdrop-blur-sm">
        <!-- Header del cliente -->
        <div class="mb-4 flex items-center gap-3">
          <div class="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#7C00FF] to-[#FF007A] shadow-[0_0_15px_rgba(124,0,255,0.6)]">
            <span class="icon-[carbon--tree] text-white text-lg"></span>
          </div>
          <div>
            <h3 class="font-black text-white text-lg group-hover:text-[#FF007A] transition-colors duration-300">ANCIENT FOREST GUARDIANS</h3>
            <div class="flex items-center gap-1">
              <span class="h-1.5 w-1.5 rounded-full bg-[#7C00FF] animate-pulse"></span>
              <span class="text-xs font-semibold text-[#7C00FF]">EUROPA</span>
            </div>
          </div>
        </div>

        <!-- Descripción -->
        <p class="mb-4 text-sm leading-relaxed text-[#B8AFC0]">
          Organización dedicada a la conservación de <span class="text-[#00FF9D] font-semibold">bosques primarios vulnerables</span> y de gran valor ecológico.
        </p>

        <!-- Quote -->
        <div class="mb-4 rounded-[10px] bg-gradient-to-r from-[#7C00FF]/10 to-transparent p-3 ring-1 ring-inset ring-[#7C00FF]/30">
          <p class="text-xs italic text-[#00FFFF] font-medium">
            "Be with us where the wild things are."
          </p>
        </div>

        <!-- Footer con link -->
        <div class="flex items-center justify-between">
          <span class="text-xs font-semibold text-[#7C00FF]">CONSERVACIÓN</span>
          <a href="https://ancientforestguardians.eu/" target="_blank" class="flex items-center gap-1 text-xs font-bold text-white hover:text-[#00FFFF] transition-colors duration-300">
            <span>VISITAR</span>
            <span class="icon-[carbon--arrow-up-right] text-[#00FFFF]"></span>
          </a>
        </div>
      </div>
    </div>

    <!-- Acceso Investigativo -->
    <div class="group relative">
      <div class="absolute inset-0 bg-gradient-to-br from-[#0B99FF] to-[#00FFFF] rounded-[18px] blur-md opacity-30 group-hover:opacity-60 transition-all duration-500"></div>
      <div class="relative h-full rounded-[16px] bg-gradient-to-br from-[#0B1A2E] to-[#1B2D4E] p-6 ring-2 ring-inset ring-[#0B99FF]/40 transition-all duration-300 group-hover:ring-[#0B99FF]/80 group-hover:scale-[1.02] group-hover:shadow-[0_0_40px_rgba(11,153,255,0.4)] backdrop-blur-sm">
        <!-- Header del cliente -->
        <div class="mb-4 flex items-center gap-3">
          <div class="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#0B99FF] to-[#00FFFF] shadow-[0_0_15px_rgba(11,153,255,0.6)]">
            <span class="icon-[carbon--document] text-white text-lg"></span>
          </div>
          <div>
            <h3 class="font-black text-white text-lg group-hover:text-[#00FFFF] transition-colors duration-300">ACCESO INVESTIGATIVO</h3>
            <div class="flex items-center gap-1">
              <span class="h-1.5 w-1.5 rounded-full bg-[#0B99FF] animate-pulse" style="animation-delay: 0.1s"></span>
              <span class="text-xs font-semibold text-[#0B99FF]">BOLIVIA</span>
            </div>
          </div>
        </div>

        <!-- Descripción -->
        <p class="mb-4 text-sm leading-relaxed text-[#B8AFC0]">
          Iniciativa periodística especializada en <span class="text-[#00FF9D] font-semibold">derechos humanos y libertad de expresión</span>.
        </p>

        <!-- Badge de premio -->
        <div class="mb-4 flex items-center gap-2 rounded-[10px] bg-gradient-to-r from-[#0B99FF]/10 to-transparent p-2 ring-1 ring-inset ring-[#0B99FF]/30">
          <span class="icon-[carbon--trophy] text-[#00FFFF] text-sm"></span>
          <span class="text-xs font-bold text-[#00FFFF]">PREMIOS NACIONALES 2024</span>
        </div>

        <!-- Footer con link -->
        <div class="flex items-center justify-between">
          <span class="text-xs font-semibold text-[#0B99FF]">PERIODISMO</span>
          <a href="https://accesoinvestigativo.com/" target="_blank" class="flex items-center gap-1 text-xs font-bold text-white hover:text-[#00FFFF] transition-colors duration-300">
            <span>VISITAR</span>
            <span class="icon-[carbon--arrow-up-right] text-[#00FFFF]"></span>
          </a>
        </div>
      </div>
    </div>

    <!-- Real Tomayapo -->
    <div class="group relative">
      <div class="absolute inset-0 bg-gradient-to-br from-[#00FF9D] to-[#00FFFF] rounded-[18px] blur-md opacity-30 group-hover:opacity-60 transition-all duration-500"></div>
      <div class="relative h-full rounded-[16px] bg-gradient-to-br from-[#0B2E1A] to-[#1B4E2D] p-6 ring-2 ring-inset ring-[#00FF9D]/40 transition-all duration-300 group-hover:ring-[#00FF9D]/80 group-hover:scale-[1.02] group-hover:shadow-[0_0_40px_rgba(0,255,157,0.4)] backdrop-blur-sm">
        <!-- Header del cliente -->
        <div class="mb-4 flex items-center gap-3">
          <div class="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#00FF9D] to-[#00FFFF] shadow-[0_0_15px_rgba(0,255,157,0.6)]">
            <span class="icon-[carbon--soccer] text-white text-lg"></span>
          </div>
          <div>
            <h3 class="font-black text-white text-lg group-hover:text-[#00FF9D] transition-colors duration-300">REAL TOMAYAPO</h3>
            <div class="flex items-center gap-1">
              <span class="h-1.5 w-1.5 rounded-full bg-[#00FF9D] animate-pulse" style="animation-delay: 0.2s"></span>
              <span class="text-xs font-semibold text-[#00FF9D]">TARIJA</span>
            </div>
          </div>
        </div>

        <!-- Descripción -->
        <p class="mb-4 text-sm leading-relaxed text-[#B8AFC0]">
          Club de fútbol de la <span class="text-[#00FF9D] font-semibold">Primera División de Bolivia</span>. Fundado en 1999, representando con orgullo a Tarija.
        </p>

        <!-- Estadísticas -->
        <div class="mb-4 grid grid-cols-2 gap-2">
          <div class="rounded-[8px] bg-black/30 p-2 text-center ring-1 ring-inset ring-[#00FF9D]/20">
            <div class="text-xs font-bold text-[#00FF9D]">1999</div>
            <div class="text-[10px] text-[#B8AFC0]">FUNDACIÓN</div>
          </div>
          <div class="rounded-[8px] bg-black/30 p-2 text-center ring-1 ring-inset ring-[#00FF9D]/20">
            <div class="text-xs font-bold text-[#00FF9D]">1° DIV</div>
            <div class="text-[10px] text-[#B8AFC0]">LIGA</div>
          </div>
        </div>

        <!-- Footer con link -->
        <div class="flex items-center justify-between">
          <span class="text-xs font-semibold text-[#00FF9D]">DEPORTE</span>
          <a href="https://realtomayapo.com/" target="_blank" class="flex items-center gap-1 text-xs font-bold text-white hover:text-[#00FFFF] transition-colors duration-300">
            <span>VISITAR</span>
            <span class="icon-[carbon--arrow-up-right] text-[#00FFFF]"></span>
          </a>
        </div>
      </div>
    </div>
  </div>

  <!-- Footer energético -->
  <div class="mt-8 rounded-[14px] bg-gradient-to-r from-[#FF007A]/10 via-[#7C00FF]/10 to-[#00FFFF]/10 p-4 ring-2 ring-inset ring-[#FF00FF]/30">
    <div class="flex items-center justify-center gap-4">
      <span class="icon-[carbon--growth] text-2xl text-[#00FF9D]"></span>
      <p class="text-center text-sm font-black text-white">
        MÁS DE <span class="text-[#00FFFF]">50 PROYECTOS</span> IMPULSADOS CON ENERGÍA DIGITAL
      </p>
      <span class="icon-[carbon--trending-up] text-2xl text-[#FF007A]"></span>
    </div>
  </div>
</Card>

        <!-- FAQ Section -->
        <Card>
          <h2 class="mb-6 text-2xl md:text-3xl font-bold text-white flex items-center gap-3">
            <span class="text-[#FF007A] text-2xl">❓</span>
            Preguntas Frecuentes
          </h2>
          <div class="flex flex-col divide-y divide-white/10">
            {#each faqs as faq}
              <FAQItem question={faq.question} answer={faq.answer} />
            {/each}
          </div>
        </Card>

      </div>

      <!-- Sidebar: Right Side (1 col on lg) -->
      <aside class="lg:col-span-1 flex flex-col gap-8 h-fit lg:sticky lg:top-8">
        
        <!-- Offer Banner with Countdown -->
        <!-- <OfferBanner expires={new Date('2025-12-31T23:59:59')} discount={20} /> -->

        <!-- Countdown Standalone (if needed) -->
        <div class="rounded-xl bg-gradient-to-br from-[#FF2D95]/10 to-[#00F0FF]/5 p-4 ring-1 ring-inset ring-white/10 backdrop-blur-sm">
          <p class="text-xs md:text-sm font-semibold text-[#B8AFC0] uppercase tracking-wider mb-3">La oferta vence en</p>
          <Countdown target={new Date('2025-12-31T23:59:59')} showLabels={true} />
        </div>

        <!-- Pricing Card -->
        <PricingCard />

        <!-- Contact Professional Section -->
        <Card>
          <div class="mb-6 flex items-center gap-3">
            <div class="h-8 w-8 rounded-full bg-gradient-to-br from-[#00FF9D] to-[#00FFFF] flex items-center justify-center shadow-[0_0_15px_rgba(0,255,157,0.6)]">
              <span class="icon-[carbon--chat] text-white text-sm"></span>
            </div>
            <h2 class="text-xl font-bold text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">CONTACTO PROFESIONAL</h2>
          </div>
          
          <div class="grid grid-cols-2 md:grid-cols-3 gap-3">
            <a 
              href="https://linkedin.com/in/benito-anagua" 
              class="group relative rounded-[12px] bg-gradient-to-br from-[#0A66C2]/20 to-[#0A66C2]/10 p-3 ring-1 ring-inset ring-[#0A66C2]/30 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(10,102,194,0.4)] backdrop-blur-sm"
              aria-label="LinkedIn"
            >
              <div class="flex flex-col items-center gap-2">
                <span class="icon-[carbon--logo-linkedin] text-2xl text-[#0A66C2] drop-shadow-[0_0_8px_rgba(10,102,194,0.6)]"></span>
                <span class="text-xs font-semibold text-white">LinkedIn</span>
              </div>
            </a>

            <a 
              href="https://github.com/benitoanagua" 
              class="group relative rounded-[12px] bg-gradient-to-br from-[#FFFFFF]/20 to-[#FFFFFF]/10 p-3 ring-1 ring-inset ring-[#FFFFFF]/30 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] backdrop-blur-sm"
              aria-label="GitHub"
            >
              <div class="flex flex-col items-center gap-2">
                <span class="icon-[carbon--logo-github] text-2xl text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]"></span>
                <span class="text-xs font-semibold text-white">GitHub</span>
              </div>
            </a>

            <a 
              href="https://behance.net/benitoanagua" 
              class="group relative rounded-[12px] bg-gradient-to-br from-[#0057FF]/20 to-[#0057FF]/10 p-3 ring-1 ring-inset ring-[#0057FF]/30 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(0,87,255,0.4)] backdrop-blur-sm"
              aria-label="Behance"
            >
              <div class="flex flex-col items-center gap-2">
                <span class="icon-[carbon--image] text-2xl text-[#0057FF] drop-shadow-[0_0_8px_rgba(0,87,255,0.6)]"></span>
                <span class="text-xs font-semibold text-white">Behance</span>
              </div>
            </a>

            <a 
              href="mailto:benito.anagua@gmail.com" 
              class="group relative rounded-[12px] bg-gradient-to-br from-[#00FF9D]/20 to-[#00FF9D]/10 p-3 ring-1 ring-inset ring-[#00FF9D]/30 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(0,255,157,0.4)] backdrop-blur-sm"
              aria-label="Email"
            >
              <div class="flex flex-col items-center gap-2">
                <span class="icon-[carbon--email] text-2xl text-[#00FF9D] drop-shadow-[0_0_8px_rgba(0,255,157,0.6)]"></span>
                <span class="text-xs font-semibold text-white">Email</span>
              </div>
            </a>

            <a 
              href="https://wa.me/59172945548" 
              class="group relative rounded-[12px] bg-gradient-to-br from-[#25D366]/20 to-[#25D366]/10 p-3 ring-1 ring-inset ring-[#25D366]/30 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(37,211,102,0.4)] backdrop-blur-sm"
              aria-label="WhatsApp"
            >
              <div class="flex flex-col items-center gap-2">
                <span class="icon-[carbon--chat] text-2xl text-[#25D366] drop-shadow-[0_0_8px_rgba(37,211,102,0.6)]"></span>
                <span class="text-xs font-semibold text-white">WhatsApp</span>
              </div>
            </a>
          </div>
        </Card>

        <!-- Links Section -->
        <Card>
          <div class="mb-6 flex items-center gap-3">
            <div class="h-8 w-8 rounded-full bg-gradient-to-br from-[#7C00FF] to-[#FF007A] flex items-center justify-center shadow-[0_0_15px_rgba(124,0,255,0.6)]">
              <span class="icon-[carbon--link] text-white text-sm"></span>
            </div>
            <h2 class="text-xl font-bold text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">RECURSOS</h2>
          </div>

          <div class="space-y-4">
            <!-- Hostinger -->
            <a 
              href="https://www.hostinger.com" 
              class="group flex items-center gap-4 rounded-[14px] bg-gradient-to-r from-[#2ECC71]/15 to-[#27AE60]/10 p-4 ring-1 ring-inset ring-[#2ECC71]/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(46,204,113,0.3)] backdrop-blur-sm"
            >
              <div class="flex h-12 w-12 items-center justify-center rounded-[10px] bg-gradient-to-br from-[#2ECC71] to-[#27AE60] shadow-[0_0_15px_rgba(46,204,113,0.5)]">
                <span class="icon-[carbon--cloud-service-management] text-xl text-white"></span>
              </div>
              <div class="flex-1">
                <h3 class="font-bold text-white group-hover:text-[#2ECC71] transition-colors duration-300">HOSTINGER</h3>
                <p class="text-sm text-[#B8AFC0]">Hosting económico y de alto rendimiento</p>
              </div>
              <span class="icon-[carbon--arrow-right] text-[#2ECC71] text-lg transition-transform duration-300 group-hover:translate-x-1"></span>
            </a>

            <!-- HostArmada -->
            <a 
              href="https://www.hostarmada.com" 
              class="group flex items-center gap-4 rounded-[14px] bg-gradient-to-r from-[#3498DB]/15 to-[#2980B9]/10 p-4 ring-1 ring-inset ring-[#3498DB]/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(52,152,219,0.3)] backdrop-blur-sm"
            >
              <div class="flex h-12 w-12 items-center justify-center rounded-[10px] bg-gradient-to-br from-[#3498DB] to-[#2980B9] shadow-[0_0_15px_rgba(52,152,219,0.5)]">
                <span class="icon-[carbon--server-proxy] text-xl text-white"></span>
              </div>
              <div class="flex-1">
                <h3 class="font-bold text-white group-hover:text-[#3498DB] transition-colors duration-300">HOSTARMADA</h3>
                <p class="text-sm text-[#B8AFC0]">Servidores cloud optimizados</p>
              </div>
              <span class="icon-[carbon--arrow-right] text-[#3498DB] text-lg transition-transform duration-300 group-hover:translate-x-1"></span>
            </a>

            <!-- Namecheap -->
            <a 
              href="https://www.namecheap.com/hosting" 
              class="group flex items-center gap-4 rounded-[14px] bg-gradient-to-r from-[#FF6B6B]/15 to-[#EE5A52]/10 p-4 ring-1 ring-inset ring-[#FF6B6B]/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(255,107,107,0.3)] backdrop-blur-sm"
            >
              <div class="flex h-12 w-12 items-center justify-center rounded-[10px] bg-gradient-to-br from-[#FF6B6B] to-[#EE5A52] shadow-[0_0_15px_rgba(255,107,107,0.5)]">
                <span class="icon-[carbon--data-check] text-xl text-white"></span>
              </div>
              <div class="flex-1">
                <h3 class="font-bold text-white group-hover:text-[#FF6B6B] transition-colors duration-300">NAMECHEAP</h3>
                <p class="text-sm text-[#B8AFC0]">Dominios económicos y SSL</p>
              </div>
              <span class="icon-[carbon--arrow-right] text-[#FF6B6B] text-lg transition-transform duration-300 group-hover:translate-x-1"></span>
            </a>
          </div>

        </Card>

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