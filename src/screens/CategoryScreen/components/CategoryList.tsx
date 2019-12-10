import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { AppState } from 'src/models';
import CategoryItem from './CategoryItem';
import AddCategoryItem from './AddCategoryItem';

interface Props {
  onGetSelectedId?: Function;
  reset?: boolean;
}

const CategoryList: React.FC<Props> = ({ onGetSelectedId, reset }) => {
  const data = useSelector((state: AppState) => state.category.categoryList);
  const [selectedId, setSelectedId] = useState(null);
  useEffect(() => {
    setSelectedId(null);
  }, [reset]);
  const handleSelect = (id: string) => {
    setSelectedId(id);
    onGetSelectedId(id);
  };

  return (
    <View style={styles.container}>
      {data.map(item => (
        <CategoryItem
          key={item.id}
          id={item.id}
          name={item.name}
          onSelect={handleSelect}
        />
      ))}
      <AddCategoryItem />
    </View>
  );
};

CategoryList.defaultProps = {
  onGetSelectedId: () => {},
  reset: false
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
});

export default CategoryList;