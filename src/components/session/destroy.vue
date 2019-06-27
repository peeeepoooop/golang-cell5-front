<template lang='pug'>

	h3 Logging out!

</template>

<script>
import Cookies from 'js-cookie'

export default {
	name:'session-destroy',
	beforeRouteEnter(to,from,next) {
		Cookies.remove('golang-cell5')

		location.reload(true)
	}
}
</script>