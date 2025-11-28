<script lang="ts">
  import Card from '$lib/components/Card.svelte';
  import Button from '$lib/components/Button.svelte';
  import Badge from '$lib/components/Badge.svelte';
  import FeatureItem from '$lib/components/FeatureItem.svelte';
  import PricingCard from '$lib/components/PricingCard.svelte';
  import FAQItem from '$lib/components/FAQItem.svelte';
  import ClientCard from '$lib/components/ClientCard.svelte';
  import Countdown from '$lib/components/Countdown.svelte';

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

<div class="min-h-screen w-full bg-[#07020A] font-['Inter'] overflow-x-hidden relative">
  <!-- Background Effects -->
  <div class="absolute inset-0 bg-[radial-gradient(ellipse_121%_177%_at_0%_0%,#FF00FF_0%,#00FFFF_40%)] pointer-events-none"></div>
  
  <div class="relative z-10 container mx-auto px-4 py-10 lg:py-20 flex flex-col lg:flex-row gap-8 items-start justify-center">
    
    <!-- Left Main Column -->
    <div class="w-full lg:w-[800px] shrink-0 flex flex-col gap-8">
      
      <!-- Main Offer Card -->
      <Card>
        <!-- Header Badge -->
        <div class="mb-4 flex items-center gap-2">
          <div class="h-[8.5px] w-[8.5px] rounded-full bg-[#00FF9D]"></div>
          <span class="text-[12.8px] font-semibold tracking-[0.51px] text-white">Black Friday Hosting 2026 – Bolivia</span>
        </div>

        <!-- Main Title -->
        <h1 class="mb-6 text-[34px] font-extrabold leading-[37.5px] text-white">
          Black Friday Hosting 2026 – Oferta Especial<br/>Bolivia
        </h1>

        <!-- Description -->
        <p class="mb-10 text-[16px] font-normal leading-[24px] text-[#B8AFC0] max-w-[540px]">
          En Bolivia muchos planes internacionales de Black Friday no pueden comprarse porque superan el límite de <strong>25 USD por transacción</strong>.
          <br/><br/>
          Por eso te ofrezco una alternativa local, accesible, facturable y lista para tus proyectos web.
        </p>

        <!-- Pricing Section -->
        <div class="mb-10 flex items-end gap-2">
          <span class="text-[34px] font-extrabold leading-[51px] text-[#FF007A]">350 Bs</span>
          <span class="mb-3 text-[19px] font-semibold leading-[28.8px] text-white">/ año</span>
        </div>

        <!-- Badges -->
        <div class="mb-8 flex flex-wrap gap-4">
          <div class="inline-flex items-center justify-center rounded-[10px] bg-[rgba(0,0,0,0.4)] px-4 py-2 outline outline-2 outline-[#7C00FF] outline-offset-[-2px]">
            <span class="text-[14.9px] font-medium text-white">+ 1 mes adicional GRATIS</span>
          </div>
          <Badge text="Solo clientes nuevos" />
        </div>

        <!-- CTA -->
        <div class="mb-12 flex flex-col sm:flex-row items-center gap-6">
          <Button href="https://wa.me/59172945548">Activar mi hosting</Button>
          <span class="text-[11.7px] text-[#B8AFC0]">Sin pagos en dólares, todo en bolivianos.</span>
        </div>

        <!-- Features List -->
        <div class="mb-6">
          <h3 class="mb-4 text-[13.9px] font-semibold text-[#B8AFC0]">¿Qué incluye esta oferta?</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
            {#each features as feature}
              <FeatureItem text={feature} />
            {/each}
          </div>
        </div>

        <!-- Footer Info -->
        <div class="mt-8 rounded-[10px] bg-[rgba(255,255,255,0.04)] p-4 outline outline-1 outline-[rgba(255,255,255,0.14)] outline-offset-[-1px]">
          <div class="flex items-center gap-2 mb-2">
            <div class="h-[6.4px] w-[6.4px] rounded-full bg-[#00FF9D]"></div>
            <span class="text-[11.7px] font-semibold text-white">Disponible exclusivamente en Bolivia</span>
          </div>
          <p class="text-[13.9px] text-[#B8AFC0]">
            Pensado para emprendedores, negocios, freelancers y creadores que quieren presencia web profesional sin depender de pagos en dólares.
          </p>
        </div>
      </Card>

      <!-- Clients Section -->
      <Card>
        <h2 class="mb-6 text-[24px] font-bold text-white flex items-center gap-2">
            <span class="icon-[carbon--partnership] text-[#0B99FF]"></span>
            Clientes que ya confían en nuestro hosting
        </h2>
        <p class="mb-8 text-[15px] text-[#B8AFC0]">
          Creamos y administramos proyectos reales para organizaciones, medios digitales y emprendimientos tanto en Bolivia como en el exterior.
        </p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          {#each clients as client}
            <ClientCard {...client} />
          {/each}
        </div>
      </Card>


      <!-- FAQ Section -->
      <Card>
        <h2 class="mb-6 text-[24px] font-bold text-white flex items-center gap-2">
            <span class="icon-[carbon--help] text-[#FF007A]"></span>
            Preguntas Frecuentes
        </h2>
        <div class="flex flex-col">
          {#each faqs as faq}
            <FAQItem question={faq.question} answer={faq.answer} />
          {/each}
        </div>
      </Card>

    </div>

    <!-- Right Side Pricing Card -->
    <PricingCard />


      <!-- Contact Professional Section (minimal) -->
      <Card>
        <h2 class="mb-6 text-[24px] font-bold text-white flex items-center gap-2">
          <span class="icon-[carbon--contact] text-[#00FF9D]"></span>
          Contacto Profesional
        </h2>
        <div class="flex flex-wrap gap-4 justify-center text-[#B8AFC0]">
          <a href="https://linkedin.com/in/benito-anagua" class="flex items-center gap-2 underline hover:text-[#FF00FF]">
            <span class="icon-[carbon--logo-linkedin]"></span>LinkedIn
          </a>
          <a href="https://github.com/benitoanagua" class="flex items-center gap-2 underline hover:text-[#FF00FF]">
            <span class="icon-[carbon--logo-github]"></span>GitHub
          </a>
          <a href="https://benitoanagua.me" class="flex items-center gap-2 underline hover:text-[#FF00FF]">
            <span class="icon-[carbon--globe]"></span>Web
          </a>
          <a href="https://behance.net/benitoanagua" class="flex items-center gap-2 underline hover:text-[#FF00FF]">
            <span class="icon-[carbon--image]"></span>Behance
          </a>
          <a href="mailto:benito.anagua@gmail.com" class="flex items-center gap-2 underline hover:text-[#FF00FF]">
            <span class="icon-[carbon--email]"></span>Email
          </a>
          <a href="https://wa.me/59172945548" class="flex items-center gap-2 underline hover:text-[#FF00FF]">
            <span class="icon-[carbon--phone]"></span>WhatsApp
          </a>
        </div>
      </Card>

      <!-- Links de interés (International Clients & Infrastructure) -->
      <Card>
        <h2 class="mb-6 text-[24px] font-bold text-white flex items-center gap-2">
          <span class="icon-[carbon--cloud] text-[#00FF9D]"></span>
          Links de interés
        </h2>
        <ul class="list-disc list-inside text-[#B8AFC0] space-y-2">
          <li><a href="https://www.hostinger.com" class="underline hover:text-[#FF00FF]"><strong>Hostinger</strong>: hosting económico, rápido y fácil de administrar.</a></li>
          <li><a href="https://www.hostarmada.com" class="underline hover:text-[#FF00FF]"><strong>HostArmada</strong>: servidores optimizados, excelente soporte técnico.</a></li>
          <li><a href="https://www.namecheap.com/hosting" class="underline hover:text-[#FF00FF]"><strong>Namecheap Hosting</strong>: dominios económicos y servidores confiables.</a></li>
        </ul>
      </Card>

  </div>
</div>
