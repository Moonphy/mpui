<!--
 * @Description: 
 * @Author: lmh
 * @Date: 2023-01-01 15:41:06
 * @LastEditTime: 2023-01-02 13:13:04
 * @LastEditors: lmh
-->
<template>
	<div class="hello">
		<h1>{{ msg }}</h1>
	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({
	name: 'MpMsg',
})
export default class MpMsg extends Vue {
	@Prop() private msg!: string
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less"></style>
