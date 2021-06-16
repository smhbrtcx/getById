import React from 'react';
import { Grid } from 'semantic-ui-react';
import Categories from './Categories';
import Products from '../pages/Products';
import { Route } from 'react-router';
import ProductDetail from '../pages/ProductDetail';
import CartDetail from '../pages/CartDetail';


export default function Dasboard() {
    return (
        <div>
            <Grid>
                <Grid.Row>
                    <Grid.Column width="4">                       
                            <Categories />                      
                    </Grid.Column>
                    <Grid.Column width="12">                        
                       <Route exact path="/" component={Products}/> 
                       <Route exact path="/products" component={Products}/>
                       {/* <Route  path="/products/:name" component={ProductDetail}/> */}
                       <Route  path="/products/:id" component={ProductDetail}/>
                       <Route exact path="/cart" component={CartDetail}/>               
                    </Grid.Column>
                </Grid.Row>
            </Grid>


        </div>
    )
}
