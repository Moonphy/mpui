<template>
	<div class="about">
		<mp-wrap>
			<template #header>
				<div>我是顶部查询区域</div>
			</template>
			<template #opt>
				<a-button type="primary">新增</a-button>
			</template>
			<div>正文</div>
			<template #footer>
				<div>我是底部区域</div>
			</template>
		</mp-wrap>
	</div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component({
	components: {},
})
export default class extends Vue {}
</script>
<style lang="less"></style>
