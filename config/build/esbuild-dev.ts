import ESBuild from "esbuild";

import config from './esbuild-config';

const PORT = Number(process.env.PORT) || 3000;

ESBuild.serve({
    servedir: config.outdir,
    port: PORT
}, {
    ...config
})
    .then(() => console.log(`Server started on http://localhost:: ${PORT}`))
    .catch((error) => console.log(error))
