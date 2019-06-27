<template lang='pug'>

	table.uk-table
		caption
			router-link(to='/persons/create') Create New Person
		thead
			tr
				th Name
				th Bio
				th DOB
				th
		tbody
			tr(v-for='person in persons')
				td
					router-link(:to="'/persons/' + person.id + '/edit'") {{ person.name }}
				td {{ person.bio }}
				td {{ person.dob }}
				td
					button.uk-button.uk-button-primary(@click.prevent='destroy(person.id)') Delete


</template>

<script>
import { mapState } from 'vuex'

export default {
	name:'persons-index',
	computed:{
		...mapState({
			persons:state => state.persons.items
		})
	},
	mounted() {
		let vm = this

		vm.$store.dispatch('persons/index')
	},
	methods:{
		destroy(id) {
			let vm = this
			
			vm.$store.dispatch('persons/destroy',id)
				.then(res => {
					vm.$store.dispatch('persons/index')
				})
		}
	}
}
</script>
