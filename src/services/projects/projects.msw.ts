/**
 * Generated by orval v6.11.0 🍺
 * Do not edit manually.
 * Localize Backend API
 * OpenAPI spec version: v1
 */
import { rest } from 'msw';
import { faker } from '@faker-js/faker';

export const getGetProjectsMock = () => ({
    data: faker.helpers.arrayElement([
        Array.from(
            { length: faker.datatype.number({ min: 1, max: 10 }) },
            (_, i) => i + 1,
        ).map(() => ({
            id: faker.helpers.arrayElement([faker.datatype.uuid(), undefined]),
            createdAt: faker.helpers.arrayElement([
                `${faker.date.past().toISOString().split('.')[0]}Z`,
                undefined,
            ]),
            modifiedAt: faker.helpers.arrayElement([
                `${faker.date.past().toISOString().split('.')[0]}Z`,
                undefined,
            ]),
            name: faker.helpers.arrayElement([faker.random.word(), undefined]),
        })),
        undefined,
    ]),
    nbPages: faker.helpers.arrayElement([
        faker.datatype.number({ min: undefined, max: undefined }),
        undefined,
    ]),
    page: faker.helpers.arrayElement([
        faker.datatype.number({ min: undefined, max: undefined }),
        undefined,
    ]),
    size: faker.helpers.arrayElement([
        faker.datatype.number({ min: undefined, max: undefined }),
        undefined,
    ]),
    totalAmount: faker.helpers.arrayElement([
        faker.datatype.number({ min: undefined, max: undefined }),
        undefined,
    ]),
});

export const getCreateProjectMock = () => ({
    id: faker.helpers.arrayElement([faker.datatype.uuid(), undefined]),
    createdAt: faker.helpers.arrayElement([
        `${faker.date.past().toISOString().split('.')[0]}Z`,
        undefined,
    ]),
    modifiedAt: faker.helpers.arrayElement([
        `${faker.date.past().toISOString().split('.')[0]}Z`,
        undefined,
    ]),
    name: faker.helpers.arrayElement([faker.random.word(), undefined]),
});

export const getUpdateProjectMock = () => ({
    id: faker.helpers.arrayElement([faker.datatype.uuid(), undefined]),
    createdAt: faker.helpers.arrayElement([
        `${faker.date.past().toISOString().split('.')[0]}Z`,
        undefined,
    ]),
    modifiedAt: faker.helpers.arrayElement([
        `${faker.date.past().toISOString().split('.')[0]}Z`,
        undefined,
    ]),
    name: faker.helpers.arrayElement([faker.random.word(), undefined]),
});

export const getProjectsMSW = () => [
    rest.get('*/organisations/:organisationId/projects', (_req, res, ctx) => {
        return res(
            ctx.delay(1000),
            ctx.status(200, 'Mocked status'),
            ctx.json(getGetProjectsMock()),
        );
    }),
    rest.post('*/organisations/:organisationId/projects', (_req, res, ctx) => {
        return res(
            ctx.delay(1000),
            ctx.status(200, 'Mocked status'),
            ctx.json(getCreateProjectMock()),
        );
    }),
    rest.put(
        '*/organisations/:organisationId/projects/:projectId',
        (_req, res, ctx) => {
            return res(
                ctx.delay(1000),
                ctx.status(200, 'Mocked status'),
                ctx.json(getUpdateProjectMock()),
            );
        },
    ),
    rest.delete(
        '*/organisations/:organisationId/projects/:projectId',
        (_req, res, ctx) => {
            return res(ctx.delay(1000), ctx.status(200, 'Mocked status'));
        },
    ),
];
