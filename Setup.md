Install App URL => https://dddemo.net/php/2023/bombayshirtstage/install.php?shop=bombayshirts.com&clientId=a22d95e32dbd4511c063c6f160144016

Product discount confugration
-----------------------------------------------------------------------------------------------------
access token => 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
-----------------------------------------------------------------------------------------------------
Mutation
-----------------------------------------------------------------------------------------------------
mutation discountAutomaticAppCreate($automaticAppDiscount: DiscountAutomaticAppInput!) {
  discountAutomaticAppCreate(automaticAppDiscount: $automaticAppDiscount) {
    automaticAppDiscount {
      discountId
      status
      title
      updatedAt
      startsAt
      endsAt
      discountClass
      createdAt
      combinesWith {
        orderDiscounts
        productDiscounts
        shippingDiscounts
      }
      asyncUsageCount
    }
    userErrors {
      field
      message
    }
  }
}
-----------------------------------------------------------------------------------------------------
Variables
-----------------------------------------------------------------------------------------------------
{
  "automaticAppDiscount": {
    "combinesWith": {
      "orderDiscounts": true,
      "productDiscounts": true,
      "shippingDiscounts": true
    },
    "functionId": "cc3cb815-4756-4134-9727-930b63268e62",
    "metafields": [
      {
        "key": "function-configuration",
        "namespace": "product-discount",
        "type": "json",
        "value": "{\"tags\":[\"FNF\",\"TAPL-EMP\"]}"
      }
    ],
    "startsAt": "2023-08-29T00:00:00",
    "title": "TAPL-EMP 50% & FNF 15% & 5+1 FREE DISCOUNT"
  }
}