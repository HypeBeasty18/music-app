import AroundYou from 'pages/AroundYou'
import Artist from 'pages/Artist'
import Discover from 'pages/Discover'
import Search from 'pages/Search'
import Song from 'pages/Song'

export const routers = [
	{
		name: 'discover',
		path: '/',
		component: Discover
	},
	{
		name: 'around-you',
		path: '/around-you',
		component: AroundYou
	},
	{
		name: 'artist',
		path: '/artist/:id',
		component: Artist
	},
	{
		name: 'song',
		path: '/song/:songid',
		component: Song
	},
	{
		name: 'search',
		path: '/search/:searchTerm',
		component: Search
	}
]
