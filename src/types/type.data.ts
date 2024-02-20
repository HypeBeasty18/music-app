export type Song = {
	artists: [
		{
			adamid: string
		}
	]
	title: string
	subtitle: string
	images?: {
		coverart: string
	}
	key: string
	hub: {
		actions: [
			{
				name: string
			},
			{
				name: string
				type: string
				uri: string
			}
		]
	}
}

export type FindedSong = {
	track: Song
}

export type Artist = {
	artist: {
		adamid: string
		avatar: string
		name: string
	}
}
