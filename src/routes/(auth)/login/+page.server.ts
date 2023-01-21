import type { Actions } from './$types';

export const actions: Actions = {
	login: async ({ cookies, request }) => {
		const data = await request.formData();
		const email = data.get('email');
		const password = data.get('password');

		console.log(email, password);

		// const user = await db.getUser(email);
		cookies.set('sessionid', '123');

		return { success: true };
	},
	register: async (event) => {
		// TODO register the user
	}
};
