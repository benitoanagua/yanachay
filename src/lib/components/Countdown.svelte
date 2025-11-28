<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import { writable } from 'svelte/store';

  // Target date: December 31 of current year at 23:59:59
  const targetDate = new Date(new Date().getFullYear(), 11, 31, 23, 59, 59).getTime();

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
  {$timeLeft.days}<span class="text-[#00FFFF] drop-shadow-[0_0_4px_#00FFFF]">d</span>
  {$timeLeft.hours}<span class="text-[#00FFFF] drop-shadow-[0_0_4px_#00FFFF]">h</span>
  {$timeLeft.minutes}<span class="text-[#00FFFF] drop-shadow-[0_0_4px_#00FFFF]">m</span>
  {$timeLeft.seconds}<span class="text-[#00FFFF] drop-shadow-[0_0_4px_#00FFFF]">s</span>
</div>
