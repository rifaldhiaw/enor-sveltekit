<script>
	import AppNavbar from '$lib/modules/app/AppNavbar.svelte';
	import AppSidebar from '$lib/modules/app/AppSidebar.svelte';
</script>

<div>
	<AppSidebar />
	<div class="relative md:ml-64 min-h-screen bg-blueGray-100">
		<AppNavbar />
		<div class="relative bg-red-500 md:pt-32 pb-32 pt-12">
			<div class="px-4 md:px-10 mx-auto w-full" />
		</div>
		<div class="px-4 md:px-10 mx-auto w-full -m-32 relative">
			<slot />
		</div>
	</div>
</div>
