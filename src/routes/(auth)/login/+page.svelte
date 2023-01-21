<script>
	import { enhance } from '$app/forms';
</script>

<form
	method="POST"
	action="?/login"
	class="flex flex-col bg-white p-8 text-gray-500 rounded-xl w-[350px]"
	use:enhance
>
	<div class="text-center">Sign in With</div>

	<!-- github and google button -->
	<div class="flex justify-center mt-4 gap-3">
		<button
			type="button"
			class="flex items-center justify-center w-1/2 px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
		>
			<svg
				class="w-5 h-5 mr-2"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 20 20"
				fill="currentColor"
				aria-hidden="true"
			>
				<path
					fill-rule="evenodd"
					d="M10 3a7 7 0 100 14A7 7 0 0010 3zm4.243 7.757a.5.5 0 01-.707 0L10 6.207l-3.536 3.536a.5.5 0 01-.707-.707l4-4a.5.5 0 01.707 0l4 4a.5.5 0 010 .707z"
					clip-rule="evenodd"
				/>
			</svg>
			Github
		</button>
		<button
			type="button"
			class="flex items-center justify-center w-1/2 px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
		>
			<svg
				class="w-5 h-5 mr-2"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 20 20"
				fill="currentColor"
				aria-hidden="true"
			>
				<path
					fill-rule="evenodd"
					d="M10 3a7 7 0 100 14A7 7 0 0010 3zm4.243 7.757a.5.5 0 01-.707 0L10 6.207l-3.536 3.536a.5.5 0 01-.707-.707l4-4a.5.5 0 01.707 0l4 4a.5.5 0 010 .707z"
					clip-rule="evenodd"
				/>
			</svg>
			Google
		</button>
	</div>

	<!-- divider -->
	<div class="flex-1 my-6 border-t border-gray-300" />

	<div class="text-center text-gray-500 text-sm">Or use your email account</div>

	<!-- email input field -->
	<div class="mt-4">
		<label for="email" class="sr-only">Email address</label>
		<input
			id="email"
			name="email"
			type="email"
			autocomplete="email"
			required
			class="input input-bordered w-full rounded-none rounded-t-md"
			placeholder="Email address"
		/>
	</div>

	<!-- password input field -->
	<div class="mt-2">
		<label for="password" class="sr-only">Password</label>
		<input
			id="password"
			name="password"
			type="password"
			autocomplete="current-password"
			required
			class="input input-bordered w-full rounded-none rounded-b-md"
			placeholder="Password"
		/>
	</div>

	<!-- remember me -->
	<div class="flex items-center mt-4">
		<input
			id="remember_me"
			name="remember_me"
			type="checkbox"
			class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
		/>
		<label for="remember_me" class="ml-2 block text-sm text-gray-900"> Remember me </label>
	</div>

	<!-- sign in button -->
	<div class="mt-8">
		<button type="submit" class="btn w-full"> Sign in </button>
	</div>
</form>
