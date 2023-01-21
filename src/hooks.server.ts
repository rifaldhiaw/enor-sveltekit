import { GITHUB_ID, GITHUB_SECRET } from '$env/static/private';
import GitHub from '@auth/core/providers/github';
import { SvelteKitAuth } from '@auth/sveltekit';
import { redirect, type Handle } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';

const authorization: Handle = async ({ event, resolve }) => {
	console.log('authorization hook', event.url.pathname);
	if (event.url.pathname.startsWith('/app')) {
		const session = await event.locals.getSession();
		if (!session) {
			throw redirect(303, '/login');
		}
	}

	// If the request is still here, just proceed as normally
	const result = await resolve(event, {
		transformPageChunk: ({ html }) => html
	});
	return result;
};

export const handle = sequence(
	SvelteKitAuth({
		providers: [
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			GitHub({
				clientId: GITHUB_ID,
				clientSecret: GITHUB_SECRET
			})
		]
	}),
	authorization
);
