import React from 'react';
import Cocktail_36 from './Cocktail_36';
import Loading from './Loading_36';
import { useGlobalContext } from '../context_36';

const CocktailList_36 = () => {
  const {loading, cocktails} = useGlobalContext();
  if (loading){
    return <Loading />
  }
  if(cocktails.length <1 ) {
    return (
      <h2 className='section-title'>
        no cocktails matched your search criteria
      </h2>
    )
  }
  return (
    <section className="section">
          <h2 className="section-title">cocktails</h2>
          <div className="cocktails-center">
            {cocktails.map((item)=> {
              return <Cocktail_36 key={item.id} {...item}/>
            })}           
          </div>
        </section>
  );
};

export default CocktailList_36;
