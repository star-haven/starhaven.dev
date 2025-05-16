const config = {
    plugins: [
        require('postcss-import'),
        require('@tailwindcss/postcss')({
            config: './tailwind.config.cjs', 
        }),
        require("autoprefixer"),
    ],
};

module.exports = config;
