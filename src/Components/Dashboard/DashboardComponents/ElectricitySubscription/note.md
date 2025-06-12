### **Frontend Integration Notes for `VerifyBill` Method**

Below are the details for integrating the `/verifyBill` endpoint into the frontend. This endpoint is used to verify either electricity meter details or decoder smart card details. Each section includes dummy requests and expected responses for both success and error scenarios.

---

### **Endpoint**: Verify Bill Details  
#### **Base URL**: `/api/v1/bills/verify`

---

### **1. Verify Electricity Meter**
#### **Request**:
- **Method**: `POST`
- **URL**: `/api/v1/bills/verify`
- **Request Body**:
  ```json
  {
    "disco_type": "IKEDC",
    "meter_no": "1234567890",
    "meter_type": "Prepaid"
  }
  ```

#### **Response**:
- **Success (200)**:
  ```json
  {
    "status": 200,
    "message": "success",
    "data": {
      "name": "John Doe",
      "meter_no": "1234567890"
    }
  }
  ```
- **Error (400)**: Missing required fields
  ```json
  {
    "status": 400,
    "message": "error",
    "data": {
      "error": "meter_no and meter_type are required for disco_type"
    }
  }
  ```
- **Error (500)**: Verification failed
  ```json
  {
    "status": 500,
    "message": "error",
    "data": {
      "error": "electricity verification failed: invalid meter number"
    }
  }
  ```

---

### **2. Verify Decoder Smart Card**
#### **Request**:
- **Method**: `POST`
- **URL**: `/api/v1/bills/verify`
- **Request Body**:
  ```json
  {
    "decoder_type": "DSTV",
    "iuc_number": "1234567890"
  }
  ```

#### **Response**:
- **Success (200)**:
  ```json
  {
    "status": 200,
    "message": "success",
    "data": {
      "name": "John Doe",
      "phone": "08012345678"
    }
  }
  ```
- **Error (400)**: Missing required fields
  ```json
  {
    "status": 400,
    "message": "error",
    "data": {
      "error": "iuc_number is required for decoder_type"
    }
  }
  ```
- **Error (500)**: Verification failed
  ```json
  {
    "status": 500,
    "message": "error",
    "data": {
      "error": "decoder verification failed: invalid smart card number"
    }
  }
  ```

---

### **3. Validation Rules**
- **Electricity Verification**:
  - `disco_type`, `meter_no`, and `meter_type` are required.
  - Only one type (`disco_type` or `decoder_type`) should be provided in the request.

- **Decoder Verification**:
  - `decoder_type` and `iuc_number` are required.
  - Only one type (`disco_type` or `decoder_type`) should be provided in the request.

---

### **General Notes**
1. **Authentication**:
   - Ensure that the `Authorization` header is included in requests where required.
   - Example:
     ```
     Authorization: authtoken
     ```

2. **Error Handling**:
   - Handle HTTP status codes appropriately on the frontend.
   - Display user-friendly error messages for `400`, `401`, `404`, and `500` responses.

3. **Validation**:
   - Validate user inputs (e.g., `meter_no`, `iuc_number`) on the frontend before sending requests to reduce server-side errors.

4. **Testing**:
   - Use tools like Postman or cURL to test the endpoint before integrating it into the frontend.

---

This documentation provides the necessary details for the frontend team to integrate the `VerifyBill` method effectively.2. **Error Handling**:
   - Handle HTTP status codes appropriately on the frontend.
   - Display user-friendly error messages for `400`, `401`, `404`, and `500` responses.

3. **Validation**:
   - Validate user inputs (e.g., `meter_no`, `iuc_number`) on the frontend before sending requests to reduce server-side errors.

4. **Testing**:
   - Use tools like Postman or cURL to test the endpoint before integrating it into the frontend.

---

