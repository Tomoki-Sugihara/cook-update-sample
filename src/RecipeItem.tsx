import { makeStyles, Slider } from '@material-ui/core';
import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import Ingredient from './Ingredient';
import { changeMemo, RecipeState } from './reducers/recipes';
import './assets/recipeItem.scss';

export type Ingredient = {
   id: number;
   name: string;
   memo?: string;
   amount: number;
   unit: string;
   moderation: number; //加減
   default: boolean; //加減を変更したかどうか
   right: boolean; //単位が右か左か
};
export type Info = {
   id: number;
   memo?: string | null;
   images?: string[] | null;
   person: number; //何人分
   created_at: Date;
   updated_at: Date; //?
   ingredients: Ingredient[];
};

const RecipeItem: FC<RecipeState> = props => {
   // const [name, setName] = useState(props.name);
   // const [memo, setMemo] = useState(props.memo);
   // const [ingredients, setIngredients] = useState<Ingredient[]>(
   //    props.dairyInformation[0].ingredients
   // );
   // const dispatch = useDispatch();

   // const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
   //    setMemo(e.currentTarget.value);
   // };

   // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
   //    e.preventDefault();
   //    memo && dispatch(changeMemo(memo));
   // };
   const classes = useStyles();
   return (
      <div>
         <div>{props.name}</div>
         <div>{props.memo}</div>
         <div>
            {props.images &&
               props.images.length > 0 &&
               props.images.map((imgPath: string, index) => (
                  <img src={imgPath} alt="" key={index} />
               ))}
         </div>
         {/* <div>
            <form onSubmit={handleSubmit}>
               <input type="text" value={memo} onChange={handleChange} />
               <button type="submit">変更</button>
            </form>
         </div> */}
         <div style={{ display: 'flex' }} className="container">
            {props.dairyInformation.length &&
               props.dairyInformation.map((info: Info, index) => (
                  <div key={index} className={classes.dairyInfoContainer}>
                     <div>{info.person}人分</div>
                     <div>
                        {info.ingredients.length &&
                           info.ingredients.map(
                              (ingredient: Ingredient, index) => (
                                 <Ingredient {...ingredient} key={index} />
                              )
                           )}
                     </div>
                     <div>{info.memo}</div>
                     <div style={{ display: 'flex' }}>
                        {info.images &&
                           info.images.length > 0 &&
                           info.images.map((imgPath: string, index) => (
                              <img src={imgPath} alt="" key={index} />
                           ))}
                     </div>
                  </div>
               ))}
         </div>
      </div>
   );
};

const useStyles = makeStyles({
   dairyInfoContainer: {
      // display: 'flex',
      minWidth: '90vw',
      margin: '10px 5vw',
      backgroundColor: '#fffacd',
      // width: '100vw',
      overflow: 'hidden',
   },
});

export default RecipeItem;
