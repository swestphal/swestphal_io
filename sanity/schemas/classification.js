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
          { title: 'Custom Coded', value: 'custom coded' },
          { title: 'Elementor', value: 'elementor' },
          { title: 'SQL', value: 'sql' },
          { title: 'E-Commerce', value: 'ecommerce' },
          { title: 'MongoDB', value: 'mongo' },
          { title: 'JavaScript', value: 'javascript' },
          { title: 'HTML & CSS', value: 'htmlcss' },
          { title: 'Screen Design', value: 'screendesign' },
          { title: 'Adobe Illustrator/Photoshop', value: 'adobe' },
        ],
      },
    },
  ],
  preview: {
    select: {
      clasificationName: 'classification.name',
      skills: 'skills',
    },
    prepare(data) {
      return {
        ...data,
        title: data.clasificationName,
        subtitle: data.skills && data.skills.join(', '),
      };
    },
  },
};
