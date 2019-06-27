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
				button.uk-button.uk-button-primary(type='button',@click.prevent='create') Create
</template> 

<script>
export default {
	name:'persons-create',
	data() {
		return {
			name:'',
			bio:'',
			dob:'',
		}
	},
	methods:{
		create() {
			let vm = this

		 	let new_person = {
		 		name:vm.name,
		 		bio:vm.bio,
		 		dob:vm.dob
		 	}

		 	vm.$store
		 		.dispatch('persons/store',new_person)
		 		.then(newly_created_person => {
		 			vm.$router.push({ path:'/persons' })
		 		})
		 		.catch(err => vm.$root.error(err))
		}
	}
}
</script>