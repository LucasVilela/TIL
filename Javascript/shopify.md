# Advanced query


Example of how to pass a graphQL similar query as API
```js
  /**
   * Gets the quantityAvailable from the API
   */
  const getVariantQuantity = () => {
    const productsQuery = client.graphQLClient.query(root => {
      root.addField("productByHandle", { args: { handle: product.handle } }, product => {
        product.addConnection("variants", { args: { first: 20 } }, variant => {
          variant.add("quantityAvailable");
        });
      });
    });

    const data = client.graphQLClient
      .send(productsQuery)
      .then(({ data }) => {
        return data;
      })
      .catch(error => {
        console.error("Error fetching product data from graphQLClient", error);
      });

    return data;
  };


  /**
   * Check against the Shopify live API and remove products that are not available
   */
  const updateProductAvailability = async() => {
    try {
      const products = await client.product.fetchByHandle(product.handle)
      const liveVariants = products.variants.map(variant => {
        return {
          ...variant,
          id: `Shopify__ProductVariant__${variant.id}`,
          availableForSale: variant.available,
          image: { altText: variant.image.altText, localFile: { publicURL: variant.image.src } },
        };
      });
      setVisibleVariants(liveVariants);
    } catch (error) {
      console.error("Error on fetchByHandle from buy-sdk", error);
    }
  };

```