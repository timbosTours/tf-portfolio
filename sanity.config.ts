import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk'
import schemas from './sanity/schemas'

const config = defineConfig({
    projectId: "t7bhubdr",
    dataset: "production",
    title: "Timothy Fawcett Developer Portfolio",
    apiVersion: "2023-06-23",
    basePath: "/admin",
    plugins: [deskTool()],
    schema: {types: schemas}
})

export default config;