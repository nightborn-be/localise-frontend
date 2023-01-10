module.exports = {
	"resource-api": {
		input: {
			target: `./.blink/open-api.yaml`,
		},
		output: {
			mode: "tags-split",
			target: "src/services",
			schemas: "src/types/dtos",
			client: "react-query",
			mock: true,
			override: {
				mutator: {
					path: "src/services/config.ts",
					name: "customInstance",
				},
			},
		},
	},
};
