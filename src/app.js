import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import { ThemeProvider } from 'emotion-theming'
import * as theme from './lib/theme'

import Box from './components/Box'
import Container from './components/Container'
import ErrorBoundary from './containers/ErrorBoundary'
import Layout from './components/Layout'
import Lists from './containers/Lists'
import TagForm from './containers/TagForm'
import TagList from './containers/TagList'

const App = () => (
  <ErrorBoundary>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Container maxWidth={20}>
          <Box spacing={1}>
            <Layout spacing={1}>
              <TagList />
              <TagForm />
              <Lists />
            </Layout>
          </Box>
        </Container>
      </ThemeProvider>
    </Provider>
  </ErrorBoundary>
)

ReactDOM.render(<App />, document.getElementById('app'))
