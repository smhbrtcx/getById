import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Button, Card, Image } from 'semantic-ui-react'
import ProductService from '../Services/productService';


export default function ProductDetail() {
    let { id } = useParams() //useParams route'taki parametreleri getirir.
    
    const [product, setOther] = useState({})

    useEffect(()=>{ //component yüklendiğinde yapılması istenen kod bu bloklar arasına yazılır.

        let productService = new ProductService();
    
        productService.getById(id).then(result=>setOther(result.data.data))
    },[])

    return (
        <div>
            
            <Card.Group>
                <Card fluid="strong">
                    <Card.Content>
                        <Image
                            floated='right'
                            size='mini'
                            src='/images/avatar/large/steve.jpg'
                        />
                        <Card.Header>{product.productName}</Card.Header>
                        <Card.Meta>{product.unitPrice} TL </Card.Meta>
                        <Card.Description>
                            Steve wants to add you to the group <strong>best friends</strong>
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <div className='ui two buttons'>
                            <Button basic color='green'>
                                Approve
                            </Button>
                            <Button basic color='red'>
                                Decline
                            </Button>
                        </div>
                    </Card.Content>
                </Card>   
            </Card.Group>
        </div>
    )
}
