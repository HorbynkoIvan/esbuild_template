import {Plugin} from "esbuild";
import path from 'path';
import {rm, writeFile} from "fs/promises";

interface HTMLPluginOptions {
    template?: string,
    title?: string,
    jsPath?: string[],
    cssPath?: string[],
}

const preparePaths = (outputs: string[]) => {
    return outputs.reduce<Array<string[]>>((acc, path) => {
        const [js, css] = acc;
        const splittedFileName = path.split('/').pop();

        if (splittedFileName?.endsWith('.js')) {
            js.push(splittedFileName)
        } else if (splittedFileName?.endsWith('.css')) {
            css.push(splittedFileName)
        }
        return acc;
    }, [[], []])
}

const renderHTML = (options: HTMLPluginOptions) => {
    return options.template || `
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <title>${options.title}</title>
                ${options.cssPath?.map((path) =>
        `<link href=${path} rel="stylesheet"/>`).join(" ")}
            </head>
            <body>
                <div id="root"></div>
                ${options.jsPath?.map((path) =>
        `<script src=${path}></script>`).join(" ")}
            </body>
        </html>`
}

export const HTMLPlugin = (options: HTMLPluginOptions): Plugin => {
    return {
        name: 'HTMLPlugin',
        setup(build) {
            const outdir = build.initialOptions.outdir;//find path for outdir folder

            build.onStart(async () => {
                try {

                } catch (e) {
                }

            })

            build.onEnd(async (result) => {
                // console.log(result.metafile)
                const outputs = result.metafile?.outputs;
                // console.log(Object.keys(outputs || {}))
                const [jsPath, cssPath] = preparePaths(Object.keys(outputs || {}));

                console.log(jsPath)
                console.log(cssPath)
                if (outdir) {
                    await writeFile(path.resolve(outdir, 'index.html'),
                        renderHTML({jsPath, cssPath, ...options})
                    )
                }
            })
        },
    }
}
