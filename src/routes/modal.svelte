<script>
	//const isOverlayOpen = false;
	import { isOverlayOpen } from '../stores/overlayStore.js';
</script>

<section>
	<h1>
		<div class="welcome">
			<picture>
				<source srcset="svelte-welcome.webp" type="image/webp" />
				<img src="svelte-welcome.png" alt="Welcome" />
			</picture>
		</div>

		to your new<br />SvelteKit app
	</h1>
</section>
<button
	class="bg-purple-900 text-purple-100 p-4 rounded-md my-4"
	on:click={() => {
		{
			isOverlayOpen.set(true);
		}
	}}>Open Overlay</button
><!-- to access the value of a writable you have to use the dollar sign -->
{$isOverlayOpen}
<section>
	<ul class="mt-20">
		<li class="pt-4">Stores are a way to share state between different components</li>
		<li class="pt-4">
			We want isOpen to be usable in any component and the state to be shared too that we want to
			thru the use of a store
		</li>
		<li class="pt-4">Stopped at 5:32 mins in</li>
		<li class="pt-4">https://youtu.be/ql_-tLTpPKg</li>
	</ul>
</section>
