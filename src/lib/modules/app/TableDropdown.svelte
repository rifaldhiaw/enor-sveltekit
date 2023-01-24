<script lang="ts">
	import { classNames } from '$lib/utils/classNames';
	import { Menu, MenuButton, MenuItem, MenuItems } from '@rgossiaux/svelte-headlessui';
	import { createPopperActions } from 'svelte-popperjs';

	const [popperRef, popperContent] = createPopperActions();

	// Example Popper configuration
	const popperOptions = {
		placement: 'bottom-end',
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
		<MenuButton
			use={[popperRef]}
			class="inline-flex justify-center w-full px-4 py-2 text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out bg-white  rounded-md hover:text-gray-500 focus:outline-none focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800"
		>
			<i class="fas fa-ellipsis-v" />
		</MenuButton>
	</span>

	<MenuItems
		use={[[popperContent, popperOptions]]}
		class="absolute right-0 w-56 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none z-10"
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
