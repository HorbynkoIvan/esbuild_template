import {Plugin} from "esbuild";
import {rm} from "fs/promises";

export const CleanPlugin: Plugin = {
    name: 'CleanPlugin',
    setup(build) {
        build.onStart(async () => {
            try {
                const outdir = build.initialOptions.outdir;//find path for outdir folder
                if (outdir) {
                    /*Be careful - make sure that path to outdir is correct*/
                    await rm(outdir, {recursive: true}) //remove all files in outdir folder
                }
            } catch (e) {
                console.log("Failed to clean folder!")
            }

        })

        build.onEnd(() => {
            console.log("onEnd")
        })
    },
}
