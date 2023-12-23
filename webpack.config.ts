import path from 'path';
import webpack from 'webpack';


export default (env: any) => {
    const config: webpack.Configuration = {
        mode: 'development',
        entry: path.resolve(__dirname, 'src', 'index.ts'),
        output: {
            filename: 'bundle.js'
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/,
                },
            ]
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js'],
        },    
    }

    return config;
}