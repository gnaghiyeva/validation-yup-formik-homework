import { Card, Col, Row } from 'antd';
import React, { useEffect, useState } from 'react'

const Cards = () => {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/products')
            .then(res => res.json())
            .then((data) => setProduct(data))
    }, [])
    return (
        <>
        <h1 style={{textAlign:'center'}}>Products</h1>
        <Row style={{ width: '80%', margin: '0 auto' }} gutter={[20, 30]}>

            {product && product.map((post) => (
                <Col className="gutter-row" span={6} xs={24} sm={24} md={12} lg={6}>
                    <Card style={{ height: '500px' }} hoverable key={post.id}
                        cover={<img alt="example" src={post.imageURL} />}
                    >

                        <h3><i>Name:</i>{post.name}</h3>
                        <h3><i>Price:</i> {post.price}</h3>
                        <p><i>discountPercentage:</i> {post.discountPercentage}</p>

                        <p><i>unitsInStock:</i> {post.unitsInStock}</p>

                        {/* <p><b>ID:</b>{post.id}</p> */}
                    </Card>
                </Col>

            ))}

        </Row>
        </>
    )
}

export default Cards