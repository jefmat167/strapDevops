'use strict';

/**
 * product controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::product.product', ({ strapi }) => ({
    async find(ctx) {
        console.log("in the controller");
        return "Yay!!! I understand strapi!!!";
    }
}));
