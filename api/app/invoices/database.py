import motor.motor_asyncio
from app.invoices.model import Invoice



client = motor.motor_asyncio.AsyncIOMotorClient('mongodb://localhost:27017/')
database = client.AdminDashboard
collection = database.invoice

async def fetch_one_invoice(invoice_id):
    document = await collection.find_one({"invoice_id": invoice_id})
    return document

async def fetch_all_invoices():
    invoices = []
    cursor = collection.find({})
    async for document in cursor:
        document["invoice_id"] = str(document["invoice_id"])
        invoices.append(Invoice(**document))
    return invoices

async def create_invoice(invoice):
    document = invoice
    result = await collection.insert_one(document)
    return document

async def update_invoice(
        invoice_id,
        name,
        phone,
        email,
        cost,
        date
    ):
    await collection.update_one(
        {"invoice_id": invoice_id},
        {"$set": {
            "name": name,
            "phone": phone,
            "email": email,
            "cost": cost,
            "date": date
        }}
    )
    document = await collection.find_one({"invoice_id": invoice_id})
    return document

async def remove_invoice(invoice_id):
    await collection.delete_one({"invoice_id": invoice_id})
    return True
