
# Microservice: Isomorphic React (DIY NextJS)
### based on Manning's 'Isomorphic Web Applications'

Git clone & npm install.

Build your React Application in the '\_\_APP\_\_' folders.
- Build components in \_\_COMPONENTS\_\_ and compose them into pages.
- Use styled-components in each component or add to global styles in \_\_CSS\_\_
- Create pages in \_\_PAGES\_\_ and assingn them to routes in \_\_ROUTES\_\_.
- Design your redux state in \_\_STATE\_\_, and use redux-thunks forasynchronous calls
- Assign server-side-state returning functions to your route pages in \_\_ROUTES\_\_

Run npm commands:
- *__build__* - typescript transpiles server-side code.
- *__bundle__* - webpack bundles client-side code.
- *__start__* - runs express & serves isomorphic-code.
- *__develop__* - runs wepack dev-server for SPA development.
- *__deploy__* - runs *__build__*, *__bundle__*, & *__start__* (used for Dockerfile).
