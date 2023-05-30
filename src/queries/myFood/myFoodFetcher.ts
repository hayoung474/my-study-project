import { customAxios } from '@/lib/customAxios';
import { MyFoodListResponse } from '@/types/myFood';
export const MyFoodListApi = async (): Promise<MyFoodListResponse> => {
  const { data } = await customAxios.get('/my-food-list', {
    params: { pageNo: 0 },
  });
  return data;
};
