@echo off
setlocal

echo Stopping housing demo services...

for /f "tokens=2" %%i in ('tasklist /fi "imagename eq cmd.exe" /v ^| findstr /i "Housing API"') do (
    taskkill /f /pid %%i >nul 2>&1
)

for /f "tokens=2" %%i in ('tasklist /fi "imagename eq cmd.exe" /v ^| findstr /i "Housing Portal"') do (
    taskkill /f /pid %%i >nul 2>&1
)

echo Demo services stopped.
pause
