<script>
	import AdminNavbar from '$lib/components/AdminNavbar.svelte';
	import Sidebar from '$lib/components/Sidebar.svelte';
</script>

<div>
	<Sidebar />
	<div class="relative md:ml-64 min-h-screen bg-blueGray-100">
		<AdminNavbar />
		<div class="relative bg-red-500 md:pt-32 pb-32 pt-12">
			<div class="px-4 md:px-10 mx-auto w-full" />
		</div>
		<div class="px-4 md:px-10 mx-auto w-full -m-32 relative z-10">
			<slot />
		</div>
	</div>
</div>
