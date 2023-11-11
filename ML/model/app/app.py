from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware


async def startup():
    pass


async def shutdown():
    pass


def create_app() -> FastAPI:
    """Creating FastAPI object

    Returns:
        FastAPI:
    """
    _app = FastAPI()

    # region middleware

    _app.add_middleware(
        CORSMiddleware,
        allow_origins=["*"],
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )

    # endregion

    # region import APIrouters from endpoints

    from app.endpoints.api import router

    _app.include_router(router)

    # endregion

    # adding event handlers
    _app.add_event_handler("startup", startup)
    _app.add_event_handler("shutdown", shutdown)

    return _app
