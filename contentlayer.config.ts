// contentlayer.config.ts
import { defineDocumentType, makeSource } from 'contentlayer/source-files'

export const Post = defineDocumentType(() => ({
    name: 'Doc',
    filePathPattern: `docs/**/*.mdx`,
    contentType: "mdx",
    fields: {
        title: { type: 'string', required: true },
        description: { type: "string" },
        published: { type: 'boolean', default: true },
    },
    computedFields: {
        url: { type: 'string', resolve: (doc) => `/${doc._raw.flattenedPath}` },
    },
}))

export default makeSource({ contentDirPath: 'content', documentTypes: [Post] })