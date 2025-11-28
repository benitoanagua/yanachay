<script lang="ts">
  let { children, variant = 'primary', class: className = '', href = null } = $props();

  const baseStyles = "inline-flex items-center justify-center rounded-[14px] px-8 py-3 text-[14.9px] font-semibold tracking-[0.3px] text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,0,255,0.45)] cursor-pointer";

  const variants: Record<'primary' | 'secondary', string> = {
    primary: "bg-linear-to-r from-[#FF00FF] to-[#00FFFF] shadow-[0_0_32px_rgba(255,0,255,0.45)] outline outline-2 outline-[rgba(255,255,255,0.2)] outline-offset-[-2px]",
    secondary: "bg-[rgba(255,255,255,0.06)] outline outline-2 outline-[rgba(255,255,255,0.12)] outline-offset-[-2px] hover:bg-[rgba(255,255,255,0.1)]"
  };
</script>

{#if href}
  <a {href} class="{baseStyles} {variants[variant as 'primary' | 'secondary']} {className}">
    {@render children()}
  </a>
{:else}
  <button class="{baseStyles} {variants[variant as 'primary' | 'secondary']} {className}">
    {@render children()}
  </button>
{/if}
