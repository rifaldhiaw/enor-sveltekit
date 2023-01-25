<script lang="ts">
	export let href: string;
	export let active = false;
</script>

<li class="items-center">
	<a
		{href}
		class="text-xs uppercase py-3 font-bold block {active
			? 'text-primary-500 hover:text-primary-600'
			: 'text-slate-700 hover:text-slate-500'}"
	>
		<i class="fas fa-tv mr-2 text-sm {active ? 'opacity-75' : 'text-slate-300'}" />
		<slot />
	</a>
</li>
