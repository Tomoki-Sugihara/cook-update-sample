import {
   // makeStyles,
   Paper,
   Table,
   TableBody,
   TableCell,
   TableContainer,
   TableHead,
   TableRow,
} from '@material-ui/core';
import React, { FC, useState } from 'react';
// import { useDispatch } from 'react-redux';
import Ingredient from '../../organisms/Ingredient';
import { changeMemo, RecipeState } from '../../reducers/recipes';
import styled from 'styled-components';
import Swiper, { ReactIdSwiperProps } from 'react-id-swiper';
import 'swiper/css/swiper.css';
import Header from '../../organisms/Header';
import { Link, useNavigate } from 'react-router-dom';
import { transitPage } from '../../reducers/config';
import { useDispatch } from 'react-redux';

export type IngredientState = {
   id: string;
   // id: number;
   name: string;
   memo?: string;
   amount: number;
   unit: string;
   moderation: number; //加減
   default: boolean; //加減を変更したかどうか
   right: boolean; //単位が右か左か
};
export type Info = {
   id: string;
   // id: number;
   memo?: string | null;
   images?: string[] | null;
   person: number; //何人分
   created_at: Date;
   updated_at: Date; //?
   ingredients: IngredientState[];
};

const RecipeItem: FC<RecipeState> = props => {
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const [params] = useState<ReactIdSwiperProps>({
      pagination: {
         el: '.swiper-pagination',
         type: 'bullets',
         clickable: true,
         dynamicBullets: true,
      },
      // navigation: {
      //    nextEl: '.swiper-button-next',
      //    prevEl: '.swiper-button-prev',
      // },
      // loop: true,
      // spaceBetween: 30,
   });
   const handleClickCooking = () => {
      dispatch(transitPage(1));
      navigate(`/cook/${props.id}`);
   };
   const handleClickReview = () => {
      // dispatch(transitPage(1));
      navigate(`/review/${props.id}`);
   };

   return (
      <Root>
         <div className="recipeInfo">
            <Header name={props.name} />
            <div>{props.memo}</div>
            <div onClick={handleClickCooking}>Cooking</div>
            <div onClick={handleClickReview}>作った！</div>
            {/* <Link to={`/cook/${props.id}`}>Cooking</Link> */}
            <div>
               {props.images &&
                  props.images.length > 0 &&
                  props.images.map((imgPath: string, index) => (
                     <div key={index}>
                        <img src={imgPath} alt="" />
                     </div>
                  ))}
            </div>
         </div>
         <div className="dailyInfoWrap">
            <div className="dailyInfoList">
               <Swiper {...params}>
                  {props.dairyInformation.length === 0 ? (
                     <div>image</div>
                  ) : (
                     props.dairyInformation.map((info: Info, index) => (
                        <div key={index} className="dailyInfoItem">
                           <div>{info.person}人分</div>
                           <TableContainer component={Paper}>
                              <Table>
                                 <TableHead>
                                    <TableRow>
                                       <TableCell>名称</TableCell>
                                       <TableCell align="right">量</TableCell>
                                       <TableCell align="right">加減</TableCell>
                                    </TableRow>
                                    {/* <TableRow>
                                       <TableCell>名称</TableCell>
                                       <TableCell align="center">量</TableCell>
                                       <TableCell align="right">加減</TableCell>
                                    </TableRow> */}
                                 </TableHead>
                                 <TableBody>
                                    {info.ingredients.length &&
                                       info.ingredients.map(
                                          (
                                             ingredient: IngredientState,
                                             index
                                          ) => (
                                             <Ingredient
                                                {...ingredient}
                                                key={index}
                                                status='normal'
                                             />
                                          )
                                       )}
                                 </TableBody>
                              </Table>
                           </TableContainer>
                           <div>{info.memo}</div>
                           <div style={{ display: 'flex' }}>
                              {info.images &&
                                 info.images.length > 0 &&
                                 info.images.map((imgPath: string, index) => (
                                    <div className="imageContainer" key={index}>
                                       <img src={imgPath} alt="" />
                                    </div>
                                 ))}
                           </div>
                        </div>
                     ))
                  )}
               </Swiper>
            </div>
         </div>
      </Root>
   );
};

const Root = styled.div`
   .recipeInfo {
      /* margin-top: 50px; */
   }
   .dailyInfoWrap {
      /* overflow-y: hidden; */
      margin: 10px 0 56px 0;
   }
   .dailyInfoList {
      /* display: flex; */
      /* overflow-x: auto;
      overflow-y: hidden;
      white-space: nowrap;
      -webkit-overflow-scrolling: touch; */
      width: 100vw;
   }
   .dailyInfoItem {
      min-width: 92vw;
      padding: 10px 2vw;
      /* margin: 10px 2vw; */
      background-color: pink;

      :first-child {
         /* margin-left: 2vw; */
      }
   }

   .imageContainer > img {
      width: 48vw;
      height: 48vw;
      object-fit: cover;
      /* object-position: center; */
   }
`;

export default RecipeItem;
