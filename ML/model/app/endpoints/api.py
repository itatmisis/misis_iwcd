from fastapi import APIRouter

from app.endpoints.model import router as model_router


router = APIRouter(
    prefix="/api",
    responses={404: {"description": "Not found"}},
)

router.include_router(model_router)
