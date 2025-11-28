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

        <!-- Clients Section -->
        <Card>
          <h2 class="mb-6 text-2xl md:text-3xl font-bold text-white flex items-center gap-3">
            <span class="text-[#0B99FF] text-2xl">🤝</span>
            Clientes que ya confían en nuestro hosting
          </h2>
          <p class="mb-8 text-sm md:text-base text-[#B8AFC0] leading-relaxed">
            Creamos y administramos proyectos reales para organizaciones, medios digitales y emprendimientos tanto en Bolivia como en el exterior.
          </p>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {#each clients as client}
              <ClientCard {...client} />
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
            {#each faqs as faq}
              <FAQItem question={faq.question} answer={faq.answer} />
            {/each}
          </div>
        </Card>

      </div>

      <!-- Sidebar: Right Side (1 col on lg) -->
      <aside class="lg:col-span-1 flex flex-col gap-8 h-fit lg:sticky lg:top-8">
        
        <!-- Offer Banner with Countdown -->
        <OfferBanner expires={new Date('2025-12-31T23:59:59')} discount={20} />

        <!-- Countdown Standalone (if needed) -->
        <div class="rounded-xl bg-gradient-to-br from-[#FF2D95]/10 to-[#00F0FF]/5 p-4 ring-1 ring-inset ring-white/10 backdrop-blur-sm">
          <p class="text-xs md:text-sm font-semibold text-[#B8AFC0] uppercase tracking-wider mb-3">La oferta vence en</p>
          <Countdown target={new Date('2025-12-31T23:59:59')} showLabels={true} />
        </div>

        <!-- Pricing Card -->
        <PricingCard />

        <!-- Contact Professional Section -->
        <Card>
          <h2 class="mb-4 md:mb-6 text-lg md:text-xl font-bold text-white flex items-center gap-2">
            <span class="text-[#00FF9D] text-lg">📧</span>
            Contacto
          </h2>
          <div class="flex flex-wrap gap-2 md:gap-3 text-[#B8AFC0]">
            <a 
              href="https://linkedin.com/in/benito-anagua" 
              class="inline-flex items-center gap-1.5 text-xs md:text-sm underline hover:text-[#FF00FF] transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <span>in</span>
            </a>
            <a 
              href="https://github.com/benitoanagua" 
              class="inline-flex items-center gap-1.5 text-xs md:text-sm underline hover:text-[#FF00FF] transition-colors duration-300"
              aria-label="GitHub"
            >
              <span>gh</span>
            </a>
            <a 
              href="https://benitoanagua.me" 
              class="inline-flex items-center gap-1.5 text-xs md:text-sm underline hover:text-[#FF00FF] transition-colors duration-300"
              aria-label="Sitio web"
            >
              <span>web</span>
            </a>
            <a 
              href="https://behance.net/benitoanagua" 
              class="inline-flex items-center gap-1.5 text-xs md:text-sm underline hover:text-[#FF00FF] transition-colors duration-300"
              aria-label="Behance"
            >
              <span>bh</span>
            </a>
            <a 
              href="mailto:benito.anagua@gmail.com" 
              class="inline-flex items-center gap-1.5 text-xs md:text-sm underline hover:text-[#FF00FF] transition-colors duration-300"
              aria-label="Email"
            >
              <span>✉️</span>
            </a>
            <a 
              href="https://wa.me/59172945548" 
              class="inline-flex items-center gap-1.5 text-xs md:text-sm underline hover:text-[#FF00FF] transition-colors duration-300"
              aria-label="WhatsApp"
            >
              <span>wa</span>
            </a>
          </div>
        </Card>

        <!-- Links Section -->
        <Card>
          <h2 class="mb-4 md:mb-6 text-lg md:text-xl font-bold text-white flex items-center gap-2">
            <span class="text-[#00FF9D] text-lg">☁️</span>
            Links útiles
          </h2>
          <ul class="text-xs md:text-sm text-[#B8AFC0] space-y-2 md:space-y-3">
            <li>
              <a href="https://www.hostinger.com" class="underline hover:text-[#FF00FF] transition-colors duration-300">
                <strong>Hostinger</strong>: hosting económico y rápido.
              </a>
            </li>
            <li>
              <a href="https://www.hostarmada.com" class="underline hover:text-[#FF00FF] transition-colors duration-300">
                <strong>HostArmada</strong>: servidores optimizados.
              </a>
            </li>
            <li>
              <a href="https://www.namecheap.com/hosting" class="underline hover:text-[#FF00FF] transition-colors duration-300">
                <strong>Namecheap</strong>: dominios económicos.
              </a>
            </li>
          </ul>
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