module.exports = {
    'resource-api': {
        input: {
            target: `./.blink/open-api.yaml`,
        },
        output: {
            mode: 'tags-split',
            target: 'libs/gateways/resource-api/',
            schemas: 'libs/gateways/resource-api/types',
            client: 'react-query',
            mock: false,
            override: {
                mutator: {
                    path: 'libs/gateways/resource-api/config.ts',
                    name: 'customInstance',
                },
            },
        },
    },
};
