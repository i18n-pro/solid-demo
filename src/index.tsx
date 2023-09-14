import { render } from 'solid-js/web'
import { I18nProvider } from '@i18n-pro/solid'
import i18nState from './i18n'
import App from './App'

render(
  () => (
    <I18nProvider {...i18nState}>
      <App />
    </I18nProvider>
  ),
  document.getElementById('root') as HTMLElement
)
