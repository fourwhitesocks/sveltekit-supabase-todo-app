<script>
	import { fade } from 'svelte/transition';

	import { isOverlayOpen } from '../stores/overlayStore';
</script>

<div
	class="w-screen h-screen fixed top-0 left-0 flex justify-center items-center bg-gray-100 opacity-90 z-10"
	on:click={() => isOverlayOpen.set(false)}
	transition:fade
>
	<!-- this stopProp says don't propagate up to the parent div -->
	<div
		class="bg-gray-900 text-white rounded-md px-8 py-10 relative max-w-lg opacity-80"
		on:click|stopPropagation
	>
		<button
			class="absolute top-2 right-3 text-4xl text-gray-300 hover:-translate-y-.05 transition-transform"
			on:click={() => isOverlayOpen.set(false)}>&times</button
		>
		Hey I'm an overlay or Modal!
		<slot />
	</div>
</div>
