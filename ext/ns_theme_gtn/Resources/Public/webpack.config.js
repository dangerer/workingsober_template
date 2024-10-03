const Encore = require('@symfony/webpack-encore');
require('dotenv').config();
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

if (!Encore.isRuntimeEnvironmentConfigured()) {
	Encore.configureRuntimeEnvironment(process.env.NODE_ENV || 'dev');
}

Encore
	.setOutputPath('./dist')
	.setPublicPath('/dist/')
	.addEntry('JavaScript/vendor', './assets/JavaScript/vendor.js')
	.addEntry('JavaScript/app', './assets/JavaScript/theme.js')
	.addStyleEntry('Css/app', './assets/Scss/style.scss')
	.copyFiles({
		from: './assets/Images/',
		to: 'Images/[path][name].[ext]',
	})
	.copyFiles({
		from: './assets/Fonts/',
		to: 'Fonts/[path][name].[ext]',
	})
	.copyFiles({
		from: './assets/Images/Icons',
		to: 'Images/Icons/[path][name].[ext]',
		includeSubdirectories: true,
	})
	.disableSingleRuntimeChunk()
	.cleanupOutputBeforeBuild()
	.enableSourceMaps(!Encore.isProduction())
	.enableSassLoader()
	.enablePostCssLoader()
	.addPlugin(new BrowserSyncPlugin(
		{
			host: 'gtn-escapegames.ddev.site',
			proxy: 'gtn-escapegames.ddev.site',
			files: [
				{
					match: ['**/*.html'],
				},
				{
					match: ['assets/*.js'],
				},
				{
					match: ['assets/*.scss'],
				},
			],
		},
		{
			reload: true,
		}
	))

Encore.setManifestKeyPrefix('./public/_assets/dist/');
module.exports = Encore.getWebpackConfig();
