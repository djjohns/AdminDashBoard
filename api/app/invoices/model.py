from pydantic import BaseModel
from decimal import Decimal
from datetime import date


class Invoice(BaseModel):
    invoice_id: str 
    name: str
    phone:str
    email: str
    cost: str
    date: str

    class Config:
        populate_by_name = True
        json_schema_extra = {
            "example": {
                "invoice_id": "64cfd2d26e5e4b91d60ee8ac",
                "name": "John Doe",
                "phone":"(777)867-5309",
                "email": "john.doe@gmail.com",
                "cost": "21.24",
                "date": "03/12/2023",
            }
        }