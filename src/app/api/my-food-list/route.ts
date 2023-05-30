import { NextResponse } from 'next/server';
import myFoodListJson from '@/mocks/json/my-food-list.json';

export async function GET(request: Request) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const LIST_SIZE = 8;

      const { searchParams } = new URL(request.url);
      const pageNo = Number(searchParams.get('pageNo'));
      const BASE = LIST_SIZE * pageNo;
      const myFoodList = myFoodListJson.slice(BASE, BASE + LIST_SIZE);

      resolve(NextResponse.json(myFoodList));
    }, 3000);
  });
}
