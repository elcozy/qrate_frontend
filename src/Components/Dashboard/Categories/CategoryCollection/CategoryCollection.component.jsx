import React from 'react';

import CategoryPreview from './CategoryPreview/CategoryPreview.component';

import './CategoryCollection.style.scss';


const CategoryCollection = ({category, seeAll, preview, searchResult}) => {
    
    return(
        <div className='categoryCollection'>
            <div className='samples'>
                { preview ? (
                    category.works
                        .filter((work, idx) => idx < 4)
                        .map(work => (
                            <CategoryPreview work={work} key={work.id}/>
                        ))
                    ) : null
                }

                { seeAll ? (
                    category.works
                        .filter((work) => work.name.toLowerCase().includes(searchResult.toLowerCase()))
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