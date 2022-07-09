import ESBuild from "esbuild";

import config from './esbuild-config'

ESBuild.build(config)
    .then(() => console.log(`Build`))
