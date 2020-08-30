import React from 'react';

import CataloguePreview from './CataloguePreview/CataloguePreview.component';

import './CatalogueCollection.style.scss';

const CatalogueCollection = ({catalogue}) => {
    return(
        <div className='catalogueCollection'>
            {
                catalogue.works
                    .map(work => (
                    <CataloguePreview work={work} key={work.id}/>
                ))
            }
        </div>
    )
}

export default CatalogueCollection;