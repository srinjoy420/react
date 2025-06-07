import fs from "fs-extra"
import path from "path"
import React from "react"
import ReactDOMServer from "react-dom/server"
import { fileURLToPath } from "url"
import {teas} from "../src/data.js"
import App from "../src/App.js"


const __filename=fileURLToPath(import.meta.url);
const __dirname=path.dirname(__filename);

const outDir=path.resolve(__dirname,"../dist")
const htmlTemplatepath = path.resolve(__dirname, "..", "src", "template.html")

const outputHtmlPath=path.resolve(outDir,"index.html")
//read the data from  htmltemplatepath
const template=await fs.readFile(htmlTemplatepath,"utf-8")

const appHtml= ReactDOMServer.renderToStaticMarkup(
    React.createElement(App,{teas})
)

const finalHtml=template.replace("<!--app-->",appHtml);


await fs.ensureDir(outDir)
await fs.writeFile(outputHtmlPath,finalHtml)
