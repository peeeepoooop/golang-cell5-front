import users from '@/modules/Store/Users.js'
import persons from '@/modules/Store/Persons.js'

export default {
	modules:{
		users,
		persons
	},
	state:{
		$root:{}
	},
	actions:{
		setRoot(context,data) {
			context.state.$root = data
		}
	}
}