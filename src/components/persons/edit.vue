<template lang='pug'>

	div
		router-link(to='/persons') Back To Persons
		form.uk-form-stacked
			div
				label.uk-form-label Name
				div.uk-form-controls
					input.uk-input(v-model='name',placeholder='Name')
			div
				label.uk-form-label Bio
				div.uk-form-controls
					input.uk-input(v-model='bio',placeholder='Bio')
			div
				label.uk-form-label DOB
				div.uk-form-controls
					input.uk-input(v-model='dob',placeholder='Date of Birth')
			hr
			div
				button.uk-button.uk-button-primary(type='button',@click.prevent='save') Save

</template> 

<script>
export default {
	name:'persons-edit',
	data() {
		return {
			name:'',
			bio:'',
			dob:''
		}
	},
	computed: {
		id() { return this.$route.params.id }
	},
	methods:{
		save() {
			let vm = this

		 	let updated_person = {
		 		id:vm.id,
		 		name:vm.name,
		 		bio:vm.bio,
		 		dob:vm.dob
		 	}

		 	vm.$store.dispatch('persons/update',updated_person)
		 		.then(newly_edited_person => {
		 			vm.$router.push({ path:'/persons' })
		 		})
		 		.catch(err => vm.$root.error(err))
		}
	},
	mounted() {
		let vm = this

		vm.$store.dispatch(`persons/edit`,vm.id)
			.then(person => {
				vm.name = person.name
				vm.bio = person.bio
				vm.do = person.dob
			})
		 	.catch(err => vm.$root.error(err))
	}
}
</script>