const { z } = require('zod');
const { IdSchema, DateMixin } = require('./mixin');

const schemaOfReview = z.object({
    ...IdSchema.shape,
    ...DateMixin.shape,
    name: z.string(),
    rating: z.string(),
    comment: z.string(),
});

const schemaOfProduct = z.object({
    ...IdSchema.shape,
    ...DateMixin.shape,
    name : z.string(),
    price : z.number(),
    brand : z.string().optional(),
    quantity : z.union([z.string(),z.number()]).optional().default(0),
    categories : z.string().optional(),
    metadata : z.object({
      isFeatured : z.boolean().optional().default(false)
    }).optional(),
    reviews : z.array(schemaOfReview).optional(),
});

module.exports = {
  schemaOfProduct,
  schemaOfReview
}