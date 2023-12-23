import webpack from 'webpack';
type BuildMode = 'development' | 'production';
interface EnvVariables {
    mode: BuildMode;
}
declare const _default: (env: EnvVariables) => webpack.Configuration;
export default _default;
