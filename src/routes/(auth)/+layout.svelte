<script>
	import AuthNavbar from '$lib/modules/auth/AuthNavbar.svelte';
	import FooterSmall from '$lib/modules/auth/FooterSmall.svelte';

	const registerBg2 = '../assets/img/register_bg_2.png';
</script>

<div>
	<AuthNavbar />
	<main>
		<section class="relative w-full h-full py-40 min-h-screen">
			<div
				class="absolute top-0 w-full h-full bg-blueGray-800 bg-no-repeat bg-full"
				style="background-image: url({registerBg2});"
			/>
			<slot />
			<FooterSmall absolute={true} />
		</section>
	</main>
</div>
