import { useQuery } from '@tanstack/react-query';
import { MyFoodListApi } from './myFoodFetcher';
// query key 를 상수로 관리한다
export const MY_FOOD_QUERY_KEYS = {
  READ_MY_FOOD_LIST: 'READ_MY_FOOD_LIST',
};

export const UseReadMyFoodList = () =>
  useQuery([MY_FOOD_QUERY_KEYS.READ_MY_FOOD_LIST], MyFoodListApi, {
    suspense:true
  });
