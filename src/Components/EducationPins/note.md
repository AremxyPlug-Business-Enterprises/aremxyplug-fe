# EduService Integration Guide

## Overview
The EduService provides APIs for managing education-related products, including purchasing pins, retrieving transactions, and updating product details. This guide outlines the steps to integrate the EduService into the frontend application.

---

## API Endpoints

### 1. **Get Education Product**
- **Endpoint:** `/api/v1/products/edu/{id}`
- **Method:** `GET`
- **Description:** Fetches details of an education product by its ID.
- **Request Parameters:**
  - `id` (Path): The ID of the education product.
- **Response:**
  ```json
  {
    "status": 200,
    "message": "success",
    "data": {
      "id": 1,
      "amount": "1500",
      "name": "WAEC"
    }
  }
  ```

  1 - WAEC
  2 - NECO
  3 - NABTEB
  4 - NBAIS

---
