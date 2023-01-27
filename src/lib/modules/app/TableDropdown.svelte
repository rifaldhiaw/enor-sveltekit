<script lang="ts">
	import { classNames } from '$lib/utils/classNames';
	import { Menu, MenuButton, MenuItem, MenuItems } from '@rgossiaux/svelte-headlessui';
	import { createPopperActions } from 'svelte-popperjs';

	const [popperRef, popperContent] = createPopperActions();

	const popperOptions = {
		placement: 'bottom-start',
		strategy: 'fixed',
		modifiers: [{ name: 'offset', options: { offset: [0, 10] } }]
	};

	function resolveClass({ active, disabled }: { active: boolean; disabled: boolean }) {
		return classNames(
			'flex justify-between w-full px-4 py-2 text-sm leading-5 text-left',
			active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
			disabled && 'cursor-not-allowed opacity-50'
		);
	}
</script>

<Menu>
	<span class="rounded-md shadow-sm">
		<MenuButton use={[popperRef]} class="btn">
			<i class="fas fa-ellipsis-v" />
		</MenuButton>
	</span>

	<MenuItems
		use={[[popperContent, popperOptions]]}
		class="w-56 mt-2 bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none z-10"
	>
		<div class="py-1">
			<MenuItem as="a" href="#account-settings" class={resolveClass}>Account settings</MenuItem>
			<MenuItem as="a" href="#support" class={resolveClass}>Support</MenuItem>
			<MenuItem as="a" disabled href="#new-feature" class={resolveClass}>
				New feature (soon)
			</MenuItem>
			<MenuItem as="a" href="#license" class={resolveClass}>License</MenuItem>
		</div>

		<div class="py-1">
			<MenuItem as="a" href="#sign-out" class={resolveClass}>Sign out</MenuItem>
		</div>
	</MenuItems>
</Menu>
