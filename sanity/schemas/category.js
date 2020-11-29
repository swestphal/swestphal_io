export default {
  name: 'category',
  title: 'Category',
  type: 'document',
  liveEdit: false,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description:
        'Some frontend will require a slug to be set to be able to show the person',
      options: {
        source: 'name',
        maxLength: 96,
      },
    },
    {
      name: 'index',
      title: 'Index',
      type: 'number',
    },
    {
      name: 'isTab',
      title: 'Show in Tab',
      type: 'boolean',
    },
    {
      name: 'isOnFront',
      title: 'Show on frontpage',
      type: 'boolean',
    },
    {
      name: 'colour',
      title: 'Colour',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'blockText',
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    },
  ],

  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
};
