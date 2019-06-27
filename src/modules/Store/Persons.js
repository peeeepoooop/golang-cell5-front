export default {
	namespaced:true,
	state:{
		items:[],
		version:'1'
	},
	actions:{
		index({ dispatch,commit,getters,state,rootGetters,rootState },data) {
			return new Promise(async (resolve,reject) => {

				let res = await rootState.$root.$server.request(`/v${ state.version }/persons`)
				
				commit('setItems',res || [])

				return resolve()
			})
		},
		store({ dispatch,commit,getters,state,rootGetters,rootState },new_person) {
			return new Promise(async (resolve,reject) => {
				
				let res = await rootState.$root.$server.request(`/v${ state.version }/persons`,new_person,'POST')
                console.log(res)
				return resolve(res)
			})
		},
		edit({ dispatch,commit,getters,state,rootGetters,rootState },id) {
			return new Promise(async (resolve,reject) => {
				
				let res = await rootState.$root.$server.request(`/v${ state.version }/persons/${ id }/edit`)

				return resolve(res)
			})
		},
		update({ dispatch,commit,getters,state,rootGetters,rootState },edited_person) {
			return new Promise(async (resolve,reject) => {
				
				let res = await rootState.$root.$server.request(`/v${ state.version }/persons/${ edited_person.id }`,edited_person,'PUT')

				return resolve(res)
			})
		},
		destroy({ dispatch,commit,getters,state,rootGetters,rootState },id) {
			return new Promise(async (resolve,reject) => {
				
				let res = await rootState.$root.$server.request(`/v${ state.version }/persons/${ id }`,{},'DELETE')

				return resolve(res)
			})
		}
	},
	mutations:{
		setItems(state,items) {
			state.items = items || []
		}
	}

}