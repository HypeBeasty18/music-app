import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import Router from 'routers/Router'

import './assets/styles/index.scss'
import store from 'store/store'

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false
		}
	}
})
ReactDOM.createRoot(document.getElementById('root')!).render(
		<QueryClientProvider client={queryClient}>
			<Provider store={store}>
				<Router />
			</Provider>
		</QueryClientProvider>
)
