import { validation } from '@sanity/base/lib/datastores/document/document-pair/validation';
import PriceInput from '../components/PriceInput';

export default {
  name: 'estimateCategory',
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
      name: 'excerpt',
      title: 'Excerpt',
      type: 'blockText',
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
      inputComponent: PriceInput,
      description: 'Price of the pizza in cents',
      validation: (Rule) => Rule.min(0).max(1000000),
    },
    {
      name: 'perPage',
      title: 'Price fixed?',
      type: 'boolean',
      description: 'Price fixed - not depending on count of pages?',
      options: {
        layout: 'checkbox',
      },
    },
  ],
  preview: {
    select: {
      title: 'name',
    },
  },
};
