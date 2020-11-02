import { FaRegFolder as icon } from 'react-icons/fa';

export default {
  // We name our schema
  name: 'tag',
  title: 'Tags',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Tag name',
      type: 'string',
      description: 'Name of the Tag',
    },
  ],
};
