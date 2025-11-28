<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import { writable } from 'svelte/store';

  // Accept props with default values
  let { 
    target = new Date(new Date().getFullYear(), 11, 31, 23, 59, 59),
    showLabels = false 
  } = $props();

  const targetDate = new Date(target).getTime();
  const timeLeft = writable({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  let intervalId: any;

  function updateTime() {
    const now = Date.now();
    const diff = targetDate - now;
    if (diff <= 0) {
      clearInterval(intervalId);
      timeLeft.set({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      return;
    }
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);
    timeLeft.set({ days, hours, minutes, seconds });
  }

  onMount(() => {
    updateTime();
    intervalId = setInterval(updateTime, 1000);
  });

  onDestroy(() => {
    clearInterval(intervalId);
  });
</script>

<div class="border-2 border-[#FF00FF] bg-[#07020A] rounded-lg p-4 flex justify-center space-x-4">
  {#if showLabels}
    <div class="flex items-center space-x-1">
      <span class="text-white font-bold">{$timeLeft.days}</span>
      <span class="text-[#00FFFF] drop-shadow-[0_0_4px_#00FFFF] text-sm">días</span>
    </div>
    <div class="flex items-center space-x-1">
      <span class="text-white font-bold">{$timeLeft.hours}</span>
      <span class="text-[#00FFFF] drop-shadow-[0_0_4px_#00FFFF] text-sm">horas</span>
    </div>
    <div class="flex items-center space-x-1">
      <span class="text-white font-bold">{$timeLeft.minutes}</span>
      <span class="text-[#00FFFF] drop-shadow-[0_0_4px_#00FFFF] text-sm">min</span>
    </div>
    <div class="flex items-center space-x-1">
      <span class="text-white font-bold">{$timeLeft.seconds}</span>
      <span class="text-[#00FFFF] drop-shadow-[0_0_4px_#00FFFF] text-sm">seg</span>
    </div>
  {:else}
    <span class="text-white font-bold">{$timeLeft.days}</span>
    <span class="text-[#00FFFF] drop-shadow-[0_0_4px_#00FFFF]">d</span>
    <span class="text-white font-bold">{$timeLeft.hours}</span>
    <span class="text-[#00FFFF] drop-shadow-[0_0_4px_#00FFFF]">h</span>
    <span class="text-white font-bold">{$timeLeft.minutes}</span>
    <span class="text-[#00FFFF] drop-shadow-[0_0_4px_#00FFFF]">m</span>
    <span class="text-white font-bold">{$timeLeft.seconds}</span>
    <span class="text-[#00FFFF] drop-shadow-[0_0_4px_#00FFFF]">s</span>
  {/if}
</div>