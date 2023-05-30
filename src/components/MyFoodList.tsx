'use client';

import { MyFood } from '@/types/myFood';
import styled from 'styled-components';
import Image from 'next/image';
import { UseReadMyFoodList } from '@/queries/myFood/myFoodQueries';

const MyFoodList = () => {
  const { data: myFoodList } = UseReadMyFoodList();

  return (
    <FoodImageWrapper>
      {myFoodList?.map((food: MyFood, idx: number) => {
        return (
          <FoodImage key={`food-${idx}`}>
            <Image
              src={food.url}
              alt='내가 먹은 음식 사진'
              fill={true}
              loading='lazy'
              placeholder='blur'
              blurDataURL='data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=='
              sizes='100vw, (max-width: 1200px) 50vw, 33vw'
              quality={75}
            />
          </FoodImage>
        );
      })}
    </FoodImageWrapper>
  );
};

const FoodImageWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 375px) {
    grid-template-columns: 1fr;
  }
  row-gap: 16px;
  column-gap: 16px;
  width: 100%;
`;
const FoodImage = styled.div`
  width: 100%;
  height: 200px;
  position: relative; // next/image 를 반응형으로 하려면 부모 요소에 이거를 반드시 추가 (fill)
  display: block; // next/image 를 반응형으로 하려면 부모 요소에 이거를 반드시 추가 (fill)
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 16px;
  }
`;

export default MyFoodList;
