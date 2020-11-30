export default {
  name: 'estimate',
  title: 'Estimate Category',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Title',
      type: 'string',
    },

    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description:
        'Some frontend will require a slug to be set to be able to show the project',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },

    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'blockText',
    },

    {
      name: 'relatedCategories',
      title: 'Related Categories',
      type: 'array',
      of: [{ type: 'estimateCategory' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
      tag0: 'tags.0.name',
      tag1: 'tags.1.name',
      tag2: 'tags.2.name',
      tag3: 'tags.3.name',
    },
    prepare: ({ title, media, ...tags }) => {
      const tagsArr = Object.values(tags).filter(Boolean);
      return {
        title,
        media,
        subtitle: tagsArr.join(', '),
      };
    },
  },
};
