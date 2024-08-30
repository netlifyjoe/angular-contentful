import { ContentfulContentSource } from '@stackbit/cms-contentful'

export default {
    stackbitVersion: '~0.6.0',
    ssgName: 'angular',
    nodeVersion: '16',
    buildCommand: "npm run build",
    devCommand: "npm run config --if-present && ./node_modules/.bin/ng serve  --port {PORT} --disable-host-check",
    contentSources: [
        new ContentfulContentSource({
            spaceId: process.env.CONTENTFUL_SPACE_ID,
            environment: process.env.CONTENTFUL_ENVIRONMENT || 'master',
            previewToken: process.env.CONTENTFUL_PREVIEW_TOKEN,
            accessToken: process.env.CONTENTFUL_MANAGEMENT_TOKEN,
        }),
    ],
    models: {
        page: { type: 'page', urlPath: '/{slug}' },
    },
}