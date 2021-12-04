import resolve from '@rollup/plugin-node-resolve';
import scss from 'rollup-plugin-scss';

export default {
    input: 'index.js',
    output: {
        file: 'index.bundle.js',
        format: 'cjs'
    },
    plugins: [
        resolve(),
        scss({
            sass: require('sass')
        })
    ]
};
