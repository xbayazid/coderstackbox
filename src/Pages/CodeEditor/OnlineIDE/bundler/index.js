/* eslint-disable import/no-anonymous-default-export */
import * as esbuild from "esbuild-wasm";
import { fetchPlugin } from "./plugins/fetch-plugin";
import { unpkgPathPlugin } from "./plugins/unpkg-path-plugins";



const bundle = async (rawCode) => {
    let service;
    if (!service) {
        service = await esbuild.startService({
            worker: true,
            wasmURL: 'https://unpkg.com/esbuild-wasm@0.8.27/esbuild.wasm',
        });
    }
    try {
        const result = await service.build({
            entryPoints: ['index.js'],
            bundle: true,
            write: false,
            plugins: [
                unpkgPathPlugin(),
                fetchPlugin(rawCode),
            ],
            define: {
                'process.env.NODE_ENV': '"production"',
                global: 'window',
            }
        });

        return {
            code: result.outputFiles[0].text,
            err: ''
        }

    } catch (err) {
        return {
           code: '',
            err: err.message
        }
    }

   
}

export default bundle;
