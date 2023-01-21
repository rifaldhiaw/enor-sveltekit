import type { Actions } from './$types';

export const actions: Actions = {
	login: async ({ request }) => {
		return { success: true };
	},
	register: async (event) => {
		// TODO register the user
	}
};
