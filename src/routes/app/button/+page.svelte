<script>
	import FormSectionTitle from '$lib/modules/app/FormSectionTitle.svelte';
	import ModalExample from '$lib/modules/app/ModalExample.svelte';
	import TableDropdown from '$lib/modules/app/TableDropdown.svelte';
</script>

<div class="bg-white text-black rounded mb-48 p-8">
	<div class="flex flex-col">
		<div class="flex">
			<FormSectionTitle>Button</FormSectionTitle>
			<div class="flex flex-col justify-center items-center w-1/2 gap-3">
				<button class="btn-primary"> Primary </button>
				<button class="btn-black"> Neutral </button>
				<button class="btn-white"> Neutral </button>
			</div>
			<div class="flex flex-col justify-center items-center w-1/2 gap-3">
				<button class="btn-primary px-4 py-2"> Primary small </button>
				<button class="btn-black px-4 py-2"> Neutral small </button>
				<button class="btn-white px-4 py-2"> Neutral small </button>
			</div>
		</div>
	</div>

	<!-- input -->
	<div class="h-12" />
	<div class="flex flex-col">
		<FormSectionTitle>Input</FormSectionTitle>
		<div class="flex flex-col w-1/2 bg-slate-100 p-10">
			<label class="label" for="grid-username"> Username </label>
			<input id="grid-username" type="text" class="input" placeholder="e.g. John Doe" />
		</div>
	</div>

	<!-- menu -->
	<div class="h-12" />
	<div class="flex flex-col items-start">
		<FormSectionTitle>Menu</FormSectionTitle>
		<TableDropdown />
	</div>

	<!-- modal -->
	<div class="h-12" />
	<div class="flex flex-col items-start">
		<FormSectionTitle>Modal</FormSectionTitle>
		<ModalExample />
	</div>
</div>
