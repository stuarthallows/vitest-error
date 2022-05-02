/** Enable TypeScript IntelliSense for VITE_ prefixed user-defined env variables.
 * See https://vitejs.dev/guide/env-and-mode.html#intellisense-for-typescript.
*/
interface ImportMetaEnv {
  readonly VITE_API_APPLICATION_ID: string;
  readonly VITE_API_BASE_URI: string;
  readonly VITE_REDIRECT_URI: string;
  readonly VITE_SPA_APPLICATION_ID: string;
  readonly VITE_API_APPLICATION_URI: string;
  readonly VITE_SPA_APP_INSIGHTS_KEY: string;
  readonly VITE_NPM_PACKAGE_VERSION: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
