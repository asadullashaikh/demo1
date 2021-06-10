const { sanitizeEntity } = require('strapi-utils');

module.exports = {
  async find(ctx) {
    let entities;
    if (ctx.query._q) {
      entities = await strapi.services.technologies.find(ctx.query);
      console.log("find")
    }

    return entities.map(entity => {
      const technologies = sanitizeEntity(entity, {
        model: strapi.models.technologies,
      });
      if (technologies) {
        console.log(technologies.users)
        
      }
      return technologies;
    });
  },
};
