<template>
	<div class="add-div">
		<div class="search-wrapper">
			<div class="input-group">
				<input type="text" class="form-control" placeholder="Search for...">
				<span class="input-group-btn">
					<button class="btn btn-default" type="button">Go!</button>
				</span>
			</div><!-- /input-group -->
		</div>
	</div>
</template>

<script>
	export default {
	}
</script>

<style lang="stylus" rel="stylesheet/stylus">
	.add-div
		flex-direction column
		padding 20px 20px
		.search-wrapper
			width 100%
			.input-group
				width 50%
</style>

