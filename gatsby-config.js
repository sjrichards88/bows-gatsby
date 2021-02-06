module.exports = {
	siteMetadata: {
		title: `Bouquets and Bows`,
		description: `Weddings in Sicily Italy, weddings in Taormina, Cefalu, Palermo, wedding coordinators specialising in Sicily, wedding planner based in Taormina specialising in Sicily`,
		author: `SJRDesigns`,
		siteUrl: "https://www.weddingsintaormina.com"
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-resolve-src`,
		`gatsby-plugin-styled-components`,
		{
			resolve: `gatsby-plugin-sass`,
			options: {
				precision: 8
			}
		},
		{
			resolve: `gatsby-plugin-google-fonts`,
			options: {
				fonts: [
					`Cinzel:wght@400;700`,
					`Ruthie`,
					`Satisfy`,
					`PT Sans \:300,400,700`
				],
				display: 'swap'
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `data`,
				path: `${__dirname}/src/data`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`,
			},
		},
		`gatsby-transformer-json`,
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `gatsby-starter-default`,
				short_name: `starter`,
				start_url: `/`,
				background_color: `#663399`,
				theme_color: `#663399`,
				display: `minimal-ui`,
				icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
			},
		},
		{
			resolve: `gatsby-plugin-canonical-urls`,
			options: {
				siteUrl: "https://www.weddingsintaormina.com"
			},
		},
		{
			resolve: `gatsby-plugin-sitemap`,
			options: {
				output: `/sitemap.xml`,
				// Exclude specific pages or groups of pages using glob parameters
				// See: https://github.com/isaacs/minimatch
				// The example below will exclude the single `path/to/page` and all routes beginning with `category`
				exclude: [
					'/404/', 
					'/404.html', 
					'/offline-plugin-app-shell-fallback/',
				],
				query: `
				{
					site {
						siteMetadata {
							siteUrl
						}
					}
					allSitePage {
						edges {
							node {
								path
							}
						}
					}
				}`
			}
		},
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				// The property ID; the tracking code won't be generated without it
				trackingId: "G-C1CWT3YG9V",
				// Defines where to place the tracking script - `true` in the head and `false` in the body
				// head: false,
				// // Setting this parameter is optional
				// anonymize: true,
				// // Setting this parameter is also optional
				// respectDNT: true,
				// // Avoids sending pageview hits from custom paths
				// exclude: ["/preview/**", "/do-not-track/me/too/"],
				// // Delays sending pageview hits on route update (in milliseconds)
				// pageTransitionDelay: 0,
				// // Enables Google Optimize using your container Id
				// optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
				// // Enables Google Optimize Experiment ID
				// experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
				// // Set Variation ID. 0 for original 1,2,3....
				// variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID",
				// // Defers execution of google analytics script after page load
				// defer: false,
				// // Any additional optional fields
				// sampleRate: 5,
				// siteSpeedSampleRate: 10,
				// cookieDomain: "example.com",
			},
		},
		// {
		// 	resolve: "gatsby-plugin-google-tagmanager",
		// 	options: {
		// 		id: "GTM-TTQX9K",
				
		// 		// Include GTM in development.
		// 		// Defaults to false meaning GTM will only be loaded in production.
		// 		includeInDevelopment: false,
				
		// 		// datalayer to be set before GTM is loaded
		// 		// should be an object or a function that is executed in the browser
		// 		// Defaults to null
		// 		defaultDataLayer: { platform: "gatsby" },
		// 	},
		// },
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		`gatsby-plugin-offline`,
	],
}
