<template>
	<div>
		<head-top></head-top>
		<navigation></navigation>
		<foot-bottom></foot-bottom>
	</div>
	
</template>
<script>
	import headTop from '../../components/header/header';
	import navigation from '../../components/common/navigation';
	import footBottom from '../../components/footer/footer';

      export default {
        name: 'home',
       	components: {
    		headTop,
    		navigation,
    		footBottom
  		},
      }
</script>
<style>
</style>