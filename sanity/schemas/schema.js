// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';
// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';
// Then we give our schema to the builder and provide the result to Sanity

import project from './project';
import tag from './tag';
import blockContent from './blockContent';
import blockText from './blockText';
import category from './category';
import post from './post';
import mainImage from './mainImage';
import figure from './figure';
import image from './image';
import companyInfo from './companyInfo';
import classification from './classification';
import estimate from './estimate';
import estimateCategory from './estimateCategory';

export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    project,
    tag,
    blockContent,
    blockText,
    category,
    classification,
    post,
    mainImage,
    figure,
    image,
    companyInfo,
    estimate,
    estimateCategory,
  ]),
});
