@echo off
REM Sirve el portfolio en la red local (LAN).
REM En esta PC:        http://127.0.0.1:5500/index.html
REM Desde otra PC:     http://TU-IP-LOCAL:5500/index.html  (ver la IP abajo)
REM Doble click para levantarlo. Cerra esta ventana para frenarlo.
cd /d "%~dp0"

echo ============================================================
echo   Portfolio sirviendo en la red local (puerto 5500)
echo ------------------------------------------------------------
echo   En esta PC:     http://127.0.0.1:5500/index.html
echo.
echo   Desde otra PC en la misma red, usa una de estas IPv4:
for /f "tokens=2 delims=:" %%a in ('ipconfig ^| findstr /c:"IPv4"') do echo      http://%%a:5500/index.html
echo ------------------------------------------------------------
echo   (cerra esta ventana para frenar el servidor)
echo ============================================================

start "" http://127.0.0.1:5500/index.html
python -m http.server 5500 --bind 0.0.0.0
