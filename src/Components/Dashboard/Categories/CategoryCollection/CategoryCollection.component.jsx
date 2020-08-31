import React from 'react';

import CategoryPreview from './CategoryPreview/CategoryPreview.component';

import './CategoryCollection.style.scss';


const CategoryCollection = ({category, seeAll}) => {
    
    return(
        <div className='categoryCollection'>
            <div className='samples'>
                { 
                    category.works
                        .filter((work, idx) => idx < 4)
                        .map(work => (
                            <CategoryPreview work={work} key={work.id}/>
                        ))
                }

                { seeAll ? (
                    category.works
                        .filter((work, idx) => idx >= 4)
                        .map(work => (
                            <CategoryPreview work={work} key={work.id}/>
                        ))
                    ) :  null
                }
            </div>
        </div>
    )
};

export default CategoryCollection;