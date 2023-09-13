import { render } from 'solid-js/web'
import { Provider } from '@i18n-pro/solid'
import i18nState from './i18n'
import App from './App'

render(
  () => (
    <Provider {...i18nState}>
      <App />
    </Provider>
  ),
  document.getElementById('root') as HTMLElement
)
