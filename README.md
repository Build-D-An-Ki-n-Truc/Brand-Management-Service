API
- create brand: /brand-manage/brand-register - Method POST
  + Payload: {
    "brand_name": "Hello",
    "industry": "hehe",
    "address": "Hello",
    "gps_coordinate": {
        "lat": 9.91,
        "long": 110.1
    }
- get brand by Id: /brand-manage/brandId?id=….
- get brand by name & industry: /brand-manage/brandName&Industry?name=…&industry=….
- egister event:  /brand-manage/event-register - Method POST
  + Payload: {
      "brand_id": "66aa50157aabb7f46f4ed14a",
      "event_name": "Hello_Brand",
      "event_image": "https://letsenhance.io/static/03620c83508fc72c6d2b218c7e304ba5/11499/UpscalerAfter.jpg",
      "voucher_quantity": 2,
      "start_date": "2024-08-01T10:00:00.000Z",
      "end_date": "2024-08-02T10:00:00.000Z"
    }
- edit brand: /brand-manage/edit-brand?id=… - Method PATCH
