module.exports = (api) => {
    api.cache(false);
    const presets = [
        [
            '@babel/env', {
              targets: {esmodules: true},
              modules: false,
              loose: true,
              debug: true,
            }
          ],
    ["babel-preset-preact"]          

    ];
    const plugins = [
                ['@babel/plugin-proposal-optional-chaining' ]
            ];
    return {
        presets,
        plugins
    };
};