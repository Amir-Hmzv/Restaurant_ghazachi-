import React from 'react';
import Product from '../../components/Product';
const id = ({data}) => {
    
   
        
        
    

       
       
    return (
        <div className='min-h-screen w-full' >
                {
                    data.map(item => {
                        return  <Product key={item.idMeal}  data={item} xdata={data}/>
                    } )
                }
        </div>
    );
};

export default id;

export async function getStaticPaths() {
 
    const getApi = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian`)
    const data = await getApi.json()
    const dataInformation = data.meals

        const paths = dataInformation.map(items => ({
            params : {id : items.idMeal.toString()}
        }))

   
  return {
    paths,
    fallback : false
  }
  }


export async function getStaticProps({params}) {
 
    const getApi = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.id}`)
    const data = await getApi.json()
        const datax = data.meals.map(item => item)
   
  return {
  props: {
      data :data.meals 
  }, // will be passed to the page component as props
  }
  }