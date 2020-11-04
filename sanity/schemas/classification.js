export default {
  type: 'object',
  name: 'classification',
  title: 'Classification',
  fields: [
    {
      title: 'Main Category',
      name: 'classification',
      type: 'reference',
      to: { type: 'category' },
    },
    {
      title: 'Skills',
      name: 'skills',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'radio',
        list: [
          { title: 'PHP', value: 'php' },
          { title: 'SQL', value: 'sql' },
          { title: 'MongoDB', value: 'mongo' },
          { title: 'JavaScript', value: 'javascript' },
          { title: 'HTML & CSS', value: 'htmlcss' },
          { title: 'Screen Design', value: 'design' },
        ],
      },
    },
  ],
  preview: {
    select: {
      personName: 'person.name',
      roles: 'roles',
      media: 'person.image',
    },
    prepare(data) {
      return {
        ...data,
        title: data.personName,
        subtitle: data.roles && data.roles.join('/'),
      };
    },
  },
};
