const ESBuild = require( "esbuild");

const config = require('./esbuild-config');

ESBuild.build(config)
    .then(() => console.log(`Build`))
