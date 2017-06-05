<template>
	<div class="add-div">
		<h2>请输入添加内容：</h2>
		<div class="add-content">
			<div class="businessName">
				<div class="input-group">
					<span class="input-group-addon" id="sizing-addon2">商家名称</span>
					<input type="text" class="form-control" placeholder="Username" aria-describedby="sizing-addon2">
				</div>

			</div>
		</div>
	</div>
</template>

<script>
	export default {
	}
</script>

<style lang="stylus" rel="stylesheet/stylus">
	.add-div
		padding 20px 20px
		h2
			margin-bottom 40px
		.add-content
			width 100%
			.businessName
				width 50%
</style>
