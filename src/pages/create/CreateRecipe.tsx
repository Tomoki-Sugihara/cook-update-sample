import React from 'react';
import { useForm } from 'react-hook-form';
// import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
// import { createRecipe } from './reducers/recipes';

const CreateRecipe = () => {
   // const dispatch = useDispatch();
   const { register, handleSubmit, errors } = useForm<Inputs>({
      mode: 'onBlur',
   });

   const onSubmit = (data: Inputs) => {
      // dispatch(createRecipe(data));
   };

   return (
      <>
         <form onSubmit={handleSubmit(onSubmit)}>
            <input name="name" ref={register({ required: true })} />
            {errors.name && <div>This field is required</div>}
            <input name="memo" ref={register} />
            <button type="submit">作成</button>
         </form>
         <Link to="/">home</Link>
      </>
   );
};

type Inputs = {
   name: string;
   memo: string;
};

export default CreateRecipe;
