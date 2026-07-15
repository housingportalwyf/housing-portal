@echo off
setlocal
cd /d "%~dp0"

echo Starting housing demo...

start "Housing API" cmd /k "cd /d "%~dp0task1-model-api" && python -m uvicorn main:app --host 127.0.0.1 --port 8000 --reload"

start "Housing Portal" cmd /k "cd /d "%~dp0task2-portal" && npm run dev"

echo.
echo Demo is starting...
echo API docs: http://127.0.0.1:8000/docs
echo Portal: http://127.0.0.1:3000
echo.
pause
