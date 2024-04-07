from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi import File, UploadFile
import json
from app.invoices.database import (
    fetch_one_invoice,
    fetch_all_invoices,
    create_invoice,
    update_invoice,
    remove_invoice,
    # bulk_load_invoice_csv,
)
from app.invoices.model import Invoice


app = FastAPI()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def read_root():
    return {"root": "I am root!"}


# Get all invoices.
@app.get("/api/invoice")
async def get_invoice():
    response = await fetch_all_invoices()
    return response


# Get this invoice_id.
@app.get("/api/invoice/{invoice_id}", response_model=Invoice)
async def get_invoice_by_id(invoice_id):
    response = await fetch_one_invoice(invoice_id)
    if response:
        return response
    raise HTTPException(
        404,
        f"Can not get {invoice_id}. There is no invoice item with this invoice_id: {invoice_id}",
    )


# Create an invoice.
@app.post("/api/invoice", response_model=Invoice)
async def post_invoice(invoice: Invoice):
    response = await create_invoice(invoice.model_dump())
    if response:
        return response
    raise HTTPException(400, f"Something went wrong/Bad request.")


# Update this invoice_id.
@app.put("/api/invoice/{invoice_id}", response_model=Invoice)
async def put_invoice(invoice_id: str, complete: bool):
    print("Received request for invoice_id:", invoice_id)
    print("Complete:", complete)
    response = await update_invoice(invoice_id, complete)
    if response:
        return response
    raise HTTPException(
        404,
        f"Can not update {invoice_id}. There is no invoice item with this invoice_id: {invoice_id}",
    )


# Delete this invoice_id.
@app.delete("/api/invoice/{invoice_id}")
async def delete_invoice(invoice_id: str):
    response = await remove_invoice(invoice_id)
    if response:
        return "Successfully deleted item."
    raise HTTPException(
        404,
        f"Can not delete {invoice_id}. There is no invoice item with this invoice_id: {invoice_id}",
    )


# Upload a file.
@app.post("/api/upload-file/")
async def upload_file(file: UploadFile):
    data = json.loads(file.file.read())
    return {"filename": file.filename, "content": data}
