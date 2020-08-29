import React, {Component} from 'react';

import categoryData from '../categoryData';

import CategoryCollection from '../CategoryCollection/CategoryCollection.component';

import Input from '../../GeneralComp/Input/Input.js';

import { Link } from 'react-router-dom';

import './CategoryMain.style.scss'




class categoryMain extends Component {
    constructor(props){
        super(props);

        //Get the artists id from the url path
        const { params: { categoryId } } = this.props.match;

        //Get the artist object that corresponds to the id
        const category = categoryData.filter(category => category.routeName === categoryId);

        this.state = {
            category: category
        }
    }

   
    render() {
        //Destructuring category off the state
        const {category} = this.state;

        //Destructuring the object off the category array.
        const [selectedCategory] = category;
        
        return (
            <div className='main'>
                <div className='categoryMain content'>
                    <div className='title-container'>

                        <Link to='/categories'>
                            <i className="fas fa-arrow-left arrow-left"></i>
                        </Link>

                        <h2 className='page-title'>Categories</h2>

                    </div>

                    <div className="search-section">
                        <Input
                        inputName="search"
                        placeholder="Search for Category"
                        onChange={this.handleChange}
                        />
                    </div>

                    <div className='alphabets'>

                        { 
                            <div className='categoryName'>
                                <div className='heading'>
                                    <h4>
                                        <i className={`fas fa-circle circle${selectedCategory.id}`}></i>
                                        {selectedCategory.name}
                                    </h4>
                                </div>

                                <CategoryCollection  category={selectedCategory} seeAll />
                            </div>
                        }
                    </div>

                </div>
            </div>
            
        );
    }
}

export default categoryMain;