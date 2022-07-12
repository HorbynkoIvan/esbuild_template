import path from "path";
import {BuildOptions} from "esbuild";
import {CleanPlugin} from "./plugins/CleanPlugin";

const mode = process.env.MODE || 'development';

const isDev = mode === 'development';
const isProd = mode === 'production';

function resolverRoot(...segments: string[]) {
    return path.resolve(__dirname, '..', '..', ...segments)
}

const config: BuildOptions = {
    outdir: resolverRoot('build'),
    entryPoints: [resolverRoot('src', 'index.tsx')],
    entryNames: '[dir]/bundle.[name]-[hash]',
    allowOverwrite: true,
    bundle: true,
    loader: {
        '.png': 'file',
        '.svg': 'file',
        '.jpeg': 'file',
    },
    tsconfig: resolverRoot('tsconfig.json'),
    minify: isProd,
    sourcemap: isDev,
    plugins: [CleanPlugin],
    watch: isDev && {
        onRebuild(err, result){
            if(err){
                console.log(err)
            } else {
                console.log('build...')
            }
        }
    }
};

export default config;
