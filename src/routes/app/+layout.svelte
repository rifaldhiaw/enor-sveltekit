<script>
	import AppHeader from '$lib/modules/app/AppHeader.svelte';
	import AppNavbar from '$lib/modules/app/AppNavbar.svelte';
	import AppSidebar from '$lib/modules/app/AppSidebar.svelte';
</script>

<div>
	<AppSidebar />
	<div class="relative md:ml-64 min-h-screen bg-slate-100">
		<AppNavbar />
		<AppHeader />
		<div class="px-4 md:px-10 mx-auto w-full -m-32 relative">
			<slot />
		</div>
	</div>
</div>
