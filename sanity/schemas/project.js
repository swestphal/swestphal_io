export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'index',
      title: 'Index',
      type: 'number',
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
      name: 'publishedAt',
      title: 'Published at',
      description:
        'You can use this field to schedule projects where you show them',
      type: 'datetime',
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'blockText',
    },
    {
      name: 'startedAt',
      title: 'Started at',
      type: 'datetime',
    },
    {
      name: 'endedAt',
      title: 'Ended at',
      type: 'datetime',
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'imageGallery',
      title: 'Image Gallery',
      type: 'array',
      of: [{ type: 'image' }],
      options: {
        layout: 'grid',
      },
    },

    {
      name: 'relatedCategories',
      title: 'Related Categories',
      type: 'array',
      of: [{ type: 'classification' }],
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    },
    {
      name: 'features',
      title: 'Features',
      type: 'blockContent',
    },
    {
      name: 'relatedProjects',
      title: 'Related projects',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'project' } }],
    },
  ],
  orderings: [
    {
      title: 'Order ascending',
      name: 'indexAsc',
      by: [{ field: 'index', direction: 'asc' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
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
