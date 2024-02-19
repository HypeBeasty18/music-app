import Layout from 'components/layout/Layout'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { routers } from './routers.data'

type Props = {}

const Router = (props: Props) => {
	return (
		<BrowserRouter>
			<Layout>
				<div >
					<Routes>
						{routers.map(router => (
							<Route
								key={router.name}
								path={router.path}
								Component={router.component}
							/>
						))}
					</Routes>
				</div>
			</Layout>
		</BrowserRouter>
	)
}

export default Router
