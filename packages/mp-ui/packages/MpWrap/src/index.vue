<!--
 * @Description: Wrap通用页面布局
 * @Author: lmh
 * @Date: 2023-01-02 13:28:47
 * @LastEditTime: 2023-01-02 13:32:26
 * @LastEditors: lmh
-->
<template>
	<a-layout
		class="mp-wrap-container"
		:class="{ 'flex-row': $slots.left || $slots.right }"
	>
		<!-- 左侧边栏区域 -->
		<a-layout-content
			class="mp-wrap-left-aside"
			ref="mp-wrap-left-aside"
			v-if="$slots.left"
		>
			<div class="mp-wrap-scroll">
				<slot name="left"></slot>
			</div>
		</a-layout-content>
		<!-- 主题内容区域 -->
		<a-layout-content class="mp-wrap-main" ref="mp-wrap-main">
			<!-- 信息检索区域 -->
			<div
				class="mp-wrap-search"
				:class="{ 'bottom-border': border }"
				ref="mp-wrap-search"
				v-if="$slots.header"
			>
				<slot name="header"></slot>
			</div>
			<!-- 操作区域-->
			<div
				class="mp-wrap-opt"
				:class="[$slots.header ? 'no-padding-top' : '']"
				ref="mp-wrap-opt"
				v-if="$slots.opt"
			>
				<slot name="opt"></slot>
			</div>
			<!-- 内容区域-->
			<a-layout-content
				class="mp-wrap-content"
				:class="[$slots.header && !$slots.opt ? 'no-padding-top' : '']"
				ref="mp-wrap-content"
				v-if="$slots.default"
			>
				<a-spin :spinning="loading">
					<slot></slot>
				</a-spin>
			</a-layout-content>
			<!-- 分页导航区域-->
			<div
				class="mp-wrap-page"
				:class="{ 'bottom-top': border }"
				ref="mp-wrap-page"
				v-if="$slots.footer"
			>
				<slot name="footer"></slot>
			</div>
		</a-layout-content>
		<!-- 右侧边栏区域 -->
		<a-layout-content
			class="mp-wrap-right-aside"
			ref="mp-wrap-right-aside"
			v-if="$slots.right"
		>
			<a-layout-content class="mp-wrap-scroll">
				<slot name="right"></slot>
			</a-layout-content>
		</a-layout-content>
	</a-layout>
</template>

<script lang="ts">
import { Vue, Prop, Component } from 'vue-property-decorator'
@Component({
	name: 'MpWrap',
})
export default class extends Vue {
	@Prop({ default: false, type: Boolean })
	private loading!: boolean

	@Prop({ default: false, type: Boolean })
	private border!: boolean

	public getWarpRect(refName: string) {
		try {
			return (this.$refs[refName] as any).getboundingclientrect()
		} catch (error) {
			return null
		}
	}
}
</script>
