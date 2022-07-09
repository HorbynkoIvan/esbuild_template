import path from "path";
import {BuildOptions} from "esbuild";

const mode = process.env.MODE || 'development';

const isDev = mode === 'development';
const isProd = mode === 'production';

function resolverRoot(...segments: string[]) {
    return path.resolve(__dirname, '..', '..', ...segments)
}

const config: BuildOptions = {
    outdir: resolverRoot('build'),
    entryPoints: [resolverRoot('src', 'index.tsx')],
    entryNames: 'bundle',
    bundle: true,
    tsconfig: resolverRoot('tsconfig.json'),
    minify: isProd,
    sourcemap: isDev
};

export default config;
