import React from 'react';

import { List, CategoryContainer, CategoryImage, CategoryName, CategoryStatus, RedCircle, Info } from './styles';

import data from './data';

interface CategoryItemProps {
  item: typeof data[0];
}

const CategoryList: React.FC = () => {
  const CategoryItem: React.FC<CategoryItemProps> = ({ item }) => (
    <CategoryContainer>
      <CategoryImage source={item.source} />

      <CategoryName numberOfLines={1}>{item.name}</CategoryName>

      <CategoryStatus>
        <RedCircle />

        <Info>100</Info>
      </CategoryStatus>
    </CategoryContainer>
  );

  return (
    <List>
      {
        data.map(item => <CategoryItem key="item.name" item={item} />)
      }
    </List>
  );
}

export default CategoryList;