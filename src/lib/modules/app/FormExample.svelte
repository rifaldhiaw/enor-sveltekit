<script>
	import FormSectionTitle from './FormSectionTitle.svelte';
</script>

<div
	class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-slate-100 border-0"
>
	<div class="rounded-t bg-white mb-0 px-6 py-6">
		<div class="text-center flex justify-between">
			<h6 class="text-slate-700 text-xl font-bold">My account</h6>
			<button class="btn-primary px-4 py-2" type="button"> Settings </button>
		</div>
	</div>
	<div class="flex-auto px-4 lg:px-10 py-10 pt-0">
		<form>
			<FormSectionTitle>User Information</FormSectionTitle>
			<div class="flex flex-wrap">
				<div class="w-full lg:w-6/12 px-4">
					<div class="relative w-full mb-3">
						<label class="label" for="grid-username"> Username </label>
						<input id="grid-username" type="text" class="input" value="lucky.jesse" />
					</div>
				</div>
				<div class="w-full lg:w-6/12 px-4">
					<div class="relative w-full mb-3">
						<label class="label" for="grid-email"> Email address </label>
						<input id="grid-email" type="email" class="input" value="jesse@example.com" />
					</div>
				</div>
				<div class="w-full lg:w-6/12 px-4">
					<div class="relative w-full mb-3">
						<label class="label" for="grid-first-name"> First Name </label>
						<input id="grid-first-name" type="text" class="input" value="Lucky" />
					</div>
				</div>
				<div class="w-full lg:w-6/12 px-4">
					<div class="relative w-full mb-3">
						<label class="label" for="grid-last-name"> Last Name </label>
						<input id="grid-last-name" type="text" class="input" value="Jesse" />
					</div>
				</div>
			</div>

			<hr class="mt-6 border-b-1 border-slate-300" />

			<FormSectionTitle>Contact Information</FormSectionTitle>
			<div class="flex flex-wrap">
				<div class="w-full lg:w-12/12 px-4">
					<div class="relative w-full mb-3">
						<label class="label" for="grid-address"> Address </label>
						<input
							id="grid-address"
							type="text"
							class="input"
							value="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
						/>
					</div>
				</div>
				<div class="w-full lg:w-4/12 px-4">
					<div class="relative w-full mb-3">
						<label class="label" for="grid-city"> City </label>
						<input id="grid-city" type="email" class="input" value="New York" />
					</div>
				</div>
				<div class="w-full lg:w-4/12 px-4">
					<div class="relative w-full mb-3">
						<label class="label" for="grid-country"> Country </label>
						<input id="grid-country" type="text" class="input" value="United States" />
					</div>
				</div>
				<div class="w-full lg:w-4/12 px-4">
					<div class="relative w-full mb-3">
						<label class="label" for="grid-postal-code"> Postal Code </label>
						<input id="grid-postal-code" type="text" class="input" value="Postal Code" />
					</div>
				</div>
			</div>

			<hr class="mt-6 border-b-1 border-slate-300" />

			<FormSectionTitle>About Me</FormSectionTitle>
			<div class="flex flex-wrap">
				<div class="w-full lg:w-12/12 px-4">
					<div class="relative w-full mb-3">
						<label class="label" for="grid-about-me"> About me </label>
						<textarea
							id="grid-about-me"
							class="input"
							rows="4"
							value="A beautiful UI Kit and Admin for Svelte & Tailwind CSS. It is Free
                and Open Source."
						/>
					</div>
				</div>
			</div>
		</form>
	</div>
</div>
