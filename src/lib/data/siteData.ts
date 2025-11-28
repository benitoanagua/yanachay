export const siteData = {
	// Información principal de la oferta
	offer: {
		title: 'Black Friday Hosting 2026 – Oferta Especial en Bolivia',
		description:
			'En Bolivia muchos planes internacionales de Black Friday no pueden comprarse porque superan el límite de 25 USD por transacción. Por eso te ofrezco una alternativa local, accesible, facturable y lista para tus proyectos web.',
		price: 350,
		currency: 'Bs',
		period: '/ año',
		badge: 'Black Friday Bolivia',
		highlights: ['+ 1 mes adicional GRATIS', 'Solo clientes nuevos']
	},

	// Características del hosting
	features: [
		'Hosting LAMP profesional',
		'Ideal para WordPress (rápido y optimizado)',
		'Instalación gratuita de WordPress',
		'Actualizaciones automáticas',
		'Copias de seguridad semanales (Weekly Backups)',
		'Protección estándar DDoS',
		'5 GB de almacenamiento SSD ultra rápido',
		'5 cuentas de correo por sitio web (1 año gratis)',
		'Vinculación sencilla con tu dominio',
		'Soporte y configuración inicial sin costo',
		'SSL gratuito (sitio seguro)'
	],

	// Clientes
	clients: [
		{
			id: 1,
			name: 'Ancient Forest Guardians',
			description:
				'Organización dedicada a la conservación de bosques primarios vulnerables y de gran valor ecológico.',
			url: 'https://ancientforestguardians.eu/',
			color: 'purple',
			location: 'EUROPA',
			category: 'CONSERVACIÓN',
			icon: 'carbon--tree',
			quote: 'Be with us where the wild things are.',
			award: null,
			stats: null
		},
		{
			id: 2,
			name: 'Acceso Investigativo',
			description:
				'Iniciativa periodística especializada en derechos humanos y libertad de expresión.',
			url: 'https://accesoinvestigativo.com/',
			color: 'blue',
			location: 'BOLIVIA',
			category: 'PERIODISMO',
			icon: 'carbon--document',
			quote: null,
			award: 'PREMIOS NACIONALES 2024',
			stats: null
		},
		{
			id: 3,
			name: 'Real Tomayapo',
			description:
				'Club de fútbol de la Primera División de Bolivia. Fundado en 1999, representando con orgullo a Tarija.',
			url: 'https://realtomayapo.com/',
			color: 'green',
			location: 'TARIJA',
			category: 'DEPORTE',
			icon: 'carbon--soccer',
			quote: null,
			award: null,
			stats: [
				{ value: '1999', label: 'FUNDACIÓN' },
				{ value: '1° DIV', label: 'LIGA' }
			]
		}
	],

	// FAQs
	faqs: [
		{
			id: 1,
			question: '¿Necesito una cuenta en Hostinger para administrar el hosting?',
			answer: 'Sí, necesitas una cuenta en Hostinger. Te ayudamos con el proceso si lo necesitas.'
		},
		{
			id: 2,
			question: '¿Hasta cuándo es válida la promoción?',
			answer: 'Hasta el <strong>31 de diciembre</strong>. Aprovecha antes de que termine.'
		},
		{
			id: 3,
			question: '¿Debo pagar por adelantado?',
			answer:
				'No. <strong>No pagas nada</strong> hasta que tu sitio esté instalado y funcionando correctamente.'
		},
		{
			id: 4,
			question: '¿Incluye certificado SSL?',
			answer: 'Sí, incluye <strong>SSL gratuito</strong> para mayor seguridad.'
		},
		{
			id: 5,
			question: '¿Qué tecnología usa el hosting?',
			answer:
				'Es un entorno <strong>LAMP</strong>: Linux, Apache, MySQL y PHP. Ideal para WordPress y la mayoría de aplicaciones web modernas.'
		},
		{
			id: 6,
			question: '¿El dominio está incluido?',
			answer:
				"No. El dominio se compra por separado. Para vincularlo, configura estos DNS en tu proveedor:<br/><br/><code class='bg-black/30 px-2 py-1 rounded text-[#00FFA8]'>ns1.dns-parking.com</code><br/><code class='bg-black/30 px-2 py-1 rounded text-[#00FFA8]'>ns2.dns-parking.com</code>"
		},
		{
			id: 7,
			question: '¿Eres revendedor de Hostinger?',
			answer:
				'Sí, soy revendedor de Hostinger. Ofrezco soporte local en Bolivia, sin pagos en dólares, y una atención personalizada para que tu proyecto sea exitoso.'
		}
	],

	// Contactos
	contacts: [
		{
			name: 'LinkedIn',
			url: 'https://linkedin.com/in/benito-anagua',
			icon: 'carbon--logo-linkedin',
			color: 'blue'
		},
		{
			name: 'GitHub',
			url: 'https://github.com/benitoanagua',
			icon: 'carbon--logo-github',
			color: 'white'
		},
		{
			name: 'Portfolio',
			url: 'https://benitoanagua.me',
			icon: 'carbon--portfolio',
			color: 'pink'
		},
		{
			name: 'Behance',
			url: 'https://behance.net/benitoanagua',
			icon: 'carbon--image',
			color: 'blue'
		},
		{
			name: 'Email',
			url: 'mailto:benito.anagua@gmail.com',
			icon: 'carbon--email',
			color: 'green'
		},
		{
			name: 'WhatsApp',
			url: 'https://wa.me/59172945548',
			icon: 'carbon--chat',
			color: 'green'
		}
	],

	// Recursos útiles
	resources: [
		{
			name: 'HOSTINGER',
			description: 'Hosting económico y de alto rendimiento',
			url: 'https://www.hostinger.com',
			icon: 'carbon--cloud-service-management',
			color: 'green'
		},
		{
			name: 'HOSTARMADA',
			description: 'Servidores cloud optimizados',
			url: 'https://www.hostarmada.com',
			icon: 'carbon--server-proxy',
			color: 'blue'
		},
		{
			name: 'NAMECHEAP',
			description: 'Dominios económicos y SSL',
			url: 'https://www.namecheap.com/hosting',
			icon: 'carbon--data-check',
			color: 'red'
		}
	],

	// Configuración de colores
	colors: {
		purple: {
			gradient: 'from-[#7C00FF] to-[#FF007A]',
			light: 'from-[#7C00FF]/20 to-[#FF007A]/10',
			ring: 'ring-[#7C00FF]/40',
			text: 'text-[#7C00FF]'
		},
		blue: {
			gradient: 'from-[#0B99FF] to-[#00FFFF]',
			light: 'from-[#0B99FF]/20 to-[#00FFFF]/10',
			ring: 'ring-[#0B99FF]/40',
			text: 'text-[#0B99FF]'
		},
		green: {
			gradient: 'from-[#00FF9D] to-[#00FFFF]',
			light: 'from-[#00FF9D]/20 to-[#00FFFF]/10',
			ring: 'ring-[#00FF9D]/40',
			text: 'text-[#00FF9D]'
		},
		pink: {
			gradient: 'from-[#FF007A] to-[#7C00FF]',
			light: 'from-[#FF007A]/20 to-[#7C00FF]/10',
			ring: 'ring-[#FF007A]/40',
			text: 'text-[#FF007A]'
		},
		white: {
			gradient: 'from-[#FFFFFF] to-[#CCCCCC]',
			light: 'from-[#FFFFFF]/20 to-[#FFFFFF]/10',
			ring: 'ring-[#FFFFFF]/40',
			text: 'text-white'
		},
		red: {
			gradient: 'from-[#FF6B6B] to-[#EE5A52]',
			light: 'from-[#FF6B6B]/20 to-[#EE5A52]/10',
			ring: 'ring-[#FF6B6B]/40',
			text: 'text-[#FF6B6B]'
		}
	}
} as const;

// Actualizar los tipos para que sean readonly
export type Client = {
	readonly id: number;
	readonly name: string;
	readonly description: string;
	readonly url: string;
	readonly color: ColorKey;
	readonly location: string;
	readonly category: string;
	readonly icon: string;
	readonly quote: string | null;
	readonly award: string | null;
	readonly stats: readonly { readonly value: string; readonly label: string }[] | null;
};

export type Contact = {
	readonly name: string;
	readonly url: string;
	readonly icon: string;
	readonly color: ColorKey;
};

export type Resource = {
	readonly name: string;
	readonly description: string;
	readonly url: string;
	readonly icon: string;
	readonly color: ColorKey;
};

export type ColorKey = keyof typeof siteData.colors;
