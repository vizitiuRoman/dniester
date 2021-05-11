module.exports = {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
        [
            'module-resolver',
            {
                root: ['.'],
                extensions: [
                    '.ios.ts',
                    '.android.ts',
                    '.ts',
                    '.ios.tsx',
                    '.android.tsx',
                    '.tsx',
                    '.jsx',
                    '.js',
                    '.json',
                ],
                alias: {
                    '@environments': './src/environments',
                    '@store': './src/store',
                    '@core': './src/core',
                    '@hoc': './src/core/hoc',
                    '@hooks': './src/core/hooks',
                    '@contexts': './src/core/contexts',
                    '@navigations': './src/pages/navigation',
                    '@screens': './src/pages/screens',
                    '@shared': './src/shared',
                    '@components': './src/shared/components',
                    '@shared-types': './src/shared/types',
                    '@theme': './src/shared/theme',
                    '@constants': './src/shared/constants',
                    '@grpc': './src/grpc',
                },
            },
        ],
    ],
};
