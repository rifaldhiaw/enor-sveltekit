import { GITHUB_ID, GITHUB_SECRET } from '$env/static/private';
import GitHub from '@auth/core/providers/github';
import { SvelteKitAuth } from '@auth/sveltekit';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { PrismaClient } from '@prisma/client';
import { redirect, type Handle } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';

const authorization: Handle = async ({ event, resolve }) => {
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

const prisma = new PrismaClient();

export const handle = sequence(
	SvelteKitAuth({
		adapter: PrismaAdapter(prisma),
		// the session override fixes a weird bug in the adapter
		// src: https://github.com/nextauthjs/next-auth/issues/6076#issuecomment-1354087465
		session: {
			strategy: 'database',
			generateSessionToken: () => {
				return crypto.randomUUID();
			}
		},
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
